import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import TimeoutPage from "./pages/TimeoutPage/TimeoutPage";
import FormPage from "./pages/FormPage/FormPage";
import MessageListPage from "./pages/MessageListPage/MessageListPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <BrowserRouter>
      <Banner />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timeout" element={<TimeoutPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/messages" element={<MessageListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
