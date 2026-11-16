import './App.css';
import Header from './static/Header';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
    </>
  )
}

export default App
   