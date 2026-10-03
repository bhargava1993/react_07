import logo from './logo.svg';
import './App.css';

import { lazy, Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Static Improts

// import Home from './pages/Home';
// import Products from './pages/Products';
// import Reports from './pages/Reports';

// import ReportsButton from './components/ReportsButton';

import Loader from "./components/Loader"

const Home = lazy(() => import("./pages/Home"))

const Products = lazy(() => import("./pages/Products"))

const Reports = lazy(() => import("./pages/Reports"))

const ReportsButton = lazy(() => import("./components/ReportsButton"))



function App() {
  return (
    <BrowserRouter>
      <h1>My Application</h1>
      <Suspense fallback={<Loader />}>
        {/* <Home />
      <Products />
      <Reports />

      <ReportsButton /> */}


        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>

          <Route path="/products" element={<Products />}/>

          <Route path="/reports" element={<Reports />}/>

           <Route path="/reportsButton" element={<ReportsButton />}/>

        </Routes>
      </Suspense>

    </BrowserRouter>


  );
}

export default App;
