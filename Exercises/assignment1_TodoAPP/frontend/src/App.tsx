import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
// import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./hooks/store";
import { ToastContainer } from "react-toastify";

// import './App.css'
function App() {
  return (
    <div className=' bg-main-blue min-h-screen'>
      <Provider store={store}>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          {/* <ToastContainer /> */}
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
