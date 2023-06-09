import { Navigate, Outlet } from 'react-router-dom';
import { USER_ROLES } from '~/constants/common';
import { PATH } from '~/constants/path';
import useAuth from '~/hooks/useAuth';

// -----------------------------
const AdminGuard = () => {
  const { hasRealmRole, authenticated, login } = useAuth();

  if (!authenticated) {
    login();
    return null;
  }

  if (!hasRealmRole(USER_ROLES.ADMIN)) return <Navigate to={PATH.NOT_FOUND} />;

  return <Outlet />;
};

export default AdminGuard;
