import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import HeroImg from '../assets/main-hero.png';
import sample1 from '../assets/sample-1.png';
import sample2 from '../assets/sample-2.png';
import sample3 from '../assets/sample-3.png';
import redesignImg from '../assets/Redesign_Image.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import TypingEffect from 'react-typing-effect'; // Import the typing effect library

const Home = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  
  const redirectToBpUpload = () => {
    if (isLoggedIn) {
      navigate("/uploadBp");
    } else {
      navigate("/sign-in");
    }
  };

  const rooms = [
    { id: 1, src: sample1, alt: 'Room 1' },
    { id: 2, src: sample2, alt: 'Room 2' },
    { id: 3, src: sample3, alt: 'Room 3' },
  ];

  return (
    <div className="flex flex-col items-center bg-gradient-to-tr from-blue-300 via-teal-100 to-blue-300 min-h-screen">
      {/* Navbar */}
      <div className="w-screen">
        <NavBar />
      </div>

      {/* Tagline */}
      <div className="bg-white text-center p-5 rounded-xl shadow-lg mx-4 sm:mx-6 lg:mx-8 mt-6 md:mt-8">
        <span className="text-gray-600 text-sm lg:text-base">
          Used by over <span className="text-blue-600 font-semibold">2 million people</span> to redesign homes
        </span>
      </div>

      <div className="text-center mt-8 lg:mt-12 h-16 m-6">
        <h1 className="text-3xl lg:text-5xl font-bold text-black">
          <TypingEffect
            text={['Introducing Your AI Interior Designer']}
            speed={100} // Typing speed
            eraseSpeed={100} // Speed for erasing text
            eraseDelay={2000} // Delay before erasing starts
            typingDelay={500} // Delay before typing starts
          />
        </h1>
      </div>

      {/* Redesign Button */}
      <div onClick={redirectToBpUpload} className="mt-6 lg:mt-10">
        <button className="bg-blue-600 text-white text-lg lg:text-xl font-semibold py-3 px-8 lg:px-12 rounded-full flex items-center space-x-2 hover:bg-blue-700 shadow-xl transition-all duration-300 transform hover:scale-105">
          <span>Redesign your room</span>
          <span>🔄</span>
        </button>
      </div>

      {/* Before & After Section */}
      <div className="flex flex-col items-center mt-12 p-3 lg:p-8">
        <div className="flex justify-center space-x-4 w-full max-w-md lg:max-w-3xl relative rounded-xl overflow-hidden shadow-lg">
          <img src={HeroImg} alt="After" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Sample Rooms Section */}
      <section className="py-8 lg:py-16 max-w-6xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6 text-gray-800">
          Rooms that <span className="text-blue-600">Roomi AI</span> created
        </h2>
        <div className="m-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-14">
          {rooms.map((room) => (
            <div key={room.id} className="overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <img src={room.src} alt={room.alt} className="w-full h-full object-cover rounded-xl" />
            </div>
          ))}
        </div>
      </section>

      {/* Transform Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 md:px-8 lg:px-16 py-8 lg:py-16 max-w-6xl bg-gradient-to-r from-blue-100 via-white to-gray-50 rounded-xl shadow-lg">
        <div className="max-w-lg text-center lg:text-left mx-auto lg:mx-0">
          <h2 className="font-bold text-2xl lg:text-4xl mb-4 lg:mb-8 text-gray-800">
            <span className="text-blue-700">Transform any room</span> with just one photo
          </h2>
          <p className="text-gray-600 mb-6 lg:mb-8 text-sm lg:text-base">
            See what our users are saying about the product.
          </p>
          <div onClick={redirectToBpUpload}>
            <button className="font-bold text-md lg:text-lg inline-flex items-center gap-3 py-4 px-8 lg:px-10 rounded-full border border-blue-700 bg-blue-700 text-white hover:bg-blue-800 transition-all duration-300 transform hover:scale-105">
              Try it now
              <img src="https://assets.roomgpt.io/logout.svg" alt="" className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-xl shadow-lg" src={redesignImg} alt="Room transformation preview" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12 w-screen">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Roomi AI</h3>
              <p className="text-sm">Transforming your living spaces with AI-powered design.</p>
            </div>
            <div className="flex space-x-8 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white">About Us</a>
              <a href="#" className="text-gray-400 hover:text-white">Services</a>
              <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-gray-400 hover:text-white" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-gray-400 hover:text-white" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-gray-400 hover:text-white" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p className="text-sm">© {new Date().getFullYear()} Roomi AI. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
