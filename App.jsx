import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import Skills from "./src/pages/Skills";
import Nav from "./src/components/Navbar";
import Footer from "./src/components/Footer"
import Projects from "./src/pages/Projects";
import ScrolToTop from "./public/ScrolToTop";
import Contact from "./src/pages/Contact";
import { useEffect } from "react";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDx50ENibTdPecO26fY_v49_EmxSPOQBe8",

  authDomain: "portfolio-9e9d2.firebaseapp.com",

  projectId: "portfolio-9e9d2",

  storageBucket: "portfolio-9e9d2.appspot.com",

  messagingSenderId: "704691374197",

  appId: "1:704691374197:web:44b88d5978f164536f903c",

  measurementId: "G-RYVCE05ZDE"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

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