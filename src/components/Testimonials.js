import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonials-detail">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonials-image"
          />
          <h4 className="testimonials-name">
            {testimonial.name} {testimonial.lastname}
          </h4>
          <p className="testimonials-description">
            “ Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Architecto, reiciendis. Possimus voluptas perspiciatis nisi eveniet
            odit doloribus.”
          </p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
