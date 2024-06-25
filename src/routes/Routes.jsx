import { lazy, Suspense } from "react";
import { Route, Routes as RouteGroup } from "react-router-dom";

import PrivateRoute from "./PrivateRoute.jsx";

function Routes() {
  const isLoading = false;

  const Homepage = lazy(() => import('../app/pages/Homepage.jsx'));
  const Login = lazy(() => import('../app/pages/Login.jsx'));
  const AiSearch = lazy(() => import('../app/pages/AiSearch.jsx'));
  const Shortlisted = lazy(() => import('../app/pages/Shortlisted.jsx'));
  const PageNotFound = lazy(() => import('../app/components/common/PageNotFound.jsx'));

  return (
    <Suspense fallback={<div className="loader" />}>
      {isLoading && (
        <div className="loader" />
      )}
      <RouteGroup>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        {/* Private routes */}
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/ai-search" element={<AiSearch />} />
          <Route exact path="/shortlisted" element={<Shortlisted />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </RouteGroup>
    </Suspense>
  );
}

export default Routes;
