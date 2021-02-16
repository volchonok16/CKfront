import React from 'react';
import { UserProfileInfo } from 'App/components/Profile/UserProfileInfo';
import { CompletedInternship } from 'App/components/Profile/CompletedInternship';
import { UserCertificates } from 'App/components/Profile/UserCertificates';

export const Profile = () => {
  return (
    <>
      <UserProfileInfo />
      <CompletedInternship />
      <UserCertificates />
    </>
  );
};
