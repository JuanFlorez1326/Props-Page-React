import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Page } from "./Components/Page/Page";
import { Contact } from "./Components/Layout/Contact/Contact";
import { Header } from "./Components/Layout/Header/Header";
import { Footer } from "./Components/Layout/Footer/Footer";
import { About } from "./Components/Layout/About/About";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Page/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
