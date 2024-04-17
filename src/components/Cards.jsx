import Card from "./Card"

import cardData from "../cardData"

function Cards() {
  const cards = cardData.map((card) => {
    return (
      <Card
        key={card.id}
        card={card}
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
