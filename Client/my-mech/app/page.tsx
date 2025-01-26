import React from 'react';

const MrMechanic = () => {
  return (
    <div id="root" className="min-h-screen bg-white">
      <header id="header" className="fixed w-full bg-white border-b border-neutral-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-wrench text-2xl text-neutral-800"></i>
              <span className="text-xl font-bold">Mr Mechanic</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <span className="text-neutral-600 hover:text-neutral-900 cursor-pointer">Home</span>
              <span className="text-neutral-600 hover:text-neutral-900 cursor-pointer">About</span>
              <span className="text-neutral-600 hover:text-neutral-900 cursor-pointer">Services</span>
              <span className="text-neutral-600 hover:text-neutral-900 cursor-pointer">Contact</span>
            </div>
            <button className="md:hidden">
              <i className="fa-solid fa-bars text-2xl text-neutral-800"></i>
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="h-[800px] flex items-center justify-center bg-neutral-50 pt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">AI-Powered Car Diagnostics</h1>
              <p className="text-xl text-neutral-600 mb-8">
                Get instant insights about your vehicle's condition with our advanced AI mechanic assistant
              </p>
              <div className="flex justify-center">
                <button className="bg-black text-white px-8 py-4 rounded-lg text-lg hover:bg-neutral-800">
                  Start Diagnosis
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Query Section */}
        <section id="query-section" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-neutral-50 rounded-xl p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex flex-col space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-start space-x-3">
                        <img
                          src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1"
                          className="w-8 h-8 rounded-full"
                          alt="AI Avatar"
                        />
                        <div className="flex-1">
                          <p className="text-neutral-700">
                            Hello! I'm your AI mechanic assistant. Please provide your vehicle's make, model, and year to get started.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-neutral-100 p-4 rounded-lg shadow-sm ml-auto max-w-[80%]">
                      <div className="flex items-start space-x-3 justify-end">
                        <div className="flex-1">
                          <p className="text-neutral-700">
                            I have a 2018 Toyota Camry that's making a strange noise when braking.
                          </p>
                        </div>
                        <img
                          src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=2"
                          className="w-8 h-8 rounded-full"
                          alt="User Avatar"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Type your message here..."
                      className="flex-1 p-4 rounded-lg border border-neutral-300 focus:outline-none focus:border-neutral-500"
                    />
                    <button className="bg-black text-white p-4 rounded-lg hover:bg-neutral-800">
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">How Mr Mechanic Works</h2>
                <p className="text-neutral-600">
                  Our AI-powered system analyzes your vehicle's information to provide accurate diagnostics
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <i className="fa-solid fa-car text-3xl mb-4"></i>
                  <h3 className="text-xl font-bold mb-2">Enter Vehicle Info</h3>
                  <p className="text-neutral-600">
                    Provide your car's details and describe the issues you're experiencing
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <i className="fa-solid fa-robot text-3xl mb-4"></i>
                  <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
                  <p className="text-neutral-600">
                    Our AI processes the information and compares it with millions of cases
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <i className="fa-solid fa-clipboard-check text-3xl mb-4"></i>
                  <h3 className="text-xl font-bold mb-2">Get Results</h3>
                  <p className="text-neutral-600">
                    Receive detailed diagnostics and recommended solutions for your vehicle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer
      <footer id="footer" className="bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <i className="fa-solid fa-wrench text-2xl"></i>
                <span className="text-xl font-bold">Mr Mechanic</span>
              </div>
              <p className="text-neutral-400">AI-powered vehicle diagnostics for everyone</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><span className="text-neutral-400 hover:text-white cursor-pointer">Home</span></li>
                <li><span className="text-neutral-400 hover:text-white cursor-pointer">About</span></li>
                <li><span className="text-neutral-400 hover:text-white cursor-pointer">Services</span></li>
                <li><span className="text-neutral-400 hover:text-white cursor-pointer">Contact</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-neutral-400">support@mrmechanic.ai</li>
                <li className="text-neutral-400">1-800-MECHANIC</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <span className="text-neutral-400 hover:text-white cursor-pointer">
                  <i className="fa-brands fa-twitter"></i>
                </span>
                <span className="text-neutral-400 hover:text-white cursor-pointer">
                  <i className="fa-brands fa-facebook"></i>
                </span>
                <span className="text-neutral-400 hover:text-white cursor-pointer">
                  <i className="fa-brands fa-instagram"></i>
                </span>
                <span className="text-neutral-400 hover:text-white cursor-pointer">
                  <i className="fa-brands fa-linkedin"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
            <p>&copy; 2025 Mr Mechanic. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default MrMechanic;
