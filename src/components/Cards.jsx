import Card from "./Card"

import cardData from "../cardData"

function Cards() {
  const cards = cardData.map((card) => {
    return (
      <Card
        key={card.id}
        extraInfo={card.extraInfo}
        src={card.image}
        alt={card.imageAlt}
        star={card.star}
        rating={card.rating}
        likes={card.likes}
        country={card.country}
        text={card.text}
        price={card.price}
        unit={card.unit}
      />
    )
  })

  return (
    <section
      className="cards"
      role="region"
      aria-labelledby="card-list"
      tabIndex="0"
    >
      <ul id="card-list">{cards}</ul>
    </section>
  )
}

export default Cards
