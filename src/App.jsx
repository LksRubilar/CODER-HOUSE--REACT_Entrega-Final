// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";
import CheckOut from "./components/CheckOut";
import CartDetail from "./components/CartDetail";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<CartDetail />} />
            <Route path="/checkOut" element={<CheckOut />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
