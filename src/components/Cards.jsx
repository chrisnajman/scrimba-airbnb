import Card from "./Card"

function Cards() {
  const cards = [
    {
      id: 1,
      extraInfo: "Sold out",
      image: "life-lessons.png",
      imageAlt: "Katie Zoferies by the pool",
      star: true,
      rating: 5.0,
      likes: 6,
      country: "USA",
      text: "Life lessons with Katie Zoferies",
      price: 136,
      unit: "person",
    },
    {
      id: 2,
      extraInfo: "Online",
      image: "wedding-photography.png",
      imageAlt: "Woman modelling a wedding dress",
      star: true,
      rating: 5.0,
      likes: 30,
      country: "USA",
      text: "Learn wedding photography",
      price: 125,
      unit: "person",
    },
    {
      id: 3,
      image: "mountain-bike.png",
      imageAlt: "Mountain bike with view",
      country: "USA",
      text: "Group mountain biking",
      price: 250,
      unit: "couple",
    },
  ]

  return (
    <section
      className="cards"
      role="region"
      aria-labelledby="card-list"
      tabIndex="0"
    >
      <ul id="card-list">
        {cards.map((card) => {
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
        })}
      </ul>
    </section>
  )
}

export default Cards

/*



*/
