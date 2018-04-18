import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/main.css';
import './css/animations.css';
import './css/fonts.css';

class App extends Component {
  render() {
    return (
        <div className="App">
        {/*[if lt IE 9]>
		<div className="bg-danger text-center">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/" className="highlight">upgrade your browser</a> to improve your experience.</div>
	<![endif]*/}

	{/* search modal */}
	<div className="modal" tabindex="-1" role="dialog" aria-labelledby="search_modal" id="search_modal">
		<div className="widget widget_search">
			<form method="get" className="searchform form-inline" action="/">
				<div className="form-group">
					<input type="text" value="" name="search" className="form-control" placeholder="Search keyword" id="modal-search-input" />
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
												<input id="search-input" type="text" value="" name="search" className="form-control" placeholder="Search to site" />
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
								<img src={require("./images/logo.png")} alt="" className="main_bg_color" />
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

											{/*<li>
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
											</li>*/}

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

			<section className="intro_section page_mainslider ds">
				<div className="flexslider">
					<ul className="slides">
						<li>
							<img src={require("./images/slide01.jpg")} alt="" />
							<div className="container">
								<div className="row">
									<div className="col-sm-12">
										<div className="slide_description_wrapper text-right">
											<div className="slide_description text-center">
												<div className="intro-layer" data-animation="slideExpandUp">
													<p className="text-uppercase fontsize_14 bold letter-spacing-033 bottommargin_15">
														look and feel your best
													</p>
													<h2 className="margin_0">welcome to the</h2>
													<h1 className="topmargin_0">clinique</h1>
												</div>
												<div className="intro-layer" data-animation="slideExpandUp">
													<p className="text-uppercase fontsize_14 bold letter-spacing-033">
														The art and science of pure flower and plant essences
													</p>
												</div>
											</div>
											{/* eof .slide_description */}
										</div>
										{/* eof .slide_description_wrapper */}
									</div>
									{/* eof .col-* */}
								</div>
								{/* eof .row */}
							</div>
							{/* eof .container */}
						</li>

						<li>
							<img src={require("./images/slide01.jpg")} alt="" />
							<div className="container">
								<div className="row">
									<div className="col-sm-12">
										<div className="slide_description_wrapper text-right">
											<div className="slide_description text-center">
												<div className="intro-layer" data-animation="slideExpandUp">
													<p className="text-uppercase fontsize_14 bold letter-spacing-033 bottommargin_15">
														look and feel your best
													</p>
													<h2 className="margin_0">welcome to the</h2>
													<h1 className="topmargin_0">clinique</h1>
												</div>
												<div className="intro-layer" data-animation="slideExpandUp">
													<p className="text-uppercase fontsize_14 bold letter-spacing-033">
														The art and science of pure flower and plant essences
													</p>
												</div>
											</div>
											{/* eof .slide_description */}
										</div>
										{/* eof .slide_description_wrapper */}
									</div>
									{/* eof .col-* */}
								</div>
								{/* eof .row */}
							</div>
							{/* eof .container */}
						</li>


					</ul>
				</div>
				{/* eof flexslider */}
			</section>

			<div className="contacts-section-container">
				<section className="cs section_padding_45 contacts-section">
					<div className="container">
						<div className="row">
							<div className="col-md-4 teaser">
								<div className="media">
									<div className="media-left media-middle">
										<div className="border_icon size_small round">
											<i className="rt-icon2-location highlight2"></i>
										</div>
									</div>
									<div className="media-body lineheight_1 media-middle">
										<span className="lusitana-bold-up fontsize_14">Livingstone, Season Street
											<span className="fontsize_18 highlight2">45/2</span>
										</span>
										<br />
										<span className="lusitana-bold-up fontsize_14">Los angeles,
											<span className="highlight2">Inc -
												<span className="fontsize_18">4502</span>
											</span>
										</span>
									</div>
								</div>
							</div>

							<div className="col-md-4 teaser">
								<div className="media">
									<div className="media-left media-middle">
										<div className="border_icon size_small round">
											<i className="rt-icon2-tablet3 highlight2"></i>
										</div>
									</div>
									<div className="media-body lineheight_1 media-middle">
										<span className="lusitana-bold-up fontsize_14">call to make an appontment</span>
										<br />
										<span className="lusitana-bold-up fontsize_18 highlight2">1 (800) 300 2214</span>
									</div>
								</div>
							</div>

							<div className="col-md-4 teaser">
								<div className="media">
									<div className="media-left media-middle">
										<div className="border_icon size_small round">
											<i className="rt-icon2-clock2 highlight2 fontsize_16"></i>
										</div>
									</div>
									<div className="media-body lineheight_1 media-middle">
										<span className="lusitana-bold-up fontsize_14">Tuesday - Sunday
											<span className="highlight2">
												<span className="fontsize_18">9.00</span> am -
												<span className="fontsize_18">7.00</span> pm</span>
										</span>
										<br />
										<span className="lusitana-bold-up fontsize_14">Saturday &amp; Monday
											<span className="highlight2">Closed</span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<section className="ls section_padding_100 director">
				<div className="container">
					<div className="row">
						<div className="col-lg-5 col-md-4">
							<p className="fontsize_14 text-uppercase bold letter-spacing-033 grey bottommargin_10">estd
								<span className="logo-icon icon-small"></span> 1987</p>
							<h3 className="highlight topmargin_0 bottommargin_15">
								The Infinity of Beauty &amp; Indulgence
							</h3>
							<p className="bottommargin_0">
								But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of
								selection.
							</p>
						</div>
						<div className="col-lg-5 col-md-5 text-center">
							<div className="founding-date-cont">
								<img src={require("./images/director.png")} alt="" />
							</div>
						</div>
						<div className="col-lg-2 col-md-3 text-center text-md-left">
							<p className="fontsize_14 bold text-uppercase grey margin_0">director &amp; owner</p>
							<h3 className="highlight topmargin_10">Lori
								<br /> Foster</h3>
							<hr className="inline-block" />
							<br />
							<div className="signature"></div>
						</div>
					</div>
				</div>
			</section>

			<section className="ls ms section_padding_50 banners texture_bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-9 col-md-12">
							<div className="banner big-banner with_backing left_backing with_background with_padding">
								<div className="row display_table_sm">
									<div className="col-md-5 display_table_cell_sm text-center">
										<div className="item-media entry-thumbnail">
											<img src={require("./images/banner-big.jpg")} alt="" />
										</div>
									</div>
									<div className="col-md-7 text-center display_table_cell_sm">
										<div className="item-content">
											<p className="fontsize_14 bold letter-spacing-033 text-uppercase highlight3">gift certificate</p>
											<hr className="divider-size_2_30" />
											<h3 className="highlight">This friday
												<br /> only 20% off
												<br /> deep massage</h3>
											<h6 className="theme-block with_padding topmargin_50 bottommargin_50">use a change to take advantage of this offer!</h6>
											<a href="appointment.html" className="theme_button color3 big_button">Request an appointment</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-offset-0 col-lg-3 col-md-offset-2 col-md-8">
							<div className="banner with_border thick_border with_padding with_background">
								<div className="row">
									<div className="vertical-item content-absolute small-banner col-xs-12 col-sm-6 col-lg-12">
										<div className="item-media">
											<img src={require("./images/banner-small02.jpg")} alt="" />
										</div>
										<div className="item-content with_background text-center">
											<h6>
												Be beautiful. Feel good about it
											</h6>
											<a href="blog-right.html" className="theme_button color2 block_button">Our blog</a>
										</div>
									</div>
									<div className="clearfix hidden-md hidden-sm"></div>
									<hr className="divider-size_1_70 divider_30 hidden-md hidden-sm" />
									<div className="vertical-item content-absolute small-banner col-xs-12 col-sm-6 col-lg-12">
										<div className="item-media">
											<img src={require("./images/banner-small01.jpg")} alt="" />
										</div>
										<div className="item-content with_background text-center">
											<h6>
												Your beauty is our profession
											</h6>
											<a href="shop.html" className="theme_button color4 block_button">Shop now</a>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="ls section_padding_top_100 section_padding_bottom_75 services">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 text-center">
							<h3 className="highlight margin_0">Procedures &amp; treatments</h3>
							<hr className="divider-size_2_30 divider_25" />
							<p className="text-uppercase bold fontsize_14 letter-spacing-033 grey topmargin_-5 bottommargin_10">No longer beyond your budget</p>
						</div>
					</div>
					<div className="row bottommargin_10">
						<div className="col-md-4 col-lg-3">
							<ul className="list1 no-bullets theme-block services-list">
								<li>
									<a href="services.html">
										<span className="service-icon service-medical"></span>
										<h6 className="inline-block margin_0">medical spa</h6>
										<i className="fa fa-chevron-right lightgrey"></i>
									</a>
								</li>
								<li>
									<a href="services.html">
										<span className="service-icon service-cosmetic"></span>
										<h6 className="inline-block margin_0">Cosmetic bar</h6>
										<i className="fa fa-chevron-right lightgrey"></i>
									</a>
								</li>
								<li>
									<a href="services.html">
										<span className="service-icon service-hair"></span>
										<h6 className="inline-block margin_0">Hair studio</h6>
										<i className="fa fa-chevron-right lightgrey"></i>
									</a>
								</li>
							</ul>
						</div>
						<div className="col-md-4 col-lg-6 text-center">
							<div className="services-media">
								<img src={require("./images/services.png")} alt="" />
							</div>
						</div>
						<div className="col-md-4 col-lg-3">
							<ul className="list1 no-bullets theme-block services-list">
								<li>
									<a href="services.html">
										<span className="service-icon service-medical"></span>
										<h6 className="inline-block margin_0">medical spa</h6>
										<i className="fa fa-chevron-right lightgrey"></i>
									</a>
								</li>
								<li>
									<a href="services.html">
										<span className="service-icon service-cosmetic"></span>
										<h6 className="inline-block margin_0">Cosmetic bar</h6>
										<i className="fa fa-chevron-right lightgrey"></i>
									</a>
								</li>
								<li>
									<a href="services.html">
										<span className="service-icon service-hair"></span>
										<h6 className="inline-block margin_0">Hair studio</h6>
										<i className="fa fa-chevron-right lightgrey"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="ls section_padding_50 texture_bg lookbook">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-0 col-lg-3 text-center">
							<div className="with_padding theme_background lookbook-small">
								<div className="with_border thick_border columns_padding_0">
									<div className="row margin_0">
										<div className="col-sm-4 col-lg-12">
											<div className="with_padding">
												<div className="lusitana-bold-up fontsize_56 lineheight_1 highlight">15</div>
												<h6 className="margin_0">years of experience</h6>
											</div>
										</div>
										<div className="clearfix hidden-md hidden-sm"></div>
										<hr className="divider-size_1_70 divider_0 hidden-md hidden-sm" />
										<div className="col-sm-4 col-lg-12">
											<div className="with_padding">
												<div className="lusitana-bold-up fontsize_56 lineheight_1 highlight">32</div>
												<h6 className="margin_0">members in team</h6>
											</div>
										</div>
										<div className="clearfix hidden-md hidden-sm"></div>
										<hr className="hidden-md hidden-sm divider_0" />
										<div className="col-sm-4 col-lg-12">
											<div className="with_padding with_background">
												<div className="lusitana-bold-up fontsize_56 lineheight_1 highlight4">75</div>
												<h6 className="margin_0">professional procedures</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="clearfix hidden-lg "></div>

						<div className="col-lg-9">
							<div className="with_backing theme_background lookbook-big columns_padding_0">
								<div className="row margin_0">
									<div className="col-sm-4">
										<div className="vertical-item with_background with_padding">
											<div className="item-media text-center">
												<img src={require("./images/lookbook01.jpg")} alt="" />
											</div>
											<div className="item-content text-center">
												<p className="letter-spacing-033 small-text lineheight_1 highlight4">Relaxation</p>
												<h3 className="highlight">beauty
													<br /> center</h3>
												<hr className="divider-size_2_30 divider_25 highlight4" />
												<p>
													On the hand, we denounce with righteous indignation and dislike men whoare
												</p>
												<hr />
												<a href="services.html" className="theme_button wide_button color4">View details</a>
											</div>
										</div>
									</div>

									<div className="col-sm-4">
										<div className="vertical-item muted_background with_padding">
											<div className="item-media text-center">
												<img src={require("./images/lookbook02.jpg")} alt="" />
											</div>
											<div className="item-content text-center">
												<p className="letter-spacing-033 small-text lineheight_1 highlight3">refreshing</p>
												<h3 className="highlight">Hair
													<br /> salon</h3>
												<hr className="divider-size_2_30 divider_25 highlight3" />
												<p>
													He rejects pleasures to secure other greater pleasures or else endures pains to avoid
												</p>
												<hr />
												<a href="services.html" className="theme_button wide_button color3">View details</a>
											</div>
										</div>
									</div>

									<div className="col-sm-4">
										<div className="vertical-item with_background with_padding">
											<div className="item-media text-center">
												<img src={require("./images/lookbook03.jpg")} alt="" />
											</div>
											<div className="item-content text-center">
												<p className="letter-spacing-033 small-text lineheight_1 highlight2">Rejuvenation</p>
												<h3 className="highlight">spa
													<br /> resort</h3>
												<hr className="divider-size_2_30 divider_25 highlight2" />
												<p>
													That they cannot foresee the pain and trouble that are bound to ensue and belongs
												</p>
												<hr />
												<a href="services.html" className="theme_button wide_button color2">View details</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>

			{/* Architecture nav tabs */}
			<section className="ls">
				<div className="container columns_padding_0">
					<ul className="nav nav-tabs row margin_0 architecture-tabs" role="tablist">
						<li className="active col-sm-4">
							<a href="#exterior" className="lusitana-bold-up fontsize_14" role="tab" data-toggle="tab">excellent exterior</a>
						</li>
						<li className="col-sm-4">
							<a href="#interior" className="lusitana-bold-up fontsize_14" role="tab" data-toggle="tab">luxury interior</a>
						</li>
						<li className="col-sm-4">
							<a href="#equipment" className="lusitana-bold-up fontsize_14" role="tab" data-toggle="tab">specialized equipment</a>
						</li>
					</ul>
				</div>
			</section>
			{/* Architecture panes */}
			<section className="ls ms section_padding_50">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="tab-content architecture-tab-content text-center">
								<div className="tab-pane fade in active with_background" id="exterior">
									<div className="tab-media">
										<div className="tab-content">
											<div className="tab-pane fade in active" id="exterior01">
												<img src={require("./images/architecture/exterior01.jpg")} alt="" />
												<div className="media-links">
													<a className="abs-link prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="/images/architecture/exterior01.jpg"></a>
												</div>
											</div>
											<div className="tab-pane fade in" id="exterior02">
												<img src={require("./images/architecture/exterior02.jpg")} alt="" />
												<div className="media-links">
													<a className="abs-link prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="/images/architecture/exterior02.jpg"></a>
												</div>
											</div>
											<div className="tab-pane fade in" id="exterior03">
												<img src={require("./images/architecture/exterior03.jpg")} alt="" />
												<div className="media-links">
													<a className="abs-link prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="/images/architecture/exterior03.jpg"></a>
												</div>
											</div>
											<div className="tab-pane fade in" id="exterior04">
												<img src={require("./images/architecture/exterior04.jpg")} alt="" />
												<div className="media-links">
													<a className="abs-link prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="/images/architecture/exterior04.jpg"></a>
												</div>
											</div>
										</div>

										<ul className="tab-media-elements with_border thick_border mutted_border with_background no-bullets" role="tablist">
											<li className="item-media active">
												<a href="#exteriorr01" role="tab" data-toggle="tab">
													<img src={require("./images/architecture/exterior01.jpg")} alt="" />
												</a>
												{/* <div className="media-links"></div> */}
											</li>
											<li className="item-media">
												<a href="#exterior02" role="tab" data-toggle="tab">
													<img src={require("./images/architecture/exterior02.jpg")} alt="" />
												</a>
											</li>
											<li className="item-media">
												<a href="#exterior03" role="tab" data-toggle="tab">
													<img src={require("./images/architecture/exterior03.jpg")} alt="" />
												</a>
											</li>
											<li className="item-media">
												<a href="#exterior04" role="tab" data-toggle="tab">
													<img src={require("./images/architecture/exterior04.jpg")} alt="" />
												</a>
											</li>
											<li className="clearfix"></li>
										</ul>

									</div>

									<div className="tab-content">
										<h3 className="highlight bottommargin_25">wellness luxury
											<br />spa resort</h3>
										<img src={require("./img/logo-icon-color4.png")} alt="" />
										<p className="topmargin_20 fontsize_14 bold letter-spacing-033 text-uppercase grey">
											give youself a moment
											<br /> of relaxation
										</p>
										<hr className="divider-size_1_70 highlight4" />
										<p className="darkenfont">
											We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, that they cannot foresee the pain and trouble that are bound to ensue fail.
										</p>
									</div>

									<div className="clearfix"></div>
								</div>

								<div className="tab-pane fade in with_background content-left" id="interior">


									<div className="tab-media">
										<div className="tab-content">
											<div className="tab-pane fade in active" id="interior01">
												<img src={require("./images/architecture/interior01.jpg")} alt="" />
												<div className="media-links">
													<a className="abs-link prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="/images/architecture/interior01.jpg"></a>
												</div>
											</div>
											<div className="tab-pane fade in" id="interior02">
												<img src={require("./images/architecture/interior02.jpg")} alt="" />
												<div className="media-links">
													<a className="abs-link prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="/images/architecture/interior02.jpg"></a>
												</div>
											</div>
											<div className="tab-pane fade in" id="interior03">
												<img src={require("./images/architecture/interior03.jpg")} alt="" />
												<div className="media-links">
													<a className="abs-link prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="/images/architecture/interior03.jpg"></a>
												</div>
											</div>
											<div className="tab-pane fade in" id="interior04">
												<img src={require("./images/architecture/interior04.jpg")} alt="" />
												<div className="media-links">
													<a className="abs-link prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="/images/architecture/interior04.jpg"></a>
												</div>
											</div>
										</div>

										<ul className="tab-media-elements with_border thick_border mutted_border with_background no-bullets" role="tablist">
											<li className="item-media active">
												<a href="#interior01" role="tab" data-toggle="tab" className="media-color3">
													<img src={require("./images/architecture/interior01.jpg")} alt="" />
												</a>
												{/* <div className="media-links"></div> */}
											</li>
											<li className="item-media">
												<a href="#interior02" role="tab" data-toggle="tab" className="media-color3">
													<img src={require("./images/architecture/interior02.jpg")} alt="" />
												</a>
											</li>
											<li className="item-media">
												<a href="#interior03" role="tab" data-toggle="tab" className="media-color3">
													<img src={require("./images/architecture/interior03.jpg")} alt="" />
												</a>
											</li>
											<li className="item-media">
												<a href="#interior04" role="tab" data-toggle="tab" className="media-color3">
													<img src={require("./images/architecture/interior04.jpg")} alt="" />
												</a>
											</li>
											<li className="clearfix"></li>
										</ul>

									</div>

									<div className="tab-content">
										<h3 className="highlight bottommargin_25">wellness luxury
											<br />spa resort</h3>
										<img src={require("./img/logo-icon-color3.png")} alt="" />
										<p className="topmargin_20 fontsize_14 bold letter-spacing-033 text-uppercase grey">
											give youself a moment
											<br /> of relaxation
										</p>
										<hr className="divider-size_1_70 highlight3" />
										<p className="darkenfont">
											We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, that they cannot foresee the pain and trouble that are bound to ensue fail.
										</p>
									</div>

								</div>

								<div className="tab-pane fade in with_background" id="equipment">
									<div className="tab-media">
										<div className="tab-content">
											<div className="tab-pane fade in active" id="equipment01">
												<img src={require("./images/architecture/equipment01.jpg")} alt="" />
												<div className="media-links">
													<a className="abs-link prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="/images/architecture/equipment01.jpg"></a>
												</div>
											</div>
											<div className="tab-pane fade in" id="equipment02">
												<img src={require("./images/architecture/equipment02.jpg")} alt="" />
												<div className="media-links">
													<a className="abs-link prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="/images/architecture/equipment02.jpg"></a>
												</div>
											</div>
											<div className="tab-pane fade in" id="equipment03">
												<img src={require("./images/architecture/equipment03.jpg")} alt="" />
												<div className="media-links">
													<a className="abs-link prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="/images/architecture/equipment03.jpg"></a>
												</div>
											</div>
											<div className="tab-pane fade in" id="equipment04">
												<img src={require("./images/architecture/equipment04.jpg")} alt="" />
												<div className="media-links">
													<a className="abs-link prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="/images/architecture/equipment04.jpg"></a>
												</div>
											</div>
										</div>

										<ul className="tab-media-elements with_border thick_border mutted_border with_background no-bullets" role="tablist">
											<li className="item-media active">
												<a href="#equipment01" role="tab" data-toggle="tab" className="media-color2">
													<img src={require("./images/architecture/equipment01.jpg")} alt="" />
												</a>
												{/* <div className="media-links"></div> */}
											</li>
											<li className="item-media">
												<a href="#equipment02" role="tab" data-toggle="tab" className="media-color2">
													<img src={require("./images/architecture/equipment02.jpg")} alt="" />
												</a>
											</li>
											<li className="item-media">
												<a href="#equipment03" role="tab" data-toggle="tab" className="media-color2">
													<img src={require("./images/architecture/equipment03.jpg")} alt="" />
												</a>
											</li>
											<li className="item-media">
												<a href="#equipment04" role="tab" data-toggle="tab" className="media-color2">
													<img src={require("./images/architecture/equipment04.jpg")} alt="" />
												</a>
											</li>
											<li className="clearfix"></li>
										</ul>

									</div>

									<div className="tab-content">
										<h3 className="highlight bottommargin_25">wellness luxury
											<br />spa resort</h3>
										<img src={require("./img/logo-icon-color2.png")} alt="" />
										<p className="topmargin_20 fontsize_14 bold letter-spacing-033 text-uppercase grey">
											give youself a moment
											<br /> of relaxation
										</p>
										<hr className="divider-size_1_70 highlight2" />
										<p className="darkenfont">
											We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, that they cannot foresee the pain and trouble that are bound to ensue fail.
										</p>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="ls section_padding_top_100 section_padding_bottom_120">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 text-center">
							<h3 className="topmargin_0 highlight">Our experts &amp; spa staff</h3>
							<hr className="divider-size_2_30" />
							<p className="fontsize_14 letter-spacing-033 text-uppercase bold grey">The Team of Professionals</p>


							<div className="owl-carousel team-carusel" data-margin="30" data-nav="true" data-items="6" data-loop="true" data-dots="false" data-autoplay="false" data-responsive-xs="1" data-responsive-sm="3" data-responsive-md="4" data-responsive-lg="5" data-responsive-xlg="6">

								<div className="vertical-item content-absolute team-item">
									<div className="item-media">
										<img src={require("./images/team/01.jpg")} alt="" />
										<div className="media-links">
											<div className="team-member-social">
												<a className="social-icon soc-facebook theme-icon" href="#" title="Facebook"></a>
												<a className="social-icon soc-twitter theme-icon" href="#" title="Twitter"></a>
												<a className="social-icon soc-google theme-icon" href="#" title="Google"></a>
												<a className="social-icon soc-youtube theme-icon" href="#" title="Youtube"></a>
											</div>
										</div>
									</div>
									<div className="item-content">
										<h6>
											<a href="#">Lorraine
												<br />Fields</a>
										</h6>
										<hr className="divider-size_2_30" />
										<p className="small-text">
											Spa Manager
										</p>
									</div>
								</div>

								<div className="vertical-item content-absolute team-item">
									<div className="item-media">
										<img src={require("./images/team/02.jpg")} alt="" />
										<div className="media-links">
											<div className="team-member-social">
												<a className="social-icon soc-facebook theme-icon" href="#" title="Facebook"></a>
												<a className="social-icon soc-twitter theme-icon" href="#" title="Twitter"></a>
												<a className="social-icon soc-google theme-icon" href="#" title="Google"></a>
												<a className="social-icon soc-youtube theme-icon" href="#" title="Youtube"></a>
											</div>
										</div>
									</div>
									<div className="item-content">
										<h6>
											<a href="#">Rosemarie
												<br />Fletcher</a>
										</h6>
										<hr className="divider-size_2_30" />
										<p className="small-text">
											Beauty &amp; Wellness Trainer
										</p>
									</div>
								</div>

								<div className="vertical-item content-absolute team-item">
									<div className="item-media">
										<img src={require("./images/team/03.jpg")} alt="" />
										<div className="media-links">
											<div className="team-member-social">
												<a className="social-icon soc-facebook theme-icon" href="#" title="Facebook"></a>
												<a className="social-icon soc-twitter theme-icon" href="#" title="Twitter"></a>
												<a className="social-icon soc-google theme-icon" href="#" title="Google"></a>
												<a className="social-icon soc-youtube theme-icon" href="#" title="Youtube"></a>
											</div>
										</div>
									</div>
									<div className="item-content">
										<h6>
											<a href="#">Emma
												<br />Woods</a>
										</h6>
										<hr className="divider-size_2_30" />
										<p className="small-text">
											Certified Masseur &amp; Pool Attendant
										</p>
									</div>
								</div>

								<div className="vertical-item content-absolute team-item">
									<div className="item-media">
										<img src={require("./images/team/04.jpg")} alt="" />
										<div className="media-links">
											<div className="team-member-social">
												<a className="social-icon soc-facebook theme-icon" href="#" title="Facebook"></a>
												<a className="social-icon soc-twitter theme-icon" href="#" title="Twitter"></a>
												<a className="social-icon soc-google theme-icon" href="#" title="Google"></a>
												<a className="social-icon soc-youtube theme-icon" href="#" title="Youtube"></a>
											</div>
										</div>
									</div>
									<div className="item-content">
										<h6>
											<a href="#">Ollie
												<br />Burgess</a>
										</h6>
										<hr className="divider-size_2_30" />
										<p className="small-text">
											Certified Beautician
										</p>
									</div>
								</div>

								<div className="vertical-item content-absolute team-item">
									<div className="item-media">
										<img src={require("./images/team/05.jpg")} alt="" />
										<div className="media-links">
											<div className="team-member-social">
												<a className="social-icon soc-facebook theme-icon" href="#" title="Facebook"></a>
												<a className="social-icon soc-twitter theme-icon" href="#" title="Twitter"></a>
												<a className="social-icon soc-google theme-icon" href="#" title="Google"></a>
												<a className="social-icon soc-youtube theme-icon" href="#" title="Youtube"></a>
											</div>
										</div>
									</div>
									<div className="item-content">
										<h6>
											<a href="#">Lorraine
												<br />Fields </a>
										</h6>
										<hr className="divider-size_2_30" />
										<p className="small-text">
											Spa Manager
										</p>
									</div>
								</div>

								<div className="vertical-item content-absolute team-item">
									<div className="item-media">
										<img src={require("./images/team/06.jpg")} alt="" />
										<div className="media-links">
											<div className="team-member-social">
												<a className="social-icon soc-facebook theme-icon" href="#" title="Facebook"></a>
												<a className="social-icon soc-twitter theme-icon" href="#" title="Twitter"></a>
												<a className="social-icon soc-google theme-icon" href="#" title="Google"></a>
												<a className="social-icon soc-youtube theme-icon" href="#" title="Youtube"></a>
											</div>
										</div>
									</div>
									<div className="item-content">
										<h6>
											<a href="#">Sheldon
												<br />Moreno</a>
										</h6>
										<hr className="divider-size_2_30" />
										<p className="small-text">
											Massage Therapist
										</p>
									</div>
								</div>

								<div className="vertical-item content-absolute team-item">
									<div className="item-media">
										<img src={require("./images/team/01.jpg")} alt="" />
										<div className="media-links">
											<div className="team-member-social">
												<a className="social-icon soc-facebook theme-icon" href="#" title="Facebook"></a>
												<a className="social-icon soc-twitter theme-icon" href="#" title="Twitter"></a>
												<a className="social-icon soc-google theme-icon" href="#" title="Google"></a>
												<a className="social-icon soc-youtube theme-icon" href="#" title="Youtube"></a>
											</div>
										</div>
									</div>
									<div className="item-content">
										<h6>
											<a href="#">Lorraine
												<br />Fields</a>
										</h6>
										<hr className="divider-size_2_30" />
										<p className="small-text">
											Spa Manager
										</p>
									</div>
								</div>

							</div>
							{/* .owl-carousel */}

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
									<img src={require("./images/logo.png")} alt="" />
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
	{/* eof #canvas */}
	  
    </div>
    );
  }
}
export default App;
