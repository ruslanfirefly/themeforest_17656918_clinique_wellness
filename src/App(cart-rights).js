import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './css/bootstrap.min.css';
import './css/main.css';
import'./css/animations.css';
import './css/fonts.css'
function log(value) {
  console.log(value); //eslint-disable-line
}

class App extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      search: "",
      qty: 1,
      an: 1,
      zip: "",
      county: "",
      diskaunt: "",
      lowerBound: 1500,
      upperBound: 30000,
      value: [1500, 30000],
      max: 100000
      
    };

  }
  onLowerBoundChange = (e) => {
    this.setState({ lowerBound: +e.target.value });
  }
  onUpperBoundChange = (e) => {
    this.setState({ upperBound: +e.target.value });
  }
  onSliderChange = (value) => {
    log(value);
    this.setState({
      value,
    });
  }
  handleApply = () => {
    const { lowerBound, upperBound } = this.state;
    this.setState({ value: [lowerBound, upperBound] });
  }
  
  changeNumberPlus = () =>{
    this.setState ({qty: this.state.qty + 1});
  }
  changeNumberMinus = () =>{
    if (this.state.qty >1){
      this.setState ({qty: this.state.qty - 1})
    }
  }
  
  
  changeNumberPlusan = () =>{
    this.setState ({an: this.state.an + 1});
  }
  changeNumberMinusan = () =>{
    if (this.state.an >1){
      this.setState ({an: this.state.an - 1})
    }
  }
 render(){
   return(
     <div>

{//search modal
}
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
									<a href="#">Shop</a>
								</li>
								<li className="active">Cart</li>
							</ol>
						</div>
						<div className="col-sm-4 text-center">
							<h1 className="highlight bold">Cart</h1>
						</div>
						<div className="col-sm-4 hidden-xs"></div>
					</div>
				</div>
			</section>

			<section className="ls section_padding_top_15 section_padding_bottom_15">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="shop-adds text-center">
								<span className="grey">Shopping Cart</span>
								<i className="rt-icon2-keyboard_arrow_right"></i>
								<span>Checkout</span>
								<i className="rt-icon2-keyboard_arrow_right"></i>
								<span>Order Complete</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="ls ms section_padding_top_100 section_padding_bottom_75">
				<div className="container">

					<div className="row">

						<div className="col-sm-7 col-md-8 col-lg-8">

							<div className="table-responsive">
								<table className="table cart-table">
									<thead>
										<tr>
											<td className="product-info">Product</td>
											<td className="product-price-td">Price</td>
											<td className="product-quantity">Quantity</td>
											<td className="product-subtotal">Subtotal</td>
											<td className="product-remove">&nbsp;</td>
										</tr>
									</thead>
									<tbody>
										<tr className="cart_item">
											<td className="product-info">
												<div className="media">
													<div className="media-left">
														<a href="product-right.html">
															<img className="media-object cart-product-image" src="/images/shop/01.jpg" alt=""/>
														</a>
													</div>
													<div className="media-body">
														<h4 className="media-heading">
															<a href="product-right.html">At vero eos et accusam</a>
														</h4>
														<span className="grey">Color:</span> Black
														<br/>
														<span className="grey">Size:</span> M
													</div>
												</div>
											</td>
											<td className="product-price">
												<span className="currencies">$</span>
												<span className="amount">199.00</span>
											</td>
											<td className="product-quantity">
												<div className="quantity">
                        <input type="button" value="-" className="minus" onClick={()=>{this.changeNumberMinusan()}}/>
                        <input type="number" step="1" min="0" name="product_quantity" value={this.state.an} title="Qty" id="product_quantity" className="form-control "/>
                        <input type="button" value="+" className="plus" onClick={()=>{this.changeNumberPlusan()}}/>
                      </div>
											</td>
											<td className="product-subtotal">
												<span className="currencies">$</span>
												<span className="amount">199.00</span>
											</td>
											<td className="product-remove">
												<a href="#" className="remove fontsize_24" title="Remove this item">
													<i className="rt-icon2-trash"></i>
												</a>
											</td>
										</tr>

										<tr className="cart_item">
											<td className="product-info">
												<div className="media">
													<div className="media-left">
														<a href="product-right.html">
															<img className="media-object cart-product-image" src="/images/shop/02.jpg" alt=""/>
														</a>
													</div>
													<div className="media-body">
														<h4 className="media-heading">
															<a href="product-right.html">Justo duo dolores et ea rebum</a>
														</h4>
														<span className="grey">Size:</span> XL
													</div>
												</div>
											</td>
											<td className="product-price">
												<span className="currencies">$</span>
												<span className="amount">100.00</span>
											</td>
											<td className="product-quantity">
												<div className="quantity">
												<input type="button" value="-" className="minus" onClick={()=>{this.changeNumberMinus()}}/>
                        <input type="number" step="1" min="0" name="product_quantity" value={this.state.qty} title="Qty" id="product_quantity" className="form-control "/>
                        <input type="button" value="+" className="plus" onClick={()=>{this.changeNumberPlus()}}/>
                     </div>
											</td>
											<td className="product-subtotal">
												<span className="currencies">$</span>
												<span className="amount">100.00</span>
											</td>
											<td className="product-remove">
												<a href="#" className="remove fontsize_24" title="Remove this item">
													<i className="rt-icon2-trash"></i>
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>

							<div className="cart-buttons">
								<a className="theme_button" href="#">Countinue Shopping</a>

								<input type="submit" className="theme_button color1" name="update_cart" value="Update Cart"/>

								<button type="submit" className="theme_button color2">Proceed to Checkout</button>
							</div>

							<div className="cart-collaterals">
								<div className="cart_totals">
									<h4>Cart Totals</h4>
									<table className="table">
										<tbody>
											<tr className="cart-subtotal">
												<td>Cart Subtotal</td>
												<td>
													<span className="currencies">$</span>
													<span className="amount">299.00</span>
												</td>
											</tr>
											<tr className="shipping">
												<td>Shipping and Handling</td>
												<td>
													Free Shipping
												</td>
											</tr>
											<tr className="order-total">
												<td className="grey">Order Total</td>
												<td>
													<strong className="grey">
														<span className="currencies">$</span>
														<span className="amount">299.00</span>
													</strong>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

							<div className="row">
								<div className="col-sm-6">
									<div className="coupon with_padding muted_background">
										<h4 className="topmargin_0">Discount Codes</h4>
										<p>Enter coupon code if you have one</p>
										<div className="form-group">
											<label className="sr-only" htmlFor="coupon_code">Coupon:</label>
											<input type="text" name="coupon_code" className="form-control" id="coupon_code" value={this.state.diskaunt} onChange={(el)=>{this.setState({diskaunt: el.target.value})}} placeholder="Coupon code"/>
										</div>
										<a className="theme_button" href="#">Apply Coupon</a>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="shipping-calculator-form with_padding muted_background">
										<h4 className="topmargin_0">Shipping &amp; Tax</h4>
										<p>Enter destination to get shipping</p>
										<div className="form-group">
											<select name="calc_shipping_country" id="calc_shipping_country" className="country_to_state form-control">
												<option value="">Select a country…</option>
												<option value="AX">Åland Islands</option>
												<option value="OM">Oman</option>
												<option value="GB" selected="selected">United Kingdom (UK)</option>

											</select>
										</div>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.county} onChange={(el)=>{this.setState({county: el.target.value})}}  placeholder="State / county" name="calc_shipping_state" id="calc_shipping_state"/>
										</div>
										<div className="form-group">
											<input type="text" className="form-control"  value={this.state.zip} onChange={(el)=>{this.setState({zip: el.target.value})}} placeholder="Postcode / Zip" name="calc_shipping_postcode" id="calc_shipping_postcode"/>
										</div>
										<div>
											<button type="submit" name="calc_shipping" className="theme_button" value="1">Update Totals</button>
										</div>
									</div>
								</div>

							</div>


						</div>
            {//<!--eof .col-sm-8 (main content)-->
            }


            {//<!-- sidebar -->
            }
						<aside className="col-sm-5 col-md-4 col-lg-4">


							<div className="widget widget_search">
								<h3 className="widget-title">Search</h3>
								<form method="get" className="searchform form-inline" action="/">
									<div className="form-group">
										<label className="sr-only" htmlFor="page_search">Search for:</label>
										<input type="text" id="page_search" value={this.state.search} onChange={(el)=>{this.setState({search: el.target.value})}} name="search" className="form-control" placeholder="Search to site"/>
									</div>
									<button type="submit" className="theme_button">
										<span className="sr-only">Search</span>
										<i className="rt-icon2-search3 highlight"></i>
									</button>
								</form>
							</div>

							<div className="with_goriz_padding">
								<div className="widget widget_price_filter">

									<h3 className="widget-title">Price Filter</h3>
                  {//<!-- price slider -->
                  }
									<form method="get" action="/" className="form-inline">

										<div className="slider-range-price">
                    <Range max={this.state.max} allowCross={false} value={this.state.value} onChange={this.onSliderChange} />

                    </div>

										<div className="form-group">
											<label className="grey" htmlFor="slider_price_min">From:</label>
											<input type="text" className="slider_price_min form-control text-center" value={this.state.value[0]} onChange={this.onLowerBoundChange} id="slider_price_min" readOnly/>
										</div>

										<div className="form-group">
											<label className="grey" htmlFor="slider_price_max"> to:</label>
											<input type="text" className="slider_price_max form-control text-center" value={this.state.value[1]} onChange={this.onLowerBoundChange} id="slider_price_max" readOnly/>
										</div>

										<div className="text-right">
											<button type="submit" className="theme_button small_button color1">Filter</button>
										</div>
									</form>
								</div>
							</div>

							<div className="widget widget_products widget_popular_entries">

								<h3 className="widget-title">Products</h3>
								<ul className="media-list">
									<li className="media">
										<a className="media-left" href="product-right.html">
											<img className="media-object" src="/images/shop/01.jpg" alt=""/>
										</a>
										<div className="media-body">
											<h6>
												<a href="product-right.html">Rebum stet clita kasd lorem ipsum dolor</a>
											</h6>

											<div className="star-rating" title="Rated 4.50 out of 5">
												<span style={{width:'90%'}}>
													<strong className="rating">4.50</strong> out of 5
												</span>
											</div>

											<a href="#" rel="nofollow" className="add_to_cart_button">
												<i className="rt-icon2-basket"></i>
											</a>

											<span className="price">
												<ins>
													<span className="amount">$299.00</span>
												</ins>
											</span>
										</div>
									</li>

									<li className="media">
										<a className="media-left" href="product-right.html">
											<img className="media-object" src="/images/shop/02.jpg" alt=""/>
										</a>
										<div className="media-body">
											<h6>
												<a href="product-right.html">Rebum stet clita kasd sit amet</a>
											</h6>

											<div className="star-rating" title="Rated 3.50 out of 5">
												<span style={{ width:'70%'}}>
													<strong className="rating">3.50</strong> out of 5
												</span>
											</div>

											<a href="#" rel="nofollow" className="add_to_cart_button">
												<i className="rt-icon2-basket"></i>
											</a>

											<span className="price">
												<del>
													<span className="amount">$269.00</span>
												</del>

												<ins>
													<span className="amount">$239.00</span>
												</ins>
											</span>
										</div>
									</li>

									<li className="media">
										<a className="media-left" href="product-right.html">
											<img className="media-object" src="/images/shop/03.jpg" alt=""/>
										</a>
										<div className="media-body">
											<h6>
												<a href="product-right.html">Lorem stet clita kasd</a>
											</h6>

											<div className="star-rating" title="Rated 2.50 out of 5">
												<span style={{width:'50%'}}>
													<strong className="rating">2.50</strong> out of 5
												</span>
											</div>

											<a href="#" rel="nofollow" className="add_to_cart_button">
												<i className="rt-icon2-basket"></i>
											</a>

											<span className="price">
												<ins>
													<span className="amount">$2.00</span>
												</ins>
											</span>
										</div>
									</li>

								</ul>
							</div>

							<div className="widget widget_tag_cloud widget_product_tag_cloud">

								<h3 className="widget-title">Size</h3>
								<div className="tagcloud">
									<a href="#" title="">XS</a>
									<a href="#" title="">S</a>
									<a href="#" title="">M</a>
									<a href="#" title="">L</a>
									<a href="#" title="">XL</a>
									<a href="#" title="">XXL</a>
								</div>
							</div>

							<div className="widget widget_layered_nav widget_categories">

								<h3 className="widget-title">Attributes</h3>
								<ul className="list-unstyled greylinks">
									<li>
										<a href="shop.html" className="white">White</a>
										<span className="count highlight">(3)</span>
									</li>
									<li>
										<a href="shop.html" className="grey">Grey</a>
										<span className="count highlight">(2)</span>
									</li>
									<li>
										<a href="shop.html" className="darkgrey">Darkgrey</a>
										<span className="count highlight">(12)</span>
									</li>
									<li>
										<a href="shop.html" className="black">Black</a>
										<span className="count highlight">(15)</span>
									</li>
									<li>
										<a href="shop.html" className="darkblue">Darkblue</a>
										<span className="count highlight">(25)</span>
									</li>
								</ul>
							</div>

							<div className="widget widget_layered_nav">

								<h3 className="widget-title">Color</h3>
								<ul className="list-unstyled color-filters">
									<li>
										<a href="shop.html" style={{backgroundColor:"#cacaca"}}>White</a>
										<span className="count grey">(12)</span>
									</li>
									<li>
										<a href="shop.html" style={{backgroundColor:"#67676a"}}>Grey</a>
										<span className="count grey">(52)</span>
									</li>
									<li>
										<a href="shop.html" style={{backgroundColor:"#1b1b19"}}>Darkgrey</a>
										<span className="count grey">(31)</span>
									</li>
									<li>
										<a href="shop.html" dstyle={{backgroundColor:"#255a8b"}}>Black</a>
										<span className="count grey">(24)</span>
									</li>
									<li>
										<a href="shop.html" style={{backgroundColor:"#0b8abf"}}>Darkblue</a>
										<span className="count grey">(16)</span>
									</li>
									<li>
										<a href="shop.html" style={{backgroundColor:"#bc1624"}}>Red</a>
										<span className="count grey">(5)</span>
									</li>
									<li>
										<a href="shop.html" style={{backgroundColor:"#4b0082"}}>Purpule</a>
										<span className="count grey">(8)</span>
									</li>
								</ul>
							</div>


						</aside>
            {//<!-- eof aside sidebar -->
            }


					</div>
				</div>
			</section>


			<section className="page_copyright theme_copyright texture_bg cs columns_padding_0 columns_margin_0">
				<div className="container">
					<div className="row display_table_md">
						<div className="col-md-4 col-md-push-4 text-center display_table_cell_md">
							<a href="./" className="logo">
								<div className="main_bg_color2">
									<img src="images/logo.png" alt=""/>
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
