export function PromoBlock() {
  return (
    <section className="promo-block">
      <div className="promo-inner">

        <div className="promo-text">
          <span className="promo-line"></span>
          <h2>Build & manage distributed teams like no one else.</h2>
        </div>

        <div className="promo-features">
          <div className="promo-feature">
            <img src="/src/assets/img/icon-person.svg" alt="" />
            <div>
              <h3>Experienced Individuals</h3>
              <p>Our network is made up of highly experienced professionals.</p>
            </div>
          </div>

          <div className="promo-feature">
            <img src="/src/assets/img/icon-quotes.svg" alt="" />
            <div>
              <h3>Easy to Implement</h3>
              <p>Our processes have been refined over years of implementation.</p>
            </div>
          </div>

          <div className="promo-feature">
            <img src="/src/assets/img/icon-chart.svg" alt="" />
            <div>
              <h3>Enhanced Productivity</h3>
              <p>Our customized platform helps you manage your team.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
