import React from "react";
import ProfileData from "../../components/Profile/ProfileData/ProfileData";
import ProfileSettings from "../../components/Profile/ProfileSettings/ProfileEdit";
 

function ProfilePage() {
  return (
    <React.Fragment>
      <ProfileData></ProfileData>
      <ProfileSettings></ProfileSettings>
    </React.Fragment>
  );
}
export default ProfilePage;
