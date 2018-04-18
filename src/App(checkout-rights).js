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
	  userName: "",
	  pass: "",
	  showing: "collapse",
	  firstName:"",
	  lastName:"",
	  compName:"",
	  address:"",
	  appart:"",
	  town:"",
	  county:"",
	  postCode:"",
	  email:"",
	  phone:""
    };

  }
  showForm =() =>{
	  return(
		<div className={this.state.showing} id="registeredForm">
		<form className="checkout with_border with_padding form-horizontal" role="form">
			<p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing &amp; Shipping section.</p>

			<div className="form-group">
				<label for="username" className="col-sm-3 control-label">
					<span className="grey">Nick or email</span>
					<span className="required">*</span>
				</label>
				<div className="col-sm-9">
					<input type="text" className="form-control" value={this.state.userName} onChange={(el)=>{this.setState({userName: el.target.value})}} name="username" id="username"/>
				</div>
			</div>
			<div className="form-group">
				<label for="password" className="col-sm-3 control-label">
					<span className="grey">Password</span>
					<span className="required">*</span>
				</label>
				<div className="col-sm-9">
					<input className="form-control" value={this.state.pass} onChange={(el)=>{this.setState({pass: el.target.value})}}type="password" name="password" id="password"/>
				</div>
			</div>

			<div className="form-group">
				<div className="col-sm-offset-3 col-sm-9">
					<div className="checkbox">
						<label for="rememberme" className="control-label">
							<input name="rememberme" type="checkbox" id="rememberme" value="forever"/> Remember me
						</label>
					</div>
					<input type="submit" className="theme_button color1 topmargin_20" name="login" value="Login"/>
					<div className="lost_password">
						<a href="#">Lost your password?</a>
					</div>
				</div>
			</div>
		</form>
	</div>

	  )
  }

 render(){
   return(
     <div>


	<div id="canvas">
		<div id="box_wrapper">

			{//<!-- template sections -->
      }
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
								<li className="active">Checkout</li>
							</ol>
						</div>
						<div className="col-sm-4 text-center">
							<h1 className="highlight bold">Checkout</h1>
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

							<div className="shop-info">Returning customer?
								<a data-toggle="collapse" href="#registeredForm" aria-expanded="false" aria-controls="registeredForm" onClick={()=>{this.setState({showing: ""})}}>Click here to login</a>
							</div>

							{this.showForm()}
							<h3>Billing Address</h3>

							<form className="form-horizontal checkout shop-checkout" role="form">
								<div className="form-group">
									<label for="billing_country" className="col-sm-3 control-label">
										<span className="grey">Country </span>
										<span className="required">*</span>
									</label>
									<div className="col-sm-9">
										<select className="form-control" name="billing_country" id="billing_country">
											<option value="">Select a country…</option>
											<option value="AX">Åland Islands</option>
											<option value="AF">Afghanistan</option>
											<option value="AL">Albania</option>
											<option value="GA">Gabon</option>
											<option value="GM">Gambia</option>
											<option value="GE">Georgia</option>
											<option value="DE">Germany</option>
											<option value="GH">Ghana</option>
											<option value="AE">United Arab Emirates</option>
											<option value="GB" selected="selected">United Kingdom (UK)</option>
											<option value="ZW">Zimbabwe</option>
										</select>
									</div>
								</div>
								<div className="form-group validate-required" id="billing_first_name_field">
									<label for="billing_first_name" className="col-sm-3 control-label">
										<span className="grey">First Name </span>
										<span className="required">*</span>
									</label>
									<div className="col-sm-9">
										<input type="text" className="form-control " value={this.state.firstName} onChange={(el)=>{this.setState({firstName: el.target.value})}} placeholder=""/>
									</div>
								</div>
								<div className="form-group validate-required" id="billing_last_name_field">
									<label for="billing_last_name" className="col-sm-3 control-label">
										<span className="grey">Last Name </span>
										<span className="required">*</span>
									</label>
									<div className="col-sm-9">
										<input type="text" className="form-control "value={this.state.lastName} onChange={(el)=>{this.setState({lastName: el.target.value})}} name="billing_last_name" id="billing_last_name" placeholder=""/>
									</div>
								</div>

								<div className="form-group" id="billing_company_field">
									<label for="billing_company" className="col-sm-3 control-label">
										<span className="grey">Company Name</span>
									</label>
									<div className="col-sm-9">
										<input type="text" className="form-control " value={this.state.compName} onChange={(el)=>{this.setState({compName: el.target.value})}}name="billing_company" id="billing_company" placeholder=""/>
									</div>
								</div>
								<div className="form-group address-field validate-required" id="billing_address_fields">
									<label for="billing_address_1" className="col-sm-3 control-label">
										<span className="grey">Address </span>
										<span className="required">*</span>
									</label>
									<div className="col-sm-9">
										<input type="text" className="form-control " value={this.state.address} onChange={(el)=>{this.setState({address: el.target.value})}} name="billing_address_1" id="billing_address_1" placeholder="Street address"/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-sm-offset-3 col-sm-9">
										<input type="text" className="form-control " value={this.state.appart} onChange={(el)=>{this.setState({appart: el.target.value})}} name="billing_address_2" id="billing_address_2" placeholder="Apartment, suite, unit etc. (optional)"/>
									</div>
								</div>
								<div className="form-group address-field validate-required" id="billing_city_field">
									<label for="billing_city" className="col-sm-3 control-label">
										<span className="grey">Town / City </span>
										<span className="required">*</span>
									</label>
									<div className="col-sm-9">
										<input type="text" className="form-control " value={this.state.town} onChange={(el)=>{this.setState({town: el.target.value})}} name="billing_city" id="billing_city" placeholder="Town / City"/>
									</div>
								</div>
								<div className="form-group address-field validate-state" id="billing_state_field">
									<label for="billing_state" className="col-sm-3 control-label">
										<span className="grey">County</span>
									</label>
									<div className="col-sm-9">
										<input type="text" className="form-control " value={this.state.county} onChange={(el)=>{this.setState({county: el.target.value})}} placeholder="State / County" name="billing_state" id="billing_state"/>
									</div>
								</div>
								<div className="form-group address-field validate-required validate-postcode" id="billing_postcode_field">
									<label for="billing_postcode" className="col-sm-3 control-label">
										<span className="grey">Postcode </span>
										<span className="required">*</span>
									</label>
									<div className="col-sm-9">
										<input type="text" className="form-control " value={this.state.postCode} onChange={(el)=>{this.setState({postCode: el.target.value})}}name="billing_postcode" id="billing_postcode" placeholder="Postcode / Zip"/>
									</div>
								</div>

								<div className="form-group validate-required validate-email" id="billing_email_field">
									<label for="billing_email" className="col-sm-3 control-label">
										<span className="grey">Email Address </span>
										<span className="required">*</span>
									</label>
									<div className="col-sm-9">
										<input type="text" className="form-control " value={this.state.email} onChange={(el)=>{this.setState({email: el.target.value})}}name="billing_email" id="billing_email" placeholder="email"/>
									</div>
								</div>
								<div className="form-group validate-required validate-phone" id="billing_phone_field">
									<label for="billing_phone" className="col-sm-3 control-label">
										<span className="grey">Phone </span>
										<span className="required">*</span>
									</label>
									<div className="col-sm-9">
										<input type="text" className="form-control " value={this.state.phone} onChange={(el)=>{this.setState({phone: el.target.value})}} name="billing_phone" id="billing_phone" placeholder=""/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-sm-offset-3 col-sm-9">
										<div className="checkbox">
											<label>
												<input type="checkbox"/> Create an Account?
											</label>
										</div>
										<div className="checkbox">
											<label>
												<input type="checkbox"/> Shop to Billing Address?
											</label>
										</div>
									</div>
								</div>


								<div className="form-group">
									<label for="order_comments" className="col-sm-3 control-label">
										<span className="grey">Order Notes</span>
									</label>
									<div className="col-sm-9">
										<textarea name="order_comments" className="form-control" id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." rows="5"></textarea>
									</div>
								</div>
							</form>

						</div>
						{//<!--eof .col-sm-8 (main content)-->
						}


						{//<!-- sidebar -->
						}
						<aside className="col-sm-5 col-md-4 col-lg-4">

							<h3 className="widget-title" id="order_review_heading">Your order</h3>
							<div id="order_review" className="shop-checkout-review-order">
								<table className="table shop_table shop-checkout-review-order-table">
									<thead>
										<tr>
											<td className="product-name">Product</td>
											<td className="product-total">Total</td>
										</tr>
									</thead>
									<tbody>
										<tr className="cart_item">
											<td className="product-name">
												Lipsum Sit
												<span className="product-quantity">× 1</span>
											</td>
											<td className="product-total">
												<span className="amount grey">$20.00</span>
											</td>
										</tr>
									</tbody>
									<tfoot>

										<tr className="cart-subtotal">
											<td>Subtotal:</td>
											<td>
												<span className="amount grey">$20.00</span>
											</td>
										</tr>

										<tr className="shipping">
											<td>Shipping:</td>
											<td>
												<span className="grey">Free Shipping</span>
											</td>
										</tr>

										<tr className="order-total">
											<td>Total:</td>
											<td>
												<span className="amount grey">
													<strong>$20.00</strong>
												</span>
											</td>
										</tr>
									</tfoot>
								</table>

								<div id="payment" className="shop-checkout-payment">
									<h3 className="widget-title">Payment</h3>
									<ul className="list1 no-bullets payment_methods methods">
										<li className="payment_method_bacs">
											<div className="radio">
												<label for="payment_method_bacs">
													<input id="payment_method_bacs" type="radio" name="payment_method" value="bacs" checked="checked"/>
													<span className="grey">Direct Bank Transfer</span>
												</label>
											</div>

											<div className="payment_box payment_method_bacs">
												<p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
											</div>
										</li>
										<li className="payment_method_cheque">

											<div className="radio">
												<label for="payment_method_cheque">
													<input id="payment_method_cheque" type="radio" name="payment_method" value="cheque"/>
													<span className="grey">Cheque Payment</span>
												</label>
											</div>

										</li>
										<li className="payment_method_paypal">

											<div className="radio">
												<label for="payment_method_paypal">
													<input id="payment_method_paypal" type="radio" name="payment_method" value="paypal"/>
													<span className="grey">PayPal</span>

												</label>
											</div>

										</li>
									</ul>

									<div className="place-order">
										<input type="submit" className="theme_button color1" name="checkout_place_order" id="place_order" value="Place order"/>
									</div>
								</div>
							</div>

						</aside>
						{//<!-- eof aside sidebar -->
						}


					</div>
				</div>
			</section>

			<footer className="page_footer ds ms section_padding_top_60 section_padding_bottom_50">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-6 to_animate" data-animation="scaleAppear">
							<div className="widget widget_text">
								{//<!-- <p> -->
								}
								<a href="./" className="logo bottommargin_20">
									<img src="/images/logo.png" alt="" className="main_bg_color"/>
									<h1>Clinique</h1>
								</a>
								{//<!-- </p> -->
								}
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
