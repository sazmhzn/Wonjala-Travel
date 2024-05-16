import React from 'react'

const test = () => {
  return (
    import "./Home.css"

const Home = () => {
  return (
      <>
      <main className="main" id="home">

      { /* showcase-content */ }
      <div className="showcase-content">
        <h1>Discover the most engaging places</h1>
        <a href="https://earth.google.com/web/" target="_blank" className="showcase-button">
        Discover on 3D globe</a>
      </div>

      { /* showcase-search */ }
      <div className="showcase-search">
        <div className="filters">
          <div className="filter">
            <div className="search-icon">
              <img src="/Imgs/icons/location.png" alt="" />
            </div>
            <div className="search-text">
              <h4>Location</h4>
              <h2>Explore nearby </h2>
            </div>
          </div>
          <div className="filter">
            <div className="search-icon">
              <img src="/Imgs/icons/activities.png" alt="" />
            </div>
            <div className="search-text">
              <h4>Activity</h4>
              <h2>All Activities</h2>
            </div>
          </div>
          <div className="filter">
            <div className="search-icon">
              <img src="/Imgs/icons/calendar.png" alt="" />
            </div>
            <div className="search-text">
              <h4>When</h4>
              <h2>Chose a date</h2>
            </div>
          </div>
          <div className="filter">
            <div className="search-icon">
              <img src="./icons/guest.png" alt="guest" />
            </div>
            <div className="search-text">
              <h4>Guests</h4>
              <h2>1 guest</h2>
            </div>
          </div>
        </div>
        <div className="search-button-icon">
          <img src="/Imgs/icons/search.svg" alt="" />
        </div>
      </div>
    </main>
    { /* popular Destinations */ }
    <section className="destinations" id="destinations">
      <div className="container">
        { /* title */ }
        <h2 className="section-title">Popular Destinations</h2>
        { /* cards */ }

        <div className="swiper swiper1">
          <div className="destinations-cards swiper-wrapper">
            { /* card 1 */ }
            <div className="destination-card swiper-slide">
              <img src="https://images.unsplash.com/photo-1581790061118-2cd9a40164b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="" width="203" height="181" />
              <h5>Big sur</h5>
              <h6>Califonia USA</h6>
            </div>
            { /* card 2 */ }
            <div className="destination-card swiper-slide">
              <img src="https://images.unsplash.com/photo-1527824404775-dce343118ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" width="203" height="181" />
              <h5>Prescott</h5>
              <h6>Arizona, USA</h6>
            </div>
            { /* card 3 */ }
            <div className="destination-card swiper-slide">
              <img src="https://images.unsplash.com/photo-1512936702668-1ab037aced2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" width="203" height="181" />
              <h5>Fort Mayers</h5>
              <h6>Florida, USA</h6>
            </div>
            { /* card 4 */ }
            <div className="destination-card swiper-slide">
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80" alt="" width="203" height="181" />
              <h5>Tucson</h5>
              <h6>Arizona, USA</h6>
            </div>
            { /* card 5 */ }
            <div className="destination-card swiper-slide">
              <img src="https://images.unsplash.com/photo-1601425262040-ba23fe84f701?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" width="203" height="181" />
              <h5>St. Joseph</h5>
              <h6>Michigan, USA</h6>
            </div>
            { /* card 6 */ }
            <div className="destination-card swiper-slide">
              <img src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" width="203" height="181" />
              <h5>Madrid</h5>
              <h6>Spain</h6>
            </div>
            { /* card 7 */ }
            <div className="destination-card swiper-slide">
              <img src="https://images.unsplash.com/photo-1542321993-8fc36217e26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" width="203" height="181" />
              <h5>Senja Island</h5>
              <h6>Norway</h6>
            </div>
            { /* card 8 */ }
            <div className="destination-card swiper-slide">
              <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" width="203" height="181" />
              <h5>Eiffel Tower</h5>
              <h6>Paris France</h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    { /* Hotels And Restaurants */ }
    <section className="hotel-restaurants" id="restaurants">
      <div className="container">
        <div className="title-container">
          <h2 className="section-title"> Hotels And Restaurants</h2>
          <div className="section-button hotel-button">view all <img src="/Imgs/icons/bleft.png" alt="" /></div>
        </div>
        { /* cards */ }
        <div className="hotel-card">
          
          { /* card 1 */ }
          <div className="hotel-cards">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" width="320" height="380" />
            <h5>Monastero Santa Rosa Hotel & Spa</h5>
            <h6><img src="/Imgs/icons/map-pin-line.png" alt="" /> Salerno, Italy</h6>
            <div className="ratings"> <img src="/Imgs/icons/rating=5.png" alt="" /></div>
          </div>
          { /* card 2 */ }
          <div className="hotel-cards">
            <img src="https://images.unsplash.com/photo-1586974726316-c6302de6a160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="" width="320" height="380" />
            <h5>Grand Hotel Tremezzo</h5>
            <h6><img src="/Imgs/icons/map-pin-line.png" alt="" /> Lake Como, Italy</h6>
            <div className="ratings"> <img src="/Imgs/icons/rating=4.png" alt="" /></div>
          </div>
          { /* card 3 */ }
          <div className="hotel-cards">
            <img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="" width="320" height="380" />
            <h5>The Oberoi Udaivilas, Udaipur</h5>
            <h6><img src="/Imgs/icons/map-pin-line.png" alt="" /> Udaipur, India</h6>
            <div className="ratings"> <img src="/Imgs/icons/rating=2.png" alt="" /></div>
          </div>
          { /* card 4 */ }
          <div className="hotel-cards">
            <img src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" width="320" height="380" />
            <h5>AKA Beverly Hills</h5>
            <h6><img src="/Imgs/icons/map-pin-line.png" alt="" /> Los Angeles, United States</h6>
            <div className="ratings"> <img src="/Imgs/icons/rating=5.png" alt="" /></div>
          </div>
          { /* card 5 */ }
          <div className="hotel-cards off">
            <img src="https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="" width="320" height="380" />
            <h5>Majestic Elegance</h5>
            <h6><img src="/Imgs/icons/map-pin-line.png" alt="" /> Dominican Republic</h6>
            <div className="ratings"> <img src="/Imgs/icons/rating=4.png" alt="" /></div>
          </div>
          { /* card 6 */ }
          <div className="hotel-cards off">
            <img src="https://images.unsplash.com/photo-1586495985096-787fb4a54ac0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" width="320" height="380" />
            <h5>Dreams Watervilla</h5>
            <h6><img src="/Imgs/icons/map-pin-line.png" alt="" /> Meeru Island, Maldives</h6>
            <div className="ratings"> <img src="/Imgs/icons/rating=5.png" alt="" /></div>
          </div>
          { /* card 7 */ }
          <div className="hotel-cards off">
            <img src="https://images.unsplash.com/photo-1594741158704-5a784b8e59fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" width="320" height="380" />
            <h5> Waldorf Astoria </h5>
            <h6><img src="/Imgs/icons/map-pin-line.png" alt="" />  Rome, Italy</h6>
            <div className="ratings"> <img src="/Imgs/icons/rating=3.png" alt="" /></div>
          </div>
          { /* card 8 */ }
          <div className="hotel-cards off">
            <img src="https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" width="320" height="380" />
            <h5>Gilli Air</h5>
            <h6><img src="/Imgs/icons/map-pin-line.png" alt="" /> Indonesia</h6>
            <div className="ratings"> <img src="/Imgs/icons/rating=4.png" alt="" /></div>
          </div>

        </div>
      </div>
    </section>

    { /* Tours/Travel */ }
    <section id="tours">
      <div className="container">
        <div className="title-container">
          <h2 className="section-title"> Travel Tips and Advice</h2>
          <div className="section-button hotel-button">view all <img src="/Imgs/icons/bleft.png" alt="" /></div>
        </div>
        <div className="tours-cards">

          <div className="tours-card">
            <div className="tour-img">
              <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" width="320" height="380" />
            </div>
            <div className="tours-card-content">
              <div className="tours-card-contents-text">
                <h3>East Village Ice Cream Crawl</h3>
                <p>We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice cream store we'll explore the story behind the business and see what makes the ice cream unique as you savor every…</p>
              </div>
              <div className="tours-card-content-icons">
                <h6><img src="/Imgs/icons/calendersml.png" alt="" /> Today</h6>
                <h6><img src="/Imgs/icons/user.png" alt="" /> Avenger Initiative</h6>
                <h6><img src="/Imgs/icons/message.png" alt="" /> 2</h6>
              </div>
            </div>
          </div>

          <div className="tours-card">
            <div className="tour-img">
              <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" width="320" height="380" />
            </div>
            <div className="tours-card-content">
              <div className="tours-card-contents-text">
                <h3>Brooklyn Bridge cinematic photo walk</h3>
                <p>This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always open to capture clients at different locations upon request for an additional charge. </p>
              </div>
              <div className="tours-card-content-icons">
                <h6><img src="/Imgs/icons/calendersml.png" alt="" /> Today</h6>
                <h6><img src="/Imgs/icons/user.png" alt="" /> Ager Pagla</h6>
                <h6><img src="/Imgs/icons/message.png" alt="" />12</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    { /* activities */ }
    <section id="activities">
      <div className="container">
        <div className="title-container">
          <h2 className="section-title"> Activities</h2>
          <div className="section-button hotel-button">view all <img src="/Imgs/icons/bleft.png" alt="" /></div>
        </div>

        { /* Activities Cards */ }
        <div className="activities-cards">
          <div className="activities-card">
            <img src="https://images.unsplash.com/photo-1513432800008-a900568fccfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" width="320" height="380" />
            <h4>Sailing</h4>
          </div>
          <div className="activities-card">
            <img src="https://images.unsplash.com/photo-1489805549589-3c5ae55fe740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" width="320" height="380" />
            <h4>Climbing</h4>
          </div>
          <div className="activities-card">
            <img src="https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" alt="" width="320" height="380" />
            <h4>Skiing</h4>
          </div>
          <div className="activities-card">
            <img src="https://images.unsplash.com/19/nomad.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1098&q=80" alt="" width="320" height="380" />
            <h4>Hiking</h4>
          </div>
        </div>
      </div>
    </section>

    { /* about */ }
    <section id="About">
      <div className="about-content">
        <h2>About US</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>

         <div className="section-button hotel-button">Read More <img src="/Imgs/icons/bleft.png" alt="" /></div>
      </div>

      <div className="about-img">
        <img src="/Imgs/about img.png" alt="" width="556" height="488" />
      </div>
    </section>

    { /* footer */ }
    <footer>
      <div className="container">
        <div className="footer-sections">
          <div className="footer-section">
            <img src="/Imgs/Logo/logoblack.svg" alt="" />
            <p>We always make our customers happy by providing as many choises as possible</p>
            <div className="footer-social-icons">
              <img src="/Imgs/icons/facebook.png" alt="" />
              <img src="/Imgs/icons/twitter.png" alt="" />
              <img src="/Imgs/icons/instagram.png" alt="" />
            </div>
          </div>

          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Features</a></li>
              <li><a href="">News</a></li>
              <li><a href="">Menu</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="">why 2rism</a></li>
              <li><a href="">Partner with us</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="">Account</a></li>
              <li><a href="">Support Center</a></li>
              <li><a href="">Feedback</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Subscribe on our destination review <br /> newsletters</h3>
            <form>
              <div className="form-section">
                <img src="/Imgs/icons/messagefooter.png" alt="" />
                <label htmlFor="email">  Your Email
                  <input type="email" id="email" name="email" placeholder="exp - abc@gmail.com " />
                </label>
              </div>
              <button type="submit"><img src="/Imgs/icons/arrowleft.png" alt="" /></button>
            </form>
          </div>
        </div>
      </div>
    </footer>

     
    <div className="toggleOn"><i className="uil uil-align-center-alt" /></div>
    <div className="toggleClose"><i className="uil uil-multiply" /></div>
    </>
  )
}

export default Home
  )
}

export default test