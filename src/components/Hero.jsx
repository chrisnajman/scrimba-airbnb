import HeroGridImage from "../assets/airbnb/hero-grid.png"

function Hero() {
  return (
    <section className="hero">
      <img
        src={HeroGridImage}
        alt="Grid of images"
        className="hero-grid"
      />

      <div>
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  )
}

export default Hero
