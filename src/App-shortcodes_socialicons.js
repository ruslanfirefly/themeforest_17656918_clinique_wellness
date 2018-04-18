import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/main.css';
import './css/animations.css';
import './css/fonts.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* search modal */}
	<div className="modal" tabindex="-1" role="dialog" aria-labelledby="search_modal" id="search_modal">
		<div className="widget widget_search">
			<form method="get" className="searchform form-inline" action="/">
				<div className="form-group">
					<input type="text" value="" name="search" className="form-control" placeholder="Search keyword" id="modal-search-input"/>
				</div>
				<button type="submit" className="theme_button">Search</button>
			</form>
		</div>
	</div>

	{/* wrappers for visual page editor and boxed version of template */}
	<div id="canvas">
		<div id="box_wrapper">

			{/* template sections */}

			<section className="ls page_toplogo table_section table_section_md columns_padding_0">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-sm-6 text-center text-md-left">
							<span className="small-text">follow with us:</span>
							<div className="page_social_icons inline-block">
								<a className="social-icon soc-facebook theme-icon" href="#" title="Facebook"></a>
								<a className="social-icon soc-twitter theme-icon" href="#" title="Twitter"></a>
								<a className="social-icon soc-google theme-icon" href="#" title="Google"></a>
								<a className="social-icon soc-youtube theme-icon" href="#" title="Youtube"></a>
							</div>
						</div>

						<div className="col-md-4 col-sm-6 text-center text-md-right col-md-push-4">
							<ul className="inline-dropdown inline-block">

								<li className="dropdown login-dropdown">

									<span className="small-text">My account</span>
									<a className="topline-button" id="login" data-target="#" href="./" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
										<i className="rt-icon2-media-play"></i>
									</a>

									<div className="dropdown-menu" aria-labelledby="login">
										<ul className="greylinks no-bullets">
											<li>
												<a href="#">
													<span className="top-button top-button-sign-in"></span>
													<span className="small-text">sign in</span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="top-button top-button-sign-up"></span>
													<span className="small-text">sign up</span>
												</a>
											</li>
										</ul>
									</div>

								</li>
								<li className="dropdown cart-dropdown">

									<a className="topline-button" id="cart" data-target="#" href="./" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
										<span className="top-button top-button-cart"></span>
										<span className="total highlight2 lusitana-bold-up fontsize_18">$
											<span className="amount">1975,00</span>
										</span>
									</a>

								</li>
								<li className="dropdown search-dropdown">
									<a className="topline-button" id="search" data-target="#" href="./" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
										<span className="top-button top-button-search"></span>
									</a>
									<div className="dropdown-menu" aria-labelledby="login">
										<form method="get" className="searchform form-inline bold-placeholder" action="/">
											<div className="form-group">
												<label className="sr-only" for="search-input">Search for:</label>
												<input id="search-input" type="text" value="" name="search" className="form-control" placeholder="Search to site"/>
											</div>
											<button type="submit" className="topline-button">
												<span className="top-button top-button-search"></span>
												<span className="sr-only">Search</span>
											</button>
										</form>
									</div>
								</li>
							</ul>
						</div>

						<div className="col-md-4 col-sm-12 text-center col-md-pull-4">
							<a href="./" className="logo">
								<img src={require("./images/logo.png")} alt="" className="main_bg_color"/>
								<h1>Clinique</h1>
							</a>
						</div>

					</div>
				</div>
			</section>

			<header className="page_header header_bg_image fullwidth_menu columns_padding_0 section_padding_top_60">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 text-center">
							{/* main nav start */}
							<nav className="mainmenu_wrapper">
								<ul className="mainmenu nav sf-menu">
									<li className="active">
										<a href="index.html">Main page</a>
									</li>

									<li>
										<a href="appointment.html">Pages</a>
										<ul>
											{/* features */}
											<li>
												<a href="shortcodes_teasers.html">Shortcodes&amp;Widgets</a>
												<ul>

													<li>
														<a href="shortcodes_teasers.html">Teasers</a>
													</li>
													<li>
														<a href="shortcodes_buttons.html">Buttons</a>
													</li>
													<li>
														<a href="shortcodes_progress.html">Progress</a>
													</li>
													<li>
														<a href="shortcodes_pricing.html">Pricing</a>
													</li>
													<li>
														<a href="shortcodes_socialicons.html">Social Icons</a>
													</li>
													<li>
														<a href="shortcodes_tabs.html">Tabs &amp; Collapse</a>
													</li>
													<li>
														<a href="shortcodes_bootstrap.html">Bootstrap Elements</a>
													</li>
													<li>
														<a href="shortcodes_typography.html">Typography</a>
													</li>
													<li>
														<a href="shortcodes_widgets.html">Widgets</a>
													</li>
													<li>
														<a href="shortcodes_animation.html">Animation</a>
													</li>
													<li>
														<a href="shortcodes_icons.html">Template Icons</a>
													</li>
												</ul>
											</li>
											{/* eof features */}

											{/* header */}
											<li>
												<a href="header1.html">Headers</a>
												<ul>
													<li>
														<a href="header1.html">Header 1</a>
													</li>
													<li>
														<a href="header2.html">Header 2</a>
													</li>
													<li>
														<a href="header3.html">Header 3</a>
													</li>
													<li>
														<a href="header4.html">Header 4</a>
													</li>
													<li>
														<a href="header5.html">Header 5</a>
													</li>
												</ul>
											</li>
											{/* eof header */}

											{/* breadcrumbs */}
											<li>
												<a href="breadcrumbs1.html">Breadcrumbs</a>
												<ul>
													<li>
														<a href="breadcrumbs1.html">Breadcrumbs 1</a>
													</li>
													<li>
														<a href="breadcrumbs2.html">Breadcrumbs 2</a>
													</li>
													<li>
														<a href="breadcrumbs3.html">Breadcrumbs 3</a>
													</li>
													<li>
														<a href="breadcrumbs4.html">Breadcrumbs 4</a>
													</li>
													<li>
														<a href="breadcrumbs5.html">Breadcrumbs 5</a>
													</li>
													<li>
														<a href="breadcrumbs6.html">Breadcrumbs 6</a>
													</li>
												</ul>
											</li>
											{/* eof breadcrumbs */}

											{/* footer */}
											<li>
												<a href="footer1.html">Footer</a>
												<ul>
													<li>
														<a href="footer1.html">Footer 1</a>
													</li>
													<li>
														<a href="footer2.html">Footer 2</a>
													</li>
													<li>
														<a href="footer3.html">Footer 3</a>
													</li>
													<li>
														<a href="footer4.html">Footer 4</a>
													</li>
													<li>
														<a href="footer5.html">Footer 5</a>
													</li>
												</ul>
											</li>
											{/* eof footer */}

											{/* copyright */}
											<li>
												<a href="copyright1.html">Copyright</a>
												<ul>
													<li>
														<a href="copyright1.html">Copyright 1</a>
													</li>
													<li>
														<a href="copyright2.html">Copyright 2</a>
													</li>
													<li>
														<a href="copyright3.html">Copyright 3</a>
													</li>
													<li>
														<a href="copyright4.html">Copyright 4</a>
													</li>
													<li>
														<a href="copyright5.html">Copyright 5</a>
													</li>
												</ul>
											</li>
											{/* eof copyright */}

											<li>
												<a href="appointment.html">Appointment</a>
											</li>

											<li>
												<a href="calculator.html">Calculator</a>
											</li>

											<li>
												<a href="comingsoon1.html">Comingsoon</a>
												<ul>
													<li>
														<a href="comingsoon1.html">Comingsoon</a>
													</li>
													<li>
														<a href="comingsoon2.html">Comingsoon 2</a>
													</li>
												</ul>
											</li>

											<li>
												<a href="timetable.html">Timetable</a>
											</li>
											<li>
												<a href="faq.html">FAQ</a>
												<ul>
													<li>
														<a href="faq.html">FAQ</a>
													</li>
													<li>
														<a href="faq2.html">FAQ 2</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="404.html">404</a>
											</li>

										</ul>
									</li>
									{/* eof pages */}

									{/* about */}
									<li>
										<a href="director.html">About us</a>
										<ul>
											<li>
												<a href="director.html">Director &amp; owner</a>
											</li>
											<li>
												<a href="team.html">Our team</a>
											</li>
											<li>
												<a href="team_member.html">Team member profile</a>
											</li>
											<li>
												<a href="wellness.html">Wellness luxury spa resort</a>
											</li>
										</ul>
									</li>
									{/* eof about */}

									{/* services */}
									<li>
										<a href="services.html">Services</a>
										<ul>
											<li>
												<a href="services.html">Medical spa</a>
											</li>
											<li>
												<a href="services.html">Cosmetic bar</a>
											</li>
											<li>
												<a href="services.html">Hair studio</a>
											</li>
											<li>
												<a href="services.html">Teeth whitening</a>
											</li>
											<li>
												<a href="services.html">Spa revive</a>
											</li>
											<li>
												<a href="services.html">Special Occasions</a>
											</li>
										</ul>
									</li>
									{/* eof services */}

									{/* gallery */}
									<li>
										<a href="gallery-regular.html">Lookbook</a>
										<ul>
											{/* Gallery regular */}
											<li>
												<a href="gallery-regular.html">Grid</a>
												<ul>
													<li>
														<a href="gallery-regular.html">1 column</a>
													</li>
													<li>
														<a href="gallery-regular-2-cols.html">2 columns</a>
													</li>
													<li>
														<a href="gallery-regular-3-cols.html">3 columns</a>
													</li>
													<li>
														<a href="gallery-regular-4-cols.html">4 columns</a>
													</li>
												</ul>
											</li>
											{/* eof Gallery regular */}

											{/* Gallery full width */}
											<li>
												<a href="gallery-fullwidth.html">Gobbles</a>
												<ul>
													<li>
														<a href="gallery-fullwidth.html">2 column</a>
													</li>
													<li>
														<a href="gallery-fullwidth-3-cols.html">3 columns</a>
													</li>
													<li>
														<a href="gallery-fullwidth-4-cols.html">4 columns</a>
													</li>
												</ul>
											</li>
											{/* eof Gallery full width */}

											{/* Gallery extended */}
											<li>
												<a href="gallery-extended.html">Masonry</a>
												<ul>
													<li>
														<a href="gallery-extended.html">1 column</a>
													</li>
													<li>
														<a href="gallery-extended-2-cols.html">2 columns</a>
													</li>
													<li>
														<a href="gallery-extended-3-cols.html">3 columns</a>
													</li>
												</ul>
											</li>
											{/* eof Gallery extended */}

											{/* Gallery carousel */}
											<li>
												<a href="gallery-carousel.html">Carousel</a>
												<ul>
													<li>
														<a href="gallery-carousel.html">1 column</a>
													</li>
													<li>
														<a href="gallery-carousel-2-cols.html">2 columns</a>
													</li>
													<li>
														<a href="gallery-carousel-3-cols.html">3 columns</a>
													</li>
												</ul>
											</li>
											{/* eof Gallery carousel */}

											{/* Gallery tile */}
											<li>
												<a href="gallery-tile.html">Tile</a>
											</li>
											{/* eof Gallery tile */}

											{/* Gallery left sidebar */}
											<li>
												<a href="gallery-left.html">Left Sidebar</a>
												<ul>
													<li>
														<a href="gallery-left.html">1 column</a>
													</li>
													<li>
														<a href="gallery-left-2-cols.html">2 columns</a>
													</li>
												</ul>
											</li>
											{/* eof Gallery left sidebar */}

											{/* Gallery right sidebar */}
											<li>
												<a href="gallery-right.html">Right Sidebar</a>
												<ul>
													<li>
														<a href="gallery-right.html">1 column</a>
													</li>
													<li>
														<a href="gallery-right-2-cols.html">2 columns</a>
													</li>
												</ul>
											</li>
											{/* eof Gallery right sidebar */}

											{/* Gallery item */}
											<li>
												<a href="gallery-single.html">Item</a>
											</li>
											{/* eof Gallery item */}
										</ul>
									</li>
									{/* eof Gallery */}

									{/* blog */}
									<li>
										<a href="blog-right.html">Our blog</a>
										<ul>

											<li>
												<a href="blog-right.html">Right Sidebar</a>
											</li>
											<li>
												<a href="blog-left.html">Left Sidebar</a>
											</li>
											<li>
												<a href="blog-full.html">No Sidebar</a>
											</li>

											<li>
												<a href="blog-single-right.html">Post</a>
												<ul>
													<li>
														<a href="blog-single-right.html">Right Sidebar</a>
													</li>
													<li>
														<a href="blog-single-left.html">Left Sidebar</a>
													</li>
													<li>
														<a href="blog-single-full.html">No Sidebar</a>
													</li>
												</ul>
											</li>

											<li>
												<a href="blog-single-video-right.html">Video Post</a>
												<ul>
													<li>
														<a href="blog-single-video-right.html">Right Sidebar</a>
													</li>
													<li>
														<a href="blog-single-video-left.html">Left Sidebar</a>
													</li>
													<li>
														<a href="blog-single-video-full.html">No Sidebar</a>
													</li>
												</ul>
											</li>

										</ul>
									</li>
									{/* eof blog */}

									{/* contacts */}
									<li>
										<a href="contact.html">Contact</a>
										<ul>
											<li>
												<a href="contact.html">Contact 1</a>
											</li>
											<li>
												<a href="contact2.html">Contact 2</a>
											</li>
											<li>
												<a href="contact3.html">Contact 3</a>
											</li>
										</ul>
									</li>
									{/* eof contacts */}

									{/* shop */}
									<li>
										<a href="shop.html">Shop</a>
										<ul>
											<li>
												<a href="shop.html">Shop</a>
											</li>
											<li>
												<a href="product-right.html">Single Product</a>
											</li>
											<li>
												<a href="cart-right.html">Shopping Cart</a>
											</li>
											<li>
												<a href="checkout-right.html">Checkout</a>
											</li>
											<li>
												<a href="register.html">Registration</a>
											</li>
										</ul>
									</li>
									{/* eof shop */}

								</ul>
							</nav>
							{/* eof main nav */}
							<span className="toggle_menu">
								<span></span>
							</span>
						</div>
					</div>
				</div>
			</header>

			<section className="page_breadcrumbs cs section_padding_20 columns_padding_0 table_section">
				<div className="container">
					<div className="row">
						<div className="col-sm-4 text-center text-sm-left">
							<ol className="breadcrumb">
								<li>
									<a href="./">
										Main page
									</a>
								</li>
								<li>
									<a href="#">Features</a>
								</li>
								<li className="active">Social Buttons</li>
							</ol>
						</div>
						<div className="col-sm-4 text-center">
							<h1 className="highlight bold">Social Buttons</h1>
						</div>
						<div className="col-sm-4 hidden-xs"></div>
					</div>
				</div>
			</section>


			<section className="ls ms section_padding_50">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 text-center">

							<h2 className="section_header">New Icons</h2>

							<p>

								Social icons font:
								<a href="http://www.socicon.com" target="_blank" title="the social icons font">socicon</a>

							</p>

							<div className="demo-icon">
								<span className="name">Twitter</span>
								<span className="class-name">.soc-twitter</span>
								<a href="#" className="social-icon soc-twitter"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Facebook</span>
								<span className="class-name">.soc-facebook</span>
								<a href="#" className="social-icon soc-facebook"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Google+</span>
								<span className="class-name">.soc-google</span>
								<a href="#" className="social-icon soc-google"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Pinterest</span>
								<span className="class-name">.soc-pinterest</span>
								<a href="#" className="social-icon soc-pinterest"></a>
							</div>
							<div className="demo-icon">
								<span className="name">foursquare</span>
								<span className="class-name">.soc-foursquare</span>
								<a href="#" className="social-icon soc-foursquare"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Yahoo!</span>
								<span className="class-name">.soc-yahoo</span>
								<a href="#" className="social-icon soc-yahoo"></a>
							</div>
							<div className="demo-icon">
								<span className="name">skype</span>
								<span className="class-name">.soc-skype</span>
								<a href="#" className="social-icon soc-skype"></a>
							</div>
							<div className="demo-icon">
								<span className="name">yelp</span>
								<span className="class-name">.soc-yelp</span>
								<a href="#" className="social-icon soc-yelp"></a>
							</div>
							<div className="demo-icon">
								<span className="name">FeedBurner</span>
								<span className="class-name">.soc-feedburner</span>
								<a href="#" className="social-icon soc-feedburner"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Linkedin</span>
								<span className="class-name">.soc-linkedin</span>
								<a href="#" className="social-icon soc-linkedin"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Viadeo</span>
								<span className="class-name">.soc-viadeo</span>
								<a href="#" className="social-icon soc-viadeo"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Xing</span>
								<span className="class-name">.soc-xing</span>
								<a href="#" className="social-icon soc-xing"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Myspace</span>
								<span className="class-name">.soc-myspace</span>
								<a href="#" className="social-icon soc-myspace"></a>
							</div>
							<div className="demo-icon">
								<span className="name">soundcloud</span>
								<span className="class-name">.soc-soundcloud</span>
								<a href="#" className="social-icon soc-soundcloud"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Spotify</span>
								<span className="class-name">.soc-spotify</span>
								<a href="#" className="social-icon soc-spotify"></a>
							</div>
							<div className="demo-icon">
								<span className="name">grooveshark</span>
								<span className="class-name">.soc-grooveshark</span>
								<a href="#" className="social-icon soc-grooveshark"></a>
							</div>
							<div className="demo-icon">
								<span className="name">last.fm</span>
								<span className="class-name">.soc-lastfm</span>
								<a href="#" className="social-icon soc-lastfm"></a>
							</div>
							<div className="demo-icon">
								<span className="name">YouTube</span>
								<span className="class-name">.soc-youtube</span>
								<a href="#" className="social-icon soc-youtube"></a>
							</div>
							<div className="demo-icon">
								<span className="name">vimeo</span>
								<span className="class-name">.soc-vimeo</span>
								<a href="#" className="social-icon soc-vimeo"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Dailymotion</span>
								<span className="class-name">.soc-dailymotion</span>
								<a href="#" className="social-icon soc-dailymotion"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Vine</span>
								<span className="class-name">.soc-vine</span>
								<a href="#" className="social-icon soc-vine"></a>
							</div>
							<div className="demo-icon">
								<span className="name">flickr</span>
								<span className="class-name">.soc-flickr</span>
								<a href="#" className="social-icon soc-flickr"></a>
							</div>
							<div className="demo-icon">
								<span className="name">500px</span>
								<span className="class-name">.soc-500px</span>
								<a href="#" className="social-icon soc-500px"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Instagram</span>
								<span className="class-name">.soc-instagram</span>
								<a href="#" className="social-icon soc-instagram"></a>
							</div>
							<div className="demo-icon">
								<span className="name">WordPress</span>
								<span className="class-name">.soc-wordpress</span>
								<a href="#" className="social-icon soc-wordpress"></a>
							</div>
							<div className="demo-icon">
								<span className="name">tumblr</span>
								<span className="class-name">.soc-tumblr</span>
								<a href="#" className="social-icon soc-tumblr"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Blogger</span>
								<span className="class-name">.soc-blogger</span>
								<a href="#" className="social-icon soc-blogger"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Technorati</span>
								<span className="class-name">.soc-technorati</span>
								<a href="#" className="social-icon soc-technorati"></a>
							</div>
							<div className="demo-icon">
								<span className="name">reddit</span>
								<span className="class-name">.soc-reddit</span>
								<a href="#" className="social-icon soc-reddit"></a>
							</div>
							<div className="demo-icon">
								<span className="name">dribbble</span>
								<span className="class-name">.soc-dribbble</span>
								<a href="#" className="social-icon soc-dribbble"></a>
							</div>
							<div className="demo-icon">
								<span className="name">StumbleUpon</span>
								<span className="class-name">.soc-stumbleupon</span>
								<a href="#" className="social-icon soc-stumbleupon"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Digg</span>
								<span className="class-name">.soc-digg</span>
								<a href="#" className="social-icon soc-digg"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Envato</span>
								<span className="class-name">.soc-envato</span>
								<a href="#" className="social-icon soc-envato"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Behance</span>
								<span className="class-name">.soc-behance</span>
								<a href="#" className="social-icon soc-behance"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Delicious</span>
								<span className="class-name">.soc-delicious</span>
								<a href="#" className="social-icon soc-delicious"></a>
							</div>
							<div className="demo-icon">
								<span className="name">deviantART</span>
								<span className="class-name">.soc-deviantart</span>
								<a href="#" className="social-icon soc-deviantart"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Forrst</span>
								<span className="class-name">.soc-forrst</span>
								<a href="#" className="social-icon soc-forrst"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Play Store</span>
								<span className="class-name">.soc-play</span>
								<a href="#" className="social-icon soc-play"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Zerply</span>
								<span className="class-name">.soc-zerply</span>
								<a href="#" className="social-icon soc-zerply"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Wikipedia</span>
								<span className="class-name">.soc-wikipedia</span>
								<a href="#" className="social-icon soc-wikipedia"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Apple</span>
								<span className="class-name">.soc-apple</span>
								<a href="#" className="social-icon soc-apple"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Flattr</span>
								<span className="class-name">.soc-flattr</span>
								<a href="#" className="social-icon soc-flattr"></a>
							</div>
							<div className="demo-icon">
								<span className="name">GitHub</span>
								<span className="class-name">.soc-github</span>
								<a href="#" className="social-icon soc-github"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Chime.in</span>
								<span className="class-name">.soc-chimein</span>
								<a href="#" className="social-icon soc-chimein"></a>
							</div>
							<div className="demo-icon">
								<span className="name">FriendFeed</span>
								<span className="class-name">.soc-friendfeed</span>
								<a href="#" className="social-icon soc-friendfeed"></a>
							</div>
							<div className="demo-icon">
								<span className="name">NewsVine</span>
								<span className="class-name">.soc-newsvine</span>
								<a href="#" className="social-icon soc-newsvine"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Identica</span>
								<span className="class-name">.soc-identica</span>
								<a href="#" className="social-icon soc-identica"></a>
							</div>
							<div className="demo-icon">
								<span className="name">bebo</span>
								<span className="class-name">.soc-bebo</span>
								<a href="#" className="social-icon soc-bebo"></a>
							</div>
							<div className="demo-icon">
								<span className="name">zynga</span>
								<span className="class-name">.soc-zynga</span>
								<a href="#" className="social-icon soc-zynga"></a>
							</div>
							<div className="demo-icon">
								<span className="name">steam</span>
								<span className="class-name">.soc-steam</span>
								<a href="#" className="social-icon soc-steam"></a>
							</div>
							<div className="demo-icon">
								<span className="name">XBOX</span>
								<span className="class-name">.soc-xbox</span>
								<a href="#" className="social-icon soc-xbox"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Windows</span>
								<span className="class-name">.soc-windows</span>
								<a href="#" className="social-icon soc-windows"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Outlook</span>
								<span className="class-name">.soc-outlook</span>
								<a href="#" className="social-icon soc-outlook"></a>
							</div>
							<div className="demo-icon">
								<span className="name">coderwall</span>
								<span className="class-name">.soc-coderwall</span>
								<a href="#" className="social-icon soc-coderwall"></a>
							</div>
							<div className="demo-icon">
								<span className="name">tripadvisor</span>
								<span className="class-name">.soc-tripadvisor</span>
								<a href="#" className="social-icon soc-tripadvisor"></a>
							</div>
							<div className="demo-icon">
								<span className="name">App.net</span>
								<span className="class-name">.soc-appnet</span>
								<a href="#" className="social-icon soc-appnet"></a>
							</div>
							<div className="demo-icon">
								<span className="name">goodreads</span>
								<span className="class-name">.soc-goodreads</span>
								<a href="#" className="social-icon soc-goodreads"></a>
							</div>
							<div className="demo-icon">
								<span className="name">TripIt</span>
								<span className="class-name">.soc-tripit</span>
								<a href="#" className="social-icon soc-tripit"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Lanyrd</span>
								<span className="class-name">.soc-lanyrd</span>
								<a href="#" className="social-icon soc-lanyrd"></a>
							</div>
							<div className="demo-icon">
								<span className="name">SlideShare</span>
								<span className="class-name">.soc-slideshare</span>
								<a href="#" className="social-icon soc-slideshare"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Buffer</span>
								<span className="class-name">.soc-buffer</span>
								<a href="#" className="social-icon soc-buffer"></a>
							</div>
							<div className="demo-icon">
								<span className="name">RSS</span>
								<span className="class-name">.soc-rss</span>
								<a href="#" className="social-icon soc-rss"></a>
							</div>
							<div className="demo-icon">
								<span className="name">VKontakte</span>
								<span className="class-name">.soc-vkontakte</span>
								<a href="#" className="social-icon soc-vkontakte"></a>
							</div>
							<div className="demo-icon">
								<span className="name">DISQUS</span>
								<span className="class-name">.soc-disqus</span>
								<a href="#" className="social-icon soc-disqus"></a>
							</div>
							<div className="demo-icon">
								<span className="name">houzz</span>
								<span className="class-name">.soc-houzz</span>
								<a href="#" className="social-icon soc-houzz"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Mail</span>
								<span className="class-name">.soc-mail</span>
								<a href="#" className="social-icon soc-mail"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Patreon</span>
								<span className="class-name">.soc-patreon</span>
								<a href="#" className="social-icon soc-patreon"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Paypal</span>
								<span className="class-name">.soc-paypal</span>
								<a href="#" className="social-icon soc-paypal"></a>
							</div>
							<div className="demo-icon">
								<span className="name">PlayStation</span>
								<span className="class-name">.soc-playstation</span>
								<a href="#" className="social-icon soc-playstation"></a>
							</div>
							<div className="demo-icon">
								<span className="name">SmugMug</span>
								<span className="class-name">.soc-smugmug</span>
								<a href="#" className="social-icon soc-smugmug"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Swarm</span>
								<span className="class-name">.soc-swarm</span>
								<a href="#" className="social-icon soc-swarm"></a>
							</div>
							<div className="demo-icon">
								<span className="name">triplej</span>
								<span className="class-name">.soc-triplej</span>
								<a href="#" className="social-icon soc-triplej"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Yammer</span>
								<span className="class-name">.soc-yammer</span>
								<a href="#" className="social-icon soc-yammer"></a>
							</div>
							<div className="demo-icon">
								<span className="name">stackoverflow</span>
								<span className="class-name">.soc-stackoverflow</span>
								<a href="#" className="social-icon soc-stackoverflow"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Drupal</span>
								<span className="class-name">.soc-drupal</span>
								<a href="#" className="social-icon soc-drupal"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Odnoklassniki</span>
								<span className="class-name">.soc-odnoklassniki</span>
								<a href="#" className="social-icon soc-odnoklassniki"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Android</span>
								<span className="class-name">.soc-android</span>
								<a href="#" className="social-icon soc-android"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Meetup</span>
								<span className="class-name">.soc-meetup</span>
								<a href="#" className="social-icon soc-meetup"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Mozilla Persona</span>
								<span className="class-name">.soc-persona</span>
								<a href="#" className="social-icon soc-persona"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Amazon</span>
								<span className="class-name">.soc-amazon</span>
								<a href="#" className="social-icon soc-amazon"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Ello</span>
								<span className="class-name">.soc-ello</span>
								<a href="#" className="social-icon soc-ello"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Mixcloud</span>
								<span className="class-name">.soc-mixcloud</span>
								<a href="#" className="social-icon soc-mixcloud"></a>
							</div>
							<div className="demo-icon">
								<span className="name">8tracks</span>
								<span className="class-name">.soc-8tracks</span>
								<a href="#" className="social-icon soc-8tracks"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Twitch</span>
								<span className="class-name">.soc-twitch</span>
								<a href="#" className="social-icon soc-twitch"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Airbnb</span>
								<span className="class-name">.soc-airbnb</span>
								<a href="#" className="social-icon soc-airbnb"></a>
							</div>
							<div className="demo-icon">
								<span className="name">Pocket</span>
								<span className="class-name">.soc-pocket</span>
								<a href="#" className="social-icon soc-pocket"></a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<hr className="margin_0"/>


			<section className="ls social-icons-demo section_padding_100">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2>
								Simple Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons1" aria-expanded="false" aria-controls="collapseIcons1">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon soc-twitter"></a>
							<a href="#" className="social-icon soc-facebook"></a>
							<a href="#" className="social-icon soc-google"></a>
							<a href="#" className="social-icon soc-pinterest"></a>
							<a href="#" className="social-icon soc-foursquare"></a>
							<a href="#" className="social-icon soc-yahoo"></a>
							<a href="#" className="social-icon soc-skype"></a>
							<a href="#" className="social-icon soc-yelp"></a>
							<a href="#" className="social-icon soc-feedburner"></a>
							<a href="#" className="social-icon soc-linkedin"></a>
							<a href="#" className="social-icon soc-viadeo"></a>
							<a href="#" className="social-icon soc-xing"></a>
							<a href="#" className="social-icon soc-myspace"></a>
							<a href="#" className="social-icon soc-soundcloud"></a>
							<a href="#" className="social-icon soc-spotify"></a>
							<a href="#" className="social-icon soc-grooveshark"></a>
							<a href="#" className="social-icon soc-lastfm"></a>
							<a href="#" className="social-icon soc-youtube"></a>
							<a href="#" className="social-icon soc-vimeo"></a>
							<a href="#" className="social-icon soc-dailymotion"></a>
							<a href="#" className="social-icon soc-vine"></a>
							<a href="#" className="social-icon soc-flickr"></a>
							<a href="#" className="social-icon soc-500px"></a>
							<a href="#" className="social-icon soc-instagram"></a>
							<a href="#" className="social-icon soc-wordpress"></a>
							<a href="#" className="social-icon soc-tumblr"></a>
							<a href="#" className="social-icon soc-blogger"></a>

							<div className="collapse" id="collapseIcons1">
								<a href="#" className="social-icon soc-technorati"></a>
								<a href="#" className="social-icon soc-reddit"></a>
								<a href="#" className="social-icon soc-dribbble"></a>
								<a href="#" className="social-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon soc-digg"></a>
								<a href="#" className="social-icon soc-envato"></a>
								<a href="#" className="social-icon soc-behance"></a>
								<a href="#" className="social-icon soc-delicious"></a>
								<a href="#" className="social-icon soc-deviantart"></a>
								<a href="#" className="social-icon soc-forrst"></a>
								<a href="#" className="social-icon soc-play"></a>
								<a href="#" className="social-icon soc-zerply"></a>
								<a href="#" className="social-icon soc-wikipedia"></a>
								<a href="#" className="social-icon soc-apple"></a>
								<a href="#" className="social-icon soc-flattr"></a>
								<a href="#" className="social-icon soc-github"></a>
								<a href="#" className="social-icon soc-chimein"></a>
								<a href="#" className="social-icon soc-friendfeed"></a>
								<a href="#" className="social-icon soc-newsvine"></a>
								<a href="#" className="social-icon soc-identica"></a>
								<a href="#" className="social-icon soc-bebo"></a>
								<a href="#" className="social-icon soc-zynga"></a>
								<a href="#" className="social-icon soc-steam"></a>
								<a href="#" className="social-icon soc-xbox"></a>
								<a href="#" className="social-icon soc-windows"></a>
								<a href="#" className="social-icon soc-outlook"></a>
								<a href="#" className="social-icon soc-coderwall"></a>
								<a href="#" className="social-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon soc-appnet"></a>
								<a href="#" className="social-icon soc-goodreads"></a>
								<a href="#" className="social-icon soc-tripit"></a>
								<a href="#" className="social-icon soc-lanyrd"></a>
								<a href="#" className="social-icon soc-slideshare"></a>
								<a href="#" className="social-icon soc-buffer"></a>
								<a href="#" className="social-icon soc-rss"></a>
								<a href="#" className="social-icon soc-vkontakte"></a>
								<a href="#" className="social-icon soc-disqus"></a>
								<a href="#" className="social-icon soc-houzz"></a>
								<a href="#" className="social-icon soc-mail"></a>
								<a href="#" className="social-icon soc-patreon"></a>
								<a href="#" className="social-icon soc-paypal"></a>
								<a href="#" className="social-icon soc-playstation"></a>
								<a href="#" className="social-icon soc-smugmug"></a>
								<a href="#" className="social-icon soc-swarm"></a>
								<a href="#" className="social-icon soc-triplej"></a>
								<a href="#" className="social-icon soc-yammer"></a>
								<a href="#" className="social-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon soc-drupal"></a>
								<a href="#" className="social-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon soc-android"></a>
								<a href="#" className="social-icon soc-meetup"></a>
								<a href="#" className="social-icon soc-persona"></a>
								<a href="#" className="social-icon soc-amazon"></a>
								<a href="#" className="social-icon soc-ello"></a>
								<a href="#" className="social-icon soc-mixcloud"></a>
								<a href="#" className="social-icon soc-8tracks"></a>
								<a href="#" className="social-icon soc-twitch"></a>
								<a href="#" className="social-icon soc-airbnb"></a>
								<a href="#" className="social-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Simple Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons2" aria-expanded="false" aria-controls="collapseIcons2">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon border-icon soc-twitter"></a>
							<a href="#" className="social-icon border-icon soc-facebook"></a>
							<a href="#" className="social-icon border-icon soc-google"></a>
							<a href="#" className="social-icon border-icon soc-pinterest"></a>
							<a href="#" className="social-icon border-icon soc-foursquare"></a>
							<a href="#" className="social-icon border-icon soc-yahoo"></a>
							<a href="#" className="social-icon border-icon soc-skype"></a>
							<a href="#" className="social-icon border-icon soc-yelp"></a>
							<a href="#" className="social-icon border-icon soc-feedburner"></a>
							<a href="#" className="social-icon border-icon soc-linkedin"></a>
							<a href="#" className="social-icon border-icon soc-viadeo"></a>
							<a href="#" className="social-icon border-icon soc-xing"></a>
							<a href="#" className="social-icon border-icon soc-myspace"></a>
							<a href="#" className="social-icon border-icon soc-soundcloud"></a>
							<a href="#" className="social-icon border-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons2">
								<a href="#" className="social-icon border-icon soc-grooveshark"></a>
								<a href="#" className="social-icon border-icon soc-lastfm"></a>
								<a href="#" className="social-icon border-icon soc-youtube"></a>
								<a href="#" className="social-icon border-icon soc-vimeo"></a>
								<a href="#" className="social-icon border-icon soc-dailymotion"></a>
								<a href="#" className="social-icon border-icon soc-vine"></a>
								<a href="#" className="social-icon border-icon soc-flickr"></a>
								<a href="#" className="social-icon border-icon soc-500px"></a>
								<a href="#" className="social-icon border-icon soc-instagram"></a>
								<a href="#" className="social-icon border-icon soc-wordpress"></a>
								<a href="#" className="social-icon border-icon soc-tumblr"></a>
								<a href="#" className="social-icon border-icon soc-blogger"></a>
								<a href="#" className="social-icon border-icon soc-technorati"></a>
								<a href="#" className="social-icon border-icon soc-reddit"></a>
								<a href="#" className="social-icon border-icon soc-dribbble"></a>
								<a href="#" className="social-icon border-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon border-icon soc-digg"></a>
								<a href="#" className="social-icon border-icon soc-envato"></a>
								<a href="#" className="social-icon border-icon soc-behance"></a>
								<a href="#" className="social-icon border-icon soc-delicious"></a>
								<a href="#" className="social-icon border-icon soc-deviantart"></a>
								<a href="#" className="social-icon border-icon soc-forrst"></a>
								<a href="#" className="social-icon border-icon soc-play"></a>
								<a href="#" className="social-icon border-icon soc-zerply"></a>
								<a href="#" className="social-icon border-icon soc-wikipedia"></a>
								<a href="#" className="social-icon border-icon soc-apple"></a>
								<a href="#" className="social-icon border-icon soc-flattr"></a>
								<a href="#" className="social-icon border-icon soc-github"></a>
								<a href="#" className="social-icon border-icon soc-chimein"></a>
								<a href="#" className="social-icon border-icon soc-friendfeed"></a>
								<a href="#" className="social-icon border-icon soc-newsvine"></a>
								<a href="#" className="social-icon border-icon soc-identica"></a>
								<a href="#" className="social-icon border-icon soc-bebo"></a>
								<a href="#" className="social-icon border-icon soc-zynga"></a>
								<a href="#" className="social-icon border-icon soc-steam"></a>
								<a href="#" className="social-icon border-icon soc-xbox"></a>
								<a href="#" className="social-icon border-icon soc-windows"></a>
								<a href="#" className="social-icon border-icon soc-outlook"></a>
								<a href="#" className="social-icon border-icon soc-coderwall"></a>
								<a href="#" className="social-icon border-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon border-icon soc-appnet"></a>
								<a href="#" className="social-icon border-icon soc-goodreads"></a>
								<a href="#" className="social-icon border-icon soc-tripit"></a>
								<a href="#" className="social-icon border-icon soc-lanyrd"></a>
								<a href="#" className="social-icon border-icon soc-slideshare"></a>
								<a href="#" className="social-icon border-icon soc-buffer"></a>
								<a href="#" className="social-icon border-icon soc-rss"></a>
								<a href="#" className="social-icon border-icon soc-vkontakte"></a>
								<a href="#" className="social-icon border-icon soc-disqus"></a>
								<a href="#" className="social-icon border-icon soc-houzz"></a>
								<a href="#" className="social-icon border-icon soc-mail"></a>
								<a href="#" className="social-icon border-icon soc-patreon"></a>
								<a href="#" className="social-icon border-icon soc-paypal"></a>
								<a href="#" className="social-icon border-icon soc-playstation"></a>
								<a href="#" className="social-icon border-icon soc-smugmug"></a>
								<a href="#" className="social-icon border-icon soc-swarm"></a>
								<a href="#" className="social-icon border-icon soc-triplej"></a>
								<a href="#" className="social-icon border-icon soc-yammer"></a>
								<a href="#" className="social-icon border-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon border-icon soc-drupal"></a>
								<a href="#" className="social-icon border-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon border-icon soc-android"></a>
								<a href="#" className="social-icon border-icon soc-meetup"></a>
								<a href="#" className="social-icon border-icon soc-persona"></a>
								<a href="#" className="social-icon border-icon soc-amazon"></a>
								<a href="#" className="social-icon border-icon soc-ello"></a>
								<a href="#" className="social-icon border-icon soc-mixcloud"></a>
								<a href="#" className="social-icon border-icon soc-8tracks"></a>
								<a href="#" className="social-icon border-icon soc-twitch"></a>
								<a href="#" className="social-icon border-icon soc-airbnb"></a>
								<a href="#" className="social-icon border-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Rounded Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons3" aria-expanded="false" aria-controls="collapseIcons3">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon border-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons3">
								<a href="#" className="social-icon border-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Simple Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons4" aria-expanded="false" aria-controls="collapseIcons4">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon bg-icon soc-twitter"></a>
							<a href="#" className="social-icon bg-icon soc-facebook"></a>
							<a href="#" className="social-icon bg-icon soc-google"></a>
							<a href="#" className="social-icon bg-icon soc-pinterest"></a>
							<a href="#" className="social-icon bg-icon soc-foursquare"></a>
							<a href="#" className="social-icon bg-icon soc-yahoo"></a>
							<a href="#" className="social-icon bg-icon soc-skype"></a>
							<a href="#" className="social-icon bg-icon soc-yelp"></a>
							<a href="#" className="social-icon bg-icon soc-feedburner"></a>
							<a href="#" className="social-icon bg-icon soc-linkedin"></a>
							<a href="#" className="social-icon bg-icon soc-viadeo"></a>
							<a href="#" className="social-icon bg-icon soc-xing"></a>
							<a href="#" className="social-icon bg-icon soc-myspace"></a>
							<a href="#" className="social-icon bg-icon soc-soundcloud"></a>
							<a href="#" className="social-icon bg-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons4">
								<a href="#" className="social-icon bg-icon soc-grooveshark"></a>
								<a href="#" className="social-icon bg-icon soc-lastfm"></a>
								<a href="#" className="social-icon bg-icon soc-youtube"></a>
								<a href="#" className="social-icon bg-icon soc-vimeo"></a>
								<a href="#" className="social-icon bg-icon soc-dailymotion"></a>
								<a href="#" className="social-icon bg-icon soc-vine"></a>
								<a href="#" className="social-icon bg-icon soc-flickr"></a>
								<a href="#" className="social-icon bg-icon soc-500px"></a>
								<a href="#" className="social-icon bg-icon soc-instagram"></a>
								<a href="#" className="social-icon bg-icon soc-wordpress"></a>
								<a href="#" className="social-icon bg-icon soc-tumblr"></a>
								<a href="#" className="social-icon bg-icon soc-blogger"></a>
								<a href="#" className="social-icon bg-icon soc-technorati"></a>
								<a href="#" className="social-icon bg-icon soc-reddit"></a>
								<a href="#" className="social-icon bg-icon soc-dribbble"></a>
								<a href="#" className="social-icon bg-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon bg-icon soc-digg"></a>
								<a href="#" className="social-icon bg-icon soc-envato"></a>
								<a href="#" className="social-icon bg-icon soc-behance"></a>
								<a href="#" className="social-icon bg-icon soc-delicious"></a>
								<a href="#" className="social-icon bg-icon soc-deviantart"></a>
								<a href="#" className="social-icon bg-icon soc-forrst"></a>
								<a href="#" className="social-icon bg-icon soc-play"></a>
								<a href="#" className="social-icon bg-icon soc-zerply"></a>
								<a href="#" className="social-icon bg-icon soc-wikipedia"></a>
								<a href="#" className="social-icon bg-icon soc-apple"></a>
								<a href="#" className="social-icon bg-icon soc-flattr"></a>
								<a href="#" className="social-icon bg-icon soc-github"></a>
								<a href="#" className="social-icon bg-icon soc-chimein"></a>
								<a href="#" className="social-icon bg-icon soc-friendfeed"></a>
								<a href="#" className="social-icon bg-icon soc-newsvine"></a>
								<a href="#" className="social-icon bg-icon soc-identica"></a>
								<a href="#" className="social-icon bg-icon soc-bebo"></a>
								<a href="#" className="social-icon bg-icon soc-zynga"></a>
								<a href="#" className="social-icon bg-icon soc-steam"></a>
								<a href="#" className="social-icon bg-icon soc-xbox"></a>
								<a href="#" className="social-icon bg-icon soc-windows"></a>
								<a href="#" className="social-icon bg-icon soc-outlook"></a>
								<a href="#" className="social-icon bg-icon soc-coderwall"></a>
								<a href="#" className="social-icon bg-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon bg-icon soc-appnet"></a>
								<a href="#" className="social-icon bg-icon soc-goodreads"></a>
								<a href="#" className="social-icon bg-icon soc-tripit"></a>
								<a href="#" className="social-icon bg-icon soc-lanyrd"></a>
								<a href="#" className="social-icon bg-icon soc-slideshare"></a>
								<a href="#" className="social-icon bg-icon soc-buffer"></a>
								<a href="#" className="social-icon bg-icon soc-rss"></a>
								<a href="#" className="social-icon bg-icon soc-vkontakte"></a>
								<a href="#" className="social-icon bg-icon soc-disqus"></a>
								<a href="#" className="social-icon bg-icon soc-houzz"></a>
								<a href="#" className="social-icon bg-icon soc-mail"></a>
								<a href="#" className="social-icon bg-icon soc-patreon"></a>
								<a href="#" className="social-icon bg-icon soc-paypal"></a>
								<a href="#" className="social-icon bg-icon soc-playstation"></a>
								<a href="#" className="social-icon bg-icon soc-smugmug"></a>
								<a href="#" className="social-icon bg-icon soc-swarm"></a>
								<a href="#" className="social-icon bg-icon soc-triplej"></a>
								<a href="#" className="social-icon bg-icon soc-yammer"></a>
								<a href="#" className="social-icon bg-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon bg-icon soc-drupal"></a>
								<a href="#" className="social-icon bg-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon bg-icon soc-android"></a>
								<a href="#" className="social-icon bg-icon soc-meetup"></a>
								<a href="#" className="social-icon bg-icon soc-persona"></a>
								<a href="#" className="social-icon bg-icon soc-amazon"></a>
								<a href="#" className="social-icon bg-icon soc-ello"></a>
								<a href="#" className="social-icon bg-icon soc-mixcloud"></a>
								<a href="#" className="social-icon bg-icon soc-8tracks"></a>
								<a href="#" className="social-icon bg-icon soc-twitch"></a>
								<a href="#" className="social-icon bg-icon soc-airbnb"></a>
								<a href="#" className="social-icon bg-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Rounded Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons5" aria-expanded="false" aria-controls="collapseIcons5">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon bg-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons5">
								<a href="#" className="social-icon bg-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Light Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons6" aria-expanded="false" aria-controls="collapseIcons6">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon bg-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-google"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons6">
								<a href="#" className="social-icon color-icon bg-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-play"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-github"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-android"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Light Background Rounded Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons7" aria-expanded="false" aria-controls="collapseIcons7">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons7">
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons8" aria-expanded="false" aria-controls="collapseIcons8">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon soc-google"></a>
							<a href="#" className="social-icon color-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon soc-spotify"></a>
							<a href="#" className="social-icon color-icon soc-grooveshark"></a>
							<a href="#" className="social-icon color-icon soc-lastfm"></a>
							<a href="#" className="social-icon color-icon soc-youtube"></a>
							<a href="#" className="social-icon color-icon soc-vimeo"></a>
							<a href="#" className="social-icon color-icon soc-dailymotion"></a>
							<a href="#" className="social-icon color-icon soc-vine"></a>
							<a href="#" className="social-icon color-icon soc-flickr"></a>
							<a href="#" className="social-icon color-icon soc-500px"></a>
							<a href="#" className="social-icon color-icon soc-instagram"></a>
							<a href="#" className="social-icon color-icon soc-wordpress"></a>
							<a href="#" className="social-icon color-icon soc-tumblr"></a>
							<a href="#" className="social-icon color-icon soc-blogger"></a>

							<div className="collapse" id="collapseIcons8">
								<a href="#" className="social-icon color-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon soc-play"></a>
								<a href="#" className="social-icon color-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon soc-github"></a>
								<a href="#" className="social-icon color-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon soc-android"></a>
								<a href="#" className="social-icon color-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons9" aria-expanded="false" aria-controls="collapseIcons9">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon border-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon border-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon border-icon soc-google"></a>
							<a href="#" className="social-icon color-icon border-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon border-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon border-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon border-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon border-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon border-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon border-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon border-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon border-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon border-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon border-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon border-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons9">
								<a href="#" className="social-icon color-icon border-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon border-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon border-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon border-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon border-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon border-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon border-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon border-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon border-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon border-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon border-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon border-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon border-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon border-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon border-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon border-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon border-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon border-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon border-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon border-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon border-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon border-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon border-icon soc-play"></a>
								<a href="#" className="social-icon color-icon border-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon border-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon border-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon border-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon border-icon soc-github"></a>
								<a href="#" className="social-icon color-icon border-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon border-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon border-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon border-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon border-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon border-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon border-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon border-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon border-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon border-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon border-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon border-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon border-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon border-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon border-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon border-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon border-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon border-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon border-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon border-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon border-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon border-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon border-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon border-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon border-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon border-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon border-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon border-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon border-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon border-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon border-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon border-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon border-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon border-icon soc-android"></a>
								<a href="#" className="social-icon color-icon border-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon border-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon border-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon border-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon border-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon border-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon border-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon border-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon border-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Round Color Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons10" aria-expanded="false" aria-controls="collapseIcons10">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons10">
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons11" aria-expanded="false" aria-controls="collapseIcons11">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-bg-icon soc-twitter"></a>
							<a href="#" className="social-icon color-bg-icon soc-facebook"></a>
							<a href="#" className="social-icon color-bg-icon soc-google"></a>
							<a href="#" className="social-icon color-bg-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-bg-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-bg-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-bg-icon soc-skype"></a>
							<a href="#" className="social-icon color-bg-icon soc-yelp"></a>
							<a href="#" className="social-icon color-bg-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-bg-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-bg-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-bg-icon soc-xing"></a>
							<a href="#" className="social-icon color-bg-icon soc-myspace"></a>
							<a href="#" className="social-icon color-bg-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-bg-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons11">
								<a href="#" className="social-icon color-bg-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-bg-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-bg-icon soc-youtube"></a>
								<a href="#" className="social-icon color-bg-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-bg-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-bg-icon soc-vine"></a>
								<a href="#" className="social-icon color-bg-icon soc-flickr"></a>
								<a href="#" className="social-icon color-bg-icon soc-500px"></a>
								<a href="#" className="social-icon color-bg-icon soc-instagram"></a>
								<a href="#" className="social-icon color-bg-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-bg-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-bg-icon soc-blogger"></a>
								<a href="#" className="social-icon color-bg-icon soc-technorati"></a>
								<a href="#" className="social-icon color-bg-icon soc-reddit"></a>
								<a href="#" className="social-icon color-bg-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-bg-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-bg-icon soc-digg"></a>
								<a href="#" className="social-icon color-bg-icon soc-envato"></a>
								<a href="#" className="social-icon color-bg-icon soc-behance"></a>
								<a href="#" className="social-icon color-bg-icon soc-delicious"></a>
								<a href="#" className="social-icon color-bg-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-bg-icon soc-forrst"></a>
								<a href="#" className="social-icon color-bg-icon soc-play"></a>
								<a href="#" className="social-icon color-bg-icon soc-zerply"></a>
								<a href="#" className="social-icon color-bg-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-bg-icon soc-apple"></a>
								<a href="#" className="social-icon color-bg-icon soc-flattr"></a>
								<a href="#" className="social-icon color-bg-icon soc-github"></a>
								<a href="#" className="social-icon color-bg-icon soc-chimein"></a>
								<a href="#" className="social-icon color-bg-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-bg-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-bg-icon soc-identica"></a>
								<a href="#" className="social-icon color-bg-icon soc-bebo"></a>
								<a href="#" className="social-icon color-bg-icon soc-zynga"></a>
								<a href="#" className="social-icon color-bg-icon soc-steam"></a>
								<a href="#" className="social-icon color-bg-icon soc-xbox"></a>
								<a href="#" className="social-icon color-bg-icon soc-windows"></a>
								<a href="#" className="social-icon color-bg-icon soc-outlook"></a>
								<a href="#" className="social-icon color-bg-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-bg-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-bg-icon soc-appnet"></a>
								<a href="#" className="social-icon color-bg-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-bg-icon soc-tripit"></a>
								<a href="#" className="social-icon color-bg-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-bg-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-bg-icon soc-buffer"></a>
								<a href="#" className="social-icon color-bg-icon soc-rss"></a>
								<a href="#" className="social-icon color-bg-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-bg-icon soc-disqus"></a>
								<a href="#" className="social-icon color-bg-icon soc-houzz"></a>
								<a href="#" className="social-icon color-bg-icon soc-mail"></a>
								<a href="#" className="social-icon color-bg-icon soc-patreon"></a>
								<a href="#" className="social-icon color-bg-icon soc-paypal"></a>
								<a href="#" className="social-icon color-bg-icon soc-playstation"></a>
								<a href="#" className="social-icon color-bg-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-bg-icon soc-swarm"></a>
								<a href="#" className="social-icon color-bg-icon soc-triplej"></a>
								<a href="#" className="social-icon color-bg-icon soc-yammer"></a>
								<a href="#" className="social-icon color-bg-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-bg-icon soc-drupal"></a>
								<a href="#" className="social-icon color-bg-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-bg-icon soc-android"></a>
								<a href="#" className="social-icon color-bg-icon soc-meetup"></a>
								<a href="#" className="social-icon color-bg-icon soc-persona"></a>
								<a href="#" className="social-icon color-bg-icon soc-amazon"></a>
								<a href="#" className="social-icon color-bg-icon soc-ello"></a>
								<a href="#" className="social-icon color-bg-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-bg-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-bg-icon soc-twitch"></a>
								<a href="#" className="social-icon color-bg-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-bg-icon soc-pocket"></a>
							</div>
						</div>


						<div className="col-sm-12">
							<h2>
								Round Color Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons12" aria-expanded="false" aria-controls="collapseIcons12">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons12">
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-pocket"></a>
							</div>
						</div>


					</div>
				</div>
			</section>


			<section className="ls ms social-icons-demo section_padding_100">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2>
								Simple Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons13" aria-expanded="false" aria-controls="collapseIcons13">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon soc-twitter"></a>
							<a href="#" className="social-icon soc-facebook"></a>
							<a href="#" className="social-icon soc-google"></a>
							<a href="#" className="social-icon soc-pinterest"></a>
							<a href="#" className="social-icon soc-foursquare"></a>
							<a href="#" className="social-icon soc-yahoo"></a>
							<a href="#" className="social-icon soc-skype"></a>
							<a href="#" className="social-icon soc-yelp"></a>
							<a href="#" className="social-icon soc-feedburner"></a>
							<a href="#" className="social-icon soc-linkedin"></a>
							<a href="#" className="social-icon soc-viadeo"></a>
							<a href="#" className="social-icon soc-xing"></a>
							<a href="#" className="social-icon soc-myspace"></a>
							<a href="#" className="social-icon soc-soundcloud"></a>
							<a href="#" className="social-icon soc-spotify"></a>
							<a href="#" className="social-icon soc-grooveshark"></a>
							<a href="#" className="social-icon soc-lastfm"></a>
							<a href="#" className="social-icon soc-youtube"></a>
							<a href="#" className="social-icon soc-vimeo"></a>
							<a href="#" className="social-icon soc-dailymotion"></a>
							<a href="#" className="social-icon soc-vine"></a>
							<a href="#" className="social-icon soc-flickr"></a>
							<a href="#" className="social-icon soc-500px"></a>
							<a href="#" className="social-icon soc-instagram"></a>
							<a href="#" className="social-icon soc-wordpress"></a>
							<a href="#" className="social-icon soc-tumblr"></a>
							<a href="#" className="social-icon soc-blogger"></a>

							<div className="collapse" id="collapseIcons13">
								<a href="#" className="social-icon soc-technorati"></a>
								<a href="#" className="social-icon soc-reddit"></a>
								<a href="#" className="social-icon soc-dribbble"></a>
								<a href="#" className="social-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon soc-digg"></a>
								<a href="#" className="social-icon soc-envato"></a>
								<a href="#" className="social-icon soc-behance"></a>
								<a href="#" className="social-icon soc-delicious"></a>
								<a href="#" className="social-icon soc-deviantart"></a>
								<a href="#" className="social-icon soc-forrst"></a>
								<a href="#" className="social-icon soc-play"></a>
								<a href="#" className="social-icon soc-zerply"></a>
								<a href="#" className="social-icon soc-wikipedia"></a>
								<a href="#" className="social-icon soc-apple"></a>
								<a href="#" className="social-icon soc-flattr"></a>
								<a href="#" className="social-icon soc-github"></a>
								<a href="#" className="social-icon soc-chimein"></a>
								<a href="#" className="social-icon soc-friendfeed"></a>
								<a href="#" className="social-icon soc-newsvine"></a>
								<a href="#" className="social-icon soc-identica"></a>
								<a href="#" className="social-icon soc-bebo"></a>
								<a href="#" className="social-icon soc-zynga"></a>
								<a href="#" className="social-icon soc-steam"></a>
								<a href="#" className="social-icon soc-xbox"></a>
								<a href="#" className="social-icon soc-windows"></a>
								<a href="#" className="social-icon soc-outlook"></a>
								<a href="#" className="social-icon soc-coderwall"></a>
								<a href="#" className="social-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon soc-appnet"></a>
								<a href="#" className="social-icon soc-goodreads"></a>
								<a href="#" className="social-icon soc-tripit"></a>
								<a href="#" className="social-icon soc-lanyrd"></a>
								<a href="#" className="social-icon soc-slideshare"></a>
								<a href="#" className="social-icon soc-buffer"></a>
								<a href="#" className="social-icon soc-rss"></a>
								<a href="#" className="social-icon soc-vkontakte"></a>
								<a href="#" className="social-icon soc-disqus"></a>
								<a href="#" className="social-icon soc-houzz"></a>
								<a href="#" className="social-icon soc-mail"></a>
								<a href="#" className="social-icon soc-patreon"></a>
								<a href="#" className="social-icon soc-paypal"></a>
								<a href="#" className="social-icon soc-playstation"></a>
								<a href="#" className="social-icon soc-smugmug"></a>
								<a href="#" className="social-icon soc-swarm"></a>
								<a href="#" className="social-icon soc-triplej"></a>
								<a href="#" className="social-icon soc-yammer"></a>
								<a href="#" className="social-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon soc-drupal"></a>
								<a href="#" className="social-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon soc-android"></a>
								<a href="#" className="social-icon soc-meetup"></a>
								<a href="#" className="social-icon soc-persona"></a>
								<a href="#" className="social-icon soc-amazon"></a>
								<a href="#" className="social-icon soc-ello"></a>
								<a href="#" className="social-icon soc-mixcloud"></a>
								<a href="#" className="social-icon soc-8tracks"></a>
								<a href="#" className="social-icon soc-twitch"></a>
								<a href="#" className="social-icon soc-airbnb"></a>
								<a href="#" className="social-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Simple Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons14" aria-expanded="false" aria-controls="collapseIcons14">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon border-icon soc-twitter"></a>
							<a href="#" className="social-icon border-icon soc-facebook"></a>
							<a href="#" className="social-icon border-icon soc-google"></a>
							<a href="#" className="social-icon border-icon soc-pinterest"></a>
							<a href="#" className="social-icon border-icon soc-foursquare"></a>
							<a href="#" className="social-icon border-icon soc-yahoo"></a>
							<a href="#" className="social-icon border-icon soc-skype"></a>
							<a href="#" className="social-icon border-icon soc-yelp"></a>
							<a href="#" className="social-icon border-icon soc-feedburner"></a>
							<a href="#" className="social-icon border-icon soc-linkedin"></a>
							<a href="#" className="social-icon border-icon soc-viadeo"></a>
							<a href="#" className="social-icon border-icon soc-xing"></a>
							<a href="#" className="social-icon border-icon soc-myspace"></a>
							<a href="#" className="social-icon border-icon soc-soundcloud"></a>
							<a href="#" className="social-icon border-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons14">
								<a href="#" className="social-icon border-icon soc-grooveshark"></a>
								<a href="#" className="social-icon border-icon soc-lastfm"></a>
								<a href="#" className="social-icon border-icon soc-youtube"></a>
								<a href="#" className="social-icon border-icon soc-vimeo"></a>
								<a href="#" className="social-icon border-icon soc-dailymotion"></a>
								<a href="#" className="social-icon border-icon soc-vine"></a>
								<a href="#" className="social-icon border-icon soc-flickr"></a>
								<a href="#" className="social-icon border-icon soc-500px"></a>
								<a href="#" className="social-icon border-icon soc-instagram"></a>
								<a href="#" className="social-icon border-icon soc-wordpress"></a>
								<a href="#" className="social-icon border-icon soc-tumblr"></a>
								<a href="#" className="social-icon border-icon soc-blogger"></a>
								<a href="#" className="social-icon border-icon soc-technorati"></a>
								<a href="#" className="social-icon border-icon soc-reddit"></a>
								<a href="#" className="social-icon border-icon soc-dribbble"></a>
								<a href="#" className="social-icon border-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon border-icon soc-digg"></a>
								<a href="#" className="social-icon border-icon soc-envato"></a>
								<a href="#" className="social-icon border-icon soc-behance"></a>
								<a href="#" className="social-icon border-icon soc-delicious"></a>
								<a href="#" className="social-icon border-icon soc-deviantart"></a>
								<a href="#" className="social-icon border-icon soc-forrst"></a>
								<a href="#" className="social-icon border-icon soc-play"></a>
								<a href="#" className="social-icon border-icon soc-zerply"></a>
								<a href="#" className="social-icon border-icon soc-wikipedia"></a>
								<a href="#" className="social-icon border-icon soc-apple"></a>
								<a href="#" className="social-icon border-icon soc-flattr"></a>
								<a href="#" className="social-icon border-icon soc-github"></a>
								<a href="#" className="social-icon border-icon soc-chimein"></a>
								<a href="#" className="social-icon border-icon soc-friendfeed"></a>
								<a href="#" className="social-icon border-icon soc-newsvine"></a>
								<a href="#" className="social-icon border-icon soc-identica"></a>
								<a href="#" className="social-icon border-icon soc-bebo"></a>
								<a href="#" className="social-icon border-icon soc-zynga"></a>
								<a href="#" className="social-icon border-icon soc-steam"></a>
								<a href="#" className="social-icon border-icon soc-xbox"></a>
								<a href="#" className="social-icon border-icon soc-windows"></a>
								<a href="#" className="social-icon border-icon soc-outlook"></a>
								<a href="#" className="social-icon border-icon soc-coderwall"></a>
								<a href="#" className="social-icon border-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon border-icon soc-appnet"></a>
								<a href="#" className="social-icon border-icon soc-goodreads"></a>
								<a href="#" className="social-icon border-icon soc-tripit"></a>
								<a href="#" className="social-icon border-icon soc-lanyrd"></a>
								<a href="#" className="social-icon border-icon soc-slideshare"></a>
								<a href="#" className="social-icon border-icon soc-buffer"></a>
								<a href="#" className="social-icon border-icon soc-rss"></a>
								<a href="#" className="social-icon border-icon soc-vkontakte"></a>
								<a href="#" className="social-icon border-icon soc-disqus"></a>
								<a href="#" className="social-icon border-icon soc-houzz"></a>
								<a href="#" className="social-icon border-icon soc-mail"></a>
								<a href="#" className="social-icon border-icon soc-patreon"></a>
								<a href="#" className="social-icon border-icon soc-paypal"></a>
								<a href="#" className="social-icon border-icon soc-playstation"></a>
								<a href="#" className="social-icon border-icon soc-smugmug"></a>
								<a href="#" className="social-icon border-icon soc-swarm"></a>
								<a href="#" className="social-icon border-icon soc-triplej"></a>
								<a href="#" className="social-icon border-icon soc-yammer"></a>
								<a href="#" className="social-icon border-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon border-icon soc-drupal"></a>
								<a href="#" className="social-icon border-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon border-icon soc-android"></a>
								<a href="#" className="social-icon border-icon soc-meetup"></a>
								<a href="#" className="social-icon border-icon soc-persona"></a>
								<a href="#" className="social-icon border-icon soc-amazon"></a>
								<a href="#" className="social-icon border-icon soc-ello"></a>
								<a href="#" className="social-icon border-icon soc-mixcloud"></a>
								<a href="#" className="social-icon border-icon soc-8tracks"></a>
								<a href="#" className="social-icon border-icon soc-twitch"></a>
								<a href="#" className="social-icon border-icon soc-airbnb"></a>
								<a href="#" className="social-icon border-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Rounded Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons15" aria-expanded="false" aria-controls="collapseIcons15">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon border-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons15">
								<a href="#" className="social-icon border-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Simple Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons16" aria-expanded="false" aria-controls="collapseIcons16">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon bg-icon soc-twitter"></a>
							<a href="#" className="social-icon bg-icon soc-facebook"></a>
							<a href="#" className="social-icon bg-icon soc-google"></a>
							<a href="#" className="social-icon bg-icon soc-pinterest"></a>
							<a href="#" className="social-icon bg-icon soc-foursquare"></a>
							<a href="#" className="social-icon bg-icon soc-yahoo"></a>
							<a href="#" className="social-icon bg-icon soc-skype"></a>
							<a href="#" className="social-icon bg-icon soc-yelp"></a>
							<a href="#" className="social-icon bg-icon soc-feedburner"></a>
							<a href="#" className="social-icon bg-icon soc-linkedin"></a>
							<a href="#" className="social-icon bg-icon soc-viadeo"></a>
							<a href="#" className="social-icon bg-icon soc-xing"></a>
							<a href="#" className="social-icon bg-icon soc-myspace"></a>
							<a href="#" className="social-icon bg-icon soc-soundcloud"></a>
							<a href="#" className="social-icon bg-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons16">
								<a href="#" className="social-icon bg-icon soc-grooveshark"></a>
								<a href="#" className="social-icon bg-icon soc-lastfm"></a>
								<a href="#" className="social-icon bg-icon soc-youtube"></a>
								<a href="#" className="social-icon bg-icon soc-vimeo"></a>
								<a href="#" className="social-icon bg-icon soc-dailymotion"></a>
								<a href="#" className="social-icon bg-icon soc-vine"></a>
								<a href="#" className="social-icon bg-icon soc-flickr"></a>
								<a href="#" className="social-icon bg-icon soc-500px"></a>
								<a href="#" className="social-icon bg-icon soc-instagram"></a>
								<a href="#" className="social-icon bg-icon soc-wordpress"></a>
								<a href="#" className="social-icon bg-icon soc-tumblr"></a>
								<a href="#" className="social-icon bg-icon soc-blogger"></a>
								<a href="#" className="social-icon bg-icon soc-technorati"></a>
								<a href="#" className="social-icon bg-icon soc-reddit"></a>
								<a href="#" className="social-icon bg-icon soc-dribbble"></a>
								<a href="#" className="social-icon bg-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon bg-icon soc-digg"></a>
								<a href="#" className="social-icon bg-icon soc-envato"></a>
								<a href="#" className="social-icon bg-icon soc-behance"></a>
								<a href="#" className="social-icon bg-icon soc-delicious"></a>
								<a href="#" className="social-icon bg-icon soc-deviantart"></a>
								<a href="#" className="social-icon bg-icon soc-forrst"></a>
								<a href="#" className="social-icon bg-icon soc-play"></a>
								<a href="#" className="social-icon bg-icon soc-zerply"></a>
								<a href="#" className="social-icon bg-icon soc-wikipedia"></a>
								<a href="#" className="social-icon bg-icon soc-apple"></a>
								<a href="#" className="social-icon bg-icon soc-flattr"></a>
								<a href="#" className="social-icon bg-icon soc-github"></a>
								<a href="#" className="social-icon bg-icon soc-chimein"></a>
								<a href="#" className="social-icon bg-icon soc-friendfeed"></a>
								<a href="#" className="social-icon bg-icon soc-newsvine"></a>
								<a href="#" className="social-icon bg-icon soc-identica"></a>
								<a href="#" className="social-icon bg-icon soc-bebo"></a>
								<a href="#" className="social-icon bg-icon soc-zynga"></a>
								<a href="#" className="social-icon bg-icon soc-steam"></a>
								<a href="#" className="social-icon bg-icon soc-xbox"></a>
								<a href="#" className="social-icon bg-icon soc-windows"></a>
								<a href="#" className="social-icon bg-icon soc-outlook"></a>
								<a href="#" className="social-icon bg-icon soc-coderwall"></a>
								<a href="#" className="social-icon bg-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon bg-icon soc-appnet"></a>
								<a href="#" className="social-icon bg-icon soc-goodreads"></a>
								<a href="#" className="social-icon bg-icon soc-tripit"></a>
								<a href="#" className="social-icon bg-icon soc-lanyrd"></a>
								<a href="#" className="social-icon bg-icon soc-slideshare"></a>
								<a href="#" className="social-icon bg-icon soc-buffer"></a>
								<a href="#" className="social-icon bg-icon soc-rss"></a>
								<a href="#" className="social-icon bg-icon soc-vkontakte"></a>
								<a href="#" className="social-icon bg-icon soc-disqus"></a>
								<a href="#" className="social-icon bg-icon soc-houzz"></a>
								<a href="#" className="social-icon bg-icon soc-mail"></a>
								<a href="#" className="social-icon bg-icon soc-patreon"></a>
								<a href="#" className="social-icon bg-icon soc-paypal"></a>
								<a href="#" className="social-icon bg-icon soc-playstation"></a>
								<a href="#" className="social-icon bg-icon soc-smugmug"></a>
								<a href="#" className="social-icon bg-icon soc-swarm"></a>
								<a href="#" className="social-icon bg-icon soc-triplej"></a>
								<a href="#" className="social-icon bg-icon soc-yammer"></a>
								<a href="#" className="social-icon bg-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon bg-icon soc-drupal"></a>
								<a href="#" className="social-icon bg-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon bg-icon soc-android"></a>
								<a href="#" className="social-icon bg-icon soc-meetup"></a>
								<a href="#" className="social-icon bg-icon soc-persona"></a>
								<a href="#" className="social-icon bg-icon soc-amazon"></a>
								<a href="#" className="social-icon bg-icon soc-ello"></a>
								<a href="#" className="social-icon bg-icon soc-mixcloud"></a>
								<a href="#" className="social-icon bg-icon soc-8tracks"></a>
								<a href="#" className="social-icon bg-icon soc-twitch"></a>
								<a href="#" className="social-icon bg-icon soc-airbnb"></a>
								<a href="#" className="social-icon bg-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Rounded Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons17" aria-expanded="false" aria-controls="collapseIcons17">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon bg-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons17">
								<a href="#" className="social-icon bg-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Light Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons18" aria-expanded="false" aria-controls="collapseIcons18">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon bg-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-google"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons18">
								<a href="#" className="social-icon color-icon bg-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-play"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-github"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-android"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Light Background Rounded Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons19" aria-expanded="false" aria-controls="collapseIcons19">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons19">
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons20" aria-expanded="false" aria-controls="collapseIcons20">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon soc-google"></a>
							<a href="#" className="social-icon color-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon soc-spotify"></a>
							<a href="#" className="social-icon color-icon soc-grooveshark"></a>
							<a href="#" className="social-icon color-icon soc-lastfm"></a>
							<a href="#" className="social-icon color-icon soc-youtube"></a>
							<a href="#" className="social-icon color-icon soc-vimeo"></a>
							<a href="#" className="social-icon color-icon soc-dailymotion"></a>
							<a href="#" className="social-icon color-icon soc-vine"></a>
							<a href="#" className="social-icon color-icon soc-flickr"></a>
							<a href="#" className="social-icon color-icon soc-500px"></a>
							<a href="#" className="social-icon color-icon soc-instagram"></a>
							<a href="#" className="social-icon color-icon soc-wordpress"></a>
							<a href="#" className="social-icon color-icon soc-tumblr"></a>
							<a href="#" className="social-icon color-icon soc-blogger"></a>

							<div className="collapse" id="collapseIcons20">
								<a href="#" className="social-icon color-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon soc-play"></a>
								<a href="#" className="social-icon color-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon soc-github"></a>
								<a href="#" className="social-icon color-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon soc-android"></a>
								<a href="#" className="social-icon color-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons21" aria-expanded="false" aria-controls="collapseIcons21">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon border-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon border-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon border-icon soc-google"></a>
							<a href="#" className="social-icon color-icon border-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon border-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon border-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon border-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon border-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon border-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon border-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon border-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon border-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon border-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon border-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon border-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons21">
								<a href="#" className="social-icon color-icon border-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon border-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon border-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon border-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon border-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon border-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon border-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon border-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon border-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon border-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon border-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon border-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon border-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon border-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon border-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon border-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon border-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon border-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon border-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon border-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon border-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon border-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon border-icon soc-play"></a>
								<a href="#" className="social-icon color-icon border-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon border-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon border-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon border-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon border-icon soc-github"></a>
								<a href="#" className="social-icon color-icon border-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon border-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon border-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon border-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon border-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon border-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon border-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon border-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon border-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon border-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon border-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon border-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon border-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon border-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon border-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon border-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon border-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon border-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon border-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon border-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon border-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon border-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon border-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon border-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon border-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon border-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon border-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon border-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon border-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon border-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon border-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon border-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon border-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon border-icon soc-android"></a>
								<a href="#" className="social-icon color-icon border-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon border-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon border-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon border-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon border-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon border-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon border-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon border-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon border-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Round Color Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons22" aria-expanded="false" aria-controls="collapseIcons22">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons22">
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons23" aria-expanded="false" aria-controls="collapseIcons23">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-bg-icon soc-twitter"></a>
							<a href="#" className="social-icon color-bg-icon soc-facebook"></a>
							<a href="#" className="social-icon color-bg-icon soc-google"></a>
							<a href="#" className="social-icon color-bg-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-bg-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-bg-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-bg-icon soc-skype"></a>
							<a href="#" className="social-icon color-bg-icon soc-yelp"></a>
							<a href="#" className="social-icon color-bg-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-bg-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-bg-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-bg-icon soc-xing"></a>
							<a href="#" className="social-icon color-bg-icon soc-myspace"></a>
							<a href="#" className="social-icon color-bg-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-bg-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons23">
								<a href="#" className="social-icon color-bg-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-bg-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-bg-icon soc-youtube"></a>
								<a href="#" className="social-icon color-bg-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-bg-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-bg-icon soc-vine"></a>
								<a href="#" className="social-icon color-bg-icon soc-flickr"></a>
								<a href="#" className="social-icon color-bg-icon soc-500px"></a>
								<a href="#" className="social-icon color-bg-icon soc-instagram"></a>
								<a href="#" className="social-icon color-bg-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-bg-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-bg-icon soc-blogger"></a>
								<a href="#" className="social-icon color-bg-icon soc-technorati"></a>
								<a href="#" className="social-icon color-bg-icon soc-reddit"></a>
								<a href="#" className="social-icon color-bg-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-bg-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-bg-icon soc-digg"></a>
								<a href="#" className="social-icon color-bg-icon soc-envato"></a>
								<a href="#" className="social-icon color-bg-icon soc-behance"></a>
								<a href="#" className="social-icon color-bg-icon soc-delicious"></a>
								<a href="#" className="social-icon color-bg-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-bg-icon soc-forrst"></a>
								<a href="#" className="social-icon color-bg-icon soc-play"></a>
								<a href="#" className="social-icon color-bg-icon soc-zerply"></a>
								<a href="#" className="social-icon color-bg-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-bg-icon soc-apple"></a>
								<a href="#" className="social-icon color-bg-icon soc-flattr"></a>
								<a href="#" className="social-icon color-bg-icon soc-github"></a>
								<a href="#" className="social-icon color-bg-icon soc-chimein"></a>
								<a href="#" className="social-icon color-bg-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-bg-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-bg-icon soc-identica"></a>
								<a href="#" className="social-icon color-bg-icon soc-bebo"></a>
								<a href="#" className="social-icon color-bg-icon soc-zynga"></a>
								<a href="#" className="social-icon color-bg-icon soc-steam"></a>
								<a href="#" className="social-icon color-bg-icon soc-xbox"></a>
								<a href="#" className="social-icon color-bg-icon soc-windows"></a>
								<a href="#" className="social-icon color-bg-icon soc-outlook"></a>
								<a href="#" className="social-icon color-bg-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-bg-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-bg-icon soc-appnet"></a>
								<a href="#" className="social-icon color-bg-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-bg-icon soc-tripit"></a>
								<a href="#" className="social-icon color-bg-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-bg-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-bg-icon soc-buffer"></a>
								<a href="#" className="social-icon color-bg-icon soc-rss"></a>
								<a href="#" className="social-icon color-bg-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-bg-icon soc-disqus"></a>
								<a href="#" className="social-icon color-bg-icon soc-houzz"></a>
								<a href="#" className="social-icon color-bg-icon soc-mail"></a>
								<a href="#" className="social-icon color-bg-icon soc-patreon"></a>
								<a href="#" className="social-icon color-bg-icon soc-paypal"></a>
								<a href="#" className="social-icon color-bg-icon soc-playstation"></a>
								<a href="#" className="social-icon color-bg-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-bg-icon soc-swarm"></a>
								<a href="#" className="social-icon color-bg-icon soc-triplej"></a>
								<a href="#" className="social-icon color-bg-icon soc-yammer"></a>
								<a href="#" className="social-icon color-bg-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-bg-icon soc-drupal"></a>
								<a href="#" className="social-icon color-bg-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-bg-icon soc-android"></a>
								<a href="#" className="social-icon color-bg-icon soc-meetup"></a>
								<a href="#" className="social-icon color-bg-icon soc-persona"></a>
								<a href="#" className="social-icon color-bg-icon soc-amazon"></a>
								<a href="#" className="social-icon color-bg-icon soc-ello"></a>
								<a href="#" className="social-icon color-bg-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-bg-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-bg-icon soc-twitch"></a>
								<a href="#" className="social-icon color-bg-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-bg-icon soc-pocket"></a>
							</div>
						</div>


						<div className="col-sm-12">
							<h2>
								Round Color Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons24" aria-expanded="false" aria-controls="collapseIcons24">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons24">
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-pocket"></a>
							</div>
						</div>


					</div>
				</div>
			</section>

			<section className="cs social-icons-demo section_padding_100">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2>
								Simple Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons25" aria-expanded="false" aria-controls="collapseIcons25">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon soc-twitter"></a>
							<a href="#" className="social-icon soc-facebook"></a>
							<a href="#" className="social-icon soc-google"></a>
							<a href="#" className="social-icon soc-pinterest"></a>
							<a href="#" className="social-icon soc-foursquare"></a>
							<a href="#" className="social-icon soc-yahoo"></a>
							<a href="#" className="social-icon soc-skype"></a>
							<a href="#" className="social-icon soc-yelp"></a>
							<a href="#" className="social-icon soc-feedburner"></a>
							<a href="#" className="social-icon soc-linkedin"></a>
							<a href="#" className="social-icon soc-viadeo"></a>
							<a href="#" className="social-icon soc-xing"></a>
							<a href="#" className="social-icon soc-myspace"></a>
							<a href="#" className="social-icon soc-soundcloud"></a>
							<a href="#" className="social-icon soc-spotify"></a>
							<a href="#" className="social-icon soc-grooveshark"></a>
							<a href="#" className="social-icon soc-lastfm"></a>
							<a href="#" className="social-icon soc-youtube"></a>
							<a href="#" className="social-icon soc-vimeo"></a>
							<a href="#" className="social-icon soc-dailymotion"></a>
							<a href="#" className="social-icon soc-vine"></a>
							<a href="#" className="social-icon soc-flickr"></a>
							<a href="#" className="social-icon soc-500px"></a>
							<a href="#" className="social-icon soc-instagram"></a>
							<a href="#" className="social-icon soc-wordpress"></a>
							<a href="#" className="social-icon soc-tumblr"></a>
							<a href="#" className="social-icon soc-blogger"></a>

							<div className="collapse" id="collapseIcons25">
								<a href="#" className="social-icon soc-technorati"></a>
								<a href="#" className="social-icon soc-reddit"></a>
								<a href="#" className="social-icon soc-dribbble"></a>
								<a href="#" className="social-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon soc-digg"></a>
								<a href="#" className="social-icon soc-envato"></a>
								<a href="#" className="social-icon soc-behance"></a>
								<a href="#" className="social-icon soc-delicious"></a>
								<a href="#" className="social-icon soc-deviantart"></a>
								<a href="#" className="social-icon soc-forrst"></a>
								<a href="#" className="social-icon soc-play"></a>
								<a href="#" className="social-icon soc-zerply"></a>
								<a href="#" className="social-icon soc-wikipedia"></a>
								<a href="#" className="social-icon soc-apple"></a>
								<a href="#" className="social-icon soc-flattr"></a>
								<a href="#" className="social-icon soc-github"></a>
								<a href="#" className="social-icon soc-chimein"></a>
								<a href="#" className="social-icon soc-friendfeed"></a>
								<a href="#" className="social-icon soc-newsvine"></a>
								<a href="#" className="social-icon soc-identica"></a>
								<a href="#" className="social-icon soc-bebo"></a>
								<a href="#" className="social-icon soc-zynga"></a>
								<a href="#" className="social-icon soc-steam"></a>
								<a href="#" className="social-icon soc-xbox"></a>
								<a href="#" className="social-icon soc-windows"></a>
								<a href="#" className="social-icon soc-outlook"></a>
								<a href="#" className="social-icon soc-coderwall"></a>
								<a href="#" className="social-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon soc-appnet"></a>
								<a href="#" className="social-icon soc-goodreads"></a>
								<a href="#" className="social-icon soc-tripit"></a>
								<a href="#" className="social-icon soc-lanyrd"></a>
								<a href="#" className="social-icon soc-slideshare"></a>
								<a href="#" className="social-icon soc-buffer"></a>
								<a href="#" className="social-icon soc-rss"></a>
								<a href="#" className="social-icon soc-vkontakte"></a>
								<a href="#" className="social-icon soc-disqus"></a>
								<a href="#" className="social-icon soc-houzz"></a>
								<a href="#" className="social-icon soc-mail"></a>
								<a href="#" className="social-icon soc-patreon"></a>
								<a href="#" className="social-icon soc-paypal"></a>
								<a href="#" className="social-icon soc-playstation"></a>
								<a href="#" className="social-icon soc-smugmug"></a>
								<a href="#" className="social-icon soc-swarm"></a>
								<a href="#" className="social-icon soc-triplej"></a>
								<a href="#" className="social-icon soc-yammer"></a>
								<a href="#" className="social-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon soc-drupal"></a>
								<a href="#" className="social-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon soc-android"></a>
								<a href="#" className="social-icon soc-meetup"></a>
								<a href="#" className="social-icon soc-persona"></a>
								<a href="#" className="social-icon soc-amazon"></a>
								<a href="#" className="social-icon soc-ello"></a>
								<a href="#" className="social-icon soc-mixcloud"></a>
								<a href="#" className="social-icon soc-8tracks"></a>
								<a href="#" className="social-icon soc-twitch"></a>
								<a href="#" className="social-icon soc-airbnb"></a>
								<a href="#" className="social-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Simple Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons26" aria-expanded="false" aria-controls="collapseIcons26">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon border-icon soc-twitter"></a>
							<a href="#" className="social-icon border-icon soc-facebook"></a>
							<a href="#" className="social-icon border-icon soc-google"></a>
							<a href="#" className="social-icon border-icon soc-pinterest"></a>
							<a href="#" className="social-icon border-icon soc-foursquare"></a>
							<a href="#" className="social-icon border-icon soc-yahoo"></a>
							<a href="#" className="social-icon border-icon soc-skype"></a>
							<a href="#" className="social-icon border-icon soc-yelp"></a>
							<a href="#" className="social-icon border-icon soc-feedburner"></a>
							<a href="#" className="social-icon border-icon soc-linkedin"></a>
							<a href="#" className="social-icon border-icon soc-viadeo"></a>
							<a href="#" className="social-icon border-icon soc-xing"></a>
							<a href="#" className="social-icon border-icon soc-myspace"></a>
							<a href="#" className="social-icon border-icon soc-soundcloud"></a>
							<a href="#" className="social-icon border-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons26">
								<a href="#" className="social-icon border-icon soc-grooveshark"></a>
								<a href="#" className="social-icon border-icon soc-lastfm"></a>
								<a href="#" className="social-icon border-icon soc-youtube"></a>
								<a href="#" className="social-icon border-icon soc-vimeo"></a>
								<a href="#" className="social-icon border-icon soc-dailymotion"></a>
								<a href="#" className="social-icon border-icon soc-vine"></a>
								<a href="#" className="social-icon border-icon soc-flickr"></a>
								<a href="#" className="social-icon border-icon soc-500px"></a>
								<a href="#" className="social-icon border-icon soc-instagram"></a>
								<a href="#" className="social-icon border-icon soc-wordpress"></a>
								<a href="#" className="social-icon border-icon soc-tumblr"></a>
								<a href="#" className="social-icon border-icon soc-blogger"></a>
								<a href="#" className="social-icon border-icon soc-technorati"></a>
								<a href="#" className="social-icon border-icon soc-reddit"></a>
								<a href="#" className="social-icon border-icon soc-dribbble"></a>
								<a href="#" className="social-icon border-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon border-icon soc-digg"></a>
								<a href="#" className="social-icon border-icon soc-envato"></a>
								<a href="#" className="social-icon border-icon soc-behance"></a>
								<a href="#" className="social-icon border-icon soc-delicious"></a>
								<a href="#" className="social-icon border-icon soc-deviantart"></a>
								<a href="#" className="social-icon border-icon soc-forrst"></a>
								<a href="#" className="social-icon border-icon soc-play"></a>
								<a href="#" className="social-icon border-icon soc-zerply"></a>
								<a href="#" className="social-icon border-icon soc-wikipedia"></a>
								<a href="#" className="social-icon border-icon soc-apple"></a>
								<a href="#" className="social-icon border-icon soc-flattr"></a>
								<a href="#" className="social-icon border-icon soc-github"></a>
								<a href="#" className="social-icon border-icon soc-chimein"></a>
								<a href="#" className="social-icon border-icon soc-friendfeed"></a>
								<a href="#" className="social-icon border-icon soc-newsvine"></a>
								<a href="#" className="social-icon border-icon soc-identica"></a>
								<a href="#" className="social-icon border-icon soc-bebo"></a>
								<a href="#" className="social-icon border-icon soc-zynga"></a>
								<a href="#" className="social-icon border-icon soc-steam"></a>
								<a href="#" className="social-icon border-icon soc-xbox"></a>
								<a href="#" className="social-icon border-icon soc-windows"></a>
								<a href="#" className="social-icon border-icon soc-outlook"></a>
								<a href="#" className="social-icon border-icon soc-coderwall"></a>
								<a href="#" className="social-icon border-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon border-icon soc-appnet"></a>
								<a href="#" className="social-icon border-icon soc-goodreads"></a>
								<a href="#" className="social-icon border-icon soc-tripit"></a>
								<a href="#" className="social-icon border-icon soc-lanyrd"></a>
								<a href="#" className="social-icon border-icon soc-slideshare"></a>
								<a href="#" className="social-icon border-icon soc-buffer"></a>
								<a href="#" className="social-icon border-icon soc-rss"></a>
								<a href="#" className="social-icon border-icon soc-vkontakte"></a>
								<a href="#" className="social-icon border-icon soc-disqus"></a>
								<a href="#" className="social-icon border-icon soc-houzz"></a>
								<a href="#" className="social-icon border-icon soc-mail"></a>
								<a href="#" className="social-icon border-icon soc-patreon"></a>
								<a href="#" className="social-icon border-icon soc-paypal"></a>
								<a href="#" className="social-icon border-icon soc-playstation"></a>
								<a href="#" className="social-icon border-icon soc-smugmug"></a>
								<a href="#" className="social-icon border-icon soc-swarm"></a>
								<a href="#" className="social-icon border-icon soc-triplej"></a>
								<a href="#" className="social-icon border-icon soc-yammer"></a>
								<a href="#" className="social-icon border-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon border-icon soc-drupal"></a>
								<a href="#" className="social-icon border-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon border-icon soc-android"></a>
								<a href="#" className="social-icon border-icon soc-meetup"></a>
								<a href="#" className="social-icon border-icon soc-persona"></a>
								<a href="#" className="social-icon border-icon soc-amazon"></a>
								<a href="#" className="social-icon border-icon soc-ello"></a>
								<a href="#" className="social-icon border-icon soc-mixcloud"></a>
								<a href="#" className="social-icon border-icon soc-8tracks"></a>
								<a href="#" className="social-icon border-icon soc-twitch"></a>
								<a href="#" className="social-icon border-icon soc-airbnb"></a>
								<a href="#" className="social-icon border-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Rounded Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons27" aria-expanded="false" aria-controls="collapseIcons27">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon border-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons27">
								<a href="#" className="social-icon border-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Simple Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons28" aria-expanded="false" aria-controls="collapseIcons28">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon bg-icon soc-twitter"></a>
							<a href="#" className="social-icon bg-icon soc-facebook"></a>
							<a href="#" className="social-icon bg-icon soc-google"></a>
							<a href="#" className="social-icon bg-icon soc-pinterest"></a>
							<a href="#" className="social-icon bg-icon soc-foursquare"></a>
							<a href="#" className="social-icon bg-icon soc-yahoo"></a>
							<a href="#" className="social-icon bg-icon soc-skype"></a>
							<a href="#" className="social-icon bg-icon soc-yelp"></a>
							<a href="#" className="social-icon bg-icon soc-feedburner"></a>
							<a href="#" className="social-icon bg-icon soc-linkedin"></a>
							<a href="#" className="social-icon bg-icon soc-viadeo"></a>
							<a href="#" className="social-icon bg-icon soc-xing"></a>
							<a href="#" className="social-icon bg-icon soc-myspace"></a>
							<a href="#" className="social-icon bg-icon soc-soundcloud"></a>
							<a href="#" className="social-icon bg-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons28">
								<a href="#" className="social-icon bg-icon soc-grooveshark"></a>
								<a href="#" className="social-icon bg-icon soc-lastfm"></a>
								<a href="#" className="social-icon bg-icon soc-youtube"></a>
								<a href="#" className="social-icon bg-icon soc-vimeo"></a>
								<a href="#" className="social-icon bg-icon soc-dailymotion"></a>
								<a href="#" className="social-icon bg-icon soc-vine"></a>
								<a href="#" className="social-icon bg-icon soc-flickr"></a>
								<a href="#" className="social-icon bg-icon soc-500px"></a>
								<a href="#" className="social-icon bg-icon soc-instagram"></a>
								<a href="#" className="social-icon bg-icon soc-wordpress"></a>
								<a href="#" className="social-icon bg-icon soc-tumblr"></a>
								<a href="#" className="social-icon bg-icon soc-blogger"></a>
								<a href="#" className="social-icon bg-icon soc-technorati"></a>
								<a href="#" className="social-icon bg-icon soc-reddit"></a>
								<a href="#" className="social-icon bg-icon soc-dribbble"></a>
								<a href="#" className="social-icon bg-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon bg-icon soc-digg"></a>
								<a href="#" className="social-icon bg-icon soc-envato"></a>
								<a href="#" className="social-icon bg-icon soc-behance"></a>
								<a href="#" className="social-icon bg-icon soc-delicious"></a>
								<a href="#" className="social-icon bg-icon soc-deviantart"></a>
								<a href="#" className="social-icon bg-icon soc-forrst"></a>
								<a href="#" className="social-icon bg-icon soc-play"></a>
								<a href="#" className="social-icon bg-icon soc-zerply"></a>
								<a href="#" className="social-icon bg-icon soc-wikipedia"></a>
								<a href="#" className="social-icon bg-icon soc-apple"></a>
								<a href="#" className="social-icon bg-icon soc-flattr"></a>
								<a href="#" className="social-icon bg-icon soc-github"></a>
								<a href="#" className="social-icon bg-icon soc-chimein"></a>
								<a href="#" className="social-icon bg-icon soc-friendfeed"></a>
								<a href="#" className="social-icon bg-icon soc-newsvine"></a>
								<a href="#" className="social-icon bg-icon soc-identica"></a>
								<a href="#" className="social-icon bg-icon soc-bebo"></a>
								<a href="#" className="social-icon bg-icon soc-zynga"></a>
								<a href="#" className="social-icon bg-icon soc-steam"></a>
								<a href="#" className="social-icon bg-icon soc-xbox"></a>
								<a href="#" className="social-icon bg-icon soc-windows"></a>
								<a href="#" className="social-icon bg-icon soc-outlook"></a>
								<a href="#" className="social-icon bg-icon soc-coderwall"></a>
								<a href="#" className="social-icon bg-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon bg-icon soc-appnet"></a>
								<a href="#" className="social-icon bg-icon soc-goodreads"></a>
								<a href="#" className="social-icon bg-icon soc-tripit"></a>
								<a href="#" className="social-icon bg-icon soc-lanyrd"></a>
								<a href="#" className="social-icon bg-icon soc-slideshare"></a>
								<a href="#" className="social-icon bg-icon soc-buffer"></a>
								<a href="#" className="social-icon bg-icon soc-rss"></a>
								<a href="#" className="social-icon bg-icon soc-vkontakte"></a>
								<a href="#" className="social-icon bg-icon soc-disqus"></a>
								<a href="#" className="social-icon bg-icon soc-houzz"></a>
								<a href="#" className="social-icon bg-icon soc-mail"></a>
								<a href="#" className="social-icon bg-icon soc-patreon"></a>
								<a href="#" className="social-icon bg-icon soc-paypal"></a>
								<a href="#" className="social-icon bg-icon soc-playstation"></a>
								<a href="#" className="social-icon bg-icon soc-smugmug"></a>
								<a href="#" className="social-icon bg-icon soc-swarm"></a>
								<a href="#" className="social-icon bg-icon soc-triplej"></a>
								<a href="#" className="social-icon bg-icon soc-yammer"></a>
								<a href="#" className="social-icon bg-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon bg-icon soc-drupal"></a>
								<a href="#" className="social-icon bg-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon bg-icon soc-android"></a>
								<a href="#" className="social-icon bg-icon soc-meetup"></a>
								<a href="#" className="social-icon bg-icon soc-persona"></a>
								<a href="#" className="social-icon bg-icon soc-amazon"></a>
								<a href="#" className="social-icon bg-icon soc-ello"></a>
								<a href="#" className="social-icon bg-icon soc-mixcloud"></a>
								<a href="#" className="social-icon bg-icon soc-8tracks"></a>
								<a href="#" className="social-icon bg-icon soc-twitch"></a>
								<a href="#" className="social-icon bg-icon soc-airbnb"></a>
								<a href="#" className="social-icon bg-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Rounded Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons29" aria-expanded="false" aria-controls="collapseIcons29">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon bg-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons29">
								<a href="#" className="social-icon bg-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Light Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons30" aria-expanded="false" aria-controls="collapseIcons30">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon bg-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-google"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons30">
								<a href="#" className="social-icon color-icon bg-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-play"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-github"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-android"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Light Background Rounded Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons31" aria-expanded="false" aria-controls="collapseIcons31">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons31">
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons32" aria-expanded="false" aria-controls="collapseIcons32">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon soc-google"></a>
							<a href="#" className="social-icon color-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon soc-spotify"></a>
							<a href="#" className="social-icon color-icon soc-grooveshark"></a>
							<a href="#" className="social-icon color-icon soc-lastfm"></a>
							<a href="#" className="social-icon color-icon soc-youtube"></a>
							<a href="#" className="social-icon color-icon soc-vimeo"></a>
							<a href="#" className="social-icon color-icon soc-dailymotion"></a>
							<a href="#" className="social-icon color-icon soc-vine"></a>
							<a href="#" className="social-icon color-icon soc-flickr"></a>
							<a href="#" className="social-icon color-icon soc-500px"></a>
							<a href="#" className="social-icon color-icon soc-instagram"></a>
							<a href="#" className="social-icon color-icon soc-wordpress"></a>
							<a href="#" className="social-icon color-icon soc-tumblr"></a>
							<a href="#" className="social-icon color-icon soc-blogger"></a>

							<div className="collapse" id="collapseIcons32">
								<a href="#" className="social-icon color-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon soc-play"></a>
								<a href="#" className="social-icon color-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon soc-github"></a>
								<a href="#" className="social-icon color-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon soc-android"></a>
								<a href="#" className="social-icon color-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons33" aria-expanded="false" aria-controls="collapseIcons33">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon border-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon border-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon border-icon soc-google"></a>
							<a href="#" className="social-icon color-icon border-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon border-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon border-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon border-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon border-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon border-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon border-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon border-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon border-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon border-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon border-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon border-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons33">
								<a href="#" className="social-icon color-icon border-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon border-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon border-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon border-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon border-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon border-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon border-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon border-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon border-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon border-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon border-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon border-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon border-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon border-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon border-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon border-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon border-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon border-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon border-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon border-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon border-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon border-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon border-icon soc-play"></a>
								<a href="#" className="social-icon color-icon border-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon border-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon border-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon border-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon border-icon soc-github"></a>
								<a href="#" className="social-icon color-icon border-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon border-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon border-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon border-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon border-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon border-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon border-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon border-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon border-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon border-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon border-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon border-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon border-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon border-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon border-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon border-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon border-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon border-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon border-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon border-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon border-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon border-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon border-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon border-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon border-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon border-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon border-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon border-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon border-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon border-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon border-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon border-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon border-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon border-icon soc-android"></a>
								<a href="#" className="social-icon color-icon border-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon border-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon border-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon border-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon border-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon border-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon border-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon border-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon border-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Round Color Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons34" aria-expanded="false" aria-controls="collapseIcons34">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons34">
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons35" aria-expanded="false" aria-controls="collapseIcons35">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-bg-icon soc-twitter"></a>
							<a href="#" className="social-icon color-bg-icon soc-facebook"></a>
							<a href="#" className="social-icon color-bg-icon soc-google"></a>
							<a href="#" className="social-icon color-bg-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-bg-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-bg-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-bg-icon soc-skype"></a>
							<a href="#" className="social-icon color-bg-icon soc-yelp"></a>
							<a href="#" className="social-icon color-bg-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-bg-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-bg-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-bg-icon soc-xing"></a>
							<a href="#" className="social-icon color-bg-icon soc-myspace"></a>
							<a href="#" className="social-icon color-bg-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-bg-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons35">
								<a href="#" className="social-icon color-bg-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-bg-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-bg-icon soc-youtube"></a>
								<a href="#" className="social-icon color-bg-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-bg-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-bg-icon soc-vine"></a>
								<a href="#" className="social-icon color-bg-icon soc-flickr"></a>
								<a href="#" className="social-icon color-bg-icon soc-500px"></a>
								<a href="#" className="social-icon color-bg-icon soc-instagram"></a>
								<a href="#" className="social-icon color-bg-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-bg-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-bg-icon soc-blogger"></a>
								<a href="#" className="social-icon color-bg-icon soc-technorati"></a>
								<a href="#" className="social-icon color-bg-icon soc-reddit"></a>
								<a href="#" className="social-icon color-bg-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-bg-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-bg-icon soc-digg"></a>
								<a href="#" className="social-icon color-bg-icon soc-envato"></a>
								<a href="#" className="social-icon color-bg-icon soc-behance"></a>
								<a href="#" className="social-icon color-bg-icon soc-delicious"></a>
								<a href="#" className="social-icon color-bg-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-bg-icon soc-forrst"></a>
								<a href="#" className="social-icon color-bg-icon soc-play"></a>
								<a href="#" className="social-icon color-bg-icon soc-zerply"></a>
								<a href="#" className="social-icon color-bg-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-bg-icon soc-apple"></a>
								<a href="#" className="social-icon color-bg-icon soc-flattr"></a>
								<a href="#" className="social-icon color-bg-icon soc-github"></a>
								<a href="#" className="social-icon color-bg-icon soc-chimein"></a>
								<a href="#" className="social-icon color-bg-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-bg-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-bg-icon soc-identica"></a>
								<a href="#" className="social-icon color-bg-icon soc-bebo"></a>
								<a href="#" className="social-icon color-bg-icon soc-zynga"></a>
								<a href="#" className="social-icon color-bg-icon soc-steam"></a>
								<a href="#" className="social-icon color-bg-icon soc-xbox"></a>
								<a href="#" className="social-icon color-bg-icon soc-windows"></a>
								<a href="#" className="social-icon color-bg-icon soc-outlook"></a>
								<a href="#" className="social-icon color-bg-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-bg-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-bg-icon soc-appnet"></a>
								<a href="#" className="social-icon color-bg-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-bg-icon soc-tripit"></a>
								<a href="#" className="social-icon color-bg-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-bg-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-bg-icon soc-buffer"></a>
								<a href="#" className="social-icon color-bg-icon soc-rss"></a>
								<a href="#" className="social-icon color-bg-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-bg-icon soc-disqus"></a>
								<a href="#" className="social-icon color-bg-icon soc-houzz"></a>
								<a href="#" className="social-icon color-bg-icon soc-mail"></a>
								<a href="#" className="social-icon color-bg-icon soc-patreon"></a>
								<a href="#" className="social-icon color-bg-icon soc-paypal"></a>
								<a href="#" className="social-icon color-bg-icon soc-playstation"></a>
								<a href="#" className="social-icon color-bg-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-bg-icon soc-swarm"></a>
								<a href="#" className="social-icon color-bg-icon soc-triplej"></a>
								<a href="#" className="social-icon color-bg-icon soc-yammer"></a>
								<a href="#" className="social-icon color-bg-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-bg-icon soc-drupal"></a>
								<a href="#" className="social-icon color-bg-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-bg-icon soc-android"></a>
								<a href="#" className="social-icon color-bg-icon soc-meetup"></a>
								<a href="#" className="social-icon color-bg-icon soc-persona"></a>
								<a href="#" className="social-icon color-bg-icon soc-amazon"></a>
								<a href="#" className="social-icon color-bg-icon soc-ello"></a>
								<a href="#" className="social-icon color-bg-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-bg-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-bg-icon soc-twitch"></a>
								<a href="#" className="social-icon color-bg-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-bg-icon soc-pocket"></a>
							</div>
						</div>


						<div className="col-sm-12">
							<h2>
								Round Color Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons36" aria-expanded="false" aria-controls="collapseIcons36">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons36">
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-pocket"></a>
							</div>
						</div>


					</div>
				</div>
			</section>

			<section className="ds ms social-icons-demo section_padding_100">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2>
								Simple Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons37" aria-expanded="false" aria-controls="collapseIcons37">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon soc-twitter"></a>
							<a href="#" className="social-icon soc-facebook"></a>
							<a href="#" className="social-icon soc-google"></a>
							<a href="#" className="social-icon soc-pinterest"></a>
							<a href="#" className="social-icon soc-foursquare"></a>
							<a href="#" className="social-icon soc-yahoo"></a>
							<a href="#" className="social-icon soc-skype"></a>
							<a href="#" className="social-icon soc-yelp"></a>
							<a href="#" className="social-icon soc-feedburner"></a>
							<a href="#" className="social-icon soc-linkedin"></a>
							<a href="#" className="social-icon soc-viadeo"></a>
							<a href="#" className="social-icon soc-xing"></a>
							<a href="#" className="social-icon soc-myspace"></a>
							<a href="#" className="social-icon soc-soundcloud"></a>
							<a href="#" className="social-icon soc-spotify"></a>
							<a href="#" className="social-icon soc-grooveshark"></a>
							<a href="#" className="social-icon soc-lastfm"></a>
							<a href="#" className="social-icon soc-youtube"></a>
							<a href="#" className="social-icon soc-vimeo"></a>
							<a href="#" className="social-icon soc-dailymotion"></a>
							<a href="#" className="social-icon soc-vine"></a>
							<a href="#" className="social-icon soc-flickr"></a>
							<a href="#" className="social-icon soc-500px"></a>
							<a href="#" className="social-icon soc-instagram"></a>
							<a href="#" className="social-icon soc-wordpress"></a>
							<a href="#" className="social-icon soc-tumblr"></a>
							<a href="#" className="social-icon soc-blogger"></a>

							<div className="collapse" id="collapseIcons37">
								<a href="#" className="social-icon soc-technorati"></a>
								<a href="#" className="social-icon soc-reddit"></a>
								<a href="#" className="social-icon soc-dribbble"></a>
								<a href="#" className="social-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon soc-digg"></a>
								<a href="#" className="social-icon soc-envato"></a>
								<a href="#" className="social-icon soc-behance"></a>
								<a href="#" className="social-icon soc-delicious"></a>
								<a href="#" className="social-icon soc-deviantart"></a>
								<a href="#" className="social-icon soc-forrst"></a>
								<a href="#" className="social-icon soc-play"></a>
								<a href="#" className="social-icon soc-zerply"></a>
								<a href="#" className="social-icon soc-wikipedia"></a>
								<a href="#" className="social-icon soc-apple"></a>
								<a href="#" className="social-icon soc-flattr"></a>
								<a href="#" className="social-icon soc-github"></a>
								<a href="#" className="social-icon soc-chimein"></a>
								<a href="#" className="social-icon soc-friendfeed"></a>
								<a href="#" className="social-icon soc-newsvine"></a>
								<a href="#" className="social-icon soc-identica"></a>
								<a href="#" className="social-icon soc-bebo"></a>
								<a href="#" className="social-icon soc-zynga"></a>
								<a href="#" className="social-icon soc-steam"></a>
								<a href="#" className="social-icon soc-xbox"></a>
								<a href="#" className="social-icon soc-windows"></a>
								<a href="#" className="social-icon soc-outlook"></a>
								<a href="#" className="social-icon soc-coderwall"></a>
								<a href="#" className="social-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon soc-appnet"></a>
								<a href="#" className="social-icon soc-goodreads"></a>
								<a href="#" className="social-icon soc-tripit"></a>
								<a href="#" className="social-icon soc-lanyrd"></a>
								<a href="#" className="social-icon soc-slideshare"></a>
								<a href="#" className="social-icon soc-buffer"></a>
								<a href="#" className="social-icon soc-rss"></a>
								<a href="#" className="social-icon soc-vkontakte"></a>
								<a href="#" className="social-icon soc-disqus"></a>
								<a href="#" className="social-icon soc-houzz"></a>
								<a href="#" className="social-icon soc-mail"></a>
								<a href="#" className="social-icon soc-patreon"></a>
								<a href="#" className="social-icon soc-paypal"></a>
								<a href="#" className="social-icon soc-playstation"></a>
								<a href="#" className="social-icon soc-smugmug"></a>
								<a href="#" className="social-icon soc-swarm"></a>
								<a href="#" className="social-icon soc-triplej"></a>
								<a href="#" className="social-icon soc-yammer"></a>
								<a href="#" className="social-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon soc-drupal"></a>
								<a href="#" className="social-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon soc-android"></a>
								<a href="#" className="social-icon soc-meetup"></a>
								<a href="#" className="social-icon soc-persona"></a>
								<a href="#" className="social-icon soc-amazon"></a>
								<a href="#" className="social-icon soc-ello"></a>
								<a href="#" className="social-icon soc-mixcloud"></a>
								<a href="#" className="social-icon soc-8tracks"></a>
								<a href="#" className="social-icon soc-twitch"></a>
								<a href="#" className="social-icon soc-airbnb"></a>
								<a href="#" className="social-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Simple Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons38" aria-expanded="false" aria-controls="collapseIcons38">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon border-icon soc-twitter"></a>
							<a href="#" className="social-icon border-icon soc-facebook"></a>
							<a href="#" className="social-icon border-icon soc-google"></a>
							<a href="#" className="social-icon border-icon soc-pinterest"></a>
							<a href="#" className="social-icon border-icon soc-foursquare"></a>
							<a href="#" className="social-icon border-icon soc-yahoo"></a>
							<a href="#" className="social-icon border-icon soc-skype"></a>
							<a href="#" className="social-icon border-icon soc-yelp"></a>
							<a href="#" className="social-icon border-icon soc-feedburner"></a>
							<a href="#" className="social-icon border-icon soc-linkedin"></a>
							<a href="#" className="social-icon border-icon soc-viadeo"></a>
							<a href="#" className="social-icon border-icon soc-xing"></a>
							<a href="#" className="social-icon border-icon soc-myspace"></a>
							<a href="#" className="social-icon border-icon soc-soundcloud"></a>
							<a href="#" className="social-icon border-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons38">
								<a href="#" className="social-icon border-icon soc-grooveshark"></a>
								<a href="#" className="social-icon border-icon soc-lastfm"></a>
								<a href="#" className="social-icon border-icon soc-youtube"></a>
								<a href="#" className="social-icon border-icon soc-vimeo"></a>
								<a href="#" className="social-icon border-icon soc-dailymotion"></a>
								<a href="#" className="social-icon border-icon soc-vine"></a>
								<a href="#" className="social-icon border-icon soc-flickr"></a>
								<a href="#" className="social-icon border-icon soc-500px"></a>
								<a href="#" className="social-icon border-icon soc-instagram"></a>
								<a href="#" className="social-icon border-icon soc-wordpress"></a>
								<a href="#" className="social-icon border-icon soc-tumblr"></a>
								<a href="#" className="social-icon border-icon soc-blogger"></a>
								<a href="#" className="social-icon border-icon soc-technorati"></a>
								<a href="#" className="social-icon border-icon soc-reddit"></a>
								<a href="#" className="social-icon border-icon soc-dribbble"></a>
								<a href="#" className="social-icon border-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon border-icon soc-digg"></a>
								<a href="#" className="social-icon border-icon soc-envato"></a>
								<a href="#" className="social-icon border-icon soc-behance"></a>
								<a href="#" className="social-icon border-icon soc-delicious"></a>
								<a href="#" className="social-icon border-icon soc-deviantart"></a>
								<a href="#" className="social-icon border-icon soc-forrst"></a>
								<a href="#" className="social-icon border-icon soc-play"></a>
								<a href="#" className="social-icon border-icon soc-zerply"></a>
								<a href="#" className="social-icon border-icon soc-wikipedia"></a>
								<a href="#" className="social-icon border-icon soc-apple"></a>
								<a href="#" className="social-icon border-icon soc-flattr"></a>
								<a href="#" className="social-icon border-icon soc-github"></a>
								<a href="#" className="social-icon border-icon soc-chimein"></a>
								<a href="#" className="social-icon border-icon soc-friendfeed"></a>
								<a href="#" className="social-icon border-icon soc-newsvine"></a>
								<a href="#" className="social-icon border-icon soc-identica"></a>
								<a href="#" className="social-icon border-icon soc-bebo"></a>
								<a href="#" className="social-icon border-icon soc-zynga"></a>
								<a href="#" className="social-icon border-icon soc-steam"></a>
								<a href="#" className="social-icon border-icon soc-xbox"></a>
								<a href="#" className="social-icon border-icon soc-windows"></a>
								<a href="#" className="social-icon border-icon soc-outlook"></a>
								<a href="#" className="social-icon border-icon soc-coderwall"></a>
								<a href="#" className="social-icon border-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon border-icon soc-appnet"></a>
								<a href="#" className="social-icon border-icon soc-goodreads"></a>
								<a href="#" className="social-icon border-icon soc-tripit"></a>
								<a href="#" className="social-icon border-icon soc-lanyrd"></a>
								<a href="#" className="social-icon border-icon soc-slideshare"></a>
								<a href="#" className="social-icon border-icon soc-buffer"></a>
								<a href="#" className="social-icon border-icon soc-rss"></a>
								<a href="#" className="social-icon border-icon soc-vkontakte"></a>
								<a href="#" className="social-icon border-icon soc-disqus"></a>
								<a href="#" className="social-icon border-icon soc-houzz"></a>
								<a href="#" className="social-icon border-icon soc-mail"></a>
								<a href="#" className="social-icon border-icon soc-patreon"></a>
								<a href="#" className="social-icon border-icon soc-paypal"></a>
								<a href="#" className="social-icon border-icon soc-playstation"></a>
								<a href="#" className="social-icon border-icon soc-smugmug"></a>
								<a href="#" className="social-icon border-icon soc-swarm"></a>
								<a href="#" className="social-icon border-icon soc-triplej"></a>
								<a href="#" className="social-icon border-icon soc-yammer"></a>
								<a href="#" className="social-icon border-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon border-icon soc-drupal"></a>
								<a href="#" className="social-icon border-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon border-icon soc-android"></a>
								<a href="#" className="social-icon border-icon soc-meetup"></a>
								<a href="#" className="social-icon border-icon soc-persona"></a>
								<a href="#" className="social-icon border-icon soc-amazon"></a>
								<a href="#" className="social-icon border-icon soc-ello"></a>
								<a href="#" className="social-icon border-icon soc-mixcloud"></a>
								<a href="#" className="social-icon border-icon soc-8tracks"></a>
								<a href="#" className="social-icon border-icon soc-twitch"></a>
								<a href="#" className="social-icon border-icon soc-airbnb"></a>
								<a href="#" className="social-icon border-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Rounded Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons39" aria-expanded="false" aria-controls="collapseIcons39">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon border-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons39">
								<a href="#" className="social-icon border-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Simple Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons40" aria-expanded="false" aria-controls="collapseIcons40">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon bg-icon soc-twitter"></a>
							<a href="#" className="social-icon bg-icon soc-facebook"></a>
							<a href="#" className="social-icon bg-icon soc-google"></a>
							<a href="#" className="social-icon bg-icon soc-pinterest"></a>
							<a href="#" className="social-icon bg-icon soc-foursquare"></a>
							<a href="#" className="social-icon bg-icon soc-yahoo"></a>
							<a href="#" className="social-icon bg-icon soc-skype"></a>
							<a href="#" className="social-icon bg-icon soc-yelp"></a>
							<a href="#" className="social-icon bg-icon soc-feedburner"></a>
							<a href="#" className="social-icon bg-icon soc-linkedin"></a>
							<a href="#" className="social-icon bg-icon soc-viadeo"></a>
							<a href="#" className="social-icon bg-icon soc-xing"></a>
							<a href="#" className="social-icon bg-icon soc-myspace"></a>
							<a href="#" className="social-icon bg-icon soc-soundcloud"></a>
							<a href="#" className="social-icon bg-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons40">
								<a href="#" className="social-icon bg-icon soc-grooveshark"></a>
								<a href="#" className="social-icon bg-icon soc-lastfm"></a>
								<a href="#" className="social-icon bg-icon soc-youtube"></a>
								<a href="#" className="social-icon bg-icon soc-vimeo"></a>
								<a href="#" className="social-icon bg-icon soc-dailymotion"></a>
								<a href="#" className="social-icon bg-icon soc-vine"></a>
								<a href="#" className="social-icon bg-icon soc-flickr"></a>
								<a href="#" className="social-icon bg-icon soc-500px"></a>
								<a href="#" className="social-icon bg-icon soc-instagram"></a>
								<a href="#" className="social-icon bg-icon soc-wordpress"></a>
								<a href="#" className="social-icon bg-icon soc-tumblr"></a>
								<a href="#" className="social-icon bg-icon soc-blogger"></a>
								<a href="#" className="social-icon bg-icon soc-technorati"></a>
								<a href="#" className="social-icon bg-icon soc-reddit"></a>
								<a href="#" className="social-icon bg-icon soc-dribbble"></a>
								<a href="#" className="social-icon bg-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon bg-icon soc-digg"></a>
								<a href="#" className="social-icon bg-icon soc-envato"></a>
								<a href="#" className="social-icon bg-icon soc-behance"></a>
								<a href="#" className="social-icon bg-icon soc-delicious"></a>
								<a href="#" className="social-icon bg-icon soc-deviantart"></a>
								<a href="#" className="social-icon bg-icon soc-forrst"></a>
								<a href="#" className="social-icon bg-icon soc-play"></a>
								<a href="#" className="social-icon bg-icon soc-zerply"></a>
								<a href="#" className="social-icon bg-icon soc-wikipedia"></a>
								<a href="#" className="social-icon bg-icon soc-apple"></a>
								<a href="#" className="social-icon bg-icon soc-flattr"></a>
								<a href="#" className="social-icon bg-icon soc-github"></a>
								<a href="#" className="social-icon bg-icon soc-chimein"></a>
								<a href="#" className="social-icon bg-icon soc-friendfeed"></a>
								<a href="#" className="social-icon bg-icon soc-newsvine"></a>
								<a href="#" className="social-icon bg-icon soc-identica"></a>
								<a href="#" className="social-icon bg-icon soc-bebo"></a>
								<a href="#" className="social-icon bg-icon soc-zynga"></a>
								<a href="#" className="social-icon bg-icon soc-steam"></a>
								<a href="#" className="social-icon bg-icon soc-xbox"></a>
								<a href="#" className="social-icon bg-icon soc-windows"></a>
								<a href="#" className="social-icon bg-icon soc-outlook"></a>
								<a href="#" className="social-icon bg-icon soc-coderwall"></a>
								<a href="#" className="social-icon bg-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon bg-icon soc-appnet"></a>
								<a href="#" className="social-icon bg-icon soc-goodreads"></a>
								<a href="#" className="social-icon bg-icon soc-tripit"></a>
								<a href="#" className="social-icon bg-icon soc-lanyrd"></a>
								<a href="#" className="social-icon bg-icon soc-slideshare"></a>
								<a href="#" className="social-icon bg-icon soc-buffer"></a>
								<a href="#" className="social-icon bg-icon soc-rss"></a>
								<a href="#" className="social-icon bg-icon soc-vkontakte"></a>
								<a href="#" className="social-icon bg-icon soc-disqus"></a>
								<a href="#" className="social-icon bg-icon soc-houzz"></a>
								<a href="#" className="social-icon bg-icon soc-mail"></a>
								<a href="#" className="social-icon bg-icon soc-patreon"></a>
								<a href="#" className="social-icon bg-icon soc-paypal"></a>
								<a href="#" className="social-icon bg-icon soc-playstation"></a>
								<a href="#" className="social-icon bg-icon soc-smugmug"></a>
								<a href="#" className="social-icon bg-icon soc-swarm"></a>
								<a href="#" className="social-icon bg-icon soc-triplej"></a>
								<a href="#" className="social-icon bg-icon soc-yammer"></a>
								<a href="#" className="social-icon bg-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon bg-icon soc-drupal"></a>
								<a href="#" className="social-icon bg-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon bg-icon soc-android"></a>
								<a href="#" className="social-icon bg-icon soc-meetup"></a>
								<a href="#" className="social-icon bg-icon soc-persona"></a>
								<a href="#" className="social-icon bg-icon soc-amazon"></a>
								<a href="#" className="social-icon bg-icon soc-ello"></a>
								<a href="#" className="social-icon bg-icon soc-mixcloud"></a>
								<a href="#" className="social-icon bg-icon soc-8tracks"></a>
								<a href="#" className="social-icon bg-icon soc-twitch"></a>
								<a href="#" className="social-icon bg-icon soc-airbnb"></a>
								<a href="#" className="social-icon bg-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Rounded Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons41" aria-expanded="false" aria-controls="collapseIcons41">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon bg-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons41">
								<a href="#" className="social-icon bg-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Light Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons42" aria-expanded="false" aria-controls="collapseIcons42">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon bg-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-google"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons42">
								<a href="#" className="social-icon color-icon bg-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-play"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-github"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-android"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Light Background Rounded Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons43" aria-expanded="false" aria-controls="collapseIcons43">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons43">
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons44" aria-expanded="false" aria-controls="collapseIcons44">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon soc-google"></a>
							<a href="#" className="social-icon color-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon soc-spotify"></a>
							<a href="#" className="social-icon color-icon soc-grooveshark"></a>
							<a href="#" className="social-icon color-icon soc-lastfm"></a>
							<a href="#" className="social-icon color-icon soc-youtube"></a>
							<a href="#" className="social-icon color-icon soc-vimeo"></a>
							<a href="#" className="social-icon color-icon soc-dailymotion"></a>
							<a href="#" className="social-icon color-icon soc-vine"></a>
							<a href="#" className="social-icon color-icon soc-flickr"></a>
							<a href="#" className="social-icon color-icon soc-500px"></a>
							<a href="#" className="social-icon color-icon soc-instagram"></a>
							<a href="#" className="social-icon color-icon soc-wordpress"></a>
							<a href="#" className="social-icon color-icon soc-tumblr"></a>
							<a href="#" className="social-icon color-icon soc-blogger"></a>

							<div className="collapse" id="collapseIcons44">
								<a href="#" className="social-icon color-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon soc-play"></a>
								<a href="#" className="social-icon color-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon soc-github"></a>
								<a href="#" className="social-icon color-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon soc-android"></a>
								<a href="#" className="social-icon color-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons45" aria-expanded="false" aria-controls="collapseIcons45">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon border-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon border-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon border-icon soc-google"></a>
							<a href="#" className="social-icon color-icon border-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon border-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon border-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon border-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon border-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon border-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon border-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon border-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon border-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon border-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon border-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon border-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons45">
								<a href="#" className="social-icon color-icon border-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon border-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon border-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon border-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon border-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon border-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon border-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon border-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon border-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon border-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon border-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon border-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon border-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon border-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon border-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon border-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon border-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon border-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon border-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon border-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon border-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon border-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon border-icon soc-play"></a>
								<a href="#" className="social-icon color-icon border-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon border-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon border-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon border-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon border-icon soc-github"></a>
								<a href="#" className="social-icon color-icon border-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon border-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon border-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon border-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon border-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon border-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon border-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon border-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon border-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon border-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon border-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon border-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon border-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon border-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon border-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon border-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon border-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon border-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon border-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon border-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon border-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon border-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon border-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon border-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon border-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon border-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon border-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon border-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon border-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon border-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon border-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon border-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon border-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon border-icon soc-android"></a>
								<a href="#" className="social-icon color-icon border-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon border-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon border-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon border-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon border-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon border-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon border-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon border-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon border-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Round Color Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons46" aria-expanded="false" aria-controls="collapseIcons46">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons46">
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons47" aria-expanded="false" aria-controls="collapseIcons47">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-bg-icon soc-twitter"></a>
							<a href="#" className="social-icon color-bg-icon soc-facebook"></a>
							<a href="#" className="social-icon color-bg-icon soc-google"></a>
							<a href="#" className="social-icon color-bg-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-bg-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-bg-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-bg-icon soc-skype"></a>
							<a href="#" className="social-icon color-bg-icon soc-yelp"></a>
							<a href="#" className="social-icon color-bg-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-bg-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-bg-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-bg-icon soc-xing"></a>
							<a href="#" className="social-icon color-bg-icon soc-myspace"></a>
							<a href="#" className="social-icon color-bg-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-bg-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons47">
								<a href="#" className="social-icon color-bg-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-bg-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-bg-icon soc-youtube"></a>
								<a href="#" className="social-icon color-bg-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-bg-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-bg-icon soc-vine"></a>
								<a href="#" className="social-icon color-bg-icon soc-flickr"></a>
								<a href="#" className="social-icon color-bg-icon soc-500px"></a>
								<a href="#" className="social-icon color-bg-icon soc-instagram"></a>
								<a href="#" className="social-icon color-bg-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-bg-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-bg-icon soc-blogger"></a>
								<a href="#" className="social-icon color-bg-icon soc-technorati"></a>
								<a href="#" className="social-icon color-bg-icon soc-reddit"></a>
								<a href="#" className="social-icon color-bg-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-bg-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-bg-icon soc-digg"></a>
								<a href="#" className="social-icon color-bg-icon soc-envato"></a>
								<a href="#" className="social-icon color-bg-icon soc-behance"></a>
								<a href="#" className="social-icon color-bg-icon soc-delicious"></a>
								<a href="#" className="social-icon color-bg-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-bg-icon soc-forrst"></a>
								<a href="#" className="social-icon color-bg-icon soc-play"></a>
								<a href="#" className="social-icon color-bg-icon soc-zerply"></a>
								<a href="#" className="social-icon color-bg-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-bg-icon soc-apple"></a>
								<a href="#" className="social-icon color-bg-icon soc-flattr"></a>
								<a href="#" className="social-icon color-bg-icon soc-github"></a>
								<a href="#" className="social-icon color-bg-icon soc-chimein"></a>
								<a href="#" className="social-icon color-bg-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-bg-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-bg-icon soc-identica"></a>
								<a href="#" className="social-icon color-bg-icon soc-bebo"></a>
								<a href="#" className="social-icon color-bg-icon soc-zynga"></a>
								<a href="#" className="social-icon color-bg-icon soc-steam"></a>
								<a href="#" className="social-icon color-bg-icon soc-xbox"></a>
								<a href="#" className="social-icon color-bg-icon soc-windows"></a>
								<a href="#" className="social-icon color-bg-icon soc-outlook"></a>
								<a href="#" className="social-icon color-bg-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-bg-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-bg-icon soc-appnet"></a>
								<a href="#" className="social-icon color-bg-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-bg-icon soc-tripit"></a>
								<a href="#" className="social-icon color-bg-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-bg-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-bg-icon soc-buffer"></a>
								<a href="#" className="social-icon color-bg-icon soc-rss"></a>
								<a href="#" className="social-icon color-bg-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-bg-icon soc-disqus"></a>
								<a href="#" className="social-icon color-bg-icon soc-houzz"></a>
								<a href="#" className="social-icon color-bg-icon soc-mail"></a>
								<a href="#" className="social-icon color-bg-icon soc-patreon"></a>
								<a href="#" className="social-icon color-bg-icon soc-paypal"></a>
								<a href="#" className="social-icon color-bg-icon soc-playstation"></a>
								<a href="#" className="social-icon color-bg-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-bg-icon soc-swarm"></a>
								<a href="#" className="social-icon color-bg-icon soc-triplej"></a>
								<a href="#" className="social-icon color-bg-icon soc-yammer"></a>
								<a href="#" className="social-icon color-bg-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-bg-icon soc-drupal"></a>
								<a href="#" className="social-icon color-bg-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-bg-icon soc-android"></a>
								<a href="#" className="social-icon color-bg-icon soc-meetup"></a>
								<a href="#" className="social-icon color-bg-icon soc-persona"></a>
								<a href="#" className="social-icon color-bg-icon soc-amazon"></a>
								<a href="#" className="social-icon color-bg-icon soc-ello"></a>
								<a href="#" className="social-icon color-bg-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-bg-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-bg-icon soc-twitch"></a>
								<a href="#" className="social-icon color-bg-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-bg-icon soc-pocket"></a>
							</div>
						</div>


						<div className="col-sm-12">
							<h2>
								Round Color Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons48" aria-expanded="false" aria-controls="collapseIcons48">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons48">
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-pocket"></a>
							</div>
						</div>


					</div>
				</div>
			</section>

			<section className="ds social-icons-demo section_padding_100">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2>
								Simple Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons49" aria-expanded="false" aria-controls="collapseIcons49">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon soc-twitter"></a>
							<a href="#" className="social-icon soc-facebook"></a>
							<a href="#" className="social-icon soc-google"></a>
							<a href="#" className="social-icon soc-pinterest"></a>
							<a href="#" className="social-icon soc-foursquare"></a>
							<a href="#" className="social-icon soc-yahoo"></a>
							<a href="#" className="social-icon soc-skype"></a>
							<a href="#" className="social-icon soc-yelp"></a>
							<a href="#" className="social-icon soc-feedburner"></a>
							<a href="#" className="social-icon soc-linkedin"></a>
							<a href="#" className="social-icon soc-viadeo"></a>
							<a href="#" className="social-icon soc-xing"></a>
							<a href="#" className="social-icon soc-myspace"></a>
							<a href="#" className="social-icon soc-soundcloud"></a>
							<a href="#" className="social-icon soc-spotify"></a>
							<a href="#" className="social-icon soc-grooveshark"></a>
							<a href="#" className="social-icon soc-lastfm"></a>
							<a href="#" className="social-icon soc-youtube"></a>
							<a href="#" className="social-icon soc-vimeo"></a>
							<a href="#" className="social-icon soc-dailymotion"></a>
							<a href="#" className="social-icon soc-vine"></a>
							<a href="#" className="social-icon soc-flickr"></a>
							<a href="#" className="social-icon soc-500px"></a>
							<a href="#" className="social-icon soc-instagram"></a>
							<a href="#" className="social-icon soc-wordpress"></a>
							<a href="#" className="social-icon soc-tumblr"></a>
							<a href="#" className="social-icon soc-blogger"></a>

							<div className="collapse" id="collapseIcons49">
								<a href="#" className="social-icon soc-technorati"></a>
								<a href="#" className="social-icon soc-reddit"></a>
								<a href="#" className="social-icon soc-dribbble"></a>
								<a href="#" className="social-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon soc-digg"></a>
								<a href="#" className="social-icon soc-envato"></a>
								<a href="#" className="social-icon soc-behance"></a>
								<a href="#" className="social-icon soc-delicious"></a>
								<a href="#" className="social-icon soc-deviantart"></a>
								<a href="#" className="social-icon soc-forrst"></a>
								<a href="#" className="social-icon soc-play"></a>
								<a href="#" className="social-icon soc-zerply"></a>
								<a href="#" className="social-icon soc-wikipedia"></a>
								<a href="#" className="social-icon soc-apple"></a>
								<a href="#" className="social-icon soc-flattr"></a>
								<a href="#" className="social-icon soc-github"></a>
								<a href="#" className="social-icon soc-chimein"></a>
								<a href="#" className="social-icon soc-friendfeed"></a>
								<a href="#" className="social-icon soc-newsvine"></a>
								<a href="#" className="social-icon soc-identica"></a>
								<a href="#" className="social-icon soc-bebo"></a>
								<a href="#" className="social-icon soc-zynga"></a>
								<a href="#" className="social-icon soc-steam"></a>
								<a href="#" className="social-icon soc-xbox"></a>
								<a href="#" className="social-icon soc-windows"></a>
								<a href="#" className="social-icon soc-outlook"></a>
								<a href="#" className="social-icon soc-coderwall"></a>
								<a href="#" className="social-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon soc-appnet"></a>
								<a href="#" className="social-icon soc-goodreads"></a>
								<a href="#" className="social-icon soc-tripit"></a>
								<a href="#" className="social-icon soc-lanyrd"></a>
								<a href="#" className="social-icon soc-slideshare"></a>
								<a href="#" className="social-icon soc-buffer"></a>
								<a href="#" className="social-icon soc-rss"></a>
								<a href="#" className="social-icon soc-vkontakte"></a>
								<a href="#" className="social-icon soc-disqus"></a>
								<a href="#" className="social-icon soc-houzz"></a>
								<a href="#" className="social-icon soc-mail"></a>
								<a href="#" className="social-icon soc-patreon"></a>
								<a href="#" className="social-icon soc-paypal"></a>
								<a href="#" className="social-icon soc-playstation"></a>
								<a href="#" className="social-icon soc-smugmug"></a>
								<a href="#" className="social-icon soc-swarm"></a>
								<a href="#" className="social-icon soc-triplej"></a>
								<a href="#" className="social-icon soc-yammer"></a>
								<a href="#" className="social-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon soc-drupal"></a>
								<a href="#" className="social-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon soc-android"></a>
								<a href="#" className="social-icon soc-meetup"></a>
								<a href="#" className="social-icon soc-persona"></a>
								<a href="#" className="social-icon soc-amazon"></a>
								<a href="#" className="social-icon soc-ello"></a>
								<a href="#" className="social-icon soc-mixcloud"></a>
								<a href="#" className="social-icon soc-8tracks"></a>
								<a href="#" className="social-icon soc-twitch"></a>
								<a href="#" className="social-icon soc-airbnb"></a>
								<a href="#" className="social-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Simple Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons50" aria-expanded="false" aria-controls="collapseIcons50">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon border-icon soc-twitter"></a>
							<a href="#" className="social-icon border-icon soc-facebook"></a>
							<a href="#" className="social-icon border-icon soc-google"></a>
							<a href="#" className="social-icon border-icon soc-pinterest"></a>
							<a href="#" className="social-icon border-icon soc-foursquare"></a>
							<a href="#" className="social-icon border-icon soc-yahoo"></a>
							<a href="#" className="social-icon border-icon soc-skype"></a>
							<a href="#" className="social-icon border-icon soc-yelp"></a>
							<a href="#" className="social-icon border-icon soc-feedburner"></a>
							<a href="#" className="social-icon border-icon soc-linkedin"></a>
							<a href="#" className="social-icon border-icon soc-viadeo"></a>
							<a href="#" className="social-icon border-icon soc-xing"></a>
							<a href="#" className="social-icon border-icon soc-myspace"></a>
							<a href="#" className="social-icon border-icon soc-soundcloud"></a>
							<a href="#" className="social-icon border-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons50">
								<a href="#" className="social-icon border-icon soc-grooveshark"></a>
								<a href="#" className="social-icon border-icon soc-lastfm"></a>
								<a href="#" className="social-icon border-icon soc-youtube"></a>
								<a href="#" className="social-icon border-icon soc-vimeo"></a>
								<a href="#" className="social-icon border-icon soc-dailymotion"></a>
								<a href="#" className="social-icon border-icon soc-vine"></a>
								<a href="#" className="social-icon border-icon soc-flickr"></a>
								<a href="#" className="social-icon border-icon soc-500px"></a>
								<a href="#" className="social-icon border-icon soc-instagram"></a>
								<a href="#" className="social-icon border-icon soc-wordpress"></a>
								<a href="#" className="social-icon border-icon soc-tumblr"></a>
								<a href="#" className="social-icon border-icon soc-blogger"></a>
								<a href="#" className="social-icon border-icon soc-technorati"></a>
								<a href="#" className="social-icon border-icon soc-reddit"></a>
								<a href="#" className="social-icon border-icon soc-dribbble"></a>
								<a href="#" className="social-icon border-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon border-icon soc-digg"></a>
								<a href="#" className="social-icon border-icon soc-envato"></a>
								<a href="#" className="social-icon border-icon soc-behance"></a>
								<a href="#" className="social-icon border-icon soc-delicious"></a>
								<a href="#" className="social-icon border-icon soc-deviantart"></a>
								<a href="#" className="social-icon border-icon soc-forrst"></a>
								<a href="#" className="social-icon border-icon soc-play"></a>
								<a href="#" className="social-icon border-icon soc-zerply"></a>
								<a href="#" className="social-icon border-icon soc-wikipedia"></a>
								<a href="#" className="social-icon border-icon soc-apple"></a>
								<a href="#" className="social-icon border-icon soc-flattr"></a>
								<a href="#" className="social-icon border-icon soc-github"></a>
								<a href="#" className="social-icon border-icon soc-chimein"></a>
								<a href="#" className="social-icon border-icon soc-friendfeed"></a>
								<a href="#" className="social-icon border-icon soc-newsvine"></a>
								<a href="#" className="social-icon border-icon soc-identica"></a>
								<a href="#" className="social-icon border-icon soc-bebo"></a>
								<a href="#" className="social-icon border-icon soc-zynga"></a>
								<a href="#" className="social-icon border-icon soc-steam"></a>
								<a href="#" className="social-icon border-icon soc-xbox"></a>
								<a href="#" className="social-icon border-icon soc-windows"></a>
								<a href="#" className="social-icon border-icon soc-outlook"></a>
								<a href="#" className="social-icon border-icon soc-coderwall"></a>
								<a href="#" className="social-icon border-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon border-icon soc-appnet"></a>
								<a href="#" className="social-icon border-icon soc-goodreads"></a>
								<a href="#" className="social-icon border-icon soc-tripit"></a>
								<a href="#" className="social-icon border-icon soc-lanyrd"></a>
								<a href="#" className="social-icon border-icon soc-slideshare"></a>
								<a href="#" className="social-icon border-icon soc-buffer"></a>
								<a href="#" className="social-icon border-icon soc-rss"></a>
								<a href="#" className="social-icon border-icon soc-vkontakte"></a>
								<a href="#" className="social-icon border-icon soc-disqus"></a>
								<a href="#" className="social-icon border-icon soc-houzz"></a>
								<a href="#" className="social-icon border-icon soc-mail"></a>
								<a href="#" className="social-icon border-icon soc-patreon"></a>
								<a href="#" className="social-icon border-icon soc-paypal"></a>
								<a href="#" className="social-icon border-icon soc-playstation"></a>
								<a href="#" className="social-icon border-icon soc-smugmug"></a>
								<a href="#" className="social-icon border-icon soc-swarm"></a>
								<a href="#" className="social-icon border-icon soc-triplej"></a>
								<a href="#" className="social-icon border-icon soc-yammer"></a>
								<a href="#" className="social-icon border-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon border-icon soc-drupal"></a>
								<a href="#" className="social-icon border-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon border-icon soc-android"></a>
								<a href="#" className="social-icon border-icon soc-meetup"></a>
								<a href="#" className="social-icon border-icon soc-persona"></a>
								<a href="#" className="social-icon border-icon soc-amazon"></a>
								<a href="#" className="social-icon border-icon soc-ello"></a>
								<a href="#" className="social-icon border-icon soc-mixcloud"></a>
								<a href="#" className="social-icon border-icon soc-8tracks"></a>
								<a href="#" className="social-icon border-icon soc-twitch"></a>
								<a href="#" className="social-icon border-icon soc-airbnb"></a>
								<a href="#" className="social-icon border-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Rounded Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons51" aria-expanded="false" aria-controls="collapseIcons51">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon border-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon border-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons51">
								<a href="#" className="social-icon border-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon border-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Simple Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons52" aria-expanded="false" aria-controls="collapseIcons52">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon bg-icon soc-twitter"></a>
							<a href="#" className="social-icon bg-icon soc-facebook"></a>
							<a href="#" className="social-icon bg-icon soc-google"></a>
							<a href="#" className="social-icon bg-icon soc-pinterest"></a>
							<a href="#" className="social-icon bg-icon soc-foursquare"></a>
							<a href="#" className="social-icon bg-icon soc-yahoo"></a>
							<a href="#" className="social-icon bg-icon soc-skype"></a>
							<a href="#" className="social-icon bg-icon soc-yelp"></a>
							<a href="#" className="social-icon bg-icon soc-feedburner"></a>
							<a href="#" className="social-icon bg-icon soc-linkedin"></a>
							<a href="#" className="social-icon bg-icon soc-viadeo"></a>
							<a href="#" className="social-icon bg-icon soc-xing"></a>
							<a href="#" className="social-icon bg-icon soc-myspace"></a>
							<a href="#" className="social-icon bg-icon soc-soundcloud"></a>
							<a href="#" className="social-icon bg-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons52">
								<a href="#" className="social-icon bg-icon soc-grooveshark"></a>
								<a href="#" className="social-icon bg-icon soc-lastfm"></a>
								<a href="#" className="social-icon bg-icon soc-youtube"></a>
								<a href="#" className="social-icon bg-icon soc-vimeo"></a>
								<a href="#" className="social-icon bg-icon soc-dailymotion"></a>
								<a href="#" className="social-icon bg-icon soc-vine"></a>
								<a href="#" className="social-icon bg-icon soc-flickr"></a>
								<a href="#" className="social-icon bg-icon soc-500px"></a>
								<a href="#" className="social-icon bg-icon soc-instagram"></a>
								<a href="#" className="social-icon bg-icon soc-wordpress"></a>
								<a href="#" className="social-icon bg-icon soc-tumblr"></a>
								<a href="#" className="social-icon bg-icon soc-blogger"></a>
								<a href="#" className="social-icon bg-icon soc-technorati"></a>
								<a href="#" className="social-icon bg-icon soc-reddit"></a>
								<a href="#" className="social-icon bg-icon soc-dribbble"></a>
								<a href="#" className="social-icon bg-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon bg-icon soc-digg"></a>
								<a href="#" className="social-icon bg-icon soc-envato"></a>
								<a href="#" className="social-icon bg-icon soc-behance"></a>
								<a href="#" className="social-icon bg-icon soc-delicious"></a>
								<a href="#" className="social-icon bg-icon soc-deviantart"></a>
								<a href="#" className="social-icon bg-icon soc-forrst"></a>
								<a href="#" className="social-icon bg-icon soc-play"></a>
								<a href="#" className="social-icon bg-icon soc-zerply"></a>
								<a href="#" className="social-icon bg-icon soc-wikipedia"></a>
								<a href="#" className="social-icon bg-icon soc-apple"></a>
								<a href="#" className="social-icon bg-icon soc-flattr"></a>
								<a href="#" className="social-icon bg-icon soc-github"></a>
								<a href="#" className="social-icon bg-icon soc-chimein"></a>
								<a href="#" className="social-icon bg-icon soc-friendfeed"></a>
								<a href="#" className="social-icon bg-icon soc-newsvine"></a>
								<a href="#" className="social-icon bg-icon soc-identica"></a>
								<a href="#" className="social-icon bg-icon soc-bebo"></a>
								<a href="#" className="social-icon bg-icon soc-zynga"></a>
								<a href="#" className="social-icon bg-icon soc-steam"></a>
								<a href="#" className="social-icon bg-icon soc-xbox"></a>
								<a href="#" className="social-icon bg-icon soc-windows"></a>
								<a href="#" className="social-icon bg-icon soc-outlook"></a>
								<a href="#" className="social-icon bg-icon soc-coderwall"></a>
								<a href="#" className="social-icon bg-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon bg-icon soc-appnet"></a>
								<a href="#" className="social-icon bg-icon soc-goodreads"></a>
								<a href="#" className="social-icon bg-icon soc-tripit"></a>
								<a href="#" className="social-icon bg-icon soc-lanyrd"></a>
								<a href="#" className="social-icon bg-icon soc-slideshare"></a>
								<a href="#" className="social-icon bg-icon soc-buffer"></a>
								<a href="#" className="social-icon bg-icon soc-rss"></a>
								<a href="#" className="social-icon bg-icon soc-vkontakte"></a>
								<a href="#" className="social-icon bg-icon soc-disqus"></a>
								<a href="#" className="social-icon bg-icon soc-houzz"></a>
								<a href="#" className="social-icon bg-icon soc-mail"></a>
								<a href="#" className="social-icon bg-icon soc-patreon"></a>
								<a href="#" className="social-icon bg-icon soc-paypal"></a>
								<a href="#" className="social-icon bg-icon soc-playstation"></a>
								<a href="#" className="social-icon bg-icon soc-smugmug"></a>
								<a href="#" className="social-icon bg-icon soc-swarm"></a>
								<a href="#" className="social-icon bg-icon soc-triplej"></a>
								<a href="#" className="social-icon bg-icon soc-yammer"></a>
								<a href="#" className="social-icon bg-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon bg-icon soc-drupal"></a>
								<a href="#" className="social-icon bg-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon bg-icon soc-android"></a>
								<a href="#" className="social-icon bg-icon soc-meetup"></a>
								<a href="#" className="social-icon bg-icon soc-persona"></a>
								<a href="#" className="social-icon bg-icon soc-amazon"></a>
								<a href="#" className="social-icon bg-icon soc-ello"></a>
								<a href="#" className="social-icon bg-icon soc-mixcloud"></a>
								<a href="#" className="social-icon bg-icon soc-8tracks"></a>
								<a href="#" className="social-icon bg-icon soc-twitch"></a>
								<a href="#" className="social-icon bg-icon soc-airbnb"></a>
								<a href="#" className="social-icon bg-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Rounded Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons53" aria-expanded="false" aria-controls="collapseIcons53">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon bg-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon bg-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons53">
								<a href="#" className="social-icon bg-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon bg-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Light Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons54" aria-expanded="false" aria-controls="collapseIcons54">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon bg-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-google"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon bg-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons54">
								<a href="#" className="social-icon color-icon bg-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-play"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-github"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-android"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon bg-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Light Background Rounded Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons55" aria-expanded="false" aria-controls="collapseIcons55">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons55">
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon bg-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons56" aria-expanded="false" aria-controls="collapseIcons56">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon soc-google"></a>
							<a href="#" className="social-icon color-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon soc-spotify"></a>
							<a href="#" className="social-icon color-icon soc-grooveshark"></a>
							<a href="#" className="social-icon color-icon soc-lastfm"></a>
							<a href="#" className="social-icon color-icon soc-youtube"></a>
							<a href="#" className="social-icon color-icon soc-vimeo"></a>
							<a href="#" className="social-icon color-icon soc-dailymotion"></a>
							<a href="#" className="social-icon color-icon soc-vine"></a>
							<a href="#" className="social-icon color-icon soc-flickr"></a>
							<a href="#" className="social-icon color-icon soc-500px"></a>
							<a href="#" className="social-icon color-icon soc-instagram"></a>
							<a href="#" className="social-icon color-icon soc-wordpress"></a>
							<a href="#" className="social-icon color-icon soc-tumblr"></a>
							<a href="#" className="social-icon color-icon soc-blogger"></a>

							<div className="collapse" id="collapseIcons56">
								<a href="#" className="social-icon color-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon soc-play"></a>
								<a href="#" className="social-icon color-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon soc-github"></a>
								<a href="#" className="social-icon color-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon soc-android"></a>
								<a href="#" className="social-icon color-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons57" aria-expanded="false" aria-controls="collapseIcons57">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon border-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon border-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon border-icon soc-google"></a>
							<a href="#" className="social-icon color-icon border-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon border-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon border-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon border-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon border-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon border-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon border-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon border-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon border-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon border-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon border-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon border-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons57">
								<a href="#" className="social-icon color-icon border-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon border-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon border-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon border-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon border-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon border-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon border-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon border-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon border-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon border-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon border-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon border-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon border-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon border-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon border-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon border-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon border-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon border-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon border-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon border-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon border-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon border-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon border-icon soc-play"></a>
								<a href="#" className="social-icon color-icon border-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon border-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon border-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon border-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon border-icon soc-github"></a>
								<a href="#" className="social-icon color-icon border-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon border-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon border-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon border-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon border-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon border-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon border-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon border-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon border-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon border-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon border-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon border-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon border-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon border-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon border-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon border-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon border-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon border-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon border-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon border-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon border-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon border-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon border-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon border-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon border-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon border-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon border-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon border-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon border-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon border-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon border-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon border-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon border-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon border-icon soc-android"></a>
								<a href="#" className="social-icon color-icon border-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon border-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon border-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon border-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon border-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon border-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon border-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon border-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon border-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Round Color Bordered Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons58" aria-expanded="false" aria-controls="collapseIcons58">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-icon border-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons58">
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-icon border-icon rounded-icon soc-pocket"></a>
							</div>
						</div>

						<div className="col-sm-12">
							<h2>
								Color Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons59" aria-expanded="false" aria-controls="collapseIcons59">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-bg-icon soc-twitter"></a>
							<a href="#" className="social-icon color-bg-icon soc-facebook"></a>
							<a href="#" className="social-icon color-bg-icon soc-google"></a>
							<a href="#" className="social-icon color-bg-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-bg-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-bg-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-bg-icon soc-skype"></a>
							<a href="#" className="social-icon color-bg-icon soc-yelp"></a>
							<a href="#" className="social-icon color-bg-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-bg-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-bg-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-bg-icon soc-xing"></a>
							<a href="#" className="social-icon color-bg-icon soc-myspace"></a>
							<a href="#" className="social-icon color-bg-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-bg-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons59">
								<a href="#" className="social-icon color-bg-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-bg-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-bg-icon soc-youtube"></a>
								<a href="#" className="social-icon color-bg-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-bg-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-bg-icon soc-vine"></a>
								<a href="#" className="social-icon color-bg-icon soc-flickr"></a>
								<a href="#" className="social-icon color-bg-icon soc-500px"></a>
								<a href="#" className="social-icon color-bg-icon soc-instagram"></a>
								<a href="#" className="social-icon color-bg-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-bg-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-bg-icon soc-blogger"></a>
								<a href="#" className="social-icon color-bg-icon soc-technorati"></a>
								<a href="#" className="social-icon color-bg-icon soc-reddit"></a>
								<a href="#" className="social-icon color-bg-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-bg-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-bg-icon soc-digg"></a>
								<a href="#" className="social-icon color-bg-icon soc-envato"></a>
								<a href="#" className="social-icon color-bg-icon soc-behance"></a>
								<a href="#" className="social-icon color-bg-icon soc-delicious"></a>
								<a href="#" className="social-icon color-bg-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-bg-icon soc-forrst"></a>
								<a href="#" className="social-icon color-bg-icon soc-play"></a>
								<a href="#" className="social-icon color-bg-icon soc-zerply"></a>
								<a href="#" className="social-icon color-bg-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-bg-icon soc-apple"></a>
								<a href="#" className="social-icon color-bg-icon soc-flattr"></a>
								<a href="#" className="social-icon color-bg-icon soc-github"></a>
								<a href="#" className="social-icon color-bg-icon soc-chimein"></a>
								<a href="#" className="social-icon color-bg-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-bg-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-bg-icon soc-identica"></a>
								<a href="#" className="social-icon color-bg-icon soc-bebo"></a>
								<a href="#" className="social-icon color-bg-icon soc-zynga"></a>
								<a href="#" className="social-icon color-bg-icon soc-steam"></a>
								<a href="#" className="social-icon color-bg-icon soc-xbox"></a>
								<a href="#" className="social-icon color-bg-icon soc-windows"></a>
								<a href="#" className="social-icon color-bg-icon soc-outlook"></a>
								<a href="#" className="social-icon color-bg-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-bg-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-bg-icon soc-appnet"></a>
								<a href="#" className="social-icon color-bg-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-bg-icon soc-tripit"></a>
								<a href="#" className="social-icon color-bg-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-bg-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-bg-icon soc-buffer"></a>
								<a href="#" className="social-icon color-bg-icon soc-rss"></a>
								<a href="#" className="social-icon color-bg-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-bg-icon soc-disqus"></a>
								<a href="#" className="social-icon color-bg-icon soc-houzz"></a>
								<a href="#" className="social-icon color-bg-icon soc-mail"></a>
								<a href="#" className="social-icon color-bg-icon soc-patreon"></a>
								<a href="#" className="social-icon color-bg-icon soc-paypal"></a>
								<a href="#" className="social-icon color-bg-icon soc-playstation"></a>
								<a href="#" className="social-icon color-bg-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-bg-icon soc-swarm"></a>
								<a href="#" className="social-icon color-bg-icon soc-triplej"></a>
								<a href="#" className="social-icon color-bg-icon soc-yammer"></a>
								<a href="#" className="social-icon color-bg-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-bg-icon soc-drupal"></a>
								<a href="#" className="social-icon color-bg-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-bg-icon soc-android"></a>
								<a href="#" className="social-icon color-bg-icon soc-meetup"></a>
								<a href="#" className="social-icon color-bg-icon soc-persona"></a>
								<a href="#" className="social-icon color-bg-icon soc-amazon"></a>
								<a href="#" className="social-icon color-bg-icon soc-ello"></a>
								<a href="#" className="social-icon color-bg-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-bg-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-bg-icon soc-twitch"></a>
								<a href="#" className="social-icon color-bg-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-bg-icon soc-pocket"></a>
							</div>
						</div>


						<div className="col-sm-12">
							<h2>
								Round Color Background Icons
								<a className="thin small" data-toggle="collapse" href="#collapseIcons60" aria-expanded="false" aria-controls="collapseIcons60">
									- See All
								</a>
							</h2>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-twitter"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-facebook"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-google"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-pinterest"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-foursquare"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-yahoo"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-skype"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-yelp"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-feedburner"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-linkedin"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-viadeo"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-xing"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-myspace"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-soundcloud"></a>
							<a href="#" className="social-icon color-bg-icon rounded-icon soc-spotify"></a>

							<div className="collapse" id="collapseIcons60">
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-grooveshark"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-lastfm"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-youtube"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-vimeo"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-dailymotion"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-vine"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-flickr"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-500px"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-instagram"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-wordpress"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-tumblr"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-blogger"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-technorati"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-reddit"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-dribbble"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-stumbleupon"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-digg"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-envato"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-behance"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-delicious"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-deviantart"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-forrst"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-play"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-zerply"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-wikipedia"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-apple"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-flattr"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-github"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-chimein"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-friendfeed"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-newsvine"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-identica"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-bebo"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-zynga"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-steam"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-xbox"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-windows"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-outlook"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-coderwall"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-tripadvisor"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-appnet"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-goodreads"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-tripit"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-lanyrd"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-slideshare"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-buffer"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-rss"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-vkontakte"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-disqus"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-houzz"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-mail"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-patreon"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-paypal"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-playstation"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-smugmug"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-swarm"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-triplej"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-yammer"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-stackoverflow"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-drupal"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-odnoklassniki"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-android"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-meetup"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-persona"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-amazon"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-ello"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-mixcloud"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-8tracks"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-twitch"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-airbnb"></a>
								<a href="#" className="social-icon color-bg-icon rounded-icon soc-pocket"></a>
							</div>
						</div>


					</div>
				</div>
			</section>


			<section className="page_copyright theme_copyright texture_bg cs columns_padding_0 columns_margin_0">
				<div className="container">
					<div className="row display_table_md">
						<div className="col-md-4 col-md-push-4 text-center display_table_cell_md">
							<a href="./" className="logo">
								<div className="main_bg_color2">
									<img src={require("./images/logo.png")} alt=""/>
								</div>
								<h1>Clinique</h1>
							</a>
						</div>
						<div className="col-md-4 col-md-pull-4 text-center text-md-left display_table_cell_md">
							<p className="small-text grey margin_0">clinique - wellness &amp; spa resort &copy; 2016</p>
						</div>
						<div className="col-md-4 text-center text-md-right display_table_cell_md">
							<p className="small-text grey margin_0">Created with
								<i className="rt-icon2-heart highlight2"></i> by MWTemplates</p>
						</div>
					</div>
				</div>
			</section>


		</div>
		{/* eof #box_wrapper */}
	</div>
      </div>
    );
  }
}

export default App;
