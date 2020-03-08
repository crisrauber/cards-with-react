import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthLayout from '../views/_layouts/auth';
import DefaultLayout from '../views/_layouts/default';

function RouteWrapper({ user, component: Component, isPrivate, ...rest }) {
  let signed = false;

  if (user.length > 0) {
    signed = true;
  }

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }
  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  user: PropTypes.array.isRequired,
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(RouteWrapper);
