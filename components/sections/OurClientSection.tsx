import React from "react";

function OurClientSection() {
  return (
    <section className="wrapper">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Clients</h2>
        <p className="text-gray-600 mb-12">
          We have been working with some Fortune 500+ clients
        </p>

        <div className="flex justify-center items-center space-x-12 opacity-60">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="w-12 h-12 bg-gray-300 rounded"></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurClientSection;
