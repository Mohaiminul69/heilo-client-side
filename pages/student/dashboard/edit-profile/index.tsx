import Head from "next/head";
import React from "react";
import EditProfile from "../../../../components/student/dashboard/edit-profile/edit-profile";
import { DashboardLayout } from "../../../../layouts";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Edit Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashboardLayout>
        <EditProfile/>
        
      </DashboardLayout>
    </div>
  );
};

export default Profile;
