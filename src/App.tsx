import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { DetailsPage } from "@/pages/details";
import { Header } from "@/components/layout/header";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:slug" element={<DetailsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
