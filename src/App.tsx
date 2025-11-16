import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import CompaniesPage from "./features/companies/pages/CompaniesPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/companies" element={<CompaniesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
