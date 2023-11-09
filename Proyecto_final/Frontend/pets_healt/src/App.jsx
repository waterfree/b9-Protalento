import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Error404 from "./screens/Error/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
