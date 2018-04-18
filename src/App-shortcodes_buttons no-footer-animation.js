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
									<a href="#">Shortcodes</a>
								</li>
								<li className="active">Buttons</li>
							</ol>
						</div>
						<div className="col-sm-4 text-center">
							<h1 className="highlight bold">Buttons</h1>
						</div>
						<div className="col-sm-4 hidden-xs"></div>
					</div>
				</div>
			</section>

			<section className="ls ms section_padding_50">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2 className="section_header">Buttons in Light Section</h2>
							<h3>Simple Buttons</h3>

							<div>
								<a className="theme_button" href="#">Theme Button</a>
								<a className="theme_button color1" href="#">Main Color 1 Theme Button</a>
								<a className="theme_button color2" href="#">Main Color 2 Theme Button</a>
								<a className="theme_button inverse" href="#">Inverse Theme Button</a>

							</div>

						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<h2 className="thin">Icon Buttons</h2>
							<a href="#" className="theme_button">Glyphicon Button
								<i className="glyphicon glyphicon-ok"></i>
							</a>
							<a href="#" className="theme_button inverse">
								<i className="glyphicon glyphicon-heart"></i> Glyphicon Button</a>

							<a href="#" className="theme_button color1">Rt-Icon Button
								<i className="rt-icon2-gift"></i>
							</a>
							<a href="#" className="theme_button color2">
								<i className="rt-icon2-star-outline"></i> Rt-Icon Button</a>

							<a href="#" className="theme_button color1">
								<i className="fa fa-external-link"></i> Font Awesome Button</a>
							<a href="#" className="theme_button color2">Font Awesome Button
								<i className="fa fa-info-circle"></i>
							</a>
						</div>


					</div>
				</div>
			</section>


			<section className="ls section_padding_100">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2 className="section_header">Buttons in Grey Section</h2>
							<h3>Simple Buttons</h3>

							<div>
								<a className="theme_button" href="#">Theme Button</a>
								<a className="theme_button color1" href="#">Main Color 1 Theme Button</a>
								<a className="theme_button color2" href="#">Main Color 2 Theme Button</a>
								<a className="theme_button inverse" href="#">Inverse Theme Button</a>

							</div>

						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<h2 className="thin">Icon Buttons</h2>
							<a href="#" className="theme_button">Glyphicon Button
								<i className="glyphicon glyphicon-ok"></i>
							</a>
							<a href="#" className="theme_button inverse">
								<i className="glyphicon glyphicon-heart"></i> Glyphicon Button</a>

							<a href="#" className="theme_button color1">Rt-Icon Button
								<i className="rt-icon2-gift"></i>
							</a>
							<a href="#" className="theme_button color2">
								<i className="rt-icon2-star-outline"></i> Rt-Icon Button</a>

							<a href="#" className="theme_button color1">
								<i className="fa fa-external-link"></i> Font Awesome Button</a>
							<a href="#" className="theme_button color2">Font Awesome Button
								<i className="fa fa-info-circle"></i>
							</a>
						</div>


					</div>
				</div>
			</section>


			<section className="cs section_padding_100">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2 className="section_header">Buttons in Color Section</h2>
							<h3>Simple Buttons</h3>

							<div>
								<a className="theme_button" href="#">Theme Button</a>
								<a className="theme_button color1" href="#">Main Color 1 Theme Button</a>
								<a className="theme_button color2" href="#">Main Color 2 Theme Button</a>
								<a className="theme_button inverse" href="#">Inverse Theme Button</a>

							</div>

						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<h2 className="thin">Icon Buttons</h2>
							<a href="#" className="theme_button">Glyphicon Button
								<i className="glyphicon glyphicon-ok"></i>
							</a>
							<a href="#" className="theme_button inverse">
								<i className="glyphicon glyphicon-heart"></i> Glyphicon Button</a>

							<a href="#" className="theme_button color1">Rt-Icon Button
								<i className="rt-icon2-gift"></i>
							</a>
							<a href="#" className="theme_button color2">
								<i className="rt-icon2-star-outline"></i> Rt-Icon Button</a>

							<a href="#" className="theme_button color1">
								<i className="fa fa-external-link"></i> Font Awesome Button</a>
							<a href="#" className="theme_button color2">Font Awesome Button
								<i className="fa fa-info-circle"></i>
							</a>
						</div>


					</div>
				</div>
			</section>


			<section className="ds ms section_padding_100">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2 className="section_header">Buttons in Darkgrey Section</h2>
							<h3>Simple Buttons</h3>

							<div>
								<a className="theme_button" href="#">Theme Button</a>
								<a className="theme_button color1" href="#">Main Color 1 Theme Button</a>
								<a className="theme_button color2" href="#">Main Color 2 Theme Button</a>
								<a className="theme_button inverse" href="#">Inverse Theme Button</a>

							</div>

						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<h2 className="thin">Icon Buttons</h2>
							<a href="#" className="theme_button">Glyphicon Button
								<i className="glyphicon glyphicon-ok"></i>
							</a>
							<a href="#" className="theme_button inverse">
								<i className="glyphicon glyphicon-heart"></i> Glyphicon Button</a>

							<a href="#" className="theme_button color1">Rt-Icon Button
								<i className="rt-icon2-gift"></i>
							</a>
							<a href="#" className="theme_button color2">
								<i className="rt-icon2-star-outline"></i> Rt-Icon Button</a>

							<a href="#" className="theme_button color1">
								<i className="fa fa-external-link"></i> Font Awesome Button</a>
							<a href="#" className="theme_button color2">Font Awesome Button
								<i className="fa fa-info-circle"></i>
							</a>
						</div>


					</div>
				</div>
			</section>


			<section className="ds section_padding_100">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2 className="section_header">Buttons in Dark Section</h2>
							<h3>Simple Buttons</h3>

							<div>
								<a className="theme_button" href="#">Theme Button</a>
								<a className="theme_button color1" href="#">Main Color 1 Theme Button</a>
								<a className="theme_button color2" href="#">Main Color 2 Theme Button</a>
								<a className="theme_button inverse" href="#">Inverse Theme Button</a>

							</div>

						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<h2 className="thin">Icon Buttons</h2>
							<a href="#" className="theme_button">Glyphicon Button
								<i className="glyphicon glyphicon-ok"></i>
							</a>
							<a href="#" className="theme_button inverse">
								<i className="glyphicon glyphicon-heart"></i> Glyphicon Button</a>

							<a href="#" className="theme_button color1">Rt-Icon Button
								<i className="rt-icon2-gift"></i>
							</a>
							<a href="#" className="theme_button color2">
								<i className="rt-icon2-star-outline"></i> Rt-Icon Button</a>

							<a href="#" className="theme_button color1">
								<i className="fa fa-external-link"></i> Font Awesome Button</a>
							<a href="#" className="theme_button color2">Font Awesome Button
								<i className="fa fa-info-circle"></i>
							</a>
						</div>


					</div>
				</div>
			</section>

			<footer className="page_footer ds ms section_padding_top_60 section_padding_bottom_50">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-6 to_animate" data-animation="scaleAppear">
							<div className="widget widget_text">
								{/* <p> */}
								<a href="./" className="logo bottommargin_20">
									<img src={require("./images/logo.png")} alt="" className="main_bg_color"/>
									<h1>Clinique</h1>
								</a>
								{/* </p> */}
								<p>Some str. 321, Los Angeles, CA, US</p>
								<p>info@company.com</p>
								<p>www.company.com</p>
								<p>8 (800) 123-23456</p>
							</div>
						</div>
						<div className="col-md-3 col-sm-6 to_animate" data-animation="scaleAppear">
							<div className="widget widget_nav_menu greylinks">

								<h3 className="widget-title">Quick Links</h3>
								<div>
									<ul className="menu">
										<li className="">
											<a href="#">Cart</a>
										</li>
										<li className="">
											<a href="#">Checkout</a>
										</li>
										<li className="">
											<a href="#">My account</a>
										</li>
										<li className="">
											<a href="#">Wishlist</a>
										</li>
									</ul>
								</div>

							</div>

						</div>
						<div className="col-md-3 col-sm-6 to_animate" data-animation="scaleAppear">
							<div className="widget widget_nav_menu greylinks">

								<h3 className="widget-title">Customer Care</h3>
								<div>
									<ul className="menu">
										<li className="">
											<a href="#">Customer service</a>
										</li>
										<li className="">
											<a href="#">Track my order</a>
										</li>
										<li className="">
											<a href="#">Shipping&amp;delivery</a>
										</li>
										<li className="">
											<a href="#">Contact us</a>
										</li>
									</ul>
								</div>

							</div>
						</div>
						<div className="col-md-3 col-sm-6 to_animate" data-animation="scaleAppear">
							<div className="widget widget_mailchimp">

								<h3 className="widget-title">Newsletter Signup</h3>

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
						</div>
					</div>
				</div>
			</footer>

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
