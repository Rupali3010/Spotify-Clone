import React, { useState, useContext } from "react";
import "./profile.css";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import { AuthContextApi } from "../../Apis/AuthContext";

const PhotoUpload = () => {
  let AUTH = useContext(AuthContextApi);
  let [state, setState] = useState({
    profile_photo: "",
    loading: false,
    barStatus: false,
    progress: 0,
  });
  let { loading, profile_photo, barStatus, progress } = state;
  let handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let { name } = profile_photo;
      let uploadTask = firebase
        .storage()
        .ref(`user-photo/${name}`)
        .put(profile_photo);

      // !firebase event
      uploadTask.on(
        "state_changed",
        snapShot => {
          // progress bar
          let progressBar =
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
          setState({ loading: true, barStatus: true, progress: progressBar });
        },
        error => {
          toast.error(error.message);
        },
        async () => {
          let DownloadURL = await firebase
            .storage()
            .ref("user-photo")
            .child(name)
            .getDownloadURL();
          AUTH.updateProfile({ photoURL: DownloadURL });
        }
      );
      //   console.log(photo);
      toast.success("Successfully photo uploaded");
      setState({ loading: false, barStatus: false });
    } catch (error) {
      toast.error(error.message);
    }
  };

  let ProgressTemplate = () => {
    return (
      <progress value={progress} min={0} max={100}>
        {progress}
      </progress>
    );
  };

  return (
    <section id="photo_upload_block">
      {
        <section id="progressSection">
          <article>
            {barStatus === true ? (
              <>
                <span>
                  <ProgressTemplate />
                </span>
                <span>{Math.round(progress) + "%"}</span>
              </>
            ) : (
              ""
            )}
          </article>
        </section>
      }
      <article>
        <div className="_block">
          <h1>Upload Photo</h1>
          <form onSubmit={handleSubmit}>
            <input type="file" name="profile_photo" onChange={handleChange} />
            <button>
              {loading === true ? <i className="fas fa-spinner"></i> : "upload"}
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default PhotoUpload;
