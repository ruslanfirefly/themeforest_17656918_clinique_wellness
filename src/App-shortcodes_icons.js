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
								<li className="active">Template Icons</li>
							</ol>
						</div>
						<div className="col-sm-4 text-center">
							<h1 className="highlight bold">Template Icons</h1>
						</div>
						<div className="col-sm-4 hidden-xs"></div>
					</div>
				</div>
			</section>


			<section className="ls ms section_padding_50">
				<div className="container">

					<div className="row">
						<div className="col-md-12">
							<h2 className="text-center section_header">Icons</h2>
							<p>You can use them in your articles or teasers</p>
						</div>

					</div>

					<div className="row text-center">
						<h3>RT-Icons</h3>

						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-mobile2"></i>
							</div>
							<p>.rt-icon2-mobile2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-laptop2"></i>
							</div>
							<p>.rt-icon2-laptop2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-desktop2"></i>
							</div>
							<p>.rt-icon2-desktop2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tablet2"></i>
							</div>
							<p>.rt-icon2-tablet2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-phone2"></i>
							</div>
							<p>.rt-icon2-phone2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-document"></i>
							</div>
							<p>.rt-icon2-document</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-calendar"></i>
							</div>
							<p>.rt-icon2-calendar</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-picture"></i>
							</div>
							<p>.rt-icon2-picture</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-pictures"></i>
							</div>
							<p>.rt-icon2-pictures</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-video"></i>
							</div>
							<p>.rt-icon2-video</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-camera"></i>
							</div>
							<p>.rt-icon2-camera</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-printer"></i>
							</div>
							<p>.rt-icon2-printer</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-toolbox"></i>
							</div>
							<p>.rt-icon2-toolbox</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-wallet"></i>
							</div>
							<p>.rt-icon2-wallet</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-gift"></i>
							</div>
							<p>.rt-icon2-gift</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-hourglass"></i>
							</div>
							<p>.rt-icon2-hourglass</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-lock"></i>
							</div>
							<p>.rt-icon2-lock</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-megaphone"></i>
							</div>
							<p>.rt-icon2-megaphone</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-telescope"></i>
							</div>
							<p>.rt-icon2-telescope</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-gears"></i>
							</div>
							<p>.rt-icon2-gears</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-key"></i>
							</div>
							<p>.rt-icon2-key</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-attachment"></i>
							</div>
							<p>.rt-icon2-attachment</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-pricetags"></i>
							</div>
							<p>.rt-icon2-pricetags</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-lightbulb"></i>
							</div>
							<p>.rt-icon2-lightbulb</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-layers"></i>
							</div>
							<p>.rt-icon2-layers</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-pencil"></i>
							</div>
							<p>.rt-icon2-pencil</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tools"></i>
							</div>
							<p>.rt-icon2-tools</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tools-2"></i>
							</div>
							<p>.rt-icon2-tools-2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-paintbrush"></i>
							</div>
							<p>.rt-icon2-paintbrush</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-magnifying-glass"></i>
							</div>
							<p>.rt-icon2-magnifying-glass</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-beaker"></i>
							</div>
							<p>.rt-icon2-beaker</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-wine"></i>
							</div>
							<p>.rt-icon2-wine</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-globe"></i>
							</div>
							<p>.rt-icon2-globe</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-map-pin"></i>
							</div>
							<p>.rt-icon2-map-pin</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-upload"></i>
							</div>
							<p>.rt-icon2-upload</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-download"></i>
							</div>
							<p>.rt-icon2-download</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-global"></i>
							</div>
							<p>.rt-icon2-global</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-compass"></i>
							</div>
							<p>.rt-icon2-compass</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-quote"></i>
							</div>
							<p>.rt-icon2-quote</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-quote2"></i>
							</div>
							<p>.rt-icon2-quote2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tag"></i>
							</div>
							<p>.rt-icon2-tag</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-link"></i>
							</div>
							<p>.rt-icon2-link</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cabinet"></i>
							</div>
							<p>.rt-icon2-cabinet</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-calendar2"></i>
							</div>
							<p>.rt-icon2-calendar2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-calendar3"></i>
							</div>
							<p>.rt-icon2-calendar3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file"></i>
							</div>
							<p>.rt-icon2-file</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-phone3"></i>
							</div>
							<p>.rt-icon2-phone3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tablet3"></i>
							</div>
							<p>.rt-icon2-tablet3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-window"></i>
							</div>
							<p>.rt-icon2-window</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-monitor"></i>
							</div>
							<p>.rt-icon2-monitor</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-ipod"></i>
							</div>
							<p>.rt-icon2-ipod</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tv"></i>
							</div>
							<p>.rt-icon2-tv</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-film2"></i>
							</div>
							<p>.rt-icon2-film2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-microphone"></i>
							</div>
							<p>.rt-icon2-microphone</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-drink"></i>
							</div>
							<p>.rt-icon2-drink</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-drink2"></i>
							</div>
							<p>.rt-icon2-drink2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-drink3"></i>
							</div>
							<p>.rt-icon2-drink3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-coffee2"></i>
							</div>
							<p>.rt-icon2-coffee2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-mug"></i>
							</div>
							<p>.rt-icon2-mug</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-icecream"></i>
							</div>
							<p>.rt-icon2-icecream</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cake2"></i>
							</div>
							<p>.rt-icon2-cake2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-checkmark"></i>
							</div>
							<p>.rt-icon2-checkmark</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cancel"></i>
							</div>
							<p>.rt-icon2-cancel</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-plus"></i>
							</div>
							<p>.rt-icon2-plus</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-minus"></i>
							</div>
							<p>.rt-icon2-minus</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cog2"></i>
							</div>
							<p>.rt-icon2-cog2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-health"></i>
							</div>
							<p>.rt-icon2-health</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-suitcase2"></i>
							</div>
							<p>.rt-icon2-suitcase2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-suitcase3"></i>
							</div>
							<p>.rt-icon2-suitcase3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-picture2"></i>
							</div>
							<p>.rt-icon2-picture2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-time"></i>
							</div>
							<p>.rt-icon2-time</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-checkmark2"></i>
							</div>
							<p>.rt-icon2-checkmark2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cancel2"></i>
							</div>
							<p>.rt-icon2-cancel2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-upload2"></i>
							</div>
							<p>.rt-icon2-upload2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-location"></i>
							</div>
							<p>.rt-icon2-location</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-download2"></i>
							</div>
							<p>.rt-icon2-download2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-basket"></i>
							</div>
							<p>.rt-icon2-basket</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-gamepad"></i>
							</div>
							<p>.rt-icon2-gamepad</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-phone4"></i>
							</div>
							<p>.rt-icon2-phone4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-image"></i>
							</div>
							<p>.rt-icon2-image</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-map"></i>
							</div>
							<p>.rt-icon2-map</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-trashcan"></i>
							</div>
							<p>.rt-icon2-trashcan</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-graduate"></i>
							</div>
							<p>.rt-icon2-graduate</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-lab"></i>
							</div>
							<p>.rt-icon2-lab</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tie"></i>
							</div>
							<p>.rt-icon2-tie</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-football"></i>
							</div>
							<p>.rt-icon2-football</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-eightball"></i>
							</div>
							<p>.rt-icon2-eightball</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-bowling"></i>
							</div>
							<p>.rt-icon2-bowling</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-bowlingpin"></i>
							</div>
							<p>.rt-icon2-bowlingpin</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-baseball"></i>
							</div>
							<p>.rt-icon2-baseball</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-soccer"></i>
							</div>
							<p>.rt-icon2-soccer</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-3dglasses"></i>
							</div>
							<p>.rt-icon2-3dglasses</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-microwave"></i>
							</div>
							<p>.rt-icon2-microwave</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-refrigerator"></i>
							</div>
							<p>.rt-icon2-refrigerator</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-oven"></i>
							</div>
							<p>.rt-icon2-oven</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-washingmachine"></i>
							</div>
							<p>.rt-icon2-washingmachine</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-mouse"></i>
							</div>
							<p>.rt-icon2-mouse</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-medal"></i>
							</div>
							<p>.rt-icon2-medal</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-magnifier"></i>
							</div>
							<p>.rt-icon2-magnifier</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-stack"></i>
							</div>
							<p>.rt-icon2-stack</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-stack2"></i>
							</div>
							<p>.rt-icon2-stack2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-stack3"></i>
							</div>
							<p>.rt-icon2-stack3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-pil"></i>
							</div>
							<p>.rt-icon2-pil</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-injection"></i>
							</div>
							<p>.rt-icon2-injection</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-thermometer"></i>
							</div>
							<p>.rt-icon2-thermometer</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-library"></i>
							</div>
							<p>.rt-icon2-library</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-auction"></i>
							</div>
							<p>.rt-icon2-auction</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-justice"></i>
							</div>
							<p>.rt-icon2-justice</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-pencil2"></i>
							</div>
							<p>.rt-icon2-pencil2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-male"></i>
							</div>
							<p>.rt-icon2-male</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-female"></i>
							</div>
							<p>.rt-icon2-female</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-pictures2"></i>
							</div>
							<p>.rt-icon2-pictures2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-compass2"></i>
							</div>
							<p>.rt-icon2-compass2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-clipboard"></i>
							</div>
							<p>.rt-icon2-clipboard</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-ruler"></i>
							</div>
							<p>.rt-icon2-ruler</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-heart"></i>
							</div>
							<p>.rt-icon2-heart</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cloud"></i>
							</div>
							<p>.rt-icon2-cloud</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-star"></i>
							</div>
							<p>.rt-icon2-star</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tv2"></i>
							</div>
							<p>.rt-icon2-tv2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-sound"></i>
							</div>
							<p>.rt-icon2-sound</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-video2"></i>
							</div>
							<p>.rt-icon2-video2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-trash"></i>
							</div>
							<p>.rt-icon2-trash</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-user"></i>
							</div>
							<p>.rt-icon2-user</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-key2"></i>
							</div>
							<p>.rt-icon2-key2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-search2"></i>
							</div>
							<p>.rt-icon2-search2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-settings"></i>
							</div>
							<p>.rt-icon2-settings</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-camera2"></i>
							</div>
							<p>.rt-icon2-camera2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tag2"></i>
							</div>
							<p>.rt-icon2-tag2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-lock2"></i>
							</div>
							<p>.rt-icon2-lock2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-bulb"></i>
							</div>
							<p>.rt-icon2-bulb</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-pen"></i>
							</div>
							<p>.rt-icon2-pen</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-diamond2"></i>
							</div>
							<p>.rt-icon2-diamond2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-display"></i>
							</div>
							<p>.rt-icon2-display</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-location2"></i>
							</div>
							<p>.rt-icon2-location2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-eye"></i>
							</div>
							<p>.rt-icon2-eye</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-comments"></i>
							</div>
							<p>.rt-icon2-comments</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-stack4"></i>
							</div>
							<p>.rt-icon2-stack4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cup"></i>
							</div>
							<p>.rt-icon2-cup</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-phone5"></i>
							</div>
							<p>.rt-icon2-phone5</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-news"></i>
							</div>
							<p>.rt-icon2-news</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-mail"></i>
							</div>
							<p>.rt-icon2-mail</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-like"></i>
							</div>
							<p>.rt-icon2-like</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-photo"></i>
							</div>
							<p>.rt-icon2-photo</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-note"></i>
							</div>
							<p>.rt-icon2-note</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-clock"></i>
							</div>
							<p>.rt-icon2-clock</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-paperplane"></i>
							</div>
							<p>.rt-icon2-paperplane</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-params"></i>
							</div>
							<p>.rt-icon2-params</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-banknote"></i>
							</div>
							<p>.rt-icon2-banknote</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-data"></i>
							</div>
							<p>.rt-icon2-data</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-music"></i>
							</div>
							<p>.rt-icon2-music</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-megaphone2"></i>
							</div>
							<p>.rt-icon2-megaphone2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-study"></i>
							</div>
							<p>.rt-icon2-study</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-lab2"></i>
							</div>
							<p>.rt-icon2-lab2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-food"></i>
							</div>
							<p>.rt-icon2-food</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-t-shirt"></i>
							</div>
							<p>.rt-icon2-t-shirt</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-fire"></i>
							</div>
							<p>.rt-icon2-fire</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-clip"></i>
							</div>
							<p>.rt-icon2-clip</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-shop"></i>
							</div>
							<p>.rt-icon2-shop</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-calendar4"></i>
							</div>
							<p>.rt-icon2-calendar4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-wallet2"></i>
							</div>
							<p>.rt-icon2-wallet2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-vynil"></i>
							</div>
							<p>.rt-icon2-vynil</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-truck"></i>
							</div>
							<p>.rt-icon2-truck</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-world"></i>
							</div>
							<p>.rt-icon2-world</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-sun"></i>
							</div>
							<p>.rt-icon2-sun</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-moon"></i>
							</div>
							<p>.rt-icon2-moon</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cloudy"></i>
							</div>
							<p>.rt-icon2-cloudy</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-lightning"></i>
							</div>
							<p>.rt-icon2-lightning</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-rainy"></i>
							</div>
							<p>.rt-icon2-rainy</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-rainy2"></i>
							</div>
							<p>.rt-icon2-rainy2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-snowy"></i>
							</div>
							<p>.rt-icon2-snowy</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-snowy2"></i>
							</div>
							<p>.rt-icon2-snowy2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-weather"></i>
							</div>
							<p>.rt-icon2-weather</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-store"></i>
							</div>
							<p>.rt-icon2-store</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-out"></i>
							</div>
							<p>.rt-icon2-out</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-in"></i>
							</div>
							<p>.rt-icon2-in</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-in-alt"></i>
							</div>
							<p>.rt-icon2-in-alt</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-home"></i>
							</div>
							<p>.rt-icon2-home</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-lightbulb2"></i>
							</div>
							<p>.rt-icon2-lightbulb2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-anchor"></i>
							</div>
							<p>.rt-icon2-anchor</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-feather"></i>
							</div>
							<p>.rt-icon2-feather</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-expand"></i>
							</div>
							<p>.rt-icon2-expand</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-maximize"></i>
							</div>
							<p>.rt-icon2-maximize</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-search3"></i>
							</div>
							<p>.rt-icon2-search3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-add"></i>
							</div>
							<p>.rt-icon2-add</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-subtract"></i>
							</div>
							<p>.rt-icon2-subtract</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-close2"></i>
							</div>
							<p>.rt-icon2-close2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-book"></i>
							</div>
							<p>.rt-icon2-book</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-spinner"></i>
							</div>
							<p>.rt-icon2-spinner</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-play"></i>
							</div>
							<p>.rt-icon2-play</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-stop"></i>
							</div>
							<p>.rt-icon2-stop</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-pause"></i>
							</div>
							<p>.rt-icon2-pause</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-forward"></i>
							</div>
							<p>.rt-icon2-forward</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-rewind"></i>
							</div>
							<p>.rt-icon2-rewind</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-sound2"></i>
							</div>
							<p>.rt-icon2-sound2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-sound-alt"></i>
							</div>
							<p>.rt-icon2-sound-alt</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-soundoff"></i>
							</div>
							<p>.rt-icon2-soundoff</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-inbox"></i>
							</div>
							<p>.rt-icon2-inbox</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-inbox-alt"></i>
							</div>
							<p>.rt-icon2-inbox-alt</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-envelope"></i>
							</div>
							<p>.rt-icon2-envelope</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-compose"></i>
							</div>
							<p>.rt-icon2-compose</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-newspaper-alt"></i>
							</div>
							<p>.rt-icon2-newspaper-alt</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-calendar5"></i>
							</div>
							<p>.rt-icon2-calendar5</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-hyperlink"></i>
							</div>
							<p>.rt-icon2-hyperlink</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-trash2"></i>
							</div>
							<p>.rt-icon2-trash2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-menu"></i>
							</div>
							<p>.rt-icon2-menu</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-gallery"></i>
							</div>
							<p>.rt-icon2-gallery</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-calculator"></i>
							</div>
							<p>.rt-icon2-calculator</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-clock2"></i>
							</div>
							<p>.rt-icon2-clock2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-portfolio"></i>
							</div>
							<p>.rt-icon2-portfolio</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-user2"></i>
							</div>
							<p>.rt-icon2-user2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-users"></i>
							</div>
							<p>.rt-icon2-users</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-heart2"></i>
							</div>
							<p>.rt-icon2-heart2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chat"></i>
							</div>
							<p>.rt-icon2-chat</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-comments"></i>
							</div>
							<p>.rt-icon2-comments</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-screen"></i>
							</div>
							<p>.rt-icon2-screen</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-iphone"></i>
							</div>
							<p>.rt-icon2-iphone</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-instagram"></i>
							</div>
							<p>.rt-icon2-instagram</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-pin-alt"></i>
							</div>
							<p>.rt-icon2-pin-alt</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-camera3"></i>
							</div>
							<p>.rt-icon2-camera3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-down"></i>
							</div>
							<p>.rt-icon2-chevron-down</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-left"></i>
							</div>
							<p>.rt-icon2-chevron-left</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-right"></i>
							</div>
							<p>.rt-icon2-chevron-right</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-up"></i>
							</div>
							<p>.rt-icon2-chevron-up</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-quote3"></i>
							</div>
							<p>.rt-icon2-quote3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-search4"></i>
							</div>
							<p>.rt-icon2-search4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-triangle-down"></i>
							</div>
							<p>.rt-icon2-triangle-down</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-triangle-left"></i>
							</div>
							<p>.rt-icon2-triangle-left</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-triangle-right"></i>
							</div>
							<p>.rt-icon2-triangle-right</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-triangle-up"></i>
							</div>
							<p>.rt-icon2-triangle-up</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-empty"></i>
							</div>
							<p>.rt-icon2-file-empty</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-files-empty"></i>
							</div>
							<p>.rt-icon2-files-empty</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-text2"></i>
							</div>
							<p>.rt-icon2-file-text2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-picture"></i>
							</div>
							<p>.rt-icon2-file-picture</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-music"></i>
							</div>
							<p>.rt-icon2-file-music</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-play"></i>
							</div>
							<p>.rt-icon2-file-play</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-video"></i>
							</div>
							<p>.rt-icon2-file-video</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-zip"></i>
							</div>
							<p>.rt-icon2-file-zip</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-phone6"></i>
							</div>
							<p>.rt-icon2-phone6</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-quotes-left"></i>
							</div>
							<p>.rt-icon2-quotes-left</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-quotes-right"></i>
							</div>
							<p>.rt-icon2-quotes-right</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-spinner6"></i>
							</div>
							<p>.rt-icon2-spinner6</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-magnet"></i>
							</div>
							<p>.rt-icon2-magnet</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-google"></i>
							</div>
							<p>.rt-icon2-google</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-google-plus"></i>
							</div>
							<p>.rt-icon2-google-plus</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-google-plus2"></i>
							</div>
							<p>.rt-icon2-google-plus2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-google-plus3"></i>
							</div>
							<p>.rt-icon2-google-plus3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-google-drive"></i>
							</div>
							<p>.rt-icon2-google-drive</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-facebook"></i>
							</div>
							<p>.rt-icon2-facebook</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-facebook2"></i>
							</div>
							<p>.rt-icon2-facebook2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-facebook3"></i>
							</div>
							<p>.rt-icon2-facebook3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-instagram2"></i>
							</div>
							<p>.rt-icon2-instagram2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-twitter"></i>
							</div>
							<p>.rt-icon2-twitter</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-twitter2"></i>
							</div>
							<p>.rt-icon2-twitter2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-twitter3"></i>
							</div>
							<p>.rt-icon2-twitter3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-feed2"></i>
							</div>
							<p>.rt-icon2-feed2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-feed3"></i>
							</div>
							<p>.rt-icon2-feed3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-feed4"></i>
							</div>
							<p>.rt-icon2-feed4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-youtube5"></i>
							</div>
							<p>.rt-icon2-youtube5</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-youtube2"></i>
							</div>
							<p>.rt-icon2-youtube2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-youtube3"></i>
							</div>
							<p>.rt-icon2-youtube3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-youtube4"></i>
							</div>
							<p>.rt-icon2-youtube4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-vimeo"></i>
							</div>
							<p>.rt-icon2-vimeo</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-vimeo2"></i>
							</div>
							<p>.rt-icon2-vimeo2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-vimeo3"></i>
							</div>
							<p>.rt-icon2-vimeo3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-lanyrd"></i>
							</div>
							<p>.rt-icon2-lanyrd</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-flickr"></i>
							</div>
							<p>.rt-icon2-flickr</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-flickr2"></i>
							</div>
							<p>.rt-icon2-flickr2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-flickr3"></i>
							</div>
							<p>.rt-icon2-flickr3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-flickr4"></i>
							</div>
							<p>.rt-icon2-flickr4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-picassa"></i>
							</div>
							<p>.rt-icon2-picassa</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-picassa2"></i>
							</div>
							<p>.rt-icon2-picassa2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-dribbble"></i>
							</div>
							<p>.rt-icon2-dribbble</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-dribbble2"></i>
							</div>
							<p>.rt-icon2-dribbble2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-dribbble3"></i>
							</div>
							<p>.rt-icon2-dribbble3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-dropbox"></i>
							</div>
							<p>.rt-icon2-dropbox</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-github3"></i>
							</div>
							<p>.rt-icon2-github3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-wordpress"></i>
							</div>
							<p>.rt-icon2-wordpress</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-wordpress2"></i>
							</div>
							<p>.rt-icon2-wordpress2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-joomla"></i>
							</div>
							<p>.rt-icon2-joomla</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-blogger"></i>
							</div>
							<p>.rt-icon2-blogger</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-blogger2"></i>
							</div>
							<p>.rt-icon2-blogger2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tumblr"></i>
							</div>
							<p>.rt-icon2-tumblr</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tumblr2"></i>
							</div>
							<p>.rt-icon2-tumblr2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-apple"></i>
							</div>
							<p>.rt-icon2-apple</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-android"></i>
							</div>
							<p>.rt-icon2-android</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-windows"></i>
							</div>
							<p>.rt-icon2-windows</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-windows8"></i>
							</div>
							<p>.rt-icon2-windows8</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-skype"></i>
							</div>
							<p>.rt-icon2-skype</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-reddit"></i>
							</div>
							<p>.rt-icon2-reddit</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-linkedin"></i>
							</div>
							<p>.rt-icon2-linkedin</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-linkedin2"></i>
							</div>
							<p>.rt-icon2-linkedin2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-lastfm"></i>
							</div>
							<p>.rt-icon2-lastfm</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-lastfm2"></i>
							</div>
							<p>.rt-icon2-lastfm2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-delicious"></i>
							</div>
							<p>.rt-icon2-delicious</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-stumbleupon"></i>
							</div>
							<p>.rt-icon2-stumbleupon</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-stumbleupon2"></i>
							</div>
							<p>.rt-icon2-stumbleupon2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-pinterest"></i>
							</div>
							<p>.rt-icon2-pinterest</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-pinterest2"></i>
							</div>
							<p>.rt-icon2-pinterest2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-html5"></i>
							</div>
							<p>.rt-icon2-html5</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-html52"></i>
							</div>
							<p>.rt-icon2-html52</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-css3"></i>
							</div>
							<p>.rt-icon2-css3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chrome"></i>
							</div>
							<p>.rt-icon2-chrome</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-firefox"></i>
							</div>
							<p>.rt-icon2-firefox</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-IE"></i>
							</div>
							<p>.rt-icon2-IE</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-opera"></i>
							</div>
							<p>.rt-icon2-opera</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-safari"></i>
							</div>
							<p>.rt-icon2-safari</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-times2"></i>
							</div>
							<p>.rt-icon2-times2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tick"></i>
							</div>
							<p>.rt-icon2-tick</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-plus2"></i>
							</div>
							<p>.rt-icon2-plus2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-minus2"></i>
							</div>
							<p>.rt-icon2-minus2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-equals"></i>
							</div>
							<p>.rt-icon2-equals</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-divide"></i>
							</div>
							<p>.rt-icon2-divide</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-right2"></i>
							</div>
							<p>.rt-icon2-chevron-right2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-left2"></i>
							</div>
							<p>.rt-icon2-chevron-left2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-arrow-right-thick"></i>
							</div>
							<p>.rt-icon2-arrow-right-thick</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-arrow-left-thick"></i>
							</div>
							<p>.rt-icon2-arrow-left-thick</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-home2"></i>
							</div>
							<p>.rt-icon2-home2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-arrow-forward"></i>
							</div>
							<p>.rt-icon2-arrow-forward</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-arrow-back"></i>
							</div>
							<p>.rt-icon2-arrow-back</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-link2"></i>
							</div>
							<p>.rt-icon2-link2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-image2"></i>
							</div>
							<p>.rt-icon2-image2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-delete-outline"></i>
							</div>
							<p>.rt-icon2-delete-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cloud-storage"></i>
							</div>
							<p>.rt-icon2-cloud-storage</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-heart3"></i>
							</div>
							<p>.rt-icon2-heart3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-attachment2"></i>
							</div>
							<p>.rt-icon2-attachment2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-media-pause"></i>
							</div>
							<p>.rt-icon2-media-pause</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-group"></i>
							</div>
							<p>.rt-icon2-group</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chart-pie"></i>
							</div>
							<p>.rt-icon2-chart-pie</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chart-line"></i>
							</div>
							<p>.rt-icon2-chart-line</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chart-bar"></i>
							</div>
							<p>.rt-icon2-chart-bar</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chart-area"></i>
							</div>
							<p>.rt-icon2-chart-area</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-globe2"></i>
							</div>
							<p>.rt-icon2-globe2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-eye2"></i>
							</div>
							<p>.rt-icon2-eye2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cog3"></i>
							</div>
							<p>.rt-icon2-cog3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-camera4"></i>
							</div>
							<p>.rt-icon2-camera4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-refresh"></i>
							</div>
							<p>.rt-icon2-refresh</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-info-large"></i>
							</div>
							<p>.rt-icon2-info-large</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-zoom"></i>
							</div>
							<p>.rt-icon2-zoom</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-zoom-out"></i>
							</div>
							<p>.rt-icon2-zoom-out</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-zoom-in"></i>
							</div>
							<p>.rt-icon2-zoom-in</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-sort-numerically"></i>
							</div>
							<p>.rt-icon2-sort-numerically</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-sort-alphabetically"></i>
							</div>
							<p>.rt-icon2-sort-alphabetically</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-input-checked"></i>
							</div>
							<p>.rt-icon2-input-checked</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-calender"></i>
							</div>
							<p>.rt-icon2-calender</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-spanner"></i>
							</div>
							<p>.rt-icon2-spanner</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-phone7"></i>
							</div>
							<p>.rt-icon2-phone7</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-media-rewind"></i>
							</div>
							<p>.rt-icon2-media-rewind</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-adjust-brightness"></i>
							</div>
							<p>.rt-icon2-adjust-brightness</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-waves"></i>
							</div>
							<p>.rt-icon2-waves</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-twitter"></i>
							</div>
							<p>.rt-icon2-social-twitter</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-facebook"></i>
							</div>
							<p>.rt-icon2-social-facebook</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-dribbble"></i>
							</div>
							<p>.rt-icon2-social-dribbble</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-media-stop"></i>
							</div>
							<p>.rt-icon2-media-stop</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-media-record"></i>
							</div>
							<p>.rt-icon2-media-record</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-media-play"></i>
							</div>
							<p>.rt-icon2-media-play</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-media-fast-forward"></i>
							</div>
							<p>.rt-icon2-media-fast-forward</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-media-eject"></i>
							</div>
							<p>.rt-icon2-media-eject</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-vimeo"></i>
							</div>
							<p>.rt-icon2-social-vimeo</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-tumbler"></i>
							</div>
							<p>.rt-icon2-social-tumbler</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-skype"></i>
							</div>
							<p>.rt-icon2-social-skype</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-pinterest"></i>
							</div>
							<p>.rt-icon2-social-pinterest</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-linkedin"></i>
							</div>
							<p>.rt-icon2-social-linkedin</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-last-fm"></i>
							</div>
							<p>.rt-icon2-social-last-fm</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-github"></i>
							</div>
							<p>.rt-icon2-social-github</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-flickr"></i>
							</div>
							<p>.rt-icon2-social-flickr</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-at"></i>
							</div>
							<p>.rt-icon2-at</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-times-outline"></i>
							</div>
							<p>.rt-icon2-times-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-plus-outline"></i>
							</div>
							<p>.rt-icon2-plus-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-minus-outline"></i>
							</div>
							<p>.rt-icon2-minus-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tick-outline"></i>
							</div>
							<p>.rt-icon2-tick-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-th-large-outline"></i>
							</div>
							<p>.rt-icon2-th-large-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-equals-outline"></i>
							</div>
							<p>.rt-icon2-equals-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-divide-outline"></i>
							</div>
							<p>.rt-icon2-divide-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-right-outline"></i>
							</div>
							<p>.rt-icon2-chevron-right-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-left-outline"></i>
							</div>
							<p>.rt-icon2-chevron-left-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-arrow-right-outline"></i>
							</div>
							<p>.rt-icon2-arrow-right-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-arrow-left-outline"></i>
							</div>
							<p>.rt-icon2-arrow-left-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-th-small-outline"></i>
							</div>
							<p>.rt-icon2-th-small-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-th-menu-outline"></i>
							</div>
							<p>.rt-icon2-th-menu-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-th-list-outline"></i>
							</div>
							<p>.rt-icon2-th-list-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-home-outline"></i>
							</div>
							<p>.rt-icon2-home-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-arrow-up-outline"></i>
							</div>
							<p>.rt-icon2-arrow-up-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-arrow-forward-outline"></i>
							</div>
							<p>.rt-icon2-arrow-forward-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-arrow-down-outline"></i>
							</div>
							<p>.rt-icon2-arrow-down-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-arrow-back-outline"></i>
							</div>
							<p>.rt-icon2-arrow-back-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-trash3"></i>
							</div>
							<p>.rt-icon2-trash3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-rss-outline"></i>
							</div>
							<p>.rt-icon2-rss-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-message"></i>
							</div>
							<p>.rt-icon2-message</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-location-outline"></i>
							</div>
							<p>.rt-icon2-location-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-link-outline"></i>
							</div>
							<p>.rt-icon2-link-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-image-outline"></i>
							</div>
							<p>.rt-icon2-image-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-export-outline"></i>
							</div>
							<p>.rt-icon2-export-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cross"></i>
							</div>
							<p>.rt-icon2-cross</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-wi-fi-outline"></i>
							</div>
							<p>.rt-icon2-wi-fi-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-star-outline"></i>
							</div>
							<p>.rt-icon2-star-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-media-pause-outline"></i>
							</div>
							<p>.rt-icon2-media-pause-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-mail2"></i>
							</div>
							<p>.rt-icon2-mail2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-heart-outline"></i>
							</div>
							<p>.rt-icon2-heart-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-flash-outline"></i>
							</div>
							<p>.rt-icon2-flash-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cancel-outline"></i>
							</div>
							<p>.rt-icon2-cancel-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-arrow-move-outline"></i>
							</div>
							<p>.rt-icon2-arrow-move-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-watch"></i>
							</div>
							<p>.rt-icon2-watch</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-warning-outline"></i>
							</div>
							<p>.rt-icon2-warning-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-time2"></i>
							</div>
							<p>.rt-icon2-time2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-radar-outline"></i>
							</div>
							<p>.rt-icon2-radar-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-lock-open-outline"></i>
							</div>
							<p>.rt-icon2-lock-open-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-location-arrow-outline"></i>
							</div>
							<p>.rt-icon2-location-arrow-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-info-outline"></i>
							</div>
							<p>.rt-icon2-info-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-backspace-outline"></i>
							</div>
							<p>.rt-icon2-backspace-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-attachment-outline"></i>
							</div>
							<p>.rt-icon2-attachment-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-user-outline"></i>
							</div>
							<p>.rt-icon2-user-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-user-delete-outline"></i>
							</div>
							<p>.rt-icon2-user-delete-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-user-add-outline"></i>
							</div>
							<p>.rt-icon2-user-add-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-lock-closed-outline"></i>
							</div>
							<p>.rt-icon2-lock-closed-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-group-outline"></i>
							</div>
							<p>.rt-icon2-group-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chart-pie-outline"></i>
							</div>
							<p>.rt-icon2-chart-pie-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chart-line-outline"></i>
							</div>
							<p>.rt-icon2-chart-line-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chart-bar-outline"></i>
							</div>
							<p>.rt-icon2-chart-bar-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chart-area-outline"></i>
							</div>
							<p>.rt-icon2-chart-area-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-video-outline"></i>
							</div>
							<p>.rt-icon2-video-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-point-of-interest-outline"></i>
							</div>
							<p>.rt-icon2-point-of-interest-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-map2"></i>
							</div>
							<p>.rt-icon2-map2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-key-outline"></i>
							</div>
							<p>.rt-icon2-key-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-infinity-outline"></i>
							</div>
							<p>.rt-icon2-infinity-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-globe-outline"></i>
							</div>
							<p>.rt-icon2-globe-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-eye-outline"></i>
							</div>
							<p>.rt-icon2-eye-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cog-outline"></i>
							</div>
							<p>.rt-icon2-cog-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-camera-outline"></i>
							</div>
							<p>.rt-icon2-camera-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-support"></i>
							</div>
							<p>.rt-icon2-support</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-scissors-outline"></i>
							</div>
							<p>.rt-icon2-scissors-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-refresh-outline"></i>
							</div>
							<p>.rt-icon2-refresh-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-info-large-outline"></i>
							</div>
							<p>.rt-icon2-info-large-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-download-outline"></i>
							</div>
							<p>.rt-icon2-download-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-battery-low"></i>
							</div>
							<p>.rt-icon2-battery-low</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-zoom-outline"></i>
							</div>
							<p>.rt-icon2-zoom-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-zoom-out-outline"></i>
							</div>
							<p>.rt-icon2-zoom-out-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-zoom-in-outline"></i>
							</div>
							<p>.rt-icon2-zoom-in-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tag3"></i>
							</div>
							<p>.rt-icon2-tag3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tabs-outline"></i>
							</div>
							<p>.rt-icon2-tabs-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-pin-outline"></i>
							</div>
							<p>.rt-icon2-pin-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-message-typing"></i>
							</div>
							<p>.rt-icon2-message-typing</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-directions"></i>
							</div>
							<p>.rt-icon2-directions</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-battery-full"></i>
							</div>
							<p>.rt-icon2-battery-full</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-battery-charge"></i>
							</div>
							<p>.rt-icon2-battery-charge</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-pencil3"></i>
							</div>
							<p>.rt-icon2-pencil3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-folder"></i>
							</div>
							<p>.rt-icon2-folder</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-folder-delete"></i>
							</div>
							<p>.rt-icon2-folder-delete</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-folder-add"></i>
							</div>
							<p>.rt-icon2-folder-add</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-edit"></i>
							</div>
							<p>.rt-icon2-edit</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-document2"></i>
							</div>
							<p>.rt-icon2-document2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-document-delete"></i>
							</div>
							<p>.rt-icon2-document-delete</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-document-add"></i>
							</div>
							<p>.rt-icon2-document-add</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-brush"></i>
							</div>
							<p>.rt-icon2-brush</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-thumbs-up"></i>
							</div>
							<p>.rt-icon2-thumbs-up</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-thumbs-down"></i>
							</div>
							<p>.rt-icon2-thumbs-down</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-pen2"></i>
							</div>
							<p>.rt-icon2-pen2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-sort-numerically-outline"></i>
							</div>
							<p>.rt-icon2-sort-numerically-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-sort-alphabetically-outline"></i>
							</div>
							<p>.rt-icon2-sort-alphabetically-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-last-fm-circular"></i>
							</div>
							<p>.rt-icon2-social-last-fm-circular</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-github-circular"></i>
							</div>
							<p>.rt-icon2-social-github-circular</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-compass3"></i>
							</div>
							<p>.rt-icon2-compass3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-code-outline"></i>
							</div>
							<p>.rt-icon2-code-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-calender-outline"></i>
							</div>
							<p>.rt-icon2-calender-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-business-card"></i>
							</div>
							<p>.rt-icon2-business-card</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-arrow-up"></i>
							</div>
							<p>.rt-icon2-arrow-up</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-arrow-right"></i>
							</div>
							<p>.rt-icon2-arrow-right</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-arrow-left"></i>
							</div>
							<p>.rt-icon2-arrow-left</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-document-text"></i>
							</div>
							<p>.rt-icon2-document-text</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-clipboard2"></i>
							</div>
							<p>.rt-icon2-clipboard2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-calculator2"></i>
							</div>
							<p>.rt-icon2-calculator2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-arrow-minimise-outline"></i>
							</div>
							<p>.rt-icon2-arrow-minimise-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-arrow-maximise-outline"></i>
							</div>
							<p>.rt-icon2-arrow-maximise-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-arrow-down"></i>
							</div>
							<p>.rt-icon2-arrow-down</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-gift2"></i>
							</div>
							<p>.rt-icon2-gift2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-film3"></i>
							</div>
							<p>.rt-icon2-film3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-bell"></i>
							</div>
							<p>.rt-icon2-bell</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-anchor-outline"></i>
							</div>
							<p>.rt-icon2-anchor-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-world-outline"></i>
							</div>
							<p>.rt-icon2-world-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-shopping-bag"></i>
							</div>
							<p>.rt-icon2-shopping-bag</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-power-outline"></i>
							</div>
							<p>.rt-icon2-power-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-notes-outline"></i>
							</div>
							<p>.rt-icon2-notes-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-device-tablet"></i>
							</div>
							<p>.rt-icon2-device-tablet</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-device-phone"></i>
							</div>
							<p>.rt-icon2-device-phone</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-device-laptop"></i>
							</div>
							<p>.rt-icon2-device-laptop</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-device-desktop"></i>
							</div>
							<p>.rt-icon2-device-desktop</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-briefcase"></i>
							</div>
							<p>.rt-icon2-briefcase</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-stopwatch"></i>
							</div>
							<p>.rt-icon2-stopwatch</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-spanner-outline"></i>
							</div>
							<p>.rt-icon2-spanner-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-puzzle-outline"></i>
							</div>
							<p>.rt-icon2-puzzle-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-printer2"></i>
							</div>
							<p>.rt-icon2-printer2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-lightbulb3"></i>
							</div>
							<p>.rt-icon2-lightbulb3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-flag-outline"></i>
							</div>
							<p>.rt-icon2-flag-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-contacts"></i>
							</div>
							<p>.rt-icon2-contacts</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-weather-stormy"></i>
							</div>
							<p>.rt-icon2-weather-stormy</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-weather-shower"></i>
							</div>
							<p>.rt-icon2-weather-shower</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-weather-partly-sunny"></i>
							</div>
							<p>.rt-icon2-weather-partly-sunny</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-weather-downpour"></i>
							</div>
							<p>.rt-icon2-weather-downpour</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-weather-cloudy"></i>
							</div>
							<p>.rt-icon2-weather-cloudy</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-plane-outline"></i>
							</div>
							<p>.rt-icon2-plane-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-phone-outline"></i>
							</div>
							<p>.rt-icon2-phone-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-microphone-outline"></i>
							</div>
							<p>.rt-icon2-microphone-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-weather-windy"></i>
							</div>
							<p>.rt-icon2-weather-windy</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-weather-windy-cloudy"></i>
							</div>
							<p>.rt-icon2-weather-windy-cloudy</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-weather-sunny"></i>
							</div>
							<p>.rt-icon2-weather-sunny</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-weather-snow"></i>
							</div>
							<p>.rt-icon2-weather-snow</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-weather-night"></i>
							</div>
							<p>.rt-icon2-weather-night</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-media-stop-outline"></i>
							</div>
							<p>.rt-icon2-media-stop-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-media-rewind-outline"></i>
							</div>
							<p>.rt-icon2-media-rewind-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-media-record-outline"></i>
							</div>
							<p>.rt-icon2-media-record-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-media-play-outline"></i>
							</div>
							<p>.rt-icon2-media-play-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-media-fast-forward-outline"></i>
							</div>
							<p>.rt-icon2-media-fast-forward-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-media-eject-outline"></i>
							</div>
							<p>.rt-icon2-media-eject-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-wine2"></i>
							</div>
							<p>.rt-icon2-wine2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-waves-outline"></i>
							</div>
							<p>.rt-icon2-waves-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-ticket"></i>
							</div>
							<p>.rt-icon2-ticket</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tags2"></i>
							</div>
							<p>.rt-icon2-tags2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-plug"></i>
							</div>
							<p>.rt-icon2-plug</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-headphones"></i>
							</div>
							<p>.rt-icon2-headphones</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-credit-card"></i>
							</div>
							<p>.rt-icon2-credit-card</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-coffee3"></i>
							</div>
							<p>.rt-icon2-coffee3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-book2"></i>
							</div>
							<p>.rt-icon2-book2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-beer"></i>
							</div>
							<p>.rt-icon2-beer</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-volume"></i>
							</div>
							<p>.rt-icon2-volume</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-volume-up"></i>
							</div>
							<p>.rt-icon2-volume-up</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-volume-mute"></i>
							</div>
							<p>.rt-icon2-volume-mute</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-volume-down"></i>
							</div>
							<p>.rt-icon2-volume-down</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-vimeo-circular"></i>
							</div>
							<p>.rt-icon2-social-vimeo-circular</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-twitter-circular"></i>
							</div>
							<p>.rt-icon2-social-twitter-circular</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-pinterest-circular"></i>
							</div>
							<p>.rt-icon2-social-pinterest-circular</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-linkedin-circular"></i>
							</div>
							<p>.rt-icon2-social-linkedin-circular</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-facebook-circular"></i>
							</div>
							<p>.rt-icon2-social-facebook-circular</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-dribbble-circular"></i>
							</div>
							<p>.rt-icon2-social-dribbble-circular</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tree"></i>
							</div>
							<p>.rt-icon2-tree</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-thermometer2"></i>
							</div>
							<p>.rt-icon2-thermometer2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-tumbler-circular"></i>
							</div>
							<p>.rt-icon2-social-tumbler-circular</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-skype-outline"></i>
							</div>
							<p>.rt-icon2-social-skype-outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-flickr-circular"></i>
							</div>
							<p>.rt-icon2-social-flickr-circular</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-social-at-circular"></i>
							</div>
							<p>.rt-icon2-social-at-circular</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-shopping-cart"></i>
							</div>
							<p>.rt-icon2-shopping-cart</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-messages"></i>
							</div>
							<p>.rt-icon2-messages</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-leaf"></i>
							</div>
							<p>.rt-icon2-leaf</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-feather2"></i>
							</div>
							<p>.rt-icon2-feather2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-keyboard_arrow_down"></i>
							</div>
							<p>.rt-icon2-keyboard_arrow_down</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-keyboard_arrow_left"></i>
							</div>
							<p>.rt-icon2-keyboard_arrow_left</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-keyboard_arrow_right"></i>
							</div>
							<p>.rt-icon2-keyboard_arrow_right</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-keyboard_arrow_up"></i>
							</div>
							<p>.rt-icon2-keyboard_arrow_up</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-directions_bus"></i>
							</div>
							<p>.rt-icon2-directions_bus</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-directions_car"></i>
							</div>
							<p>.rt-icon2-directions_car</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-directions_ferry"></i>
							</div>
							<p>.rt-icon2-directions_ferry</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-directions_subway"></i>
							</div>
							<p>.rt-icon2-directions_subway</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-directions_railway"></i>
							</div>
							<p>.rt-icon2-directions_railway</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-directions_walk"></i>
							</div>
							<p>.rt-icon2-directions_walk</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-flight"></i>
							</div>
							<p>.rt-icon2-flight</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-restaurant_menu"></i>
							</div>
							<p>.rt-icon2-restaurant_menu</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-wifi"></i>
							</div>
							<p>.rt-icon2-wifi</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cake"></i>
							</div>
							<p>.rt-icon2-cake</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-favorite_outline"></i>
							</div>
							<p>.rt-icon2-favorite_outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-lock_open"></i>
							</div>
							<p>.rt-icon2-lock_open</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-lock_outline"></i>
							</div>
							<p>.rt-icon2-lock_outline</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-perm_identity"></i>
							</div>
							<p>.rt-icon2-perm_identity</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-search"></i>
							</div>
							<p>.rt-icon2-search</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-eye3"></i>
							</div>
							<p>.rt-icon2-eye3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-paper-clip"></i>
							</div>
							<p>.rt-icon2-paper-clip</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-mail3"></i>
							</div>
							<p>.rt-icon2-mail3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-image3"></i>
							</div>
							<p>.rt-icon2-image3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-clock3"></i>
							</div>
							<p>.rt-icon2-clock3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-watch2"></i>
							</div>
							<p>.rt-icon2-watch2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-camera5"></i>
							</div>
							<p>.rt-icon2-camera5</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-video3"></i>
							</div>
							<p>.rt-icon2-video3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-monitor2"></i>
							</div>
							<p>.rt-icon2-monitor2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cog4"></i>
							</div>
							<p>.rt-icon2-cog4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-heart4"></i>
							</div>
							<p>.rt-icon2-heart4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-layers2"></i>
							</div>
							<p>.rt-icon2-layers2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-paper"></i>
							</div>
							<p>.rt-icon2-paper</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-search5"></i>
							</div>
							<p>.rt-icon2-search5</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-microphone2"></i>
							</div>
							<p>.rt-icon2-microphone2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-umbrella2"></i>
							</div>
							<p>.rt-icon2-umbrella2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-moon2"></i>
							</div>
							<p>.rt-icon2-moon2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-thermometer3"></i>
							</div>
							<p>.rt-icon2-thermometer3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-drop"></i>
							</div>
							<p>.rt-icon2-drop</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-sun2"></i>
							</div>
							<p>.rt-icon2-sun2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cloud2"></i>
							</div>
							<p>.rt-icon2-cloud2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-map3"></i>
							</div>
							<p>.rt-icon2-map3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-head"></i>
							</div>
							<p>.rt-icon2-head</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-briefcase2"></i>
							</div>
							<p>.rt-icon2-briefcase2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-speech-bubble"></i>
							</div>
							<p>.rt-icon2-speech-bubble</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-globe3"></i>
							</div>
							<p>.rt-icon2-globe3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tag4"></i>
							</div>
							<p>.rt-icon2-tag4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-star2"></i>
							</div>
							<p>.rt-icon2-star2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-plus3"></i>
							</div>
							<p>.rt-icon2-plus3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-minus3"></i>
							</div>
							<p>.rt-icon2-minus3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-check2"></i>
							</div>
							<p>.rt-icon2-check2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cross2"></i>
							</div>
							<p>.rt-icon2-cross2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-help"></i>
							</div>
							<p>.rt-icon2-help</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-files"></i>
							</div>
							<p>.rt-icon2-files</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file2"></i>
							</div>
							<p>.rt-icon2-file2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-browser"></i>
							</div>
							<p>.rt-icon2-browser</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-wifi-full"></i>
							</div>
							<p>.rt-icon2-wifi-full</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-microphone3"></i>
							</div>
							<p>.rt-icon2-microphone3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-trashcan2"></i>
							</div>
							<p>.rt-icon2-trashcan2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-search6"></i>
							</div>
							<p>.rt-icon2-search6</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-calendar6"></i>
							</div>
							<p>.rt-icon2-calendar6</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-heart5"></i>
							</div>
							<p>.rt-icon2-heart5</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-star3"></i>
							</div>
							<p>.rt-icon2-star3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-clock4"></i>
							</div>
							<p>.rt-icon2-clock4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-users2"></i>
							</div>
							<p>.rt-icon2-users2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-user3"></i>
							</div>
							<p>.rt-icon2-user3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-creditcards"></i>
							</div>
							<p>.rt-icon2-creditcards</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-calculator3"></i>
							</div>
							<p>.rt-icon2-calculator3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-bag"></i>
							</div>
							<p>.rt-icon2-bag</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-diamond3"></i>
							</div>
							<p>.rt-icon2-diamond3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-drink4"></i>
							</div>
							<p>.rt-icon2-drink4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-shorts"></i>
							</div>
							<p>.rt-icon2-shorts</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-coffee4"></i>
							</div>
							<p>.rt-icon2-coffee4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-map4"></i>
							</div>
							<p>.rt-icon2-map4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-syringe"></i>
							</div>
							<p>.rt-icon2-syringe</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-pill"></i>
							</div>
							<p>.rt-icon2-pill</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-lab3"></i>
							</div>
							<p>.rt-icon2-lab3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-mug2"></i>
							</div>
							<p>.rt-icon2-mug2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chart"></i>
							</div>
							<p>.rt-icon2-chart</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-pencil4"></i>
							</div>
							<p>.rt-icon2-pencil4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-envelope-o"></i>
							</div>
							<p>.rt-icon2-envelope-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-star-o"></i>
							</div>
							<p>.rt-icon2-star-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-film"></i>
							</div>
							<p>.rt-icon2-film</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-check"></i>
							</div>
							<p>.rt-icon2-check</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-close"></i>
							</div>
							<p>.rt-icon2-close</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-remove"></i>
							</div>
							<p>.rt-icon2-remove</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-times"></i>
							</div>
							<p>.rt-icon2-times</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cog"></i>
							</div>
							<p>.rt-icon2-cog</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-gear"></i>
							</div>
							<p>.rt-icon2-gear</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-trash-o"></i>
							</div>
							<p>.rt-icon2-trash-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-o"></i>
							</div>
							<p>.rt-icon2-file-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-clock-o"></i>
							</div>
							<p>.rt-icon2-clock-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tags"></i>
							</div>
							<p>.rt-icon2-tags</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-thumbs-o-up"></i>
							</div>
							<p>.rt-icon2-thumbs-o-up</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-thumbs-o-down"></i>
							</div>
							<p>.rt-icon2-thumbs-o-down</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-heart-o"></i>
							</div>
							<p>.rt-icon2-heart-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-phone"></i>
							</div>
							<p>.rt-icon2-phone</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-umbrella"></i>
							</div>
							<p>.rt-icon2-umbrella</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-lightbulb-o"></i>
							</div>
							<p>.rt-icon2-lightbulb-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-user-md"></i>
							</div>
							<p>.rt-icon2-user-md</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-stethoscope"></i>
							</div>
							<p>.rt-icon2-stethoscope</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-suitcase"></i>
							</div>
							<p>.rt-icon2-suitcase</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-coffee"></i>
							</div>
							<p>.rt-icon2-coffee</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cutlery"></i>
							</div>
							<p>.rt-icon2-cutlery</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-text-o"></i>
							</div>
							<p>.rt-icon2-file-text-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-building-o"></i>
							</div>
							<p>.rt-icon2-building-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-hospital-o"></i>
							</div>
							<p>.rt-icon2-hospital-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-ambulance"></i>
							</div>
							<p>.rt-icon2-ambulance</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-medkit"></i>
							</div>
							<p>.rt-icon2-medkit</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-angle-left"></i>
							</div>
							<p>.rt-icon2-angle-left</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-angle-right"></i>
							</div>
							<p>.rt-icon2-angle-right</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-angle-up"></i>
							</div>
							<p>.rt-icon2-angle-up</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-angle-down"></i>
							</div>
							<p>.rt-icon2-angle-down</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-desktop"></i>
							</div>
							<p>.rt-icon2-desktop</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-laptop"></i>
							</div>
							<p>.rt-icon2-laptop</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tablet"></i>
							</div>
							<p>.rt-icon2-tablet</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-mobile"></i>
							</div>
							<p>.rt-icon2-mobile</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-mobile-phone"></i>
							</div>
							<p>.rt-icon2-mobile-phone</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-quote-left"></i>
							</div>
							<p>.rt-icon2-quote-left</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-quote-right"></i>
							</div>
							<p>.rt-icon2-quote-right</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-youtube"></i>
							</div>
							<p>.rt-icon2-youtube</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-pdf-o"></i>
							</div>
							<p>.rt-icon2-file-pdf-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-word-o"></i>
							</div>
							<p>.rt-icon2-file-word-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-excel-o"></i>
							</div>
							<p>.rt-icon2-file-excel-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-powerpoint-o"></i>
							</div>
							<p>.rt-icon2-file-powerpoint-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-image-o"></i>
							</div>
							<p>.rt-icon2-file-image-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-photo-o"></i>
							</div>
							<p>.rt-icon2-file-photo-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-picture-o"></i>
							</div>
							<p>.rt-icon2-file-picture-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-archive-o"></i>
							</div>
							<p>.rt-icon2-file-archive-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-zip-o"></i>
							</div>
							<p>.rt-icon2-file-zip-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-audio-o"></i>
							</div>
							<p>.rt-icon2-file-audio-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-sound-o"></i>
							</div>
							<p>.rt-icon2-file-sound-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-movie-o"></i>
							</div>
							<p>.rt-icon2-file-movie-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-video-o"></i>
							</div>
							<p>.rt-icon2-file-video-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-file-code-o"></i>
							</div>
							<p>.rt-icon2-file-code-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-paper-plane-o"></i>
							</div>
							<p>.rt-icon2-paper-plane-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-send-o"></i>
							</div>
							<p>.rt-icon2-send-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-futbol-o"></i>
							</div>
							<p>.rt-icon2-futbol-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-soccer-ball-o"></i>
							</div>
							<p>.rt-icon2-soccer-ball-o</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-birthday-cake"></i>
							</div>
							<p>.rt-icon2-birthday-cake</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-diamond"></i>
							</div>
							<p>.rt-icon2-diamond</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-whatsapp"></i>
							</div>
							<p>.rt-icon2-whatsapp</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-down2"></i>
							</div>
							<p>.rt-icon2-chevron-down2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-left3"></i>
							</div>
							<p>.rt-icon2-chevron-left3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-right3"></i>
							</div>
							<p>.rt-icon2-chevron-right3</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-small-down"></i>
							</div>
							<p>.rt-icon2-chevron-small-down</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-small-left"></i>
							</div>
							<p>.rt-icon2-chevron-small-left</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-small-right"></i>
							</div>
							<p>.rt-icon2-chevron-small-right</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-small-up"></i>
							</div>
							<p>.rt-icon2-chevron-small-up</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-thin-down"></i>
							</div>
							<p>.rt-icon2-chevron-thin-down</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-thin-left"></i>
							</div>
							<p>.rt-icon2-chevron-thin-left</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-thin-right"></i>
							</div>
							<p>.rt-icon2-chevron-thin-right</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-thin-up"></i>
							</div>
							<p>.rt-icon2-chevron-thin-up</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-chevron-up2"></i>
							</div>
							<p>.rt-icon2-chevron-up2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-code"></i>
							</div>
							<p>.rt-icon2-code</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-light-bulb"></i>
							</div>
							<p>.rt-icon2-light-bulb</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-magnifying-glass2"></i>
							</div>
							<p>.rt-icon2-magnifying-glass2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-map5"></i>
							</div>
							<p>.rt-icon2-map5</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-scissors"></i>
							</div>
							<p>.rt-icon2-scissors</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tools2"></i>
							</div>
							<p>.rt-icon2-tools2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-box"></i>
							</div>
							<p>.rt-icon2-box</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-write"></i>
							</div>
							<p>.rt-icon2-write</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-clock5"></i>
							</div>
							<p>.rt-icon2-clock5</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-search7"></i>
							</div>
							<p>.rt-icon2-search7</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-trash4"></i>
							</div>
							<p>.rt-icon2-trash4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-envelope2"></i>
							</div>
							<p>.rt-icon2-envelope2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-comments2"></i>
							</div>
							<p>.rt-icon2-comments2</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-camera6"></i>
							</div>
							<p>.rt-icon2-camera6</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-image4"></i>
							</div>
							<p>.rt-icon2-image4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-tag5"></i>
							</div>
							<p>.rt-icon2-tag5</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-heart6"></i>
							</div>
							<p>.rt-icon2-heart6</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-video-camera"></i>
							</div>
							<p>.rt-icon2-video-camera</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-cart"></i>
							</div>
							<p>.rt-icon2-cart</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-film4"></i>
							</div>
							<p>.rt-icon2-film4</p>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="teaser_icon size_normal">
								<i className="rt-icon2-home3"></i>
							</div>
							<p>.rt-icon2-home3</p>
						</div>

					</div>


					<div className="row fontawesome-icon-list">

						<div className="col-md-12">
							<hr className="clearfix divider_40"/>
							<h3 className="text-center divider_40">Font Awesome</h3>
						</div>


						<div className="col-md-3 col-sm-4">
							<i className="fa fa-angellist"></i> fa-angellist</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-area-chart"></i> fa-area-chart</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-at"></i> fa-at</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bell-slash"></i> fa-bell-slash</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bell-slash-o"></i> fa-bell-slash-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bicycle"></i> fa-bicycle</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-binoculars"></i> fa-binoculars</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-birthday-cake"></i> fa-birthday-cake</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bus"></i> fa-bus</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-calculator"></i> fa-calculator</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc"></i> fa-cc</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc-amex"></i> fa-cc-amex</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc-discover"></i> fa-cc-discover</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc-mastercard"></i> fa-cc-mastercard</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc-paypal"></i> fa-cc-paypal</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc-stripe"></i> fa-cc-stripe</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc-visa"></i> fa-cc-visa</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-copyright"></i> fa-copyright</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-eyedropper"></i> fa-eyedropper</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-futbol-o"></i> fa-futbol-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-google-wallet"></i> fa-google-wallet</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-ils"></i> fa-ils</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-ioxhost"></i> fa-ioxhost</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-lastfm"></i> fa-lastfm</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-lastfm-square"></i> fa-lastfm-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-line-chart"></i> fa-line-chart</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-meanpath"></i> fa-meanpath</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-newspaper-o"></i> fa-newspaper-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-paint-brush"></i> fa-paint-brush</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-paypal"></i> fa-paypal</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-pie-chart"></i> fa-pie-chart</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-plug"></i> fa-plug</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-shekel"></i> fa-shekel
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-sheqel"></i> fa-sheqel
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-slideshare"></i> fa-slideshare</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-soccer-ball-o"></i> fa-soccer-ball-o
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-toggle-off"></i> fa-toggle-off</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-toggle-on"></i> fa-toggle-on</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-trash"></i> fa-trash</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-tty"></i> fa-tty</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-twitch"></i> fa-twitch</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-wifi"></i> fa-wifi</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-yelp"></i> fa-yelp</div>
					</div>


					<h4 className="text-center">Web Application Icons</h4>

					<div className="row fontawesome-icon-list">


						<div className="col-md-3 col-sm-4">
							<i className="fa fa-adjust"></i> fa-adjust</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-anchor"></i> fa-anchor</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-archive"></i> fa-archive</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-area-chart"></i> fa-area-chart</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrows"></i> fa-arrows</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrows-h"></i> fa-arrows-h</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrows-v"></i> fa-arrows-v</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-asterisk"></i> fa-asterisk</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-at"></i> fa-at</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-automobile"></i> fa-automobile
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-ban"></i> fa-ban</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bank"></i> fa-bank
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bar-chart"></i> fa-bar-chart</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bar-chart-o"></i> fa-bar-chart-o
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-barcode"></i> fa-barcode</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bars"></i> fa-bars</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-beer"></i> fa-beer</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bell"></i> fa-bell</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bell-o"></i> fa-bell-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bell-slash"></i> fa-bell-slash</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bell-slash-o"></i> fa-bell-slash-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bicycle"></i> fa-bicycle</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-binoculars"></i> fa-binoculars</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-birthday-cake"></i> fa-birthday-cake</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bolt"></i> fa-bolt</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bomb"></i> fa-bomb</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-book"></i> fa-book</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bookmark"></i> fa-bookmark</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bookmark-o"></i> fa-bookmark-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-briefcase"></i> fa-briefcase</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bug"></i> fa-bug</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-building"></i> fa-building</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-building-o"></i> fa-building-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bullhorn"></i> fa-bullhorn</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bullseye"></i> fa-bullseye</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bus"></i> fa-bus</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cab"></i> fa-cab
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-calculator"></i> fa-calculator</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-calendar"></i> fa-calendar</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-calendar-o"></i> fa-calendar-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-camera"></i> fa-camera</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-camera-retro"></i> fa-camera-retro</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-car"></i> fa-car</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-caret-square-o-down"></i> fa-caret-square-o-down</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-caret-square-o-left"></i> fa-caret-square-o-left</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-caret-square-o-right"></i> fa-caret-square-o-right</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-caret-square-o-up"></i> fa-caret-square-o-up</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc"></i> fa-cc</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-certificate"></i> fa-certificate</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-check"></i> fa-check</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-check-circle"></i> fa-check-circle</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-check-circle-o"></i> fa-check-circle-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-check-square"></i> fa-check-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-check-square-o"></i> fa-check-square-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-child"></i> fa-child</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-circle"></i> fa-circle</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-circle-o"></i> fa-circle-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-circle-o-notch"></i> fa-circle-o-notch</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-circle-thin"></i> fa-circle-thin</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-clock-o"></i> fa-clock-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-close"></i> fa-close
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cloud"></i> fa-cloud</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cloud-download"></i> fa-cloud-download</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cloud-upload"></i> fa-cloud-upload</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-code"></i> fa-code</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-code-fork"></i> fa-code-fork</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-coffee"></i> fa-coffee</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cog"></i> fa-cog</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cogs"></i> fa-cogs</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-comment"></i> fa-comment</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-comment-o"></i> fa-comment-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-comments"></i> fa-comments</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-comments-o"></i> fa-comments-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-compass"></i> fa-compass</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-copyright"></i> fa-copyright</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-credit-card"></i> fa-credit-card</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-crop"></i> fa-crop</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-crosshairs"></i> fa-crosshairs</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cube"></i> fa-cube</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cubes"></i> fa-cubes</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cutlery"></i> fa-cutlery</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-dashboard"></i> fa-dashboard
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-database"></i> fa-database</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-desktop"></i> fa-desktop</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-dot-circle-o"></i> fa-dot-circle-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-download"></i> fa-download</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-edit"></i> fa-edit
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-ellipsis-h"></i> fa-ellipsis-h</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-ellipsis-v"></i> fa-ellipsis-v</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-envelope"></i> fa-envelope</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-envelope-o"></i> fa-envelope-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-envelope-square"></i> fa-envelope-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-eraser"></i> fa-eraser</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-exchange"></i> fa-exchange</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-exclamation"></i> fa-exclamation</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-exclamation-circle"></i> fa-exclamation-circle</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-exclamation-triangle"></i> fa-exclamation-triangle</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-external-link"></i> fa-external-link</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-external-link-square"></i> fa-external-link-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-eye"></i> fa-eye</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-eye-slash"></i> fa-eye-slash</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-eyedropper"></i> fa-eyedropper</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-fax"></i> fa-fax</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-female"></i> fa-female</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-fighter-jet"></i> fa-fighter-jet</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-archive-o"></i> fa-file-archive-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-audio-o"></i> fa-file-audio-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-code-o"></i> fa-file-code-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-excel-o"></i> fa-file-excel-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-image-o"></i> fa-file-image-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-movie-o"></i> fa-file-movie-o
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-pdf-o"></i> fa-file-pdf-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-photo-o"></i> fa-file-photo-o
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-picture-o"></i> fa-file-picture-o
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-powerpoint-o"></i> fa-file-powerpoint-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-sound-o"></i> fa-file-sound-o
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-video-o"></i> fa-file-video-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-word-o"></i> fa-file-word-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-zip-o"></i> fa-file-zip-o
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-film"></i> fa-film</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-filter"></i> fa-filter</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-fire"></i> fa-fire</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-fire-extinguisher"></i> fa-fire-extinguisher</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-flag"></i> fa-flag</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-flag-checkered"></i> fa-flag-checkered</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-flag-o"></i> fa-flag-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-flash"></i> fa-flash
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-flask"></i> fa-flask</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-folder"></i> fa-folder</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-folder-o"></i> fa-folder-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-folder-open"></i> fa-folder-open</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-folder-open-o"></i> fa-folder-open-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-frown-o"></i> fa-frown-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-futbol-o"></i> fa-futbol-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-gamepad"></i> fa-gamepad</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-gavel"></i> fa-gavel</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-gear"></i> fa-gear
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-gears"></i> fa-gears
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-gift"></i> fa-gift</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-glass"></i> fa-glass</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-globe"></i> fa-globe</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-graduation-cap"></i> fa-graduation-cap</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-group"></i> fa-group
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-hdd-o"></i> fa-hdd-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-headphones"></i> fa-headphones</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-heart"></i> fa-heart</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-heart-o"></i> fa-heart-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-history"></i> fa-history</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-home"></i> fa-home</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-image"></i> fa-image
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-inbox"></i> fa-inbox</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-info"></i> fa-info</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-info-circle"></i> fa-info-circle</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-institution"></i> fa-institution
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-key"></i> fa-key</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-keyboard-o"></i> fa-keyboard-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-language"></i> fa-language</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-laptop"></i> fa-laptop</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-leaf"></i> fa-leaf</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-legal"></i> fa-legal
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-lemon-o"></i> fa-lemon-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-level-down"></i> fa-level-down</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-level-up"></i> fa-level-up</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-life-bouy"></i> fa-life-bouy
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-life-buoy"></i> fa-life-buoy
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-life-ring"></i> fa-life-ring</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-life-saver"></i> fa-life-saver
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-lightbulb-o"></i> fa-lightbulb-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-line-chart"></i> fa-line-chart</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-location-arrow"></i> fa-location-arrow</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-lock"></i> fa-lock</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-magic"></i> fa-magic</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-magnet"></i> fa-magnet</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-mail-forward"></i> fa-mail-forward
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-mail-reply"></i> fa-mail-reply
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-mail-reply-all"></i> fa-mail-reply-all
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-male"></i> fa-male</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-map-marker"></i> fa-map-marker</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-meh-o"></i> fa-meh-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-microphone"></i> fa-microphone</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-microphone-slash"></i> fa-microphone-slash</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-minus"></i> fa-minus</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-minus-circle"></i> fa-minus-circle</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-minus-square"></i> fa-minus-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-minus-square-o"></i> fa-minus-square-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-mobile"></i> fa-mobile</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-mobile-phone"></i> fa-mobile-phone
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-money"></i> fa-money</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-moon-o"></i> fa-moon-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-mortar-board"></i> fa-mortar-board
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-music"></i> fa-music</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-navicon"></i> fa-navicon
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-newspaper-o"></i> fa-newspaper-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-paint-brush"></i> fa-paint-brush</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-paper-plane"></i> fa-paper-plane</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-paper-plane-o"></i> fa-paper-plane-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-paw"></i> fa-paw</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-pencil"></i> fa-pencil</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-pencil-square"></i> fa-pencil-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-pencil-square-o"></i> fa-pencil-square-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-phone"></i> fa-phone</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-phone-square"></i> fa-phone-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-photo"></i> fa-photo
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-picture-o"></i> fa-picture-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-pie-chart"></i> fa-pie-chart</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-plane"></i> fa-plane</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-plug"></i> fa-plug</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-plus"></i> fa-plus</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-plus-circle"></i> fa-plus-circle</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-plus-square"></i> fa-plus-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-plus-square-o"></i> fa-plus-square-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-power-off"></i> fa-power-off</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-print"></i> fa-print</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-puzzle-piece"></i> fa-puzzle-piece</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-qrcode"></i> fa-qrcode</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-question"></i> fa-question</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-question-circle"></i> fa-question-circle</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-quote-left"></i> fa-quote-left</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-quote-right"></i> fa-quote-right</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-random"></i> fa-random</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-recycle"></i> fa-recycle</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-refresh"></i> fa-refresh</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-remove"></i> fa-remove
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-reorder"></i> fa-reorder
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-reply"></i> fa-reply</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-reply-all"></i> fa-reply-all</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-retweet"></i> fa-retweet</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-road"></i> fa-road</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-rocket"></i> fa-rocket</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-rss"></i> fa-rss</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-rss-square"></i> fa-rss-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-search"></i> fa-search</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-search-minus"></i> fa-search-minus</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-search-plus"></i> fa-search-plus</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-send"></i> fa-send
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-send-o"></i> fa-send-o
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-share"></i> fa-share</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-share-alt"></i> fa-share-alt</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-share-alt-square"></i> fa-share-alt-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-share-square"></i> fa-share-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-share-square-o"></i> fa-share-square-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-shield"></i> fa-shield</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-shopping-cart"></i> fa-shopping-cart</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-sign-in"></i> fa-sign-in</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-sign-out"></i> fa-sign-out</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-signal"></i> fa-signal</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-sitemap"></i> fa-sitemap</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-sliders"></i> fa-sliders</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-smile-o"></i> fa-smile-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-soccer-ball-o"></i> fa-soccer-ball-o
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-sort"></i> fa-sort</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-sort-alpha-asc"></i> fa-sort-alpha-asc</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-sort-alpha-desc"></i> fa-sort-alpha-desc</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-sort-amount-asc"></i> fa-sort-amount-asc</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-sort-amount-desc"></i> fa-sort-amount-desc</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-sort-asc"></i> fa-sort-asc</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-sort-desc"></i> fa-sort-desc</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-sort-down"></i> fa-sort-down
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-sort-numeric-asc"></i> fa-sort-numeric-asc</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-sort-numeric-desc"></i> fa-sort-numeric-desc</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-sort-up"></i> fa-sort-up
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-space-shuttle"></i> fa-space-shuttle</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-spinner"></i> fa-spinner</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-spoon"></i> fa-spoon</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-square"></i> fa-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-square-o"></i> fa-square-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-star"></i> fa-star</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-star-half"></i> fa-star-half</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-star-half-empty"></i> fa-star-half-empty
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-star-half-full"></i> fa-star-half-full
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-star-half-o"></i> fa-star-half-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-star-o"></i> fa-star-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-suitcase"></i> fa-suitcase</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-sun-o"></i> fa-sun-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-support"></i> fa-support
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-tablet"></i> fa-tablet</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-tachometer"></i> fa-tachometer</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-tag"></i> fa-tag</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-tags"></i> fa-tags</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-tasks"></i> fa-tasks</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-taxi"></i> fa-taxi</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-terminal"></i> fa-terminal</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-thumb-tack"></i> fa-thumb-tack</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-thumbs-down"></i> fa-thumbs-down</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-thumbs-o-down"></i> fa-thumbs-o-down</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-thumbs-o-up"></i> fa-thumbs-o-up</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-thumbs-up"></i> fa-thumbs-up</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-ticket"></i> fa-ticket</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-times"></i> fa-times</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-times-circle"></i> fa-times-circle</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-times-circle-o"></i> fa-times-circle-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-tint"></i> fa-tint</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-toggle-down"></i> fa-toggle-down
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-toggle-left"></i> fa-toggle-left
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-toggle-off"></i> fa-toggle-off</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-toggle-on"></i> fa-toggle-on</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-toggle-right"></i> fa-toggle-right
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-toggle-up"></i> fa-toggle-up
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-trash"></i> fa-trash</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-trash-o"></i> fa-trash-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-tree"></i> fa-tree</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-trophy"></i> fa-trophy</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-truck"></i> fa-truck</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-tty"></i> fa-tty</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-umbrella"></i> fa-umbrella</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-university"></i> fa-university</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-unlock"></i> fa-unlock</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-unlock-alt"></i> fa-unlock-alt</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-unsorted"></i> fa-unsorted
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-upload"></i> fa-upload</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-user"></i> fa-user</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-users"></i> fa-users</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-video-camera"></i> fa-video-camera</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-volume-down"></i> fa-volume-down</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-volume-off"></i> fa-volume-off</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-volume-up"></i> fa-volume-up</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-warning"></i> fa-warning
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-wheelchair"></i> fa-wheelchair</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-wifi"></i> fa-wifi</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-wrench"></i> fa-wrench</div>
					</div>


					<h4 className="text-center">File Type Icons</h4>

					<div className="row fontawesome-icon-list">


						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file"></i> fa-file</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-archive-o"></i> fa-file-archive-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-audio-o"></i> fa-file-audio-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-code-o"></i> fa-file-code-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-excel-o"></i> fa-file-excel-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-image-o"></i> fa-file-image-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-movie-o"></i> fa-file-movie-o
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-o"></i> fa-file-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-pdf-o"></i> fa-file-pdf-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-photo-o"></i> fa-file-photo-o
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-picture-o"></i> fa-file-picture-o
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-powerpoint-o"></i> fa-file-powerpoint-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-sound-o"></i> fa-file-sound-o
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-text"></i> fa-file-text</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-text-o"></i> fa-file-text-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-video-o"></i> fa-file-video-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-word-o"></i> fa-file-word-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-zip-o"></i> fa-file-zip-o
							<span className="text-muted">(alias)</span>
						</div>
					</div>


					<h4 className="text-center">Spinner Icons</h4>

					<div className="row fontawesome-icon-list">


						<div className="col-md-3 col-sm-4">
							<i className="fa fa-circle-o-notch fa-spin"></i> fa-circle-o-notch</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cog fa-spin"></i> fa-cog</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-gea fa-spinr"></i> fa-gear
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-refresh fa-spin"></i> fa-refresh</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-spinner fa-spin"></i> fa-spinner</div>
					</div>


					<h4 className="text-center">Form Control Icons</h4>

					<div className="row fontawesome-icon-list">

						<div className="col-md-3 col-sm-4">
							<i className="fa fa-check-square"></i> fa-check-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-check-square-o"></i> fa-check-square-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-circle"></i> fa-circle</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-circle-o"></i> fa-circle-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-dot-circle-o"></i> fa-dot-circle-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-minus-square"></i> fa-minus-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-minus-square-o"></i> fa-minus-square-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-plus-square"></i> fa-plus-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-plus-square-o"></i> fa-plus-square-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-square"></i> fa-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-square-o"></i> fa-square-o</div>
					</div>


					<h4 className="text-center">Payment Icons</h4>
					<div className="row fontawesome-icon-list">
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc-amex"></i> fa-cc-amex</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc-discover"></i> fa-cc-discover</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc-mastercard"></i> fa-cc-mastercard</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc-paypal"></i> fa-cc-paypal</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc-stripe"></i> fa-cc-stripe</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc-visa"></i> fa-cc-visa</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-credit-card"></i> fa-credit-card</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-google-wallet"></i> fa-google-wallet</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-paypal"></i> fa-paypal</div>
					</div>


					<h4 className="text-center">Chart Icons</h4>
					<div className="row fontawesome-icon-list">
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-area-chart"></i> fa-area-chart</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bar-chart"></i> fa-bar-chart</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bar-chart-o"></i> fa-bar-chart-o
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-line-chart"></i> fa-line-chart</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-pie-chart"></i> fa-pie-chart</div>
					</div>


					<h4 className="text-center">Currency Icons</h4>
					<div className="row fontawesome-icon-list">
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bitcoin"></i> fa-bitcoin
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-btc"></i> fa-btc</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cny"></i> fa-cny
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-dollar"></i> fa-dollar
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-eur"></i> fa-eur</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-euro"></i> fa-euro
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-gbp"></i> fa-gbp</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-ils"></i> fa-ils</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-inr"></i> fa-inr</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-jpy"></i> fa-jpy</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-krw"></i> fa-krw</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-money"></i> fa-money</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-rmb"></i> fa-rmb
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-rouble"></i> fa-rouble
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-rub"></i> fa-rub</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-ruble"></i> fa-ruble
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-rupee"></i> fa-rupee
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-shekel"></i> fa-shekel
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-sheqel"></i> fa-sheqel
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-try"></i> fa-try</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-turkish-lira"></i> fa-turkish-lira
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-usd"></i> fa-usd</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-won"></i> fa-won
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-yen"></i> fa-yen
							<span className="text-muted">(alias)</span>
						</div>
					</div>


					<h4 className="text-center">Text Editor Icons</h4>
					<div className="row fontawesome-icon-list">
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-align-center"></i> fa-align-center</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-align-justify"></i> fa-align-justify</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-align-left"></i> fa-align-left</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-align-right"></i> fa-align-right</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bold"></i> fa-bold</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-chain"></i> fa-chain
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-chain-broken"></i> fa-chain-broken</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-clipboard"></i> fa-clipboard</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-columns"></i> fa-columns</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-copy"></i> fa-copy
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cut"></i> fa-cut
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-dedent"></i> fa-dedent
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-eraser"></i> fa-eraser</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file"></i> fa-file</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-o"></i> fa-file-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-text"></i> fa-file-text</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-file-text-o"></i> fa-file-text-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-files-o"></i> fa-files-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-floppy-o"></i> fa-floppy-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-font"></i> fa-font</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-header"></i> fa-header</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-indent"></i> fa-indent</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-italic"></i> fa-italic</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-link"></i> fa-link</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-list"></i> fa-list</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-list-alt"></i> fa-list-alt</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-list-ol"></i> fa-list-ol</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-list-ul"></i> fa-list-ul</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-outdent"></i> fa-outdent</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-paperclip"></i> fa-paperclip</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-paragraph"></i> fa-paragraph</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-paste"></i> fa-paste
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-repeat"></i> fa-repeat</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-rotate-left"></i> fa-rotate-left
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-rotate-right"></i> fa-rotate-right
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-save"></i> fa-save
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-scissors"></i> fa-scissors</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-strikethrough"></i> fa-strikethrough</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-subscript"></i> fa-subscript</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-superscript"></i> fa-superscript</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-table"></i> fa-table</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-text-height"></i> fa-text-height</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-text-width"></i> fa-text-width</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-th"></i> fa-th</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-th-large"></i> fa-th-large</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-th-list"></i> fa-th-list</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-underline"></i> fa-underline</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-undo"></i> fa-undo</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-unlink"></i> fa-unlink
							<span className="text-muted">(alias)</span>
						</div>
					</div>


					<h4 className="text-center">Directional Icons</h4>
					<div className="row fontawesome-icon-list">
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-angle-double-down"></i> fa-angle-double-down</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-angle-double-left"></i> fa-angle-double-left</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-angle-double-right"></i> fa-angle-double-right</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-angle-double-up"></i> fa-angle-double-up</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-angle-down"></i> fa-angle-down</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-angle-left"></i> fa-angle-left</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-angle-right"></i> fa-angle-right</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-angle-up"></i> fa-angle-up</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrow-circle-down"></i> fa-arrow-circle-down</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrow-circle-left"></i> fa-arrow-circle-left</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrow-circle-o-down"></i> fa-arrow-circle-o-down</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrow-circle-o-left"></i> fa-arrow-circle-o-left</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrow-circle-o-right"></i> fa-arrow-circle-o-right</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrow-circle-o-up"></i> fa-arrow-circle-o-up</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrow-circle-right"></i> fa-arrow-circle-right</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrow-circle-up"></i> fa-arrow-circle-up</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrow-down"></i> fa-arrow-down</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrow-left"></i> fa-arrow-left</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrow-right"></i> fa-arrow-right</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrow-up"></i> fa-arrow-up</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrows"></i> fa-arrows</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrows-alt"></i> fa-arrows-alt</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrows-h"></i> fa-arrows-h</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrows-v"></i> fa-arrows-v</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-caret-down"></i> fa-caret-down</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-caret-left"></i> fa-caret-left</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-caret-right"></i> fa-caret-right</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-caret-square-o-down"></i> fa-caret-square-o-down</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-caret-square-o-left"></i> fa-caret-square-o-left</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-caret-square-o-right"></i> fa-caret-square-o-right</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-caret-square-o-up"></i> fa-caret-square-o-up</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-caret-up"></i> fa-caret-up</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-chevron-circle-down"></i> fa-chevron-circle-down</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-chevron-circle-left"></i> fa-chevron-circle-left</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-chevron-circle-right"></i> fa-chevron-circle-right</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-chevron-circle-up"></i> fa-chevron-circle-up</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-chevron-down"></i> fa-chevron-down</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-chevron-left"></i> fa-chevron-left</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-chevron-right"></i> fa-chevron-right</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-chevron-up"></i> fa-chevron-up</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-hand-o-down"></i> fa-hand-o-down</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-hand-o-left"></i> fa-hand-o-left</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-hand-o-right"></i> fa-hand-o-right</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-hand-o-up"></i> fa-hand-o-up</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-long-arrow-down"></i> fa-long-arrow-down</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-long-arrow-left"></i> fa-long-arrow-left</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-long-arrow-right"></i> fa-long-arrow-right</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-long-arrow-up"></i> fa-long-arrow-up</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-toggle-down"></i> fa-toggle-down
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-toggle-left"></i> fa-toggle-left
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-toggle-right"></i> fa-toggle-right
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-toggle-up"></i> fa-toggle-up
							<span className="text-muted">(alias)</span>
						</div>
					</div>


					<h4 className="text-center">Video Player Icons</h4>
					<div className="row fontawesome-icon-list">
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-arrows-alt"></i> fa-arrows-alt</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-backward"></i> fa-backward</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-compress"></i> fa-compress</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-eject"></i> fa-eject</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-expand"></i> fa-expand</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-fast-backward"></i> fa-fast-backward</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-fast-forward"></i> fa-fast-forward</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-forward"></i> fa-forward</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-pause"></i> fa-pause</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-play"></i> fa-play</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-play-circle"></i> fa-play-circle</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-play-circle-o"></i> fa-play-circle-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-step-backward"></i> fa-step-backward</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-step-forward"></i> fa-step-forward</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-stop"></i> fa-stop</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-youtube-play"></i> fa-youtube-play</div>
					</div>


					<h4 className="text-center">Brand Icons</h4>


					<div className="row fontawesome-icon-list">
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-adn"></i> fa-adn</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-android"></i> fa-android</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-angellist"></i> fa-angellist</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-apple"></i> fa-apple</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-behance"></i> fa-behance</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-behance-square"></i> fa-behance-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bitbucket"></i> fa-bitbucket</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bitbucket-square"></i> fa-bitbucket-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-bitcoin"></i> fa-bitcoin
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-btc"></i> fa-btc</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc-amex"></i> fa-cc-amex</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc-discover"></i> fa-cc-discover</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc-mastercard"></i> fa-cc-mastercard</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc-paypal"></i> fa-cc-paypal</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc-stripe"></i> fa-cc-stripe</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-cc-visa"></i> fa-cc-visa</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-codepen"></i> fa-codepen</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-css3"></i> fa-css3</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-delicious"></i> fa-delicious</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-deviantart"></i> fa-deviantart</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-digg"></i> fa-digg</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-dribbble"></i> fa-dribbble</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-dropbox"></i> fa-dropbox</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-drupal"></i> fa-drupal</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-empire"></i> fa-empire</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-facebook"></i> fa-facebook</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-facebook-square"></i> fa-facebook-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-flickr"></i> fa-flickr</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-foursquare"></i> fa-foursquare</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-ge"></i> fa-ge
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-git"></i> fa-git</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-git-square"></i> fa-git-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-github"></i> fa-github</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-github-alt"></i> fa-github-alt</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-github-square"></i> fa-github-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-gittip"></i> fa-gittip</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-google"></i> fa-google</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-google-plus"></i> fa-google-plus</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-google-plus-square"></i> fa-google-plus-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-google-wallet"></i> fa-google-wallet</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-hacker-news"></i> fa-hacker-news</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-html5"></i> fa-html5</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-instagram"></i> fa-instagram</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-ioxhost"></i> fa-ioxhost</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-joomla"></i> fa-joomla</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-jsfiddle"></i> fa-jsfiddle</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-lastfm"></i> fa-lastfm</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-lastfm-square"></i> fa-lastfm-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-linkedin"></i> fa-linkedin</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-linkedin-square"></i> fa-linkedin-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-linux"></i> fa-linux</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-maxcdn"></i> fa-maxcdn</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-meanpath"></i> fa-meanpath</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-openid"></i> fa-openid</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-pagelines"></i> fa-pagelines</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-paypal"></i> fa-paypal</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-pied-piper"></i> fa-pied-piper</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-pied-piper-alt"></i> fa-pied-piper-alt</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-pinterest"></i> fa-pinterest</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-pinterest-square"></i> fa-pinterest-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-qq"></i> fa-qq</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-ra"></i> fa-ra
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-rebel"></i> fa-rebel</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-reddit"></i> fa-reddit</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-reddit-square"></i> fa-reddit-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-renren"></i> fa-renren</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-share-alt"></i> fa-share-alt</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-share-alt-square"></i> fa-share-alt-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-skype"></i> fa-skype</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-slack"></i> fa-slack</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-slideshare"></i> fa-slideshare</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-soundcloud"></i> fa-soundcloud</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-spotify"></i> fa-spotify</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-stack-exchange"></i> fa-stack-exchange</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-stack-overflow"></i> fa-stack-overflow</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-steam"></i> fa-steam</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-steam-square"></i> fa-steam-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-stumbleupon"></i> fa-stumbleupon</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-stumbleupon-circle"></i> fa-stumbleupon-circle</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-tencent-weibo"></i> fa-tencent-weibo</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-trello"></i> fa-trello</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-tumblr"></i> fa-tumblr</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-tumblr-square"></i> fa-tumblr-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-twitch"></i> fa-twitch</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-twitter"></i> fa-twitter</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-twitter-square"></i> fa-twitter-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-vimeo-square"></i> fa-vimeo-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-vine"></i> fa-vine</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-vk"></i> fa-vk</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-wechat"></i> fa-wechat
							<span className="text-muted">(alias)</span>
						</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-weibo"></i> fa-weibo</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-weixin"></i> fa-weixin</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-windows"></i> fa-windows</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-wordpress"></i> fa-wordpress</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-xing"></i> fa-xing</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-xing-square"></i> fa-xing-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-yahoo"></i> fa-yahoo</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-yelp"></i> fa-yelp</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-youtube"></i> fa-youtube</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-youtube-play"></i> fa-youtube-play</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-youtube-square"></i> fa-youtube-square</div>
					</div>


					<h4 className="text-center">Medical Icons</h4>
					<div className="row fontawesome-icon-list">
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-ambulance"></i> fa-ambulance</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-h-square"></i> fa-h-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-hospital-o"></i> fa-hospital-o</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-medkit"></i> fa-medkit</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-plus-square"></i> fa-plus-square</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-stethoscope"></i> fa-stethoscope</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-user-md"></i> fa-user-md</div>
						<div className="col-md-3 col-sm-4">
							<i className="fa fa-wheelchair"></i> fa-wheelchair</div>
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
