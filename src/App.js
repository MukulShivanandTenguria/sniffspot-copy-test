import "./App.css";
import DogPark from "./components/DogPark";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParkDetailPage from "./components/ParkDetailPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index element={<DogPark/>}/>
        <Route path="spots/:id" element={<ParkDetailPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
