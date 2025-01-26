
const Hero = ()=>{
    return (
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
    )
}

export default Hero