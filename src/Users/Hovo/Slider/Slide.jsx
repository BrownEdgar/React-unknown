import PropTypes from 'prop-types';
 
 
 export default function Slide({slide}) {

  return (
    <div className='Slide'>
      <div className='Slide__header'>
          <img src={slide.image} alt={slide.date} className='Slide__img' />
        <div className='Slide__info'>
          <small>{slide.date}</small>
          <h1>{slide.title}</h1>
          <small>{slide.category}</small>
        </div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  slide: PropTypes.exact({
    id: PropTypes.number.isRequired,      
    image: PropTypes.string.isRequired,   
    date: PropTypes.string.isRequired,    
    title: PropTypes.string.isRequired,   
    category: PropTypes.string.isRequired,
  }),
};