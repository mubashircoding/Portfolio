import React from "react";
import { services } from "../data";
const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2
            className="section-title before:content-services
           relative before:absolute before:opacity-40 before:-top-[2rem]
            before:-left-28 before:hidden before:lg:block"
          >
            What I do for clients
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium harum earum numquam deserunt eum recusandae eos quis
            totam voluptatum maiores!
          </p>
        </div>
        {/* item grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {services.map((item, index) => {
            const { icon, name, description } = item;
            return (
              <div className="bg-secondary p-6 rounded-2xl" key={index}>
                <div className="text-accent rounded-sm w-12 h-12 flex
                 justify-center items-center mb-24 text-[28px]">
                    {icon}
                 </div>
                 <h4 className="text-xl font-medium mb-2">{ name }</h4>
                 <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
