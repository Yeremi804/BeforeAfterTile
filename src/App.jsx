import { useRef, useState } from 'react'
import './App.css'

const beforeImage = 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85'
const afterImage = 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=85'

function ArrowUpRight() { return <span aria-hidden="true">↗</span> }

function BeforeAfterSlider() {
  const [position, setPosition] = useState(52)
  const sliderRef = useRef(null)
  const setFromPointer = (event) => {
    const rect = sliderRef.current.getBoundingClientRect()
    setPosition(Math.min(100, Math.max(0, ((event.clientX - rect.left) / rect.width) * 100)))
  }
  const beginDrag = (event) => { event.currentTarget.setPointerCapture?.(event.pointerId); setFromPointer(event) }
  return <div className="comparison" ref={sliderRef} onPointerDown={beginDrag} onPointerMove={(event) => event.buttons && setFromPointer(event)} role="slider" aria-label="Before and after kitchen tile renovation" aria-valuemin="0" aria-valuemax="100" aria-valuenow={Math.round(position)} tabIndex="0" onKeyDown={(event) => { if (event.key === 'ArrowLeft') setPosition((value) => Math.max(0, value - 4)); if (event.key === 'ArrowRight') setPosition((value) => Math.min(100, value + 4)) }}>
    <img className="comparison-image" src={afterImage} alt="Refreshed contemporary kitchen after tile work" />
    <div className="comparison-before" style={{ width: `${position}%` }}><img className="comparison-image" src={beforeImage} alt="Kitchen before tile refresh" /></div>
    <span className="image-label before-label">Before</span><span className="image-label after-label">After</span>
    <div className="comparison-divider" style={{ left: `${position}%` }} aria-hidden="true"><span className="slider-control">↔</span></div>
  </div>
}

function App() {
  return <main className="site-shell" id="home">
    <div className="aura-layer aura-layer-one" aria-hidden="true" /><div className="aura-layer aura-layer-two" aria-hidden="true" /><div className="aura-layer aura-layer-three" aria-hidden="true" /><div className="aura-layer aura-layer-four" aria-hidden="true" />
    <div className="page-content">
      <header className="site-header section-width"><a className="brand" href="#home" aria-label="BeforeAfterTile home"><span className="brand-mark"><i /><i /><i /><i /></span><span>Before<span>After</span>Tile</span></a><nav className="site-nav" aria-label="Primary navigation"><a href="#work">Our work</a><a href="#process">Process</a><a href="#about">About</a></nav><a className="header-cta" href="#contact">Get a quote <ArrowUpRight /></a></header>
      <section className="hero section-width"><p className="kicker"><span /> Tile transformation studio</p><h1>Small details.<br /><em>Lasting impact.</em></h1><div className="hero-bottom"><p>We restore tired tile and bring considered, durable finishes to the places you live in most.</p><a className="round-link" href="#work" aria-label="Explore our transformations">↓</a></div></section>
      <section className="work-section section-width" id="work"><div className="section-heading"><p className="kicker"><span /> See the difference</p><p>Drag the marker to reveal how a fresh tile finish can change the entire feeling of a room.</p></div><BeforeAfterSlider /><div className="project-caption"><div><p className="overline">Featured transformation</p><h2>Quiet kitchen, renewed.</h2></div><p>Warm white tile, refined grout lines, and a finish made for everyday life.</p></div></section>
      <section className="process-section section-width" id="process"><div className="intro-copy"><p className="kicker"><span /> How we work</p><h2>Thoughtful work from first look to final wipe-down.</h2></div><div className="process-grid"><article><p>01</p><h3>Look closely</h3><span>We listen, measure, and make sure the surface has a strong foundation.</span></article><article><p>02</p><h3>Choose well</h3><span>We guide material, tone, and pattern choices that belong in your home.</span></article><article><p>03</p><h3>Finish beautifully</h3><span>Careful installation and a clean handover leave only the good part behind.</span></article></div></section>
      <section className="about-section section-width" id="about"><p className="kicker"><span /> A better surface story</p><div><h2>Old tile doesn’t always need to be replaced. Sometimes, it needs to be <em>seen differently.</em></h2><a className="text-link" href="#contact">Meet BeforeAfterTile <ArrowUpRight /></a></div></section>
      <footer className="site-footer section-width" id="contact"><div><p className="kicker"><span /> Start your project</p><h2>Ready for a<br /><em>new point of view?</em></h2></div><a className="footer-email" href="mailto:hello@beforeaftertile.com">hello@beforeaftertile.com <ArrowUpRight /></a><div className="footer-base"><span>© {new Date().getFullYear()} BeforeAfterTile</span><span>Made with care for considered homes.</span></div></footer>
    </div>
  </main>
}

export default App
