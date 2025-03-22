import "../Conservation/Conservation.scss";

function Conservation() {
  return (
    <section className="conservation">
      <div className="conservation__header">
        <h1 className="conservation__title">
          Protecting Our Oceans: Surf with Purpose
        </h1>
        <h3 className="conservation__description">
          The ocean isn't just our playground, it's a living ecosystem that
          needs our guardianship. As surfers, we experience firsthand the magic
          of riding waves in pristine waters. This deep connection gives us both
          the privilege and responsibility to protect the marine environment
          that brings us so much joy.
        </h3>
      </div>
      <div className="conservation__wrapper">
        <h2 className="conservation__subtitle">
          Biggest Threats to Marine Life
        </h2>
        <p className="conservation__text">
          Our oceans face an unprecedented crisis. Plastic pollution chokes
          marine life, with an estimated 8 million metric tons entering our
          waters annually. Climate change is causing ocean temperatures to rise
          at alarming rates, devastating coral reefs, home to 25% of all marine
          species. Industrial fishing practices deplete fish populations faster
          than they can recover, while toxic runoff creates dead zones where
          nothing can survive. The consequences are visible: entangled sea
          turtles, bleached coral, and declining fish populations. As surfers
          who witness these changes firsthand, we're uniquely positioned to
          become ocean advocates.
        </p>
      </div>
      <div className="conservation__wrapper">
        <h2 className="conservation__subtitle">The Conscious Surfer's Guide</h2>
        <ul className="conservation__list">
          <li className="conservation__list-item">
            Respect Marine Life – Avoid disturbing wildlife, stay clear of
            nesting areas, and never touch or feed marine animals. Remember:
            we're visitors in their home.
          </li>
          <li className="conservation__list-item">
            Reduce Plastic Use – Bring a reusable water bottle, avoid single-use
            plastics, and pick up trash when you see it.
          </li>
          <li className="conservation__list-item">
            Eco-Friendly Surf Gear – Choose sustainable surfboards, wax, and
            wetsuits made from environmentally friendly materials.
          </li>
          <li className="conservation__list-item">
            Support Clean Waves – Rinse off sand and salt using reef-safe
            sunscreen and biodegradable soaps.
          </li>
        </ul>
      </div>
      <div className="conservation__wrapper">
        <h2 className="conservation__subtitle">Partners in Ocean Protection</h2>
        <ul className="conservation__list-2">
          <li className="conservation__list-item-2">
            Surfrider Foundation - Their chapter network organizes regular beach
            cleanups and advocates for ocean-friendly policies.
          </li>
          <li className="conservation__list-item-2">
            4ocean - Their recovered ocean plastic bracelets fund continuous
            cleanup operations that have removed millions of pounds of trash.
          </li>
          <li className="conservation__list-item-2">
            Sustainable Surf - Their ECOBOARD certification program has
            transformed surfboard manufacturing standards industry-wide.
          </li>
          <li className="conservation__list-item-2">
            Patagonia & Vissla - Leaders in yulex (plant-based) wetsuits that
            eliminate the need for petroleum-based neoprene.
          </li>
          <li className="conservation__list-item-2">
            Project AWARE - Their Dive Against Debris program enables underwater
            cleanups at popular surf spots.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Conservation;
