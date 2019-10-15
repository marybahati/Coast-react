import React from 'react'
import Contact from './Contact'

class Content extends React.Component{
    render() {
      return (
        <div id="main">

            <article className="post featured">
                <header className="major">
                    <span className="date">April 12, 2000</span>
                    <h2><a href="#" >Swahili Dishes<br />
                    Fried Crabs</a></h2>
                    <p>This kind of food is usually cooked during festive seasons like<br />
                    Easter, Eid Mubarak and chrismas to celebrate eith family
                    </p>
                </header>
                <a href="http://afrotourism.com/travelogue/9-incredible-meals-you-should-taste-in-mombasa/" className="image main"><img src="https://images.unsplash.com/photo-1569494315581-abddb8d41cfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt="" /></a>
                <ul className="actions special">
                    <li><a href="http://afrotourism.com/travelogue/9-incredible-meals-you-should-taste-in-mombasa/" className="button large">Full Story</a></li>
                </ul>
            </article>

        
            <section className="posts">
                <article>
                    <header>
                        <span className="date">December 25, 2018</span>
                        <h2><a href="#">Chrismas Season<br />
                        beach party</a></h2>
                    </header>
                    <a href="https://images.unsplash.com/photo-1560424730-ec1c186a7573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" className="image fit"><img src="https://images.unsplash.com/photo-1560424730-ec1c186a7573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt="" /></a>
                    <p>During this season families come together to celebrate the birth of jesus, many hold beach parties in a yatch</p>
                    <ul className="actions special">
                        <li><a href="http://mombasadeals.com/diving/" className="button">Full Story</a></li>
                    </ul>
                </article>

                <article>
                    <header>
                        <span className="date">April 18, 2019</span>
                        <h2><a href="#">Easter Season<br />
                        This season most peolpe do sea sports</a></h2>
                    </header>
                    <a href="http://mombasadeals.com/diving/" className="image fit"><img src="https://images.unsplash.com/photo-1558253917-0edb67da60e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt="" /></a>
                    <p>They include Kite Surfing,rowing,kayaking and canoe</p>
                    <ul className="actions special">
                        <li><a href="http://mombasadeals.com/diving/" className="button">Full Story</a></li>
                    </ul>
                </article>

                <article>
                    <header>
                        <span className="date">August 14, 2015</span>
                        <h2><a href="#">Boat Riding<br />
                        Summer Time</a></h2>
                    </header>
                    <a href="https://www.tripadvisor.com/Attraction_Review-g294210-d4473686-Reviews-Deep_Sea_Fishing-Mombasa_Coast_Province.html" className="image fit"><img src="https://images.unsplash.com/photo-1550524587-01b38c780bfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt="" /></a>
                    <p>During this time the waters are calm hence favor swimming and riding boats.This is where fishermen catch many fish</p>
                    <ul className="actions special">
                        <li><a href="https://www.tripadvisor.com/Attraction_Review-g294210-d4473686-Reviews-Deep_Sea_Fishing-Mombasa_Coast_Province.html" className="button">Full Story</a></li>
                    </ul>
                </article>
                
                <article>
                    <header>
                        <span className="date">January 1, 2012</span>
                        <h2><a href="#">New Year<br />
                        celebrating a new year</a></h2>
                    </header>
                    <a href="https://images.unsplash.com/photo-1560424730-ec1c186a7573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" className="image fit"><img src="https://images.unsplash.com/photo-1468546211010-9a842bd2026e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt="" /></a>
                    <p>During this season families come together to celebrate the begining of a new year</p>
                    <ul className="actions special">
                        <li><a href="http://mombasadeals.com/diving/" className="button">Full Story</a></li>
                    </ul>
                </article>
                
            </section>
            <Contact/>


    </div>
      )
    }
  }
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
  
  
  export default Content;