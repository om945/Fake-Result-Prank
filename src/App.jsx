import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ResultPage from "./ResultPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sukresult" element={<ResultPage />} />
      </Routes>
    </div>
  );
};

export default App;
