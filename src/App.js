import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import SignIn from "./pages/signin";
import PageNotFound from "./pages/PageNotFound";
import Name from "./pages/name";
import Search from "./component/search";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" Component={() => <About name="About" />} />
        <Route path="/contact" Component={() => <Contact name="Contact" />} />
        <Route path="/search" element={<Search />}></Route>
        <Route exact path="/contact/name" element={<Name />} />
        <Route exact path="/signin" element={<SignIn />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
        <Redirect to="/" />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
