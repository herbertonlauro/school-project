import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import SalesCardAcad from "./components/SalesCradAcad";
import "./index.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
      <section id="sales">
        <div className="acad-container"></div>
        <SalesCardAcad />
        </section>
        </main>
      
    </>
  )
}

export default App;
