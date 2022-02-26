import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWords, getCategories } from "../../Redux/words";
import Header from "../Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWords());
    dispatch(getCategories());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
