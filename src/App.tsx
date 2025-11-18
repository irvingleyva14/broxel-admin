import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import CompaniesPage from "./features/companies/pages/CompaniesPage";
import CompanyDetailPage from "./features/companies/pages/CompanyDetailPage";
import OverviewPage from "./features/overview/pages/OverviewPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/companies/:id" element={<CompanyDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
