import React from "react";
import TestimonialsSlider from "./TestimonialsSlider";
const Testimonials = () => {
  return (
    <section className="section bg-secondary" id="testimonials">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2
            className="section-title before:content-testimonials
           relative before:absolute before:opacity-40 before:-top-[2rem]
           before:-left-64 before:hidden before:lg:block"
          >
            What other people say
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quis
            architecto labore doloribus consectetur atque esse facilis.
            Voluptas, cumque provident.
          </p>
        </div>
        <TestimonialsSlider/>
      </div>
    </section>
  );
};

export default Testimonials;
