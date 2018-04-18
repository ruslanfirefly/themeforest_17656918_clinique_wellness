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
									<a href="#">Shortcodes</a>
								</li>
								<li className="active">Tabs &amp; Collapse</li>
							</ol>
						</div>
						<div className="col-sm-4 text-center">
							<h1 className="highlight bold">Tabs &amp; Collapse</h1>
						</div>
						<div className="col-sm-4 hidden-xs"></div>
					</div>
				</div>
			</section>


			<section className="ls ms section_padding_50">
				<div className="container">
					<div className="row">
						<div className="col-md-12">

							<h3>Regular Tabs</h3>

							{/* Nav tabs */}
							<ul className="nav nav-tabs" role="tablist">
								<li className="active">
									<a href="#tab1" role="tab" data-toggle="tab">Quality</a>
								</li>
								<li>
									<a href="#tab2" role="tab" data-toggle="tab">Comfort</a>
								</li>
								<li>
									<a href="#tab3" role="tab" data-toggle="tab">Results</a>
								</li>
							</ul>

							{/* Tab panes */}
							<div className="tab-content">
								<div className="tab-pane fade in active" id="tab1">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</p>

									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi minus tenetur sunt aspernatur vitae, corporis nostrum quibusdam molestias, laudantium quia in a natus facilis beatae culpa inventore quidem illo atque.</p>
								</div>
								<div className="tab-pane fade" id="tab2">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</p>

									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, enim saepe libero iure tenetur optio nisi aliquam molestias ratione magnam ab ut quod possimus hic suscipit doloremque, deleniti ipsa quia!</p>
								</div>
								<div className="tab-pane fade" id="tab3">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</p>

									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis est, dolores, ex ducimus cumque iusto ipsam odit voluptatum autem error impedit obcaecati quisquam molestiae, optio porro inventore nostrum deleniti cupiditate.</p>
								</div>
							</div>

						</div>

						<div className="col-md-5">

							<h3>Featured Images</h3>

							{/* Nav tabs */}
							<ul className="nav nav-tabs" role="tablist">
								<li className="active">
									<a href="#tab7" role="tab" data-toggle="tab">Quality</a>
								</li>
								<li>
									<a href="#tab8" role="tab" data-toggle="tab">Comfort</a>
								</li>
								<li>
									<a href="#tab9" role="tab" data-toggle="tab">Results</a>
								</li>
							</ul>

							{/* Tab panes */}
							<div className="tab-content">
								<div className="tab-pane fade in active" id="tab7">
									<p className="featured-tab-image">
										<img src={require("./images/gallery/01.jpg")} alt=""/>
									</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi minus tenetur sunt aspernatur vitae, corporis nostrum quibusdam molestias, laudantium quia in a natus facilis beatae culpa inventore quidem illo atque.</p>
								</div>
								<div className="tab-pane fade" id="tab8">
									<p className="featured-tab-image">
										<img src={require("./images/gallery/02.jpg")} alt=""/>
									</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, enim saepe libero iure tenetur optio nisi aliquam molestias ratione magnam ab ut quod possimus hic suscipit doloremque, deleniti ipsa quia!</p>
								</div>
								<div className="tab-pane fade" id="tab9">
									<p className="featured-tab-image">
										<img src={require("./images/gallery/03.jpg")} alt=""/>
									</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis est, dolores, ex ducimus cumque iusto ipsam odit voluptatum autem error impedit obcaecati quisquam molestiae, optio porro inventore nostrum deleniti cupiditate.</p>
								</div>
							</div>

						</div>

						<div className="col-md-7">

							<h3>Bordered Tabs</h3>

							{/* Nav tabs */}
							<ul className="nav nav-tabs" role="tablist">
								<li className="active">
									<a href="#tab4" role="tab" data-toggle="tab">Quality</a>
								</li>
								<li>
									<a href="#tab5" role="tab" data-toggle="tab">Comfort</a>
								</li>
								<li>
									<a href="#tab6" role="tab" data-toggle="tab">Results</a>
								</li>
							</ul>

							{/* Tab panes */}
							<div className="tab-content top-color-border">
								<div className="tab-pane fade in active" id="tab4">

									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi minus tenetur sunt aspernatur vitae, corporis nostrum quibusdam molestias, laudantium quia in a natus facilis beatae culpa inventore quidem illo atque.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</p>
								</div>
								<div className="tab-pane fade" id="tab5">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, enim saepe libero iure tenetur optio nisi aliquam molestias ratione magnam ab ut quod possimus hic suscipit doloremque, deleniti ipsa quia!</p>
								</div>
								<div className="tab-pane fade" id="tab6">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</p>

									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis est, dolores, ex ducimus cumque iusto ipsam odit voluptatum autem error impedit obcaecati quisquam molestiae, optio porro inventore nostrum deleniti cupiditate.</p>
								</div>
							</div>

						</div>

					</div>

					<div className="row">
						<div className="col-sm-12">
							<h3>Vertical Tabs</h3>
						</div>

						<div className="col-sm-12">
							<div className="row vertical-tabs">
								<div className="col-sm-4">

									{/* Nav tabs */}
									<ul className="nav" role="tablist">
										<li className="active">
											<a href="#vertical-tab1" role="tab" data-toggle="tab">
												<i className="rt-icon2-home2"></i> Consectetur
											</a>
										</li>
										<li>
											<a href="#vertical-tab2" role="tab" data-toggle="tab">
												<i className="rt-icon2-light-bulb"></i> Eveniet
											</a>
										</li>
										<li>
											<a href="#vertical-tab3" role="tab" data-toggle="tab">
												<i className="rt-icon2-book"></i> Dolorum
											</a>
										</li>
										<li>
											<a href="#vertical-tab4" role="tab" data-toggle="tab">
												<i className="rt-icon2-cog"></i> Nolestiae
											</a>
										</li>
									</ul>
								</div>

								<div className="col-sm-8">

									{/* Tab panes */}
									<div className="tab-content">
										<div className="tab-pane fade in active" id="vertical-tab1">
											<p>
												<i className="rt-icon2-anchor"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quia, ad natus corrupti inventore mollitia, dolor omnis nesciunt, molestias officiis eum debitis dolore. Minima magnam odit cupiditate labore accusantium eaque!</p>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi minus tenetur sunt aspernatur vitae, corporis nostrum quibusdam molestias, laudantium quia in a natus facilis beatae culpa inventore quidem illo atque.</p>
										</div>
										<div className="tab-pane fade" id="vertical-tab2">
											<p>
												<i className="rt-icon2-compass"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptate, quas fugit facere possimus facilis odio delectus laborum id nobis expedita vitae molestiae a. Magnam aliquid architecto magni, quos omnis.</p>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, enim saepe libero iure tenetur optio nisi aliquam molestias ratione magnam ab ut quod possimus hic suscipit doloremque, deleniti ipsa quia!</p>
										</div>
										<div className="tab-pane fade" id="vertical-tab3">
											<p>
												<i className="rt-icon2-laptop"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque repellat, reiciendis sint officia quia iure nam! Dicta omnis ex ipsa fugiat maiores, vero expedita facilis, suscipit quam obcaecati veniam voluptate.</p>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis est, dolores, ex ducimus cumque iusto ipsam odit voluptatum autem error impedit obcaecati quisquam molestiae, optio porro inventore nostrum deleniti cupiditate.</p>
										</div>
										<div className="tab-pane fade" id="vertical-tab4">
											<p>
												<i className="fa fa-trophy"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium impedit asperiores illum nulla sint itaque laborum perferendis deleniti quo cumque, quisquam repudiandae molestias sunt ea delectus porro odio recusandae!</p>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus omnis quod eligendi mollitia vel optio neque id, assumenda! Quae at quisquam eum, dolorum ullam, maxime nesciunt ex modi minus illum!</p>
										</div>
									</div>

								</div>


							</div>
						</div>
					</div>
					<div className="row">

						<div className="col-sm-6">
							<h3>Regular Collapse</h3>
							<div className="panel-group" id="accordion1">
								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<a data-toggle="collapse" data-parent="#accordion1" href="#collapse1">
												<i className="rt-icon2-comments highlight"></i>
												Web Design
											</a>
										</h4>
									</div>
									<div id="collapse1" className="panel-collapse collapse in">
										<div className="panel-body">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium amet ea dicta neque, ut quis omnis quos nam, pariatur, minus, fugit suscipit aspernatur sint ullam quas explicabo. Alias, officiis, dolor!
										</div>
									</div>
								</div>
								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<a data-toggle="collapse" data-parent="#accordion1" href="#collapse2" className="collapsed">
												<i className="rt-icon2-comments highlight"></i>
												Photography
											</a>
										</h4>
									</div>
									<div id="collapse2" className="panel-collapse collapse">
										<div className="panel-body">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facere doloremque ut dolores laudantium nihil at, repudiandae est numquam fuga tempora totam sequi quidem saepe officiis sint beatae, magni fugit.
										</div>
									</div>
								</div>
								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<a data-toggle="collapse" data-parent="#accordion1" href="#collapse3" className="collapsed">
												<i className="rt-icon2-comments highlight"></i>
												3D Modeling
											</a>
										</h4>
									</div>
									<div id="collapse3" className="panel-collapse collapse">
										<div className="panel-body">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nobis omnis delectus, asperiores quo obcaecati et iste corporis necessitatibus tempora aspernatur doloribus. Ut deleniti commodi dicta distinctio sit enim quidem!
										</div>
									</div>
								</div>

								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<a data-toggle="collapse" data-parent="#accordion1" href="#collapse4" className="collapsed">
												<i className="rt-icon2-comments highlight"></i>
												Developing
											</a>
										</h4>
									</div>
									<div id="collapse4" className="panel-collapse collapse">
										<div className="panel-body">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nobis omnis delectus, asperiores quo obcaecati et iste corporis necessitatibus tempora aspernatur doloribus. Ut deleniti commodi dicta distinctio sit enim quidem!
										</div>
									</div>
								</div>

							</div>
						</div>
						<div className="col-sm-6">
							<h3>Collapse with Media</h3>
							<div className="panel-group" id="accordion2">

								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<a data-toggle="collapse" data-parent="#accordion2" href="#collapse5">
												Lorem Ipsum
											</a>
										</h4>
									</div>
									<div id="collapse5" className="panel-collapse collapse in">
										<div className="panel-body">
											<div className="media">
												<div className="media-left">
													<a href="#">
														<img src={require("./images/recent_post1.jpg")} alt=""/>
													</a>
												</div>
												<div className="media-body">
													Consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<a data-toggle="collapse" data-parent="#accordion2" href="#collapse6" className="collapsed">
												Sit Amet
											</a>
										</h4>
									</div>
									<div id="collapse6" className="panel-collapse collapse">
										<div className="panel-body">
											<div className="media">
												<div className="media-left">
													<a href="#">
														<img src={require("./images/recent_post2.jpg")} alt=""/>
													</a>
												</div>
												<div className="media-body">
													Consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<a data-toggle="collapse" data-parent="#accordion2" href="#collapse7" className="collapsed">
												Sed Diam
											</a>
										</h4>
									</div>
									<div id="collapse7" className="panel-collapse collapse">
										<div className="panel-body">
											<div className="media">
												<div className="media-left">
													<a href="#">
														<img src={require("./images/recent_post1.jpg")} alt=""/>
													</a>
												</div>
												<div className="media-body">
													Consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<a data-toggle="collapse" data-parent="#accordion2" href="#collapse8" className="collapsed">
												Eirmod Tempor
											</a>
										</h4>
									</div>
									<div id="collapse8" className="panel-collapse collapse">
										<div className="panel-body">
											<div className="media">
												<div className="media-left">
													<a href="#">
														<img src={require("./images/recent_post2.jpg")} alt=""/>
													</a>
												</div>
												<div className="media-body">
													Consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
												</div>
											</div>
										</div>
									</div>
								</div>

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
