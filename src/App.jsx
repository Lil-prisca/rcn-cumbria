import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Approuters from "./routes/Approuters";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Approuters></Approuters>
    </BrowserRouter>
  );
}

export default App;
