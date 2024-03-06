import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import Skills from "./src/pages/Skills";
import Nav from "./src/components/Navbar";
import Footer from "./src/components/Footer"
import Projects from "./src/pages/Projects";
import ScrolToTop from "./public/ScrolToTop";
import Contact from "./src/pages/Contact";
import { useEffect } from "react";
export default function App() {
    useEffect(() => {
        const handleContextmenu = e => {
            e.preventDefault()
        }
        document.addEventListener('contextmenu', handleContextmenu)
        return function cleanup() {
            document.removeEventListener('contextmenu', handleContextmenu)
        }
}, [ ])

    return (
        <>
        <Router>
        <Nav />
        <ScrolToTop />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        </Router>
        </>
    )
}