import { Route, Routes } from "react-router-dom";
import TopPage from "./pages/top";
import IdealResultPage from "./pages/ideal/idealResultPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/result" element={<IdealResultPage />} />
    </Routes>
  );
}

export default App;
