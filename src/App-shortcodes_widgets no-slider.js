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
								<li className="active">Widgets</li>
							</ol>
						</div>
						<div className="col-sm-4 text-center">
							<h1 className="highlight bold">Widgets</h1>
						</div>
						<div className="col-sm-4 hidden-xs"></div>
					</div>
				</div>
			</section>

			<section className="ls section_padding_top_50 section_padding_bottom_25">
				<div className="container">
					<div className="row">

						{/* sidebar */}
						<aside className="col-sm-5 col-md-4 col-lg-4">

							<div className="widget widget_popular_entries">

								<h3 className="widget-title">Popular</h3>
								<ul className="media-list darklinks">
									<li className="media">
										<a className="media-left" href="blog-single-right.html">
											<img className="media-object" src={require("./images/recent_post1.jpg")} alt=""/>
										</a>
										<div className="media-body">
											<p>
												<a href="blog-single-right.html">Eod tempor invidunt labore dolore magna</a>
											</p>
											<div className="star-rating" title="Rated 5 out of 5">
												<span style={{width:'100%'}}>
													<strong className="rating">5</strong> out of 5
												</span>
											</div>
										</div>
									</li>

									<li className="media">
										<a className="media-left" href="blog-single-right.html">
											<img className="media-object" src={require("./images/recent_post2.jpg")} alt=""/>
										</a>
										<div className="media-body">
											<p>
												<a href="blog-single-right.html">Aliquyam erat, sed voluptua vero eos </a>
											</p>
											<div className="star-rating" title="Rated 4.0 out of 5">
												<span style={{width:'60%'}}>
													<strong className="rating">4</strong> out of 5
												</span>
											</div>

										</div>
									</li>

									<li className="media">
										<a className="media-left" href="blog-single-right.html">
											<img className="media-object" src={require("./images/recent_post1.jpg")} alt=""/>
										</a>
										<div className="media-body">
											<p>
												<a href="blog-single-right.html">Et justo duo dolores et ea rebum</a>
											</p>
											<div className="star-rating" title="Rated 4.50 out of 5">
												<span style={{width:'80%'}}>
													<strong className="rating">4.50</strong> out of 5
												</span>
											</div>

										</div>
									</li>

									<li className="media">
										<a className="media-left" href="blog-single-right.html">
											<img className="media-object" src={require("./images/recent_post2.jpg")} alt=""/>
										</a>
										<div className="media-body">
											<p>
												<a href="blog-single-right.html">Stetclita kasd gubergren no sea takimata</a>
											</p>
											<div className="star-rating" title="Rated 3.00 out of 5">
												<span style={{width:'40%'}}>
													<strong className="rating">3</strong> out of 5
												</span>
											</div>

										</div>
									</li>

									<li className="media">
										<a className="media-left" href="blog-single-right.html">
											<img className="media-object" src={require("./images/recent_post1.jpg")} alt=""/>
										</a>
										<div className="media-body">
											<p>
												<a href="blog-single-right.html">Lorem ipsum dolor sitmet amet consetetur </a>
											</p>
											<div className="star-rating" title="Rated 4.50 out of 5">
												<span style={{width:'90%'}}>
													<strong className="rating">4.50</strong> out of 5
												</span>
											</div>

										</div>
									</li>

								</ul>
							</div>

							<div className="widget widget_archive">

								<h3 className="widget-title">Archive widget</h3>
								<form className="signup form-inline" action="/" method="get">
									<div className="form-group select-group">
										<select aria-required="true" id="month" name="mounth" className="choice">
											<option value="" selected data-default>Select Month</option>
											<option value="january">January</option>
											<option value="february">February</option>
											<option value="march">March</option>
											<option value="april">April</option>
											<option value="may">May</option>
											<option value="june">June</option>
											<option value="july">July</option>
											<option value="august">August</option>
											<option value="september">September</option>
											<option value="october">October</option>
											<option value="november">November</option>
											<option value="december">December</option>
										</select>
										<i className="fa fa-caret-down form-button highlight"></i>
									</div>
								</form>
							</div>

							<div className="widget widget_recent_comments">
								<h3 className="widget-title">Recent Comments</h3>
								<ul className="darklinks">
									<li>
										<a href="blog-single-right.html#comments" rel="external nofollow" className="url">Lara Smith</a> on
										<a href="blog-single-right.html">Ut wisi enim ad</a>
									</li>
									<li>
										<a href="blog-single-right.html#comments" rel="external nofollow" className="url">Alan Doe</a> on
										<a href="blog-single-right.html">Consetetur sadipscing</a>
									</li>
									<li>
										<a href="blog-single-right.html#comments" rel="external nofollow" className="url">Andrew Jhonson</a> on
										<a href="blog-single-right.html">Ut wisi ad</a>
									</li>
									<li>
										<a href="blog-single-right.html#comments" rel="external nofollow" className="url">John Doe</a> on
										<a href="blog-single-right.html">Lorem ipsum dolor</a>
									</li>
								</ul>
							</div>

							<div className="widget widget_recent_entries">
								<h3 className="widget-title">Recent Entries</h3>
								<ul className="darklinks">
									<li className="media">
										<a className="media-left media-middle" href="blog-single-right.html">
											<img className="media-object" src={require("./images/recent_post1.jpg")} alt=""/>
										</a>
										<div className="media-body media-middle">
											<h6 className="margin_0">
												<a href="#">Beef ribs fugiat flank rump ea aute nulla enderit</a>
											</h6>
											<time datetime="2016-09-03T15:05:23+00:00" className="entry-date highlight2 small-text bold">23.03.2016</time>
										</div>
									</li>
									<li className="media">
										<a className="media-left media-middle" href="blog-single-right.html">
											<img className="media-object" src={require("./images/recent_post2.jpg")} alt=""/>
										</a>
										<div className="media-body media-middle">
											<h6 className="margin_0">
												<a href="#">Kevin chicken reprehenderit beef deserunt Velit irure</a>
											</h6>
											<time datetime="2016-09-03T15:05:23+00:00" className="entry-date highlight2 small-text bold">23.03.2016</time>
										</div>
									</li>
									<li className="media">
										<a className="media-left media-middle" href="blog-single-right.html">
											<img className="media-object" src={require("./images/recent_post3.jpg")} alt=""/>
										</a>
										<div className="media-body media-middle">
											<h6 className="margin_0">
												<a href="#">Do chicken est shoulder anim shankle enim beef ribs</a>
											</h6>
											<time datetime="2016-09-03T15:05:23+00:00" className="entry-date highlight2 small-text bold">23.03.2016</time>
										</div>
									</li>
								</ul>
							</div>


							<div className="widget widget_calendar">

								<h3 className="widget-title">Calendar</h3>
								<div id="calendar_wrap">
									<table id="wp-calendar" className="with_background">
										<caption>Jan 2016</caption>
										<thead>
											<tr>
												<th scope="col" title="Monday">Mon</th>
												<th scope="col" title="Tuesday">Tue</th>
												<th scope="col" title="Wednesday">Wed</th>
												<th scope="col" title="Thursday">Thu</th>
												<th scope="col" title="Friday">Fri</th>
												<th scope="col" title="Saturday">Sat</th>
												<th scope="col" title="Sunday">Sun</th>
											</tr>
										</thead>
										<tfoot>
											<tr>
												<td colspan="3" id="prev">
													<a href="blog-right.html" data-toggle="tooltip" title="Prev">Jan</a>
												</td>
												<td className="pad">&nbsp;</td>
												<td colspan="3" id="next">
													<a href="blog-right.html" data-toggle="tooltip" title="Next">Mar</a>
												</td>
											</tr>
										</tfoot>
										<tbody>
											<tr>
												<td colspan="4" className="pad">&nbsp;</td>
												<td>1</td>
												<td>2</td>
												<td>
													<a href="blog-right.html" title="">3</a>
												</td>
											</tr>
											<tr>
												<td>4</td>
												<td>5</td>
												<td>
													<a href="blog-right.html" title="">6</a>
												</td>
												<td>7</td>
												<td>8</td>
												<td>9</td>
												<td>10</td>
											</tr>
											<tr>
												<td>11</td>
												<td>12</td>
												<td>13</td>
												<td>14</td>
												<td>15</td>
												<td>16</td>
												<td>17</td>
											</tr>
											<tr>
												<td>18</td>
												<td>
													<a href="blog-right.html" title="">19</a>
												</td>
												<td id="today">20</td>
												<td>21</td>
												<td>22</td>
												<td>23</td>
												<td>24</td>
											</tr>
											<tr>
												<td>25</td>
												<td>26</td>
												<td>27</td>
												<td>28</td>
												<td>29</td>
												<td>30</td>
												<td>31</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>


							<div className="widget widget_categories">

								<h3 className="widget-title">Categories</h3>
								<form className="signup form-inline" action="/" method="get">
									<div className="form-group select-group">
										<select aria-required="true" id="categories" name="category" className="choice">
											<option value="" selected data-default>Select Category</option>
											<option value="repair">Repair</option>
											<option value="parts">Parts</option>
											<option value="services">Services</option>
											<option value="appliance">Appliance</option>
											<option value="miscellaneous">Miscellaneous</option>
										</select>
										<i className="fa fa-caret-down form-button highlight"></i>
									</div>
								</form>
							</div>


							<div className="widget widget_flickr">

								<h3 className="widget-title">Flickr</h3>
								<ul id="flickr"></ul>
							</div>


							<div className="widget widget_mailchimp">

								<h3 className="widget-title">Mailchimp</h3>

								<form className="signup form-inline bold-placeholder" action="/" method="get">
									<div className="form-group">
										<input name="email" type="email" className="mailchimp_email form-control" placeholder="e-mail address"/>
									</div>
									<button type="submit" className="theme_button">
										<i className="rt-icon2-pen2"></i>
										<span className="sr-only">Send</span>
									</button>
									<div className="response"></div>
								</form>
								<p className="margin_0">Subscribe to our latest news to be updated, we promise not to spam!</p>

							</div>

							<div className="widget widget_meta">

								<h3 className="widget-title">Meta Widget</h3>
								<ul className="greylinks">
									<li>
										<a href="#">Site Admin</a>
									</li>
									<li>
										<a href="#">Log out</a>
									</li>
									<li>
										<a href="#" title="">Entries
											<abbr title="">RSS</abbr>
										</a>
									</li>
									<li>
										<a href="#" title="">Comments
											<abbr title="">RSS</abbr>
										</a>
									</li>
									<li>
										<a href="#" title="">WordPress.org</a>
									</li>
								</ul>
							</div>


							<div className="widget widget_nav_menu">

								<h3 className="widget-title">Custom Menu</h3>
								<div>
									<ul className="menu greylinks">
										<li className="">
											<a href="#">Lorem Ipsum</a>
										</li>
										<li className="">
											<a href="#">Dolor Sit</a>
											<ul className="sub-menu">
												<li className="">
													<a href="#">Lorem Ipsum Dolor</a>
												</li>
												<li className="">
													<a href="#">Sit Amet Dolor</a>
												</li>
											</ul>
										</li>
									</ul>
								</div>
							</div>

							<div className="widget widget_pages">

								<h3 className="widget-title">Pages</h3>
								<ul className="greylinks">
									<li>
										<a href="#">Dolor Sit</a>
									</li>
									<li>
										<a href="#">Sit Amet Dolor</a>
									</li>
									<li>
										<a href="#">Lorem Ipsum Dolor</a>
									</li>
								</ul>
							</div>

							<div className="widget widget_search">
								<h3 className="widget-title">Search Widget</h3>
								<form method="get" className="searchform form-inline" action="/">
									<div className="form-group">
										<label className="sr-only" for="page_search">Search for:</label>
										<input type="text" id="page_search" value="" name="search" className="form-control" placeholder="Search to site"/>
									</div>
									<button type="submit" className="theme_button">
										<span className="sr-only">Search</span>
										<i className="rt-icon2-search3 highlight"></i>
									</button>
								</form>
							</div>

							<div className="widget widget_tag_cloud">

								<h3 className="widget-title">Tags</h3>
								<div className="tagcloud">
									<a href="#" title="">Relaxation</a>
									<a href="#" title="">Rejuvination</a>
									<a href="#" title="">Refreshing</a>
									<a href="#" title="">Quote</a>
									<a href="#" title="">Link</a>
								</div>
							</div>

							<div className="widget widget_text">

								<h3 className="widget-title">Text Widget</h3>
								<div className="textwidget">
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore
								</div>
							</div>

							<div className="widget widget_twitter">
								<h3 className="widget-title">Twitter Widget</h3>
								<div className="twitter"></div>
							</div>


							{/* template custom widgets */}

							<div className="widget widget_text">

								<h3 className="widget-title">Share</h3>
								<div className="text-center">
									<a href="#" className="social-icon big-icon color-bg-icon soc-twitter">
										<span>34.5K</span>
										<span>Friends</span>
									</a>
									<a href="#" className="social-icon big-icon color-bg-icon soc-facebook">
										<span>3.2K</span>
										<span>Follows</span>
									</a>
									<a href="#" className="social-icon big-icon color-bg-icon soc-google">
										<span>15.7K</span>
										<span>Friends</span>
									</a>
								</div>

							</div>

							<div className="widget widget_banner">

								<h3 className="widget-title">Banner</h3>
								<div className="vertical-item content-absolute ds">
									<div className="item-media">
										<img src={require("./images/banner_right.jpg")} alt=""/>
									</div>
									<div className="item-content text-center">
										<span className="main_bg_color">
											New
										</span>
										<h3 className="darkgrey_bg_color">
											Solar Accessories
										</h3>
										<span className="light_bg_color">
											Best Choise
										</span>
									</div>
								</div>

							</div>

							<div className="widget widget_slider">

								<h3 className="widget-title">Slider</h3>
								<div className="owl-carousel" data-nav="true" data-loop="true" data-items="1" data-responsive-xlg="1" data-responsive-lg="1" data-responsive-md="1" data-responsive-sm="1" data-responsive-xs="1">
									<div className="vertical-item">
										<div className="item-media">
											<img src={require("./images/gallery/01.jpg")} alt=""/>
										</div>
										<div className="item-content">
											<h4>Consetetur sadipscing elitr</h4>
											<p className="item-meta greylinks">
												By
												<a href="#">Admin</a> on Oct 18, 2015
												<span className="pull-right">
													<i className="rt-icon2-heart-outline highlight"></i> 325</span>
											</p>

										</div>
									</div>

									<div className="vertical-item">
										<div className="item-media">
											<img src={require("./images/gallery/02.jpg")} alt=""/>
										</div>
										<div className="item-content">
											<h4>Consetetur sadipscing elitr</h4>
											<p className="item-meta greylinks">
												By
												<a href="#">Admin</a> on Oct 18, 2015
												<span className="pull-right">
													<i className="rt-icon2-heart-outline highlight"></i> 221</span>
											</p>

										</div>
									</div>

									<div className="vertical-item">
										<div className="item-media">
											<img src={require("./images/gallery/03.jpg")} alt=""/>
										</div>
										<div className="item-content">
											<h4>Consetetur sadipscing elitr</h4>
											<p className="item-meta greylinks">
												By
												<a href="#">Admin</a> on Oct 18, 2015
												<span className="pull-right">
													<i className="rt-icon2-heart-outline highlight"></i> 58</span>
											</p>

										</div>
									</div>

									<div className="vertical-item">
										<div className="item-media">
											<img src={require("./images/gallery/04.jpg")} alt=""/>
										</div>
										<div className="item-content">
											<h4>Consetetur sadipscing elitr</h4>
											<p className="item-meta greylinks">
												By
												<a href="#">Admin</a> on Oct 18, 2015
												<span className="pull-right">
													<i className="rt-icon2-heart-outline highlight"></i> 241</span>
											</p>

										</div>
									</div>

								</div>

							</div>

							<div className="widget widget_tabs">

								<h3 className="widget-title">Tabs Posts</h3>

								{/* Nav tabs */}
								<ul className="nav nav-tabs" role="tablist">
									<li className="active">
										<a href="#widget-tab4" role="tab" data-toggle="tab">Recent</a>
									</li>
									<li>
										<a href="#widget-tab5" role="tab" data-toggle="tab">Popular</a>
									</li>
									<li>
										<a href="#widget-tab6" role="tab" data-toggle="tab">Rated</a>
									</li>
								</ul>

								{/* Tab panes */}
								<div className="tab-content top-color-border no-border">


									<div className="tab-pane fade in active" id="widget-tab4">

										<div className="vertical-item">
											<div className="item-media">
												<img src={require("./images/gallery/01.jpg")} alt=""/>
											</div>
											<div className="item-content">
												<h4>Consetetur sadipscing elitr</h4>
												<p className="item-meta greylinks">
													By
													<a href="#">Admin</a> on Oct 18, 2015
													<span className="pull-right">
														<i className="rt-icon2-heart-outline highlight"></i> 53</span>
												</p>

											</div>
										</div>

										<div className="vertical-item">
											<div className="item-media">
												<img src={require("./images/gallery/02.jpg")} alt=""/>
											</div>
											<div className="item-content">
												<h4>Consetetur sadipscing elitr</h4>
												<p className="item-meta greylinks">
													By
													<a href="#">Admin</a> on Oct 18, 2015
													<span className="pull-right">
														<i className="rt-icon2-heart-outline highlight"></i> 221</span>
												</p>

											</div>
										</div>

										<div className="vertical-item">
											<div className="item-media">
												<img src={require("./images/gallery/03.jpg")} alt=""/>
											</div>
											<div className="item-content">
												<h4>Consetetur sadipscing elitr</h4>
												<p className="item-meta greylinks">
													By
													<a href="#">Admin</a> on Oct 18, 2015
													<span className="pull-right">
														<i className="rt-icon2-heart-outline highlight"></i> 631</span>
												</p>

											</div>
										</div>

									</div>
									{/* eof tab */}


									<div className="tab-pane fade" id="widget-tab5">

										<div className="vertical-item">
											<div className="item-media">
												<img src={require("./images/gallery/04.jpg")} alt=""/>
											</div>
											<div className="item-content">
												<h4>Consetetur sadipscing elitr</h4>
												<p className="item-meta greylinks">
													By
													<a href="#">Admin</a> on Oct 18, 2015
													<span className="pull-right">
														<i className="rt-icon2-heart-outline highlight"></i> 423</span>
												</p>

											</div>
										</div>

										<div className="vertical-item">
											<div className="item-media">
												<img src={require("./images/gallery/05.jpg")} alt=""/>
											</div>
											<div className="item-content">
												<h4>Consetetur sadipscing elitr</h4>
												<p className="item-meta greylinks">
													By
													<a href="#">Admin</a> on Oct 18, 2015
													<span className="pull-right">
														<i className="rt-icon2-heart-outline highlight"></i> 98</span>
												</p>

											</div>
										</div>

										<div className="vertical-item">
											<div className="item-media">
												<img src={require("./images/gallery/06.jpg")} alt=""/>
											</div>
											<div className="item-content">
												<h4>Consetetur sadipscing elitr</h4>
												<p className="item-meta greylinks">
													By
													<a href="#">Admin</a> on Oct 18, 2015
													<span className="pull-right">
														<i className="rt-icon2-heart-outline highlight"></i> 123</span>
												</p>

											</div>
										</div>

									</div>
									{/* eof tab */}


									<div className="tab-pane fade" id="widget-tab6">
										<div className="vertical-item">
											<div className="item-media">
												<img src={require("./images/gallery/07.jpg")} alt=""/>
											</div>
											<div className="item-content">
												<h4>Consetetur sadipscing elitr</h4>
												<p className="item-meta greylinks">
													By
													<a href="#">Admin</a> on Oct 18, 2015
													<span className="pull-right">
														<i className="rt-icon2-heart-outline highlight"></i> 423</span>
												</p>

											</div>
										</div>

										<div className="vertical-item">
											<div className="item-media">
												<img src={require("./images/gallery/08.jpg")} alt=""/>
											</div>
											<div className="item-content">
												<h4>Consetetur sadipscing elitr</h4>
												<p className="item-meta greylinks">
													By
													<a href="#">Admin</a> on Oct 18, 2015
													<span className="pull-right">
														<i className="rt-icon2-heart-outline highlight"></i> 612</span>
												</p>

											</div>
										</div>

										<div className="vertical-item">
											<div className="item-media">
												<img src={require("./images/gallery/09.jpg")} alt=""/>
											</div>
											<div className="item-content">
												<h4>Consetetur sadipscing elitr</h4>
												<p className="item-meta greylinks">
													By
													<a href="#">Admin</a> on Oct 18, 2015
													<span className="pull-right">
														<i className="rt-icon2-heart-outline highlight"></i> 311</span>
												</p>

											</div>
										</div>
									</div>
									{/* eof tab */}

								</div>
								{/* eof tab-content */}

							</div>
							{/* eof widget */}

						</aside>
						{/* eof aside sidebar */}

						<div className="col-sm-7 col-md-8 col-lg-8">

							<h1 className="entry-title topmargin_0">All Widgets</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

							<div className="row">
								<div className="col-md-6">
									<h3 className="topmargin_0">1/2</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
								</div>
								<div className="col-md-6">
									<h3 className="topmargin_0">1/2</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
								</div>
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
								</div>
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro.</p>
								</div>
							</div>

							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

							<div className="row">
								<div className="col-md-6">
									<h3 className="topmargin_0">1/2</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
								</div>
								<div className="col-md-6">
									<h3 className="topmargin_0">1/2</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
								</div>
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
								</div>
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro.</p>
								</div>
							</div>

							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

							<div className="row">
								<div className="col-md-6">
									<h3 className="topmargin_0">1/2</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
								</div>
								<div className="col-md-6">
									<h3 className="topmargin_0">1/2</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
								</div>
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
								</div>
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro.</p>
								</div>
							</div>

							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

							<div className="row">
								<div className="col-md-6">
									<h3 className="topmargin_0">1/2</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
								</div>
								<div className="col-md-6">
									<h3 className="topmargin_0">1/2</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
								</div>
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
								</div>
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro.</p>
								</div>
							</div>

							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

							<div className="row">
								<div className="col-md-6">
									<h3 className="topmargin_0">1/2</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
								</div>
								<div className="col-md-6">
									<h3 className="topmargin_0">1/2</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
								</div>
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
								</div>
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro.</p>
								</div>
							</div>

							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

							<div className="row">
								<div className="col-md-6">
									<h3 className="topmargin_0">1/2</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
								</div>
								<div className="col-md-6">
									<h3 className="topmargin_0">1/2</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
								</div>
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
								</div>
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro.</p>
								</div>
							</div>

							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

							<div className="row">
								<div className="col-md-6">
									<h3 className="topmargin_0">1/2</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
								</div>
								<div className="col-md-6">
									<h3 className="topmargin_0">1/2</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
								</div>
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
								</div>
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro.</p>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6">
									<h3 className="topmargin_0">1/2</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
								</div>
								<div className="col-md-6">
									<h3 className="topmargin_0">1/2</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem nisi unde itaque, aliquid. Necessitatibus, dolorem tempora repudiandae modi. Quis, esse eveniet suscipit! Enim dicta voluptate quas ea, facilis repellat!</p>
								</div>
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro numquam?</p>
								</div>
								<div className="col-md-4">
									<h3 className="topmargin_0">1/3</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus obcaecati incidunt quas iusto eos nobis. Laudantium veniam, reprehenderit nemo alias ducimus, illo, omnis voluptas doloribus cupiditate repudiandae porro.</p>
								</div>
							</div>

							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>


						</div>
						{/*eof .col-sm-* (main content)*/}

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
