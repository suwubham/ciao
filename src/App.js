import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;
