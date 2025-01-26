import { useState } from "react";

const Query = () => {
    const [input, setInput] = useState(""); // Capture user input
    const [response, setResponse] = useState(""); // Display server response
    const [loading, setLoading] = useState(false); // Track request status
    const [cost, setCost] = useState("")

    // Send POST request to the backend
    const handleSend = async () => {
      if (!input.trim()) return; // Avoid empty inputs
      setLoading(true); // Disable button during request
  
      try {
          const res = await fetch("http://localhost:8080/generate", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ prompt: input }), // Send the user input
          });
  
          const data = await res.json();
  
          setResponse(data.prediction); // Show server response
          getCost();
      } catch (err) {
          console.error(err);
          setResponse("Failed to connect to the server.");
      } finally {
          setLoading(false); // Re-enable button
      }
    };

    const getCost = async () =>{fetch("http://localhost:8080/cost")
              .then((response) => response.json())
              .then((data) => setCost(data.cost))
              .catch((error) => console.error(error));
    }

  

    return (
        <section id="query-section" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-neutral-50 rounded-xl p-6 shadow-sm">
                    <div className="space-y-4">
                        {/* Display server response */}
                        {response && (
                            <div>
                                <div className="bg-green-100 p-4 rounded-b-none rounded-t-lg">{response}</div>
                                <div className="bg-green-200 p-4 rounded-t-none rounded-b-lg">Estimated Price: {parseFloat(cost).toFixed(2)}</div>
                            </div>
                            
                        )}
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
                                disabled={!input.trim() || loading} // Disable button condition
                                className={`px-4 py-2 rounded-lg ${
                                    loading || !input.trim()
                                        ? "bg-neutral-400 text-neutral-700 cursor-not-allowed"
                                        : "bg-black text-white hover:bg-neutral-800"
                                }`}
                            >
                                {loading ? "Loading..." : "Send"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Query;

