import './style.css';
import Testimonial from './Testimonial';

import testimonials from './testimonials';

const Testimonials = () => {
  return (
    <div className="container">
      <div>
        <p className="title">
          Testimonials
        </p>
        <div className="testimonials">
          {testimonials.length > 0 && testimonials.map(({ id, message, author }) => (
            <Testimonial
              key={id}
              message={message}
              author={author}
            />
          ))}
        </div>
      </div>
    </div>
  ); 
}

export default Testimonials;