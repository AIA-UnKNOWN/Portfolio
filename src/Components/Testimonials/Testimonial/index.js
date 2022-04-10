import './style.css';

const Testimonial = ({ message, author }) =>{
  return (
    <div className="testimonial">
      <p className="message">
        " {message} "
      </p>
      <p className="author">
        - {author}
      </p>
    </div>
  );
}

export default Testimonial;