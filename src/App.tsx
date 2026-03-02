import { Hero, Contacts, Schedule, Requisites, Info, Footer } from "./components"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <main className="flex-1 w-full box-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="content-grid">
            <Contacts />
            <Schedule />
            <Requisites />
          </div>
          <Info />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
