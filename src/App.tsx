import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Root/Home";
import Products from "./routes/Root/Products";
import Computers from "./routes/Root/Products/Computers";
import Electronics from "./routes/Root/Products/Electronics";
import Books from "./routes/Root/Products/Books";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="products/" element={<Products />} >
            <Route path="computers" element={<Computers />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="books" element={<Books />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
