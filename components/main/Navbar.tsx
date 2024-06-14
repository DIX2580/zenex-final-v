"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg bg-black z-50 px-4 md:px-10">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/IMG_3404.PNG"
            alt="logo"
            width={150}
            height={150}
            className="cursor-pointer mt-4 hover:animate-slowspin"
          />
        </Link>

        {/* Navbar links for larger screens */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="menu-link">Home</Link>
          <Link href="/about" className="menu-link">About</Link>
          <Link href="/services" className="menu-link">Our Services</Link>
          <Link href="/Our-Projects" className="menu-link">Our Projects</Link>

          <Link href="/career" className="menu-link">Career</Link>
          <Link href="/contact" className="menu-link">Contact Us</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-red-500 focus:outline-none">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden backdrop-blur-sm bg-[#03001417]/90 shadow-lg transition-all duration-300">
          <div className="flex flex-col items-center mt-2 space-y-2 py-2 animate-dropdown">
            {['/', '/about', '/services','/Our-Projects', '/career', '/contact'].map((href, index) => (
              <motion.div
                key={href}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={menuVariants}
                className="menu-link"
              >
                <Link href={href}>{href.replace('/', '') || 'Home'}</Link>
              </motion.div>
            ))}

            {/* Close Button */}
            <button onClick={toggleMobileMenu} className="absolute top-0 left-0 p-3 text-gray-300 hover:text-red-500 focus:outline-none">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
