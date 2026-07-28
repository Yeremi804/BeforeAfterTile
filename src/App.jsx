import './App.css'

function App() {
  return (
    <main className="starter-shell">
      <div className="top-bar" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#home">
          BeforeAfterTile
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="content" id="home">
        <p className="eyebrow">Starter canvas</p>
        <h1>Blank canvas ready</h1>
        <p className="description">
          This project has been reset to a clean starter layout so you can build on it later.
        </p>
      </section>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} BeforeAfterTile. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App
