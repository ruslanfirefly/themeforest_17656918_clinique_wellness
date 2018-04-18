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

			<section className="page_topline ls ms section_padding_top_5 section_padding_bottom_5 table_section table_section_md columns_padding_0">
				<div className="container">
					<div className="row">
						<div className="col-md-3 text-center text-md-left">
							<div className="page_social_icons">
								<a className="social-icon soc-facebook" href="#" title="Facebook"></a>
								<a className="social-icon soc-twitter" href="#" title="Twitter"></a>
								<a className="social-icon soc-google" href="#" title="Google"></a>
								<a className="social-icon soc-youtube" href="#" title="Youtube"></a>
							</div>
						</div>

						<div className="col-md-9 text-center text-md-right">

							<span>
								<i className="rt-icon2-map2 highlight fontsize_24"></i> 4321 Your Address, Country
							</span>

							<span>
								<i className="rt-icon2-printer2 highlight fontsize_24"></i> 8 (800) 695-2684
							</span>

							<span>
								<i className="rt-icon2-mail2 highlight fontsize_24"></i> support@company.com
							</span>

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
									<a href="#">Pages</a>
								</li>
								<li className="active">Typography</li>
							</ol>
						</div>
						<div className="col-sm-4 text-center">
							<h1 className="highlight bold">Typography</h1>
						</div>
						<div className="col-sm-4 hidden-xs"></div>
					</div>
				</div>
			</section>


			<section className="ls section_padding_100 typography">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<p>
								<img className="alignleft one-third" src={require("./images/gallery/07.jpg")} alt=""/> Sed filet mignon velit tri-tip. Ex duis swine bresaola, spare ribs pork loin chicken deserunt veniam non turducken. Frankfurter ham hock dolore dolore salami id deserunt pork chop. Cupim in chicken ut tenderloin shankle consectetur turkey meatloaf
								tail salami elit. Salami chicken ham hock rump beef ribs landjaeger venison ipsum mollit. Velit qui short ribs porchetta andouille ea pork chop. Pork belly kielbasa sint, esse in swine ullamco do.
								<br/> Pariatur chicken nisi, filet mignon pig commodo pastrami nulla lorem turkey eu. Ribeye ad quis, esse venison leberkas rump kielbasa aliqua laboris dolore. In anim pork chop ball tip magna ea. Short ribs consectetur quis, spare ribs filet mignon
								qui ribeye anim. Picanha t-bone pork belly cillum. Ham dolor duis, pork ullamco anim shank magna swine velit strip steak occaecat.Ground round esse voluptate et frankfurter incididunt nostrud adipisicing chuck ipsum sirloin. Boudin ham ea sausage
								meatball frankfurter landjaeger. Ea shoulder ad eiusmod, doner venison lorem nisi pancetta cillum in ham mollit labore pastrami.
							</p>
							<p>

								Ham velit sausage pork chop. Boudin exercitation ham hock salami enim ullamco, dolor commodo aliquip shank. T-bone ground round ipsum sunt eu irure fatback. Tri-tip pig turkey, shank in in laborum ground round et excepteur porchetta enim pastrami. Enim
								t-bone ex id picanha biltong veniam aute beef. Turkey anim cow chicken ipsum quis alcatra ball tip est flank jowl chuck deserunt. Pig aliqua fugiat labore filet mignon landjaeger fatback biltong.
								<img className="alignright one-third" src={require("./images/gallery/12.jpg")} alt=""/> Tri-tip sirloin rump id filet mignon reprehenderit. Chicken labore beef ribs ut adipisicing shankle pork deserunt kevin occaecat tempor duis pork chop ullamco rump. Pig tempor shankle capicola brisket nulla. Nisi flank in porchetta jowl pork
								loin alcatra. Ribeye tail turducken aute, andouille ut exercitation do bacon pork belly pork loin ham hock.
								<br/> Est voluptate rump, nulla irure eiusmod adipisicing ullamco salami excepteur hamburger ad jowl. Shank est dolore, landjaeger short loin reprehenderit quis. Chuck picanha ipsum dolore, ea labore ground round do chicken proident. Landjaeger qui
								short loin nulla brisket corned beef.
								<br/> Reprehenderit consectetur venison, meatloaf tri-tip ground round sirloin excepteur quis. Cow ut chicken laborum eu pork chop. Cupim dolor laboris in adipisicing sunt sint esse deserunt anim elit tempor capicola reprehenderit. Aliquip dolore rump,
								fugiat meatloaf pig proident filet mignon excepteur id labore. Veniam drumstick excepteur pancetta elit picanha, sunt jerky ex duis voluptate. Dolor frankfurter bresaola adipisicing.
							</p>
							<p>
								Proident consectetur sirloin ham turducken. Beef id esse jerky pig filet mignon, consectetur officia aliquip kielbasa shoulder dolore. Tongue non boudin in shoulder nisi short loin ribeye ham prosciutto pig eu aute. Biltong short loin salami, kevin deserunt
								shank officia. Tri-tip velit nostrud lorem frankfurter. Drumstick doner mollit sausage flank, bacon veniam andouille reprehenderit ea in frankfurter pig pastrami shoulder.
							</p>
							<h1 className="bottommargin_20 topmargin_40 highlight">Heading 1</h1>
							<p>
								Enim deserunt frankfurter dolore salami ham. In picanha salami strip steak spare ribs magna nisi. Biltong enim elit ham hock. Qui irure short loin do anim ut ball tip ground round turducken. Ground round exercitation laboris, reprehenderit shoulder cillum
								anim. Aliqua ut leberkas consequat pork chop jowl short loin shoulder andouille officia cupim. Elit reprehenderit pork loin tail.
							</p>
							<hr className="bottommargin_25 topmargin_50"/>
							<h2 className="bottommargin_20 highlight">Heading 2</h2>
							<h3 className="bottommargin_20 highlight">Heading 3</h3>
							<h4 className="bottommargin_25 highlight">Heading 4</h4>
							<h5 className="bottommargin_25 text-uppercase">Heading 5</h5>
							<h6 className="text-uppercase">Heading6</h6>
							<hr className="topmargin_25"/>
							<h3 className="topmargin_50 bottommargin_20 highlight">Blockquote</h3>
							<p>
								Dolore pork chop venison tenderloin ut beef ribs. Beef ribs aute fatback strip steak mollit culpa. Officia short loin kielbasa leberkas, sed nostrud labore. Labore anim pork loin bresaola, ullamco sunt exercitation ut meatball. Bresaola incididunt cupidatat
								nulla drumstick duis. Adipisicing pig meatball shoulder. Tempor spare ribs prosciutto ut. Dolor kevin cupim andouille meatloaf, spare ribs shankle swine proident fugiat ribeye pork biltong.
							</p>
							<div className="row topmargin_30 bottommargin_25">
								<div className="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 col-sm-offset-0 col-sm-12 text-center">
									<blockquote className="lusitana-bold-up blockquote-big">
										<div className="theme-block highlight">
											Dolor kevin cupim andouille meatloaf, spare ribs shankle swine proident fugiat ribeye pork biltong. In ullamco nulla
										</div>
										<img src={require("./images/team/01.jpg")} alt=""/>
										<div className="fontsize_14 lusitana-bold-up highlight2 topmargin_40">Alejandro Barnett</div>

									</blockquote>
								</div>
							</div>
							<p>
								Sausage eu jerky, cupim ut ea occaecat tri-tip alcatra consectetur. Salami tenderloin ut ullamco. Jowl eiusmod ullamco chicken velit corned beef tenderloin pig flank prosciutto spare ribs capicola ham in filet mignon. Eiusmod in drumstick minim cupim
								excepteur, exercitation lorem ut t-bone picanha occaecat. Biltong lorem incididunt, t-bone do eiusmod voluptate tenderloin salami fugiat. Minim chicken qui ut incididunt. Turducken ground round pariatur biltong pork loin meatloaf sirloin. Laborum
								short loin flank andouille. Do cupim eiusmod ut fatback magna porchetta esse elit ball tip.
							</p>
							<h3 className="bottommargin_20 topmargin_40 highlight">Unordered List</h3>
							<p>
								Lorem in aliqua, consequat commodo rump enim cow tenderloin pork. Velit strip steak swine, ipsum kielbasa pork chop fatback ea nulla culpa ham hock. Kevin shoulder turkey frankfurter ball tip reprehenderit commodo sirloin magna et. Cupim ribeye landjaeger
								beef ribs veniam pastrami swine et nostrud cupidatat aliquip doner. Occaecat capicola cupim beef. Picanha jowl esse aliqua ham hock chicken cupidatat ex brisket ham commodo.
							</p>
							<ul className="list2 bottommargin_40">
								<li className="grey">Praesent sapien massa, convallis a pellentesque nec.</li>
								<li className="grey">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a</li>
								<li className="grey">Donec rutrum congue leo eget malesuada.</li>
								<li className="grey">Pellentesque in ipsum id orci porta dapibus.</li>
							</ul>
							<h3 className="bottommargin_20 topmargin_40 highlight">Ordered List</h3>
							<p>
								Bresaola pork pariatur aliquip sirloin biltong meatloaf turkey hamburger id tongue beef minim mollit cupidatat. Brisket beef voluptate enim t-bone beef ribs. Enim non cupidatat t-bone in tenderloin sirloin mollit reprehenderit short loin eiusmod frankfurter
								spare ribs. Porchetta ullamco est beef ribs brisket enim in cupim. Strip steak esse tri-tip laboris alcatra mollit ipsum ball tip, ham sirloin. Laborum tenderloin brisket eu voluptate doner pork.
							</p>
							<ol className="list3 bottommargin_0">
								<li className="highlight">
									<span className="grey">Praesent sapien massa, convallis a pellentesque nec.</span>
								</li>
								<li className="highlight">
									<span className="grey">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a</span>
								</li>
								<li className="highlight">
									<span className="grey">Donec rutrum congue leo eget malesuada.</span>
								</li>
								<li className="highlight">
									<span className="grey">Pellentesque in ipsum id orci porta dapibus.</span>
								</li>
							</ol>

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
