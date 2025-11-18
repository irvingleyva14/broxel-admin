import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import CompaniesPage from "./features/companies/pages/CompaniesPage";
import CompanyDetailPage from "./features/companies/pages/CompanyDetailPage";
import OverviewPage from "./features/overview/pages/OverviewPage";
import CompanyAdminPage from "./features/companyAdmin/pages/CompanyAdminPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/companies/:id" element={<CompanyDetailPage />} />

        {/* NUEVA RUTA */}
        <Route path="/companies/:id/admin" element={<CompanyAdminPage />} />

        <Route path="/overview" element={<OverviewPage />} />
      </Route>
    </Routes>
  );
}

export default App;
