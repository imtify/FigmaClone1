import React from "react";
import { clients } from "@/app/data"; // Adjust the import path as necessary

function OurClientSection() {
  return (
    <section className="wrapper h-[190px]">
      <div className="text-center">
        <h2 className="text-4xl font-semibold leading-[44px] text-gray-800 mb-4">
          Our Clients
        </h2>
        <p className="text-gray-600 mb-12">
          We have been working with some Fortune 500+ clients
        </p>

        <div className="flex flex-wrap sm:flex-nowrap justify-center items-center space-x-[40px] md:space-x-[80px] 2xl:space-x-[140px]">
          {clients.map((client, i) => (
            <div key={i} className="w-12 h-12 flex items-center justify-center">
              <img
                src={client.src}
                alt={client.alt}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurClientSection;
