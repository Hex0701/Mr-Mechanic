
const About = () =>{
    return (
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
                  <h3 className="text-xl font-bold mb-2">ML Analysis</h3>
                  <p className="text-neutral-600">
                  Our ML model is trained on thousands of data points, covering the repair prices of numerous cars.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <i className="fa-solid fa-clipboard-check text-3xl mb-4"></i>
                  <h3 className="text-xl font-bold mb-2">Get Results</h3>
                  <p className="text-neutral-600">
                    Receive detailed diagnostics and estimates repair costs for your vehicle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default About