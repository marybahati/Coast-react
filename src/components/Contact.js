import React from 'react'

class Contact extends React.Component{
    render() {
      return (
<footer id="footer">
						<section>
							<form method="post" action="#">
								<div className="fields">
									<div className="field">
										<label htmlFor="name">Name</label>
										<input type="text" name="name" id="name" />
									</div>
									<div className="field">
										<label htmlFor="email">Email</label>
										<input type="text" name="email" id="email" />
									</div>
									<div className="field">
										<label htmlFor="message">Message</label>
										<textarea name="message" id="message" rows="3"></textarea>
									</div>
								</div>
								<ul className="actions">
									<li><input type="submit" value="Send Message" /></li>
								</ul>
							</form>
						</section>
						<section className="split contact">
							<section className="alt">
								<h3>Address</h3>
								<p>Savelberg Retreat Center<br />
								Muringa road,Nairobi</p>
							</section>
							<section>
								<h3>Phone</h3>
								<p><a href="#">0728287616</a></p>
							</section>
							<section>
								<h3>Email</h3>
								<p><a href="#">bahatimary745@gmail.com</a></p>
							</section>
							<section>
								
								<ul className="icons alt">
									<li><a href="https://twitter.com/search?q=%23Mombasa&src=typeahead_click" className="icon brands alt fa-twitter">Twitter</a></li>
									<li><a href="https://www.facebook.com/search/top/?q=mombasa%20for%20fun&epa=SEARCH_BOX" className="icon brands alt fa-facebook-f">Facebook</a></li>
									<li><a href="https://www.instagram.com/explore/locations/549296590/mombasa-county/?hl=en" className="icon brands alt fa-instagram">Instagram</a></li>
									
								</ul>
							</section>
						</section>
					</footer>
      )
    }
  }
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
  
  
  export default Contact;