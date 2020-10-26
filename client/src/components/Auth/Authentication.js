import React from 'react';
import { AuthHeader } from './AuthHeader';
import { AuthFooter } from './AuthFooter';

export const AuthenticationPage = ({ component }) => {
  return (
    <>
      <AuthHeader />
      <>{component}</>
      <AuthFooter />
    </>
  );
};
