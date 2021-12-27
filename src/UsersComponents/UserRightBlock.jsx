import React from "react";
import { useParams } from "react-router";
import CreatePlayList from "../Components/AudioComponent/CreatePlayList";
import PhotoUpload from "./ProfileComponents/PhotoUpload";
import Profile from "./ProfileComponents/Profile";
import MusicHome from "./../Components/AudioComponent/MusicHome";
import AudioDetails from "../Components/AudioComponent/AudioDetails";

const UserRightBlock = () => {
  let { id } = useParams();
  return (
    <div className="userRightBlock">
      {id === "profile" && <Profile />}
      {id === "upload-photo" && <PhotoUpload />}
      {id === "create-play-list" && <CreatePlayList />}
      {id === "music-home" && <MusicHome />}
      <footer>
        <AudioDetails />
      </footer>
    </div>
  );
};

export default UserRightBlock;
