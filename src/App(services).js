import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/main.css';
import'./css/animations.css';
import './css/fonts.css'
 
class App extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
	 };
  }
  

 render(){
   return(
     <div>



<div className="modal" tabIndex="-1" role="dialog" aria-labelledby="search_modal" id="search_modal">
<div className="widget widget_search">
	<form method="get" className="searchform form-inline" action="/">
		<div className="form-group">
			<input type="text" value="" name="search" className="form-control" placeholder="Search keyword" id="modal-search-input"/>
		</div>
		<button type="submit" className="theme_button">Search</button>
	</form>
</div>
</div>

{//wrappers for visual page editor and boxed version of template
}
<div id="canvas">
<div id="box_wrapper">

	{//<!-- template sections -->
}

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
										<label className="sr-only" htmlFor="search-input">Search for:</label>
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
						<img src="/images/logo.png" alt="" className="main_bg_color"/>
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
					{//<!-- main nav start -->
	  }
	  <nav className="mainmenu_wrapper">
						<ul className="mainmenu nav sf-menu">
							<li className="active">
								<a href="index.html">Main page</a>
							</li>

							<li>
								<a href="appointment.html">Pages</a>
								<ul>
									{//<!-- features -->
			  }
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
									{//<!-- eof features -->
			  }

									{//<!-- header -->
			  }
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
									{//<!-- eof header -->
			  }

									{//!-- breadcrumbs -->
			  }
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
									{//<!-- eof breadcrumbs -->
			  }

									{//<!-- footer -->
			  }
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
									{//<!-- eof footer -->
			  }

									{//<!-- copyright -->
			  }
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
									{//<!-- eof copyright -->
			  }

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
							{//<!-- eof pages -->
		  }

							{//<!-- about -->
		  }
		
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
		  {//<!-- eof about -->
		  }

							{//<!-- services -->
							}
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
		  {//<!-- eof services -->
		  }

		  {//<!-- gallery -->
		  }
							<li>
								<a href="gallery-regular.html">Lookbook</a>
								<ul>
			  {//<!-- Gallery regular -->
			  }
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
			  {//<!-- eof Gallery regular -->
			  }

			  {//<!-- Gallery full width -->
			  }
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
			  {//<!-- eof Gallery full width -->
			  }

			  {//<!-- Gallery extended -->
			  }
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
			  {//<!-- eof Gallery extended -->
			  }

			  {//<!-- Gallery carousel -->
			  }
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
			  {//<!-- eof Gallery carousel -->
			  }

			  {//<!-- Gallery tile -->
			  }
									<li>
										<a href="gallery-tile.html">Tile</a>
									</li>
			  {//<!-- eof Gallery tile -->
			  }

			  {//<!-- Gallery left sidebar -->
			  }
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
			  {//<!-- eof Gallery left sidebar -->
			  }

			  {//<!-- Gallery right sidebar -->
			  }
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
			  {//<!-- eof Gallery right sidebar -->
			  }

			  {//<!-- Gallery item -->
			  }
									<li>
										<a href="gallery-single.html">Item</a>
									</li>
			  {//<!-- eof Gallery item -->
			  }
								</ul>
							</li>
		  {//<!-- eof Gallery -->
		  }

		{//	<!-- blog -->
		}
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
		  {//<!-- eof blog -->
		  }

		  {//<!-- contacts -->
		  }
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
		  {//<!-- eof contacts -->
		  }

		  {//<!-- shop -->
		  }
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
		  {//<!-- eof shop -->
		  }

						</ul>
					</nav>
	  {//<!-- eof main nav -->
	  }
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
									<a href="#">Services</a>
								</li>
								<li className="active">Medial SPA</li>
							</ol>
						</div>
						<div className="col-sm-4 text-center">
							<h1 className="highlight bold">Medial SPA</h1>
						</div>
						<div className="col-sm-4 hidden-xs"></div>
					</div>
				</div>
			</section>


			<section className="ls section_padding_top_100 section_padding_bottom_80">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 text-center">
							<h3 className="highlight topmargin_0">medical spa</h3>
							<hr className="divider-size_2_30 topmargin_25 bottommargin_20"/>
							<p className="fontsize_14 text-uppercase bold letter-spacing-033 grey bottommargin_5">Quis boudin officia strip</p>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-3 col-md-4 col-sm-5">

							{//<!-- Nav tabs -->
							}
							<ul className="nav theme-block services-list list1 no-bullets" role="tablist">
								<li className="active">
									<a href="#vertical-tab1" role="tab" data-toggle="tab">
										<span className="service-icon service-medical"></span>
										<h6 className="inline-block margin_0">medical spa</h6>
										<i className="fa fa-chevron-right lightgrey"></i>
									</a>
								</li>
								<li>
									<a href="#vertical-tab2" role="tab" data-toggle="tab">
										<span className="service-icon service-cosmetic"></span>
										<h6 className="inline-block margin_0">Cosmetic bar</h6>
										<i className="fa fa-chevron-right lightgrey"></i>
									</a>
								</li>
								<li>
									<a href="#vertical-tab3" role="tab" data-toggle="tab">
										<span className="service-icon service-hair"></span>
										<h6 className="inline-block margin_0">Hair studio</h6>
										<i className="fa fa-chevron-right lightgrey"></i>
									</a>
								</li>
								<li>
									<a href="#vertical-tab4" role="tab" data-toggle="tab">
										<span className="service-icon service-medical"></span>
										<h6 className="inline-block margin_0">medical spa</h6>
										<i className="fa fa-chevron-right lightgrey"></i>
									</a>
								</li>
								<li>
									<a href="#vertical-tab5" role="tab" data-toggle="tab">
										<span className="service-icon service-cosmetic"></span>
										<h6 className="inline-block margin_0">Cosmetic bar</h6>
										<i className="fa fa-chevron-right lightgrey"></i>
									</a>
								</li>
								<li>
									<a href="#vertical-tab6" role="tab" data-toggle="tab">
										<span className="service-icon service-hair"></span>
										<h6 className="inline-block margin_0">Hair studio</h6>
										<i className="fa fa-chevron-right lightgrey"></i>
									</a>
								</li>
							</ul>

						</div>

						<div className="col-lg-9 col-md-8 col-sm-7">
						</div>

					</div>

					<div className="row services-tab-content">
						<div className="col-sm-12">
							<div className="tab-content no-border">
								<div className="tab-pane fade in active" id="vertical-tab1">
									<div className="row">
										<div className="col-lg-offset-3 col-lg-9 col-md-offset-4 col-md-8 col-sm-offset-5 col-sm-7">
											<div className="services-tab-media">
												<img src="/images/service-media02.jpg" alt=""/>
											</div>

										</div>
									</div>
									<div className="row services-tab-body topmargin_20">
										<div className="col-sm-12">
											<p className="grey bottommargin_25">
												Labore venison short loin andouille sint short ribs. Ut nostrud laborum minim ball tip commodo shank aliquip short loin. Duis venison leberkas, andouille mollit landjaeger ullamco porchetta commodo biltong t-bone doner short loin culpa. Incididunt ea
												ground round pork belly, sunt venison dolor salami pig chicken et.
											</p>
											<p>
												Kevin deserunt consectetur adipisicing ut, flank doner culpa excepteur meatloaf elit ullamco. Do ex aliqua andouille exercitation sausage tempor ball tip pork chop proident cillum et. Short loin et anim do ut cupidatat proident nostrud picanha. Brisket
												sint tongue, chicken in deserunt minim short ribs.
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Cool Sculpting</h6>
											<p>
												Eliminate stubborn fat safely and effectively, without surgery or downtime. This fat reduction treatment is the only FDA-cleared procedure to use controlled cooling to safely target and eliminate.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Kybella</h6>
											<p>
												Introducing Kybella, the first FDA-approved, injectable drug used to reduce the appearance of submental fat, more commonly known as a double chin.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Botox</h6>
											<p>
												Botox is one of the leading and most effective treatments for wrinkles and lines. Revive is one of top 0.01% of Med Spas in the nation offering this service.
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Juvederm</h6>
											<p>
												Get lush lips and smoother skin with Juvéderm! This injectable fills deep lines, such as the nasolabial folds and is also a natural looking lip enhancer. Results can last up to a year.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Voluma</h6>
											<p>
												Voluma is the latest in age-defying advancements. This treatment increases facial volume in the cheek and chin areas for a fuller and more youthful look. Results are immediate, even and natural looking.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Restylane</h6>
											<p>
												Restylane is a clear gel formulation of hyaluronic acid that is specifically formulated to act like your body’s own naturally produced hyaluronic acid, helping to instantly, visibly reduce.
											</p>
										</div>
									</div>

								</div>

								<div className="tab-pane fade in" id="vertical-tab2">
									<div className="row">
										<div className="col-lg-offset-3 col-lg-9 col-md-offset-4 col-md-8 col-sm-offset-5 col-sm-7">
											<div className="services-tab-media">
												<img src="/images/service-media.jpg" alt=""/>
											</div>

										</div>
									</div>
									<div className="row services-tab-body topmargin_20">
										<div className="col-sm-12">
											<p className="grey bottommargin_25">
												Labore venison short loin andouille sint short ribs. Ut nostrud laborum minim ball tip commodo shank aliquip short loin. Duis venison leberkas, andouille mollit landjaeger ullamco porchetta commodo biltong t-bone doner short loin culpa. Incididunt ea
												ground round pork belly, sunt venison dolor salami pig chicken et.
											</p>
											<p>
												Kevin deserunt consectetur adipisicing ut, flank doner culpa excepteur meatloaf elit ullamco. Do ex aliqua andouille exercitation sausage tempor ball tip pork chop proident cillum et. Short loin et anim do ut cupidatat proident nostrud picanha. Brisket
												sint tongue, chicken in deserunt minim short ribs.
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Cool Sculpting</h6>
											<p>
												Eliminate stubborn fat safely and effectively, without surgery or downtime. This fat reduction treatment is the only FDA-cleared procedure to use controlled cooling to safely target and eliminate.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Kybella</h6>
											<p>
												Introducing Kybella, the first FDA-approved, injectable drug used to reduce the appearance of submental fat, more commonly known as a double chin.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Botox</h6>
											<p>
												Botox is one of the leading and most effective treatments for wrinkles and lines. Revive is one of top 0.01% of Med Spas in the nation offering this service.
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Juvederm</h6>
											<p>
												Get lush lips and smoother skin with Juvéderm! This injectable fills deep lines, such as the nasolabial folds and is also a natural looking lip enhancer. Results can last up to a year.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Voluma</h6>
											<p>
												Voluma is the latest in age-defying advancements. This treatment increases facial volume in the cheek and chin areas for a fuller and more youthful look. Results are immediate, even and natural looking.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Restylane</h6>
											<p>
												Restylane is a clear gel formulation of hyaluronic acid that is specifically formulated to act like your body’s own naturally produced hyaluronic acid, helping to instantly, visibly reduce.
											</p>
										</div>
									</div>

								</div>

								<div className="tab-pane fade in" id="vertical-tab3">
									<div className="row">
										<div className="col-lg-offset-3 col-lg-9 col-md-offset-4 col-md-8 col-sm-offset-5 col-sm-7">
											<div className="services-tab-media">
												<img src="/images/service-media02.jpg" alt=""/>
											</div>

										</div>
									</div>
									<div className="row services-tab-body topmargin_20">
										<div className="col-sm-12">
											<p className="grey bottommargin_25">
												Labore venison short loin andouille sint short ribs. Ut nostrud laborum minim ball tip commodo shank aliquip short loin. Duis venison leberkas, andouille mollit landjaeger ullamco porchetta commodo biltong t-bone doner short loin culpa. Incididunt ea
												ground round pork belly, sunt venison dolor salami pig chicken et.
											</p>
											<p>
												Kevin deserunt consectetur adipisicing ut, flank doner culpa excepteur meatloaf elit ullamco. Do ex aliqua andouille exercitation sausage tempor ball tip pork chop proident cillum et. Short loin et anim do ut cupidatat proident nostrud picanha. Brisket
												sint tongue, chicken in deserunt minim short ribs.
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Cool Sculpting</h6>
											<p>
												Eliminate stubborn fat safely and effectively, without surgery or downtime. This fat reduction treatment is the only FDA-cleared procedure to use controlled cooling to safely target and eliminate.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Kybella</h6>
											<p>
												Introducing Kybella, the first FDA-approved, injectable drug used to reduce the appearance of submental fat, more commonly known as a double chin.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Botox</h6>
											<p>
												Botox is one of the leading and most effective treatments for wrinkles and lines. Revive is one of top 0.01% of Med Spas in the nation offering this service.
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Juvederm</h6>
											<p>
												Get lush lips and smoother skin with Juvéderm! This injectable fills deep lines, such as the nasolabial folds and is also a natural looking lip enhancer. Results can last up to a year.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Voluma</h6>
											<p>
												Voluma is the latest in age-defying advancements. This treatment increases facial volume in the cheek and chin areas for a fuller and more youthful look. Results are immediate, even and natural looking.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Restylane</h6>
											<p>
												Restylane is a clear gel formulation of hyaluronic acid that is specifically formulated to act like your body’s own naturally produced hyaluronic acid, helping to instantly, visibly reduce.
											</p>
										</div>
									</div>

								</div>

								<div className="tab-pane fade in" id="vertical-tab4">
									<div className="row">
										<div className="col-lg-offset-3 col-lg-9 col-md-offset-4 col-md-8 col-sm-offset-5 col-sm-7">
											<div className="services-tab-media">
												<img src="/images/service-media.jpg" alt=""/>
											</div>

										</div>
									</div>
									<div className="row services-tab-body topmargin_20">
										<div className="col-sm-12">
											<p className="grey bottommargin_25">
												Labore venison short loin andouille sint short ribs. Ut nostrud laborum minim ball tip commodo shank aliquip short loin. Duis venison leberkas, andouille mollit landjaeger ullamco porchetta commodo biltong t-bone doner short loin culpa. Incididunt ea
												ground round pork belly, sunt venison dolor salami pig chicken et.
											</p>
											<p>
												Kevin deserunt consectetur adipisicing ut, flank doner culpa excepteur meatloaf elit ullamco. Do ex aliqua andouille exercitation sausage tempor ball tip pork chop proident cillum et. Short loin et anim do ut cupidatat proident nostrud picanha. Brisket
												sint tongue, chicken in deserunt minim short ribs.
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Cool Sculpting</h6>
											<p>
												Eliminate stubborn fat safely and effectively, without surgery or downtime. This fat reduction treatment is the only FDA-cleared procedure to use controlled cooling to safely target and eliminate.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Kybella</h6>
											<p>
												Introducing Kybella, the first FDA-approved, injectable drug used to reduce the appearance of submental fat, more commonly known as a double chin.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Botox</h6>
											<p>
												Botox is one of the leading and most effective treatments for wrinkles and lines. Revive is one of top 0.01% of Med Spas in the nation offering this service.
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Juvederm</h6>
											<p>
												Get lush lips and smoother skin with Juvéderm! This injectable fills deep lines, such as the nasolabial folds and is also a natural looking lip enhancer. Results can last up to a year.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Voluma</h6>
											<p>
												Voluma is the latest in age-defying advancements. This treatment increases facial volume in the cheek and chin areas for a fuller and more youthful look. Results are immediate, even and natural looking.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Restylane</h6>
											<p>
												Restylane is a clear gel formulation of hyaluronic acid that is specifically formulated to act like your body’s own naturally produced hyaluronic acid, helping to instantly, visibly reduce.
											</p>
										</div>
									</div>

								</div>

								<div className="tab-pane fade in" id="vertical-tab5">
									<div className="row">
										<div className="col-lg-offset-3 col-lg-9 col-md-offset-4 col-md-8 col-sm-offset-5 col-sm-7">
											<div className="services-tab-media">
												<img src="/images/service-media02.jpg" alt=""/>
											</div>

										</div>
									</div>
									<div className="row services-tab-body topmargin_20">
										<div className="col-sm-12">
											<p className="grey bottommargin_25">
												Labore venison short loin andouille sint short ribs. Ut nostrud laborum minim ball tip commodo shank aliquip short loin. Duis venison leberkas, andouille mollit landjaeger ullamco porchetta commodo biltong t-bone doner short loin culpa. Incididunt ea
												ground round pork belly, sunt venison dolor salami pig chicken et.
											</p>
											<p>
												Kevin deserunt consectetur adipisicing ut, flank doner culpa excepteur meatloaf elit ullamco. Do ex aliqua andouille exercitation sausage tempor ball tip pork chop proident cillum et. Short loin et anim do ut cupidatat proident nostrud picanha. Brisket
												sint tongue, chicken in deserunt minim short ribs.
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Cool Sculpting</h6>
											<p>
												Eliminate stubborn fat safely and effectively, without surgery or downtime. This fat reduction treatment is the only FDA-cleared procedure to use controlled cooling to safely target and eliminate.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Kybella</h6>
											<p>
												Introducing Kybella, the first FDA-approved, injectable drug used to reduce the appearance of submental fat, more commonly known as a double chin.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Botox</h6>
											<p>
												Botox is one of the leading and most effective treatments for wrinkles and lines. Revive is one of top 0.01% of Med Spas in the nation offering this service.
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Juvederm</h6>
											<p>
												Get lush lips and smoother skin with Juvéderm! This injectable fills deep lines, such as the nasolabial folds and is also a natural looking lip enhancer. Results can last up to a year.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Voluma</h6>
											<p>
												Voluma is the latest in age-defying advancements. This treatment increases facial volume in the cheek and chin areas for a fuller and more youthful look. Results are immediate, even and natural looking.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Restylane</h6>
											<p>
												Restylane is a clear gel formulation of hyaluronic acid that is specifically formulated to act like your body’s own naturally produced hyaluronic acid, helping to instantly, visibly reduce.
											</p>
										</div>
									</div>

								</div>

								<div className="tab-pane fade in" id="vertical-tab6">
									<div className="row">
										<div className="col-lg-offset-3 col-lg-9 col-md-offset-4 col-md-8 col-sm-offset-5 col-sm-7">
											<div className="services-tab-media">
												<img src="/images/service-media.jpg" alt=""/>
											</div>

										</div>
									</div>
									<div className="row services-tab-body topmargin_20">
										<div className="col-sm-12">
											<p className="grey bottommargin_25">
												Labore venison short loin andouille sint short ribs. Ut nostrud laborum minim ball tip commodo shank aliquip short loin. Duis venison leberkas, andouille mollit landjaeger ullamco porchetta commodo biltong t-bone doner short loin culpa. Incididunt ea
												ground round pork belly, sunt venison dolor salami pig chicken et.
											</p>
											<p>
												Kevin deserunt consectetur adipisicing ut, flank doner culpa excepteur meatloaf elit ullamco. Do ex aliqua andouille exercitation sausage tempor ball tip pork chop proident cillum et. Short loin et anim do ut cupidatat proident nostrud picanha. Brisket
												sint tongue, chicken in deserunt minim short ribs.
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Cool Sculpting</h6>
											<p>
												Eliminate stubborn fat safely and effectively, without surgery or downtime. This fat reduction treatment is the only FDA-cleared procedure to use controlled cooling to safely target and eliminate.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Kybella</h6>
											<p>
												Introducing Kybella, the first FDA-approved, injectable drug used to reduce the appearance of submental fat, more commonly known as a double chin.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Botox</h6>
											<p>
												Botox is one of the leading and most effective treatments for wrinkles and lines. Revive is one of top 0.01% of Med Spas in the nation offering this service.
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Juvederm</h6>
											<p>
												Get lush lips and smoother skin with Juvéderm! This injectable fills deep lines, such as the nasolabial folds and is also a natural looking lip enhancer. Results can last up to a year.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Voluma</h6>
											<p>
												Voluma is the latest in age-defying advancements. This treatment increases facial volume in the cheek and chin areas for a fuller and more youthful look. Results are immediate, even and natural looking.
											</p>
										</div>
										<div className="col-md-4 col-sm-6 topmargin_15">
											<h6 className="bottommargin_20">Restylane</h6>
											<p>
												Restylane is a clear gel formulation of hyaluronic acid that is specifically formulated to act like your body’s own naturally produced hyaluronic acid, helping to instantly, visibly reduce.
											</p>
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
									<img src="/images/logo.png" alt=""/>
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
{//<!-- eof #box_wrapper -->
}
</div>
{//<!-- eof #canvas -->
}
</div>


 
    )
  }
}

export default App;
