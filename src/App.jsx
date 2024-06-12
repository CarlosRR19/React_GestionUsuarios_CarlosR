import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserCreate from "./components/UserCreate";
import UserUpdate from "./components/UserUpdate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<UserList />}></Route>
          <Route path="/create" element={<UserCreate />}></Route>
          <Route path="/update/:id" element={<UserUpdate />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
