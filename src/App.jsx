import { Box } from "./Box";
import { Route, Routes, Navigate } from "react-router-dom";

export const App = () => (
  <div className="App">
    <Routes>
      <Route path="/existence" element={<Box />} />
      <Route path="*" element={<Navigate to="/existence" />} />
    </Routes>
  </div>
);
