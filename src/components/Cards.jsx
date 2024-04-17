import Card from "./Card"

import cardData from "../cardData"

function Cards() {
  const cards = cardData.map((card) => {
    console.log(card.location)
    return (
      <Card
        key={card.id}
        extraInfo={card.extraInfo}
        src={card.coverImg}
        alt={card.imageAlt}
        star={card.stats.star}
        rating={card.stats.rating}
        likes={card.stats.reviewCount}
        country={card.location}
        text={card.title}
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
