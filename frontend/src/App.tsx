import Header from "./components/Header"
import SalesCardAcad from "./components/SalesCradAcad"
import "./index.css"

function App() {
  return (
    <>
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

export default App
