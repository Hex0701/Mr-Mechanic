"use client"
import About from './about';
import Hero from './hero';
import Query from './query';
const MrMechanic = () => {
  return (
    <div id="root" className="min-h-screen bg-white">
      {/* <App /> */}
      <header id="header" className="fixed w-full bg-white border-b border-neutral-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-wrench text-2xl text-neutral-800"></i>
              <span className="font-bold text-3xl">Mr Mechanic</span>
            </div>
            {/* <div className="hidden md:flex items-center space-x-8">
              <span className="text-neutral-600 hover:text-neutral-900 cursor-pointer">Home</span>
              <span className="text-neutral-600 hover:text-neutral-900 cursor-pointer">About</span>
              <span className="text-neutral-600 hover:text-neutral-900 cursor-pointer">Services</span>
              <span className="text-neutral-600 hover:text-neutral-900 cursor-pointer">Contact</span>
            </div> */}
            <button className="md:hidden">
              <i className="fa-solid fa-bars text-2xl text-neutral-800"></i>
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <Hero />
        {/* Query Section */}
        <Query />
        {/* About Section */}
        <About />
      </main>
    </div>
  );
};

export default MrMechanic;
