import Card from "./Card"

import cardData from "../cardData"

function Cards() {
  const cards = cardData.map((card) => {
    return (
      <Card
        key={card.id}
        openSpots={card.openSpots}
        src={card.coverImg}
        alt={card.imageAlt}
        rating={card.stats.rating}
        likes={card.stats.reviewCount}
        location={card.location}
        title={card.title}
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
