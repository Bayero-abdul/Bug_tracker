import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Loginpage = React.lazy(() => import("pages/Loginpage"));
const Ticketspage = React.lazy(() => import("pages/Ticketspage"));
const Signuppage = React.lazy(() => import("pages/Signuppage"));
const Projectspage = React.lazy(() => import("pages/Projectspage"));
const Projectdetailspage = React.lazy(() => import("pages/Projectdetailspage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/projectspage" element={<Projectspage />} />
          <Route path="/signuppage" element={<Signuppage />} />
          <Route path="/ticketspage" element={<Ticketspage />} />
          <Route path="/projectdetailspage" element={<Projectdetailspage />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
