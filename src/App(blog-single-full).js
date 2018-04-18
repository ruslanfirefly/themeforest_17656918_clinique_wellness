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
      fullName:"",
      eMail:"",
      webSite:"",
    };

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
                <a href="#">Blog</a>
              </li>
              <li className="active">Blog Post</li>
            </ol>
          </div>
          <div className="col-sm-4 text-center">
            <h1 className="highlight bold">Blog Post</h1>
          </div>
          <div className="col-sm-4 hidden-xs"></div>
        </div>
      </div>
    </section>

    <section className="ls section_padding_110">
      <div className="container">
        <div className="row">

          <div className="col-sm-10 col-sm-push-1">

            <div className="entry-thumbnail">
              <img src="/images/gallery/03.jpg" alt=""/>
            </div>

            <div className="muted_background with_padding bottommargin_60">
              <article>

                <header className="entry-header">

                  <div className="entry-meta item-meta topmargin_-5">

                    <span className="small-text margin_0 pull-left">
                      <time datetime="2016-08-01T15:05:23+00:00" className="entry-date">
                        25.06.2016
                      </time>
                      By Admin
                    </span>

                    <a href="#" className="letter-spacing-033 small-text highlight pull-right">Relaxation</a>

                    <div className="clearfix"></div>

                  </div>
                  {//<!-- .entry-meta -->
                  }
                  <h4 className="fontsize_30 topmargin_15 bottommargin_20 highlight">
                    Dolore incididunt fatback
                  </h4>

                  <div className="theme_background post-adds">
                    <a href="#" className="darkgrey_bg_color">
                      <i className="rt-icon2-arrow-forward"></i>
                    </a>
                    <a href="#">
                      <i className="rt-icon2-heart2 highlight2"></i>
                    </a>
                    <span claclassNamess="item-likes">
                      334 likes
                    </span>

                    <span className="views-count main_bg_color2 pull-right small-text">
                      23573 views
                    </span>

                  </div>

                </header>
                {//<!-- .entry-header -->
                }

                <div className="entry-content">
                  <p className="bottommargin_0">
                    Bresaola shank tempor pig frankfurter turkey salami, duis fugiat. Ipsum shankle excepteur, irure occaecat velit capicola t-bone pork belly nulla. Porchetta do labore ham elit tenderloin, frankfurter in. Laboris sed velit, turkey alcatra adipisicing officia
                    lorem cupidatat excepteur porchetta. Do shank pig, ipsum ex velit picanha adipisicing eiusmod swine andouille voluptate officia.Capicola elit shoulder filet mignon ea landjaeger aliquip salami ullamco pariatur minim. Hamburger short ribs est
                    cupim sirloin esse mollit ut kevin exercitation meatloaf incididunt consequat chuck cupidatat. Short ribs capicola t-bone tri-tip ball tip biltong reprehenderit strip steak ground round occaecat aute pare ribs ut exercitation in.
                  </p>

                  <blockquote className="lusitana-bold-up text-center topmargin_60 bottommargin_50">
                    <div className="theme-block highlight">
                      Eiusmod strip steak nisi kielbasa pariatur deserunt kevin irure. Sausage dolor cupidatat mollit nisi venison brisket prosciutto
                    </div>
                    <div className="fontsize_14 lusitana-bold-up highlight2 topmargin_40">Alejandro Barnett</div>
                  </blockquote>

                  <p>
                    Lorem in aliqua, consequat commodo rump enim cow tenderloin pork. Velit strip steak swine, ipsum elbasa pork chop fatback ea nulla culpa ham hock. Kevin shoulder turkey frankfurter ball tip reprehenderit modo sirloin magna et. Cupim ribeye landjaeger
                    beef ribs veniam pastrami swine.
                  </p>
                  <ul className="list3">
                    <li className="highlight">Praesent sapien massa, convallis a pellentesque nec.</li>
                    <li className="highlight">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</li>
                    <li className="highlight">Donec rutrum congue leo eget malesuada.</li>
                    <li className="highlight">Pellentesque in ipsum id orci porta dapibus.</li>
                  </ul>
                  <p>
                    <img className="alignleft" alt="" src="/images/side-image.jpg"/> Do drumstick eu bresaola short loin, nostrud ham hock minim sirloin ham meatloaf bacon consequat biltong adipisicing. Id pork chop ad magna dolore laboris et irure corned beef nisi ut meatball do. Ad ut laboris agna commodo. Meatball salami
                    dolore corned beef swine in in pig dolor tongue ad. Picanha culpa alcatra ut, veniam meatball in filet mignon short loin labore ex short ribs. Lorem agna aute ad laboris. Ham irure picanha jowl enim tenderloin turkey hamburger adipisicing beef
                    et cillum eu quiseg sunt. Et proident pastrami venison. Meatball salami dolore corned beef swine in in pig dolor tongue ad. Pork belly chuck officia doner cillum enim prosciutto nulla bresaola irure. Meatloaf voluptate est porchetta pork spare
                    ribs. Jowl ball tip reprehenderit incididunt voluptate beef. Oluptate nulla fugiat pig. Ipsum do pig est aliquip dolor tongue ad. Cupidatat kielbasa filet mignon bresaola velit. Por landjaeger ipsum dolor nostrud brisket pork belly chuck culpa.
                  </p>
                  <p>
                    Ut short ribs pastrami jerky occaecat. Irure incididunt sausage eiusmod. Tenderloin rump ut, ex eu magna pancetta meatloaf excepteur short loin spare ribs eiusmod deserunt. Est sirloin ipsum rump, meatloaf ficia duis et anim in sed boudin elit. Incididunt
                    id et eu tongue ham hock strip steak meatloaf pig. Flank beef ribs cupidatat magna proident laboris shoulder dolore meatball. Venison pork belly drumstick, meatloaf ham deserunt laborum.
                  </p>

                </div>
                {//<!-- .entry-content -->
                }


                <div className="author-meta side-item content-padding theme_background topmargin_40 bottommargin_60">

                  <div className="row">

                    <div className="col-lg-3 col-md-4">
                      <div className="item-media margin_0">
                        <img src="/images/team/05.jpg" alt=""/>
                      </div>
                    </div>

                    <div className="col-lg-9 col-md-8">
                      <div className="item-content">
                        <h2 className="fontsize_30 topmargin_0 bottommargin_15 highlight">jared tran</h2>

                        <p className="margin_0">Nulla porttitor accumsan tincidunt. Vestibulum ac diam sitmet quam vehicula elementum. Sedsit amet dui. Nulla porttitorsan. Tincidunt mauris.</p>

                      </div>
                    </div>

                  </div>
                </div>

              </article>

              <div className="comment-respond" id="respond">
                <form className="comment-form bold-placeholder" id="commentform" method="post" action="/">
                  <div className="row columns_padding_5">
                    <div className="col-md-4">
                      <p className="comment-form-author">
                        <label for="author" className="sr-only">Full Name
                          <span className="required">*</span>
                        </label>
                        {//<!-- <i className="rt-icon2-user-outline"></i> -->
                        }
                        <input type="text" aria-required="true" size="30" value={this.state.fullName} onChange={(el)=>{this.setState({fullName: el.target.value})}} className="form-control" placeholder="Full Name"/>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="comment-form-email">
                        <label for="comment_email" className="sr-only">Email
                          <span className="required">*</span>
                        </label>
                        {//<!-- <i className="rt-icon2-mail2"></i> -->
                        }
                        <input type="email" aria-required="true" size="30" value={this.state.eMail} onChange={(el)=>{this.setState({eMail: el.target.value})}}  className="form-control" placeholder="Emain Address"/>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="comment-form-wesite">
                        <label for="comment_wesite" className="sr-only">Email</label>
                        {//<!-- <i class="rt-icon2-mail2"></i> -->
                        }
                        <input type="text" size="50" value={this.state.webSite} onChange={(el)=>{this.setState({webSite: el.target.value})}}  className="form-control" placeholder="Website"/>
                      </p>
                    </div>
                    <div className="col-md-12">
                      <p className="comment-form-chat">
                        <label for="comment" className="sr-only">Comment</label>
                        {//<!-- <i class="rt-icon2-pencil3"></i> -->
                        }
                        <textarea aria-required="true" rows="8" cols="45" name="comment" id="comment" className="form-control" placeholder="Message..."></textarea>
                      </p>
                    </div>
                  </div>
                  <p className="form-submit text-center topmargin_20">
                    <button type="submit" id="submit" name="submit" className="theme_button color2 margin_0">Send Message</button>
                  </p>
                </form>
              </div>
              {//<!-- #respond -->
              }

              <div className="comments-area" id="comments">
                <ol className="comment-list">
                  <li className="comment even thread-even depth-1 parent">
                    <article className="comment-body media">
                      <div className="media-left">
                        <img className="media-object" alt="" src="/images/faces/01.jpg"/>
                      </div>
                      <div className="media-body">
                        <span className="reply">
                          <a className="theme_background" href="#respond">
                            <span className="sr-only">reply</span>
                          </a>
                        </span>
                        <div className="comment-meta highlight3-links">
                          <h6 className="margin_0">
                            <a className="author_url" rel="external nofollow" href="#">Emma Woods</a>
                          </h6>
                          <span className="comment-date highlight2">
                            <time datetime="2016-09-03T15:05:23+00:00" className="entry-date small-text bold">23.03.2016 at 10:00</time>
                          </span>
                        </div>
                        <p>First Level Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                      </div>
                    </article>
                    {//<!-- .comment-body -->
                    }

                    <ol className="children">
                      <li className="comment byuser odd alt depth-2 parent">
                        <article className="comment-body media">
                          <div className="media-left">
                            <img className="media-object" alt="" src="/images/faces/02.jpg"/>
                          </div>
                          <div className="media-body">
                            <span className="reply">
                              <a className="theme_background" href="#respond">
                                <span className="sr-only">reply</span>
                              </a>
                            </span>
                            <div className="comment-meta highlight3-links">
                              <h6 className="margin_0">
                                <a className="author_url" rel="external nofollow" href="#">Violet Hopkins</a>
                              </h6>
                              <span className="comment-date highlight2">
                                <time datetime="2016-09-03T15:05:23+00:00" className="entry-date small-text bold">23.03.2016 at 10:00</time>
                              </span>
                            </div>
                            <p>Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.</p>
                          </div>
                        </article>
                        {//<!-- .comment-body -->
                        }

                        <ol className="children">
                          <li className="comment byuser even depth-3">
                            <article className="comment-body media">
                              <div className="media-left">
                                <img className="media-object" alt="" src="/images/faces/03.jpg"/>
                              </div>
                              <div className="media-body">
                                <span className="reply">
                                  <a className="theme_background" href="#respond">
                                    <span className="sr-only">reply</span>
                                  </a>
                                </span>
                                <div className="comment-meta highlight3-links">
                                  <h6 className="margin_0">
                                    <a className="author_url" rel="external nofollow" href="#">Ida Mendez</a>
                                  </h6>
                                  <span className="comment-date highlight2">
                                    <time datetime="2016-09-03T15:05:23+00:00" className="entry-date small-text bold">23.03.2016 at 10:00</time>
                                  </span>
                                </div>
                                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque.</p>
                              </div>
                            </article>
                            {//<!-- .comment-body -->
                            }
                          </li>
                          {//<!-- #comment-## -->
                          }
                        </ol>
                        {//<!-- .children -->
                        }
                      </li>
                      {//<!-- #comment-## -->
                      }
                    </ol>
                    {//<!-- .children -->
                    }
                  </li>
                  {//<!-- #comment-## -->
                  }

                  <li className="comment byuser odd alt thread-odd thread-alt depth-1">
                    <article className="comment-body media">
                      <div className="media-left">
                        <img className="media-object" alt="" src="/images/faces/04.jpg"/>
                      </div>
                      <div className="media-body">
                        <span className="reply">
                          <a className="theme_background" href="#respond">
                            <span className="sr-only">reply</span>
                          </a>
                        </span>
                        <div className="comment-meta highlight3-links">
                          <h6 className="margin_0">
                            <a className="author_url" rel="external nofollow" href="#">Florence Floyd</a>
                          </h6>
                          <span className="comment-date highlight2">
                            <time datetime="2016-09-03T15:05:23+00:00" className="entry-date small-text bold">23.03.2016 at 10:00</time>
                          </span>
                        </div>
                        <p>Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</p>
                      </div>
                    </article>
                    {//<!-- .comment-body -->
                    }
                  </li>
                  {//<!-- #comment-## -->
                  }

                  <li className="comment byuser even thread-even depth-1">
                    <article className="comment-body media">
                      <div className="media-left">
                        <img className="media-object" alt="" src="/images/faces/05.jpg"/>
                      </div>
                      <div className="media-body">
                        <span className="reply">
                          <a className="theme_background" href="#respond">
                            <span className="sr-only">reply</span>
                          </a>
                        </span>
                        <div className="comment-meta highlight3-links">
                          <h6 className="margin_0">
                            <a className="author_url" rel="external nofollow" href="#">Carlos Carpenter</a>
                          </h6>
                          <span className="comment-date highlight2">
                            <time datetime="2016-09-03T15:05:23+00:00" className="entry-date small-text bold">23.03.2016 at 10:00</time>
                          </span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                      </div>
                    </article>
                    {//<!-- .comment-body -->
                    }
                  </li>
                  {//<!-- #comment-## -->
                  }
                </ol>
                {//<!-- .comment-list -->
                }
              </div>
              {//<!-- #comments -->
              }
            </div>

            <div className="row blog-buttons columns_padding_5">
              <div className="col-md-6">
                <a className="vertical-item content-absolute full-height-content text-center ds inline-block" href="">
                  <div className="item-media">
                    <img src="/images/blog-prev.jpg" alt=""/>
                    <div className="media-links">
                    </div>
                  </div>
                  <div className="item-content">
                    <div className="display_table">
                      <div className="display_table_cell">
                        <p className="fontsize_14 text-uppecase bold highlight2 bottommargin_25">prev</p>
                        <h3 className="fontsize_30 topmargin_-5 bottommargin_0">Pork belly jerky pancetta corned</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6">
                <a className="vertical-item content-absolute full-height-content text-center ds inline-block" href="">
                  <div className="item-media">
                    <img src="/images/blog-next.jpg" alt=""/>
                    <div className="media-links">
                    </div>
                  </div>
                  <div className="item-content">
                    <div className="display_table">
                      <div className="display_table_cell">
                        <p className="fontsize_14 text-uppecase bold highlight2 bottommargin_25">next</p>
                        <h3 className="topmargin_-5 fontsize_30 bottommargin_0">Pork belly jerky pancetta corned</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
          {//<!--eof .col-sm-8 (main content)-->
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
