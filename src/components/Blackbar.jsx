import React, { useState } from 'react';
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/Vector.png';
import twitterIcon from '../assets/Twiter.svg';
import paypalIcon from '../assets/Pintrest.svg';
import chatIcon from '../assets/Phonebar.png';
import callNowIcon from '../assets/Phonebar.png';



const Blackbar = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState(' ');


  // Toggle Chat Modal
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    
  };

  // Handle "Call Now" Button
  const handleCallNow = () => {
    window.location.href = 'tel:92 3072663548';
  };

  const handleInputChange = (e) =>{
   setMessage(e.target.value);
  }

  const handleSendMessage = () =>{
   if (message.trim() === " "){
    alert('please type a message before sending...')
    return;
   }
   console.log('Message Sent', message);

   setMessage(' ');
   setIsChatOpen(false)
   
  };

  return (
    <nav className="hidden md:flex bg-[#171717] text-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Social Icons */}
        <div className="flex ml-[10rem] space-x-3">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="w-3.5 h-3.5 hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="w-3.5 h-3.5 hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="w-3.5 h-3.5 hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">
            <img src={paypalIcon} alt="PayPal" className="w-3.5 h-3.5 hover:opacity-80 transition-opacity" />
          </a>
        </div>

        {/* Call and Chat Buttons */}
        <div className="flex items-center mr-[10rem] space-x-4">
          <button onClick={toggleChat} className="flex items-center space-x-2 hover:text-[#FFFFFF]">
            <img src={chatIcon} alt="Live Chat" className="w-3 h-3 hover:opacity-80 transition-opacity" />
            <span className="text-[12px]">Live Chat</span>
          </button>

          <button  className="flex items-center space-x-2 hover:text-[#FFFFFF]">
            <img src={callNowIcon} alt="Call Now" className="w-3 h-3 hover:opacity-80 transition-opacity" />
            {/* <span className="text-[12px]">Call Now</span> */}
            <a href="tel:+923072663548" className='text-[12px]'>Call Now</a>
          </button>
        </div>
      </div>

      {/* Chat Modal */}
      {isChatOpen && (
        <div
          className="fixed inset-0 bg-black text-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={toggleChat} // Close modal on backdrop click
        >
          <div
            className="bg-white rounded-lg p-6 w-[90%] sm:w-[400px] h-[300px] shadow-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on click inside
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Live Chat</h2>
            <textarea
              className="w-full h-[180px] border border-gray-300 rounded p-2"
              placeholder="Type your message here..."
              value={message} // Bind state to textarea
              onChange={handleInputChange}   //update state on input change
            ></textarea>
            <button  onClick={handleSendMessage} //Handle send button click
            className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Send
            </button>
            <button
              onClick={toggleChat}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Blackbar;
