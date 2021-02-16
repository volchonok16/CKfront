import * as React from 'react';
import { Redirect } from 'react-router-dom';

export const withAuthRedirect = (Component: any) => {
  class RedirectComponent extends React.Component {
    render() {
      const token = sessionStorage.getItem('session_token');
      if (token === '' || token === undefined || token === null) {
        return <Redirect to="/login" />;
      }
      return <Component {...this.props} />;
    }
  }

  return RedirectComponent;
};
