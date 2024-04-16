import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <header className="page-header">
        <Nav />
      </header>
      <main className="main-content">
        <Hero />
        <Cards />
      </main>
      <Footer />
    </>
  )
}

export default App
