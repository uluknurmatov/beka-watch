import React from "react";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import WatchContextProvider from "./contexts/WatchContext";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import AddWatches from "./components/AddWatches/AddWatches";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";
import Vakans from "./components/Vakans/Vakans";
import Dostavka from "./components/Dostavka/Dostavka";
import OrderForm from "./components/OrderForm/OrderForm";

import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./contexts/AuthContext";
import Footer from "./components/Footer/Footer";
import Favorites from "./components/Favorites/Favorites";
import CommentContextProvider from "./contexts/CommentContext";
import LikesContextProvider from "./contexts/LikesContext";

const App = () => {
  return (
    <BrowserRouter>
      <WatchContextProvider>
        <AuthContextProvider>
          <CommentContextProvider>
            <LikesContextProvider>
          <Header />
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/regist" element={<SignUp />} />
            <Route path="/add" element={<AddWatches />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/vak" element={<Vakans />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dostavka" element={<Dostavka />} />
            <Route path="/order-form" element={<OrderForm />} />
            <Route path='/favorites' element={<Favorites/>} />
            {/* <Redirect to="/" /> */}
          </Routes>
          <Footer />
          </LikesContextProvider>
          </CommentContextProvider>
        </AuthContextProvider>
      </WatchContextProvider>
    </BrowserRouter>
  );
};

export default App;
