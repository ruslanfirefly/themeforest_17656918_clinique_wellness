import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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

  

  render() {
    return (
      <div>
        <div className="bg-danger text-center">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/" className="highlight">upgrade your browser</a> to improve your experience.</div>

      <div className="preloader">
        <div className="preloader_image"></div>
      </div>


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

      <div id="canvas">
        <div id="box_wrapper">

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

                  <nav className="mainmenu_wrapper">
                    <ul className="mainmenu nav sf-menu">
                      <li className="active">
                        <a href="index.html">Main page</a>
                      </li>

                      <li>
                        <a href="appointment.html">Pages</a>
                        <ul>

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

                      <li>
                        <a href="gallery-regular.html">Lookbook</a>
                        <ul>
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

                          <li>
                            <a href="gallery-tile.html">Tile</a>
                          </li>

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

                          <li>
                            <a href="gallery-single.html">Item</a>
                          </li>
                        </ul>
                      </li>

                      {/*blog */}
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
                      {/*eof blog */}

                      {/*contacts*/}
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
                      {/*eof contacts*/}

                      {/*shop*/}
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
                      {/*eof shop*/} 

                    </ul>
                  </nav>
                  {/*eof main nav*/}
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
                    <li className="active"> No sidebar</li>
                  </ol>
                </div>
                <div className="col-sm-4 text-center">
                  <h1 className="highlight bold">No sidebar</h1>
                </div>
                <div className="col-sm-4 hidden-xs"></div>
              </div>
            </div>
          </section>

          <section className="section_padding_110 ls">
				<div className="container">

					<div className="row bottommargin_30">
						<div className="col-xs-12">
							<article id="blog-gallery-slider" className="carousel slide">

                {//<!-- Indicators -->
                }
								

                {//<!-- Wrapper for slides -->
                }
                {//<div className="carousel-inner ds">
                }
      
                <Carousel className="carousel-inner ds" showArrows={false} showThumbs={false}>
                <div className="item active">
										<div className="vertical-item content-absolute">
											<div className="item-media after_cover">
												<img src="/images/gallery/10.jpg" alt=""/>

											</div>

											<div className="item-content">
												<div className="display_table">
													<div className="display_table_cell text-center">
														<p className="text-uppercase fontsize_14 bold letter-spacing-033 highlight5">look and feel your best</p>
														<h2 className="bottommargin_0 topmargin_15">Welcome to the</h2>
														<h1 className="topmargin_-5">Clinique</h1>
														<hr className="divider-size_1_70 light_bg_color topmargin_60 bottommargin_50"/>
														<p className="text-uppercase fontsize_14 bold letter-spacing-033 highlight5">The art and science of pure flower and plant essences</p>
													</div>
												</div>
											</div>
										</div>
									</div>

                  <div className="item">
                  <div className="vertical-item content-absolute">
                    <div className="item-media after_cover">
                      <img src="/images/gallery/06.jpg" alt=""/>

                    </div>

                    <div className="item-content">
                      <div className="display_table">
                        <div className="display_table_cell text-center">
                          <p className="text-uppercase fontsize_14 bold letter-spacing-033 highlight5">look and feel your best</p>
                          <h2 className="bottommargin_0 topmargin_15">Welcome to the</h2>
                          <h1 className="topmargin_-5">Clinique</h1>
                          <hr className="divider-size_1_70 light_bg_color topmargin_60 bottommargin_50"/>
                          <p className="text-uppercase fontsize_14 bold letter-spacing-033 highlight5">The art and science of pure flower and plant essences</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="item">
                  <div className="vertical-item content-absolute">
                    <div className="item-media after_cover">
                      <img src="/images/gallery/06.jpg" alt=""/>

                    </div>

                    <div className="item-content">
                      <div className="display_table">
                        <div className="display_table_cell text-center">
                          <p className="text-uppercase fontsize_14 bold letter-spacing-033 highlight5">look and feel your best</p>
                          <h2 className="bottommargin_0 topmargin_15">Welcome to the</h2>
                          <h1 className="topmargin_-5">Clinique</h1>
                          <hr className="divider-size_1_70 light_bg_color topmargin_60 bottommargin_50"/>
                          <p className="text-uppercase fontsize_14 bold letter-spacing-033 highlight5">The art and science of pure flower and plant essences</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
            </Carousel>

								

							</article>
						</div>
					</div>

					<div className="row">
						<div className="col-sm-12 text-center">
							<h3 className="fontsize_30 highlight">Top Posts</h3>
						</div>
					</div>

					<div className="row bottommargin_40">
						<div className="col-md-4 col-sm-6 col-sm-offset-3 col-md-offset-0 bottommargin_30">
							<div className="vertical-item with_background with_padding">
								<div className="item-media text-center bottommargin_30">
									<img src="/images/lookbook01.jpg" alt="" className="with_border extrathik_border"/>
								</div>
								<div className="item-content text-center">
									<p className="letter-spacing-033 small-text lineheight_1 highlight4">Relaxation</p>
									<h3 className="highlight">beauty
										<br/> center</h3>
									<hr className="divider-size_2_30 topmargin_25 bottommargin_20 highlight4"/>
									<p className="small-text">
										<time dateTime="2016-08-01T15:05:23+00:00" className="entry-date">
											25.06.2016
										</time>
										By Admin
									</p>
									<hr className="bottommargin_25"/>
									<p>
										On the hand, we denounce
										<br/> with righteous indignation and
										<br/> dislike men whoare
									</p>
									<hr className="topmargin_25 bottommargin_30"/>
									<a href="services.html" className="theme_button extrawide_button color4">View details</a>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 col-sm-offset-3 col-md-offset-0 bottommargin_30">
							<div className="vertical-item with_background with_padding">
								<div className="item-media text-center bottommargin_30">
									<img src="/images/lookbook02.jpg" alt="" className="with_border extrathik_border"/>
								</div>
								<div className="item-content text-center">
									<p className="letter-spacing-033 small-text lineheight_1 highlight3">refreshing</p>
									<h3 className="highlight">Hair
										<br/>salon</h3>
									<hr className="divider-size_2_30 topmargin_25 bottommargin_20 highlight3"/>
									<p className="small-text">
										<time dateTime="2016-08-01T15:05:23+00:00" className="entry-date">
											25.06.2016
										</time>
										By Admin
									</p>
									<hr className="bottommargin_25"/>
									<p>
										He rejects pleasures to secure
										<br/> other greater pleasures or else
										<br/> endures pains to avoid
									</p>
									<hr className="topmargin_25 bottommargin_30"/>
									<a href="services.html" className="theme_button extrawide_button color3">View details</a>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 col-sm-offset-3 col-md-offset-0 bottommargin_30">
							<div className="vertical-item with_background with_padding">
								<div className="item-media text-center bottommargin_30">
									<img src="/images/lookbook03.jpg" alt="" className="with_border extrathik_border"/>
								</div>
								<div className="item-content text-center">
									<p className="letter-spacing-033 small-text lineheight_1 highlight2">Rejuvenation</p>
									<h3 className="highlight">spa
										<br/>resort</h3>
									<hr className="divider-size_2_30 topmargin_25 bottommargin_20 highlight2"/>
									<p className="small-text">
										<time dateTime="2016-08-01T15:05:23+00:00" className="entry-date">
											25.06.2016
										</time>
										By Admin
									</p>
									<hr className="bottommargin_25"/>
									<p>
										That they cannot foresee the
										<br/>pain and trouble that are bound
										<br/>to ensue and belongs
									</p>
									<hr className="topmargin_25 bottommargin_30"/>
									<a href="services.html" className="theme_button extrawide_button color2">View details</a>
								</div>
							</div>
						</div>
					</div>

					<div className="row">

          <div className="col-sm-7 col-md-8 col-lg-8">


							<article className="vertical-item post format-video muted_background">


								<div className="entry-thumbnail">
									<div className="embed-responsive embed-responsive-3by2">
										<a href="https://www.youtube.com/embed/mcixldqDIEQ" className="embed-placeholder">
											<img src="/images/gallery/13.jpg" alt=""/>
										</a>
									</div>
								</div>

								<div className="item-content entry-content">
									<header className="entry-header">

										<span className="small-text margin_0 pull-left">
											<time dateTime="2016-08-01T15:05:23+00:00" className="entry-date">
												25.06.2016
											</time>
											By Admin
										</span>

										<a href="#" className="letter-spacing-033 small-text highlight pull-right">Relaxation</a>

										<div className="clearfix"></div>

										<h4 className="fontsize_30 topmargin_15 bottommargin_20 highlight">
											<a href="blog-single-video-left.html" rel="bookmark">Dolore incididunt fatback</a>
										</h4>

									</header>
                  {//<!-- .entry-header -->
                  }

									<p className="margin_0">Ullamco aute spare ribs, chuck venison pork loin ham hock flank veniam reprehenderit labore andouille. Ham eu ut, bresaola dolore ribeye laborum corned beef aute consequat laboris aliqua chicken pork chop. Ball tip ham dolor chicken salami, commodo
										tri-tip swine qui capicola chuck drumstick deserunt. Aute sausage picanha laborum ea nostrud pariatur reprehenderit kielbasa nulla rump dolore.</p>

								</div>
                {//<!-- .item-content.entry-content -->
                }

							</article>
              {//<!-- .post -->
              }

							<article className="vertical-item post format-standard muted_background">

								<div className="item-media entry-thumbnail">
									<img src="/images/gallery/14.jpg" alt=""/>
									<div className="media-links">
										<a className="abs-link" title="" href="blog-single-left.html"></a>
									</div>
								</div>

								<div className="item-content entry-content">
									<header className="entry-header">

										<span className="small-text margin_0 pull-left">
											<time dateTime="2016-08-01T15:05:23+00:00" className="entry-date">
												25.06.2016
											</time>
											By Admin
										</span>

										<a href="#" className="highlight pull-right small-text bold letter-spacing-033">maid services</a>

										<div className="clearfix"></div>

										<h4 className="fontsize_30 topmargin_15 bottommargin_20 highlight">
											<a href="blog-single-video-left.html" rel="bookmark">Bacon do ham in. Chuck tenderloin laboris</a>
										</h4>

									</header>
                  {//<!-- .entry-header -->
                  }

									<p className="margin_0">Bresaola shank tempor pig frankfurter turkey salami, duis fugiat. Ipsum shankle excepteur, irure occaecat velit capicola t-bone pork belly nulla. Porchetta do labore ham elit tenderloin, frankfurter in. Laboris sed velit, turkey alcatra adipisicing
										officia lorem cupidatat excepteur porchetta. Do shank pig, ipsum ex velit picanha adipisicing eiusmod swine andouille voluptate officia.</p>

								</div>
                {//<!-- .item-content.entry-content -->
                }
							</article>
              {//<!-- .post -->
              }

							<article className="ds vertical-item post format-status after_cover">

								<div className="item-content entry-content text-center">

									<div className="media inline-block">
										<img src="/images/faces/06.jpg" alt="" className="media-object round topmargin_5 bottommargin_5"/>
									</div>
									<br/>
									<a href="#" className=" highlight small-text bold letter-spacing-033 topmargin_5 inline-block">Status</a>
									<hr className="divider-size_2_30 topmargin_5 bottommargin_5"/>
									<span className="small-text margin_0">
										<time dateTime="2016-08-01T15:05:23+00:00" className="entry-date">
											25.06.2016
										</time>
										By Admin
									</span>

									<p className="grey bottommargin_0 topmargin_15">Pig picanha filet mignon mollit alcatra tempor ut ipsum jerky chicken sint fugiat rump elit.</p>

								</div>
                {//<!-- .item-content.entry-content -->
                }
							</article>
              {//<!-- .post -->
              }

							<article className="vertical-item post format-standard muted_background without_media">

								<div className="item-content entry-content">
									<header className="entry-header">

										<span className="small-text margin_0 pull-left">
											<time dateTime="2016-08-01T15:05:23+00:00" className="entry-date">
												25.06.2016
											</time>
											By Admin
										</span>

										<a href="#" className=" highlight pull-right small-text bold letter-spacing-033">Link</a>

										<div className="clearfix"></div>

										<h4 className="fontsize_30 topmargin_15 bottommargin_0 highlight">
											<a href="blog-single-video-left.html" rel="bookmark">Nulla short ribs jerky spare</a>
										</h4>

									</header>
                  {//<!-- .entry-header -->
                  }

								</div>
              {//	<!-- .item-content.entry-content -->
              }
							</article>
              {//<!-- .post -->
              }

							<article className="vertical-item post format-standard muted_background">

								<div className="item-media entry-thumbnail">
									<div id="post-slider" className="carousel slide">
                    {//<!-- Indicators -->
                    }
									

                    {//<!-- Wrapper for slides -->
                    }
                    <Carousel className="carousel-inner" showArrows={false} showThumbs={false}>
											<div className="item active">
												<img src="/images/gallery/15.jpg" alt=""/>
											</div>
											<div className="item">
												<img src="/images/gallery/16.jpg" alt=""/>
											</div>
											<div className="item">
												<img src="/images/gallery/17.jpg" alt=""/>
											</div>
                      </Carousel>
										</div>

									
								</div>

								<div className="item-content entry-content">
									<header className="entry-header">

										<span className="small-text margin_0 pull-left">
											<time dateTime="2016-08-01T15:05:23+00:00" className="entry-date">
												25.06.2016
											</time>
											By Admin
										</span>

										<a href="#" className="highlight pull-right small-text bold letter-spacing-033">Rejuvenation</a>

										<div className="clearfix"></div>

										<h4 className="fontsize_30 topmargin_15 bottommargin_0 highlight">
											<a href="blog-single-video-left.html" rel="bookmark">Landjaeger jowl ut esse filet mignon</a>
										</h4>

									</header>
                  {//<!-- .entry-header -->
                  }

								</div>
                {//<!-- .item-content.entry-content -->
                }
							</article>
              {//<!-- .post -->
              }

							<article className="ds vertical-item post format-quote after_cover">

								<div className="item-content entry-content">

									<span className="small-text margin_0 pull-left">
										<time dateTime="2016-08-01T15:05:23+00:00" className="entry-date">
											25.06.2016
										</time>
										By Admin
									</span>

									<a href="#" className="highlight pull-right small-text bold letter-spacing-033">Rejuvenation</a>

									<div className="clearfix"></div>

									<p className="topmargin_15 bottommargin_25 lusitana fontsize_20 grey text-uppercase">
										Boudin qui lorem sed t-bone leberkas beef ad derloin Ut aute enim biltong filet mignon voluptate data pastrami drumstick, in aute ex landjaeger in.
									</p>

									<h6 className="highlight bottommargin_0">Alejandro Barnett</h6>

								</div>
                {//<!-- .item-content.entry-content -->
                }
							</article>
              {//<!-- .post -->
              }

							<article className="vertical-item post format-chat muted_background">

								<div className="item-media entry-thumbnail">
									<img src="/images/gallery/18.jpg" alt=""/>
									<div className="media-links">
										<a className="abs-link" title="" href="blog-single-left.html"></a>
									</div>
								</div>

								<div className="item-content entry-content">
									<header className="entry-header">

										<span className="small-text margin_0 pull-left">
											<time dateTime="2016-08-01T15:05:23+00:00" className="entry-date">
												25.06.2016
											</time>
											By Admin
										</span>

										<a href="#" className=" highlight pull-right small-text bold letter-spacing-033">Rejuvenation</a>

										<div className="clearfix"></div>

										<h4 className="fontsize_30 topmargin_15 bottommargin_15 highlight">
											<a href="blog-single-video-left.html" rel="bookmark">Nostrud pariatur fatback</a>
										</h4>

									</header>
                  {//<!-- .entry-header -->
                  }

									<ol className="comment-list topmargin_-5 no-bullets">
										<li className="comment depth-1">
											<article className="comment-body">
												<p>
													<span className="comment-author">Sam: </span>Excepteur cow pork chop jerky capicola proident boudin shankle flank shank veniam.</p>
											</article>
											<ol className="children with_background depth-2 no-bullets">
												<li className="comment">
													<p>
														<span className="comment-author">George: </span>T-bone dolor occaecat biltong, corned beef short ribs swine deserunt onsequat.</p>
												</li>
											</ol>
										</li>
										<li className="comment depth-1">
											<article className="comment-body">
												<p>
													<span className="comment-author">Sam: </span>Id aliquip bacon nulla, irure magna ad cow picanha ut landjaeger. Shank anim</p>
											</article>
											<ol className="children with_background depth-2 no-bullets">
												<li className="comment">
													<p>
														<span className="comment-author">George: </span>Officia ground round pastrami laborum. Pig dolore cupim eu, occaecat ham qua pariatur doner nostrud. Ex reprehenderit filet mignon pork belly in.</p>
												</li>
											</ol>
										</li>
									</ol>

								</div>
                {//<!-- .item-content.entry-content -->
                }
							</article>
              {//<!-- .post -->
              }

							<article className="vertical-item post format-standard muted_background">

								<div className="item-content entry-content">
									<header className="entry-header">

										<span className="small-text margin_0 pull-left">
											<time dateTime="2016-08-01T15:05:23+00:00" className="entry-date">
												25.06.2016
											</time>
											By Admin
										</span>

										<a href="#" className=" highlight pull-right small-text bold letter-spacing-033">refreshing</a>

										<div className="clearfix"></div>

										<h4 className="fontsize_30 topmargin_15 bottommargin_15 highlight">
											<a href="blog-single-video-left.html" rel="bookmark">Brisket turducken beef dolore</a>
										</h4>

									</header>
                  {//<!-- .entry-header -->
                  }

									<p>Enim sunt rump sirloin ribeye corned beef veniam nulla. Turducken sausage prosciutto, commodo pork loin aute velit beef ribs lorem ullamco nisi boudin ball tip. Aliqua ground round eiusmod irure leberkas occaecat. Velit irure meatball exercitation.
										Esse pastrami proident in. Consectetur picanha dolore roident shank capicola. Biltong et short ribs do, ball tip cillum corned beef incididunt.</p>

								</div>
                {//<!-- .item-content.entry-content -->
                }
							</article>
              {//<!-- .post -->
              }


						</div>
						{// <!--eof .col-sm-8 (main content)-->
            }

            {//<!-- sidebar -->
            }
						<aside className="col-sm-5 col-md-4 col-lg-4">

							<div className="widget widget_text">

								<h3 className="widget-title highlight">Get in touch</h3>
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

							<div className="widget widget_mailchimp">

								<h3 className="widget-title">Newsletter</h3>

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

							<div className="widget widget_flickr">

								<h3 className="widget-title">Flickr Widget</h3>
								<ul id="flickr"></ul>
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

							<div className="with_goriz_padding">
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
							</div>

							<div className="widget widget_recent_entries">
								<h3 className="widget-title">Recent Posts</h3>
								<ul className="darklinks">
									<li className="media">
										<a className="media-left media-middle" href="blog-single-right.html">
											<img className="media-object" src="/images/recent_post1.jpg" alt=""/>
										</a>
										<div className="media-body media-middle">
											<h6 className="margin_0">
												<a href="#">Beef ribs fugiat flank rump ea aute nulla enderit</a>
											</h6>
											<time dateTime="2016-09-03T15:05:23+00:00" className="entry-date highlight2 small-text bold">23.03.2016</time>
										</div>
									</li>
									<li className="media">
										<a className="media-left media-middle" href="blog-single-right.html">
											<img className="media-object" src="/images/recent_post2.jpg" alt=""/>
										</a>
										<div className="media-body media-middle">
											<h6 className="margin_0">
												<a href="#">Kevin chicken reprehenderit beef deserunt Velit irure</a>
											</h6>
											<time dateTime="2016-09-03T15:05:23+00:00" className="entry-date highlight2 small-text bold">23.03.2016</time>
										</div>
									</li>
									<li className="media">
										<a className="media-left media-middle" href="blog-single-right.html">
											<img className="media-object" src="/images/recent_post3.jpg" alt=""/>
										</a>
										<div className="media-body media-middle">
											<h6 className="margin_0">
												<a href="#">Do chicken est shoulder anim shankle enim beef ribs</a>
											</h6>
											<time dateTime="2016-09-03T15:05:23+00:00" className="entry-date highlight2 small-text bold">23.03.2016</time>
										</div>
									</li>
								</ul>
							</div>


							<div className="with_goriz_padding">
								<div className="widget widget_archive">

									<h3 className="widget-title">Archive</h3>
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
							</div>


						</aside>
            {//<!-- eof aside sidebar -->
            }



						</div>
      {//<!--eof .col-sm-8 (main content)-->
      }


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
        {/*eof #box_wrapper*/}  
      </div>
      {/*eof #canvas */} 

      {/*<script src="js/compressed.js"></script>
      <script src="js/main.js"></script>*/}




</div>
    );
  }
}

export default App;
