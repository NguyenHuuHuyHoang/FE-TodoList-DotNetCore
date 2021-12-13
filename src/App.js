import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Pages
// import Home from "./pages/Home";
// import Courses from "./pages/Courses";
// import Course from "./pages/Course";
// import AdminCourses from "./pages/AdminCourses";
// import AdminUsers from "./pages/AdminUsers";
// import LoginPage from "./pages/LoginPage";

// Layout
import AppLayout from "./layouts/AppLayout";
import AdminLayout from "./layouts/AdminLayout";

// Custom Route
import AdminRoute from "./auth/AdminRoute";
import SignupPage from "./pages/SignupPage";
import SignupPageNew from "./pages/SignupPageNew";

// Sử dụng lazyload không import trực tiếp Page vào
const Home = lazy(() => import("./pages/Home"));
const Courses = lazy(() => import("./pages/Courses"));
const Course = lazy(() => import("./pages/Course"));
const AdminCourses = lazy(() => import("./pages/AdminCourses"));
const AdminUsers = lazy(() => import("./pages/AdminUsers"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          {/* Route Admin */}
          <Route path="/admin">
            <AdminLayout>
              <Switch>
                <Redirect exact from="/admin" to="/admin/courses" />
                <AdminRoute path="/admin/courses">
                  <AdminCourses />
                </AdminRoute>
                <AdminRoute path="/admin/users">
                  <AdminUsers />
                </AdminRoute>
              </Switch>
            </AdminLayout>
          </Route>

          {/* Route Main */}
          <Route path="/">
            <AppLayout>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/courses/:category">
                  <Courses />
                </Route>
                <Route path="/course/:courseId">
                  <Course />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/signup">
                  <SignupPage />
                </Route>
                <Route path="/signupnew">
                  <SignupPageNew />
                </Route>
              </Switch>
            </AppLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
