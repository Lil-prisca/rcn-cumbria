import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import About from "../pages/AboutPage";
import Contact from "../pages/ContactPage";
import OurActivities from "../pages/OurActivitiesPage";
import TeamsPage from "../pages/TeamsPage";
import GivePage from "../pages/GivePage";
import IAmNewPage from "../pages/IamnewPage";
import SafeguardingPage from "../pages/Safeguardingpage";
import TermsOfUse from "../pages/Termsofuse";
import PrivacyPolicy from "../pages/Privacypolicy";
import RequireAdmin from "../Admin/RequireAdmin";

const AdminLogin = lazy(() => import("../Admin/AdminLogin"));
const AdminHome = lazy(() => import("../Admin/AdminHome"));
const AdminPage = lazy(() => import("../Admin/AdminPage"));
const AdminLayout = lazy(() => import("../Admin/AdminLayout"));

const guard = (el) => (
  <RequireAdmin>
    <Suspense fallback={null}>{el}</Suspense>
  </RequireAdmin>
);

const Approuters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/give" element={<GivePage />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/our-activities" element={<OurActivities />} />
      <Route path="/team-members" element={<TeamsPage />} />
      <Route path="/iamnew" element={<IAmNewPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/safeguarding" element={<SafeguardingPage />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />

      <Route
        path="/admin/login"
        element={
          <Suspense fallback={null}>
            <AdminLogin />
          </Suspense>
        }
      />

      <Route path="/admin" element={guard(<AdminLayout />)}>
        <Route index element={<AdminHome />} />
        <Route path=":page" element={<AdminPage />} />
      </Route>
    </Routes>
  );
};

export default Approuters;
