import { Route, Routes } from "react-router-dom";
import TopPage from "./pages/top";
import IdealPage from "./pages/ideal/idealPage";
import ResultPage from "./pages/ideal/resultPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/ideal" element={<IdealPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
