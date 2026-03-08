import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import InfoSec from './components/InfoSec'
import Cards from './components/Cards'
import Reviews from './components/Reviews'

<div className="scrollbar-thin scrollbar-thumb-[#f4845f] scrollbar-track-gray-100"></div>


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <nav className="fixed w-full z-20 top-0 bg-white border-b border-gray-200 ">
        <div className=" flex items-center justify-between px-4 py-3 max-w-screen-xl mx-auto ">

          <a href="#" className="flex items-center gap-2">
            <span className="text-3xl font-semibold">
              <span class="icon-color">Bu</span>
              <span class="icon-color-2">cheen</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="nav-links">Home</a>
            <a href="#" className="nav-links">About</a>
            <a href="#" className="nav-links">Services</a>
            <a href="#" className="nav-links">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="button-1 text-sm px-4 py-2 rounded-xl  transition-colors">Login</button>
            <button className="button-2 text-sm px-4 py-2 rounded-xl transition-colors">Sign Up</button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </button>

        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col px-6 pb-6 gap-4 bg-white border-t border-gray-100">
            <a href="#" onClick={() => setMenuOpen(false)} className="nav-links pt-4">Home</a>
            <a href="#" onClick={() => setMenuOpen(false)} className="nav-links">About</a>
            <a href="#" onClick={() => setMenuOpen(false)} className="nav-links">Services</a>
            <a href="#" onClick={() => setMenuOpen(false)} className="nav-links">Contact</a>
            <div className="flex gap-3 mt-2">
              <button className="flex-1 button-2 text-sm px-4 py-2 rounded-xl">Login</button>
              <button className="flex-1 button-1 text-sm px-4 py-2 rounded-xl">Sign Up</button>
            </div>
          </div>
        </div>

      </nav>


      <HeroSection />

      <InfoSec />

      <Cards />

      < Reviews />


      <footer className="bg-neutral-50 w-full px-8 py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-12 max-w-screen-xl mx-auto ">

          <div className="flex flex-col gap-4 max-w-xs">
            <a href="#" className="flex items-center">
              <span className="self-center text-2xl font-semibold icon-color">Bu</span>
              <span className="self-center text-2xl font-semibold icon-color-2">cheen</span>
            </a>
            <p className="text-gray-500 text-sm">
              The most accurate and simplest time tracking for all of you. and we have been serving for more than 4 years and have made you happy
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-[#E94E1B] uppercase">About Us</h2>
              <ul className="flex flex-col gap-3 text-gray-600 text-sm">
                <li><a href="#" className="hover:underline">Our people</a></li>
                <li><a href="#" className="hover:underline">Our categories</a></li>
                <li><a href="#" className="hover:underline">Contact us</a></li>
                <li><a href="#" className="hover:underline">Testimonial</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-[#E94E1B] uppercase">Product</h2>
              <ul className="flex flex-col gap-3 text-gray-600 text-sm">
                <li><a href="#" className="hover:underline">Task Management</a></li>
                <li><a href="#" className="hover:underline">Service</a></li>
                <li><a href="#" className="hover:underline">Task Schedule</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-[#E94E1B] uppercase">Contact us</h2>
              <ul className="flex flex-col gap-3 text-gray-600 text-sm">
                <li className="flex items-center gap-2">📞 (021) 3258 4930</li>
                <li className="flex items-center gap-2">✉️ Pokan@Hola.com</li>
                <li className="flex items-center gap-2">📍 Sukabumi, Jawa Barat Indonesia, IDN</li>
              </ul>
            </div>
          </div>

        </div>
      </footer>

    </>
  )
}




export default App
