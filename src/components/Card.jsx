import PropTypes from "prop-types"

function Card({
  extraInfo,
  src,
  star,
  rating,
  likes,
  country,
  text,
  price,
  unit,
}) {
  return (
    <li className="card">
      <div className="image">
        {extraInfo && <span className="extra-info">{extraInfo}</span>}
        <img
          src={`/scrimba-airbnb/${src}`}
          alt={text}
        />
      </div>
      <div className="info">
        <div>
          <div className="status">
            {star ? (
              <svg
                viewBox="0 0 12 11"
                className="star star-active"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 12 11"
                className="star"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z" />
              </svg>
            )}

            {rating && <span className="rating">{rating}</span>}

            {likes && (
              <span className="likes">
                ({likes}) <span>&#x2022;</span>
              </span>
            )}

            <span className="country">{country}</span>
          </div>
        </div>
        <h2 className="text">{text}</h2>
        <div className="pricing">
          <span className="price">From &#36;{price}</span>
          <span className="unit">
            <span>/</span>
            <span>{unit}</span>
          </span>
        </div>
      </div>
    </li>
  )
}

Card.propTypes = {
  extraInfo: PropTypes.string,
  src: PropTypes.string,
  rating: PropTypes.number,
  star: PropTypes.bool,
  likes: PropTypes.number,
  country: PropTypes.string,
  text: PropTypes.string,
  price: PropTypes.number,
  unit: PropTypes.string,
}

export default Card
