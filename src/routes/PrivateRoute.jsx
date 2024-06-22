import {  Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ ...props }) => {
  const accessToken = localStorage.getItem('MercorUserToken');

  return accessToken ? <Outlet /> : <Navigate to={{ pathname: '/login', state: { from: props.location } }} replace/>;

};

PrivateRoute.propTypes = {
  element: PropTypes.element,
  location: PropTypes.object,
  props: PropTypes.object,
}

export default PrivateRoute;
