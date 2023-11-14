import React from "react";
import ProfileData from "../../components/Profile/ProfileData/ProfileData";
import ProfileSettings from "../../components/Profile/ProfileSettings/ProfileSettingsEdit";
import TitleComp from "../../components/TitleComp/TitleComp";
import { faChevronLeft , fachev} from "@fortawesome/free-solid-svg-icons";
function ProfilePage() {
  return (
    <React.Fragment>
       <TitleComp
        leftIcon={faChevronLeft}
        leftIconLabel="go back"
        state="show"
        title="profile"
         ></TitleComp>
      <ProfileData></ProfileData>
      <ProfileSettings></ProfileSettings>
    </React.Fragment>
  );
}
export default ProfilePage;
