import { useState } from 'react';
import './App.css';
import logo from '../pv-logo-design-initial-letter-vector-37014076.jpg'; 

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src={logo}
              alt="PicVerse Logo"
              className="header-logo w-10 h-10 rounded-full"
            />
            <span className="ml-3 text-xl">PicVerse</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-300">Home</a>
            <a className="mr-5 hover:text-gray-300">About Us</a>
            <a className="mr-5 hover:text-gray-300">4K Images</a>
            <a className="mr-5 hover:text-gray-300">Company</a>
          </nav>
        </div>
      </header>

      {/* Blog Section */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/download.jpg"
                  alt="blog"
                  onClick={() => handleImageClick('./images/download.jpg')}
                />
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/pv-logo-design-initial-letter-vector-37014076.jpg"
                  alt="blog"
                  onClick={() => handleImageClick('/images/pv-logo-design-initial-letter-vector-37014076.jpg')}
                />
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/download2.jpg"
                  alt="blog"
                  onClick={() => handleImageClick('/images/download2.jpg')}
                />
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/flower.jpeg"
                  alt="blog"
                  onClick={() => handleImageClick('/images/flower.jpeg')}
                />
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/parrot2.jpeg"
                  alt="blog"
                  onClick={() => handleImageClick('/images/parrot2.jpeg')}
                />
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/heavy.jpeg"
                  alt="blog"
                  onClick={() => handleImageClick('/images/heavy.jpeg')}
                />
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/wallpaper.avif"
                  alt="blog"
                  onClick={() => handleImageClick('/images/wallpaper.avif')}
                />
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/bike2.jpeg"
                  alt="blog"
                  onClick={() => handleImageClick('/images/bike2.jpeg')}
                />
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="./images/parrot.webp"
                  alt="blog"
                  onClick={() => handleImageClick('./images/parrot.webp')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" />
            <button className="close" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
