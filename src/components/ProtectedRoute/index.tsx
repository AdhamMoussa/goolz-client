import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { routes } from '../../utils/routes';

interface IProps extends RouteProps {
  isValid: boolean;
  redirectPath: typeof routes[keyof typeof routes];
}

const ProtectedRoute: React.FC<IProps> = ({
  isValid,
  redirectPath,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props): JSX.Element =>
        // eslint-disable-next-line
        // @ts-ignore
        isValid ? <Component {...props} /> : <Redirect to={redirectPath} />
      }
    />
  );
};

export default ProtectedRoute;
