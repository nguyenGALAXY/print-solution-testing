import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import ServerErrorPage from '~/components/feedback/ServerErrorPage';
import AdminGuard from '~/components/guard/AdminGuard';
import AdminLayout from '~/components/layout/AdminLayout';
import { PATH } from '~/constants/path';

// -----------------------------
const AdminProduct = React.lazy(() => import('~/features/admin/product'));
const AdminCategory = React.lazy(() => import('~/features/admin/category'));
const AdminProductListPage = React.lazy(() => import('~/features/admin/product/pages/List'));
const AdminNewProductPage = React.lazy(() => import('~/features/admin/product/pages/New'));

// -----------------------------
const adminRoute: RouteObject[] = [
  {
    path: PATH.ADMIN.ROOT,
    element: <AdminGuard />,
    errorElement: <ServerErrorPage />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: '', element: <Navigate to={PATH.ADMIN.CATEGORY} /> },
          { path: PATH.ADMIN.CATEGORY, element: <AdminCategory /> },
          { path: PATH.ADMIN.PRODUCT.ROOT, element: <Navigate to={PATH.ADMIN.PRODUCT.LIST} /> },
          { path: PATH.ADMIN.PRODUCT.LIST, element: <AdminProductListPage /> },
          { path: PATH.ADMIN.PRODUCT.ADD, element: <AdminNewProductPage /> }
        ]
      }
    ]
  }
];

export default adminRoute;
