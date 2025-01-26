/* 

const Query = () =>{
    return (
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
    )
}

export default Query */

import { useState } from "react";

const Query = () => {
    const [input, setInput] = useState(""); // Capture user input
    const [response, setResponse] = useState(""); // Display server response

    // Send POST request to the backend
    const handleSend = async () => {
        if (!input.trim()) return; // Avoid empty inputs
        try {
            const res = await fetch("http://localhost:8080/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt: input }), // Send the user input
            });
            const data = await res.json();
            setResponse(`Server Response: ${JSON.stringify(data)}`); // Show server response
        } catch (err) {
            console.error(err);
            setResponse("Failed to connect to the server.");
        }
    };

    return (
        <section id="query-section" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-neutral-50 rounded-xl p-6 shadow-sm">
                    <div className="space-y-4">
                        {/* Display server response */}
                        {response && <div className="bg-green-100 p-4 rounded-lg">{response}</div>}
                        {/* Input and Button */}
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your query here..."
                                className="flex-1 p-4 rounded-lg border border-neutral-300 focus:outline-none focus:border-neutral-500"
                            />
                            <button
                                onClick={handleSend}
                                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-neutral-800"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Query;
