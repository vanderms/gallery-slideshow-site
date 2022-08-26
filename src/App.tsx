import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { DetailsPage } from "./pages/details";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:slug" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
