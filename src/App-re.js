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
      qty: 1,
      sh: 1,
      cN: ["active", 0, 0, 0]
    };

  }

  

changeNumberPlus = () =>{
  this.setState ({qty: this.state.qty + 1});
}
changeNumberMinus = () =>{
  if (this.state.qty >1){
    this.setState ({qty: this.state.qty - 1})
  }
}

showItem = () =>{
  switch(this.state.sh) {
    case 1:
    default: {
   
    return (
      <div className="tab-pane fade in active">

                        <p>Duis autem veiudolorn hendrerit vulputate velit esse molestie. consequat, vel illum dolore eu feugiat nulla facilisis at vereros accumsan etiusto dignissim:</p>

                        <ul className="list1 darklinks">
                          <li>
                            <a href="services.html">Lorem ipsum dolor sit amet</a>
                          </li>
                          <li>
                            <a href="services.html">Sint animi non ut sed</a>
                          </li>
                          <li>
                            <a href="services.html">Eaque blanditiis nemo</a>
                          </li>
                          <li>
                            <a href="services.html">Amet, consectetur adipisicing</a>
                          </li>
                          <li>
                            <a href="services.html">Blanditiis nemo quaerat</a>
                          </li>
                        </ul>

                        <div className="well">
                          <strong className="highlight">Warning!</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                      </div>
    )}
    case 2: 
      return (
      <div className="tab-pane fade in active">

      <table className="table table-striped topmargin_30">

        <tr>
          <th className="grey">Product title:</th>
          <td>Product Name</td>
        </tr>

        <tr>
          <th className="grey">Item SKU:</th>
          <td>5552281538</td>
        </tr>

        <tr>
          <th className="grey">Brand:</th>
          <td>
            <a href="#">Brand Name</a>
          </td>
        </tr>

        <tr>
          <th className="grey">Style:</th>
          <td>SuperStyle</td>
        </tr>

        <tr>
          <th className="grey">Size:</th>
          <td>Middle</td>
        </tr>

        <tr>
          <th className="grey">Color:</th>
          <td>Black</td>
        </tr>

        <tr>
          <th className="grey">Targeted Group:</th>
          <td>All</td>
        </tr>

      </table>

    </div>
    )
    case 3: return (
      <div className="tab-pane fade in active">

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
            {/*.comment-body */}

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
                {/*.comment-body*/} 

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
                    {/*.comment-body */}
                  </li>
                  {/*#comment-##*/} 
                </ol>
                {/*.children*/} 
              </li>
              {/*#comment-##*/} 
            </ol>
            {/*.children */}
          </li>
         {/*#comment-## */}

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
            {/*.comment-body*/} 
          </li>
          {/*#comment-##*/}  

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
            {/*.comment-body*/} 
          </li>
          {/*#comment-## */}
        </ol>
        {/*.comment-list*/}  
      </div>
      {/*#comments */} 

    </div>
    )
    case 4: return (
      <div className="tab-pane fade in active">

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

    </div>

    )
  }
}

  render() {
    return (
      <div>
        <div className="bg-danger text-center">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/" className="highlight">upgrade your browser</a> to improve your experience.</div>

      <div className="preloader">
        <div className="preloader_image"></div>
      </div>


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
                      <a href="#">Shop</a>
                    </li>
                    <li className="active">Single Product</li>
                  </ol>
                </div>
                <div className="col-sm-4 text-center">
                  <h1 className="highlight bold">Single Product</h1>
                </div>
                <div className="col-sm-4 hidden-xs"></div>
              </div>
            </div>
          </section>

          <section className="ls section_padding_top_100 section_padding_bottom_75">
            <div className="container">
              <div className="row">

                <div className="col-sm-7 col-md-8 col-lg-8">


                  <div itemscope="" itemtype="http://schema.org/Product" className="product type-product row">

                    <div className="images col-sm-6">

                      <a href="/images/shop/01.jpg" itemprop="image" className="main-image zoom" title="" data-gal="prettyPhoto[product-gallery]">

                        <span className="onsale">Sale</span>

                        <span className="newproduct">New</span>

                        <img src="/images/shop/01.jpg" className="attachment-shop_single wp-post-image" alt="" title=""/>

                      </a>

                      <div id="product-thumbnails" className="owl-carousel thumbnails product-thumbnails owl-theme" data-loop="true" data-center="true" data-margin="10" data-nav="false" data-dots="true" data-items="3" data-responsive-lg="3" data-responsive-md="3" data-responsive-sm="2"
                              data-responsive-xs="2">

                        <a href="images/shop/02.jpg" className="zoom first" title="" data-gal="prettyPhoto[product-gallery]">
                          <img src="/images/shop/02.jpg" clclassNameass="attachment-shop_thumbnail" alt=""/>
                        </a>

                        <a href="/images/shop/03.jpg" className="zoom first" title="" data-gal="prettyPhoto[product-gallery]">
                          <img src="/images/shop/03.jpg" className="attachment-shop_thumbnail" alt=""/>
                        </a>

                        <a href="/images/shop/04.jpg" className="zoom first" title="" data-gal="prettyPhoto[product-gallery]">
                          <img src="/images/shop/04.jpg" className="attachment-shop_thumbnail" alt=""/>
                        </a>

                        <a href="/images/shop/05.jpg" className="zoom first" title="" data-gal="prettyPhoto[product-gallery]">
                          <img src="/images/shop/05.jpg" className="attachment-shop_thumbnail" alt=""/>
                        </a>

                      </div>

                      <div className="product-icons row">
                        <div className="col-xs-4">
                          <div className="teaser text-center">
                            <div className="teaser_icon main_bg_color fontsize_20">
                              <i className="rt-icon2-heart"></i>
                            </div>
                            <h6>
                              <a href="#">Whishlist</a>
                            </h6>
                          </div>
                        </div>

                        <div className="col-xs-4">
                          <div className="teaser text-center">
                            <div className="teaser_icon main_bg_color fontsize_20">
                              <i className="rt-icon2-pen"></i>
                            </div>
                            <h6>
                              <a href="#">Compare</a>
                            </h6>
                          </div>
                        </div>

                        <div className="col-xs-4">
                          <div className="teaser text-center">
                            <div className="teaser_icon main_bg_color fontsize_20">
                              <i className="rt-icon2-paperplane"></i>
                            </div>
                            <h6>
                              <a href="#">Share</a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*eof .images*/} 

                    <div className="summary entry-summary col-sm-6">

                      <h3 itemprop="name" className="fontsize_30 highlight topmargin_0">Item Title</h3>

                      <div className="product-rating" itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating">

                        <div className="star-rating" title="Rated 4.50 out of 5">
                          <span style={{ width : '90%' }}>
                            <strong className="rating">4.50</strong> out of 5
                          </span>
                        </div>

                        <span className="review-links pull-right darklinks">
                          <a href="#comments" className="review-link" rel="nofollow">
                            <span itemprop="reviewCount" className="count">3</span> review(s)
                          </a>

                          <span className="grey"> | </span>

                          <a href="#respond" className="review-link" rel="nofollow">
                            Add Your Review
                          </a>
                        </span>

                      </div>

                      <div className="product_meta">
                        <span className="posted_in">
                          <span className="grey">Categories:</span>
                          <span className="categories-links">
                            <a rel="category" href="blog-right.html" className="theme_button small_button color1">Categ 1</a>
                            <a rel="category" href="blog-right.html" className="theme_button small_button color1">Categ 2</a>
                          </span>
                        </span>
                      </div>

                      <div itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">

                        <div itemprop="description">
                          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        </div>

                        <ul className="list1 no-bullets">
                          <li>
                            <p className="price">
                              <del>
                                <span className="amount">$339.00</span>
                              </del>
                              <ins>
                                <span className="amount">$299.00</span>
                              </ins>
                            </p>

                            <meta itemprop="price" content="2"/>

                            <meta itemprop="priceCurrency" content="USD"/>

                            <link itemprop="availability" href="http://schema.org/InStock"/>

                            <p className="stock">
                              <span className="grey">Availability:</span> In Stock</p>
                            {/*<p className="stock out-of-stock"><span className="grey">Availability:</span> <span className="highlight">Out Of Stock</span></p>*/}

                            <div className="email-to darklinks">
                              <a href="#" className="email-to-link" rel="nofollow">
                                Email to a Friend
                              </a>
                            </div>
                          </li>
                        </ul>

                        <form className="cart" method="post" enctype="multipart/form-data">
                          <div className="form-group">
                            <label for="product_size" className="grey">Size</label>
                            <span className="red">*</span>
                            <select className="form-control" id="product_size">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>

                          <span className="product-option-name grey">Color</span>
                          <span className="red">*</span>

                          <div className="radio">
                            <label>
                              <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked/> Grey
                            </label>
                          </div>
                          <div className="radio">
                            <label>
                              <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/> Magenta
                            </label>
                          </div>

                          <span className="product-option-name grey">Other Options</span>

                          <div className="checkbox">
                            <label>
                              <input type="checkbox" value=""/> Option one
                            </label>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" value=""/> Option two
                            </label>
                          </div>


                          <span className="product-option-name grey">Select Delivery Date</span>

                          <div className="form-inline">
                            <div className="form-group">
                              <select className="form-control">
                                <option value="" selected="">-</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                              </select>
                            </div>

                            <div className="form-group">
                              <select className="form-control">
                                <option value="" selected="">-</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                              </select>
                            </div>

                            <div className="form-group">
                              <select className="form-control">
                                <option value="" selected="">-</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                              </select>
                            </div>
                          </div>

                          <span className="product-option-name grey">Additional Comment</span>

                          <textarea className="form-control" rows="3"></textarea>
                          <p>Maximum number of characters:
                            <span id="char_left">500</span>
                          </p>

                          <div className="pull-right">
                            <a href="#" rel="nofollow" className="theme_button color1 add_to_cart_button">
                              <i className="rt-icon2-basket"></i>
                              Add to cart
                            </a>
                          </div>

                          <label className="grey" for="product_quantity">Qty:</label>

                          <span className="quantity form-group">
                            <input type="button" value="-" className="minus" onClick={()=>{this.changeNumberMinus()}}/>
                            <input type="number" step="1" min="0" name="product_quantity" value={this.state.qty} title="Qty" id="product_quantity" className="form-control "/>
                            <input type="button" value="+" className="plus" onClick={()=>{this.changeNumberPlus()}}/>
                          </span>

                        </form>
                      </div>


                    </div>
                    {/*.summary.col-*/} 

                  </div>
                  {/*.product.row*/} 


                  {/*Nav tabs*/}  
                  <ul className="nav nav-tabs" role="tablist">
                    <li className ={this.state.cN[0]} onClick={()=> {
                      this.setState({sh: 1});
                      this.setState({cN: ["active", 0, 0, 0]});
                      }}>
                      <a href="#details_tab" role="tab" data-toggle="tab">Details</a>
                    </li>
                    <li className ={this.state.cN[1]} onClick={()=> {this.setState({sh: 2});
                      this.setState({cN: [0, "active" , 0, 0]});
                      }}>
                      <a href="#additional_tab" role="tab" data-toggle="tab">Additional</a>
                    </li>
                    <li className ={this.state.cN[2]} onClick={()=> {this.setState({sh: 3})
                      this.setState({cN: [0,  0, "active", 0]});
                      }}>
                      <a href="#reviews_tab" role="tab" data-toggle="tab">Reviews</a>
                    </li>
                    <li className ={this.state.cN[3]} onClick={()=> {this.setState({sh: 4})
                      this.setState({cN: [0,  0, 0, "active"]});
                      }}>
                      <a href="#custom_tab" role="tab" data-toggle="tab">Custom</a>
                    </li>
                  </ul>

                  {/*Tab panes*/} 
                  <div className="tab-content top-color-border bottommargin_30">
                    {this.showItem()}
                  </div>
                  {/*eof .tab-content*/} 


                </div>
                {/*eof .col-sm-8 (main content)*/}


                {/*sidebar*/}  
                <aside className="col-sm-5 col-md-4 col-lg-4">


                  <div className="widget widget_search">
                    <h3 className="widget-title">Search</h3>
                    <form method="get" className="searchform form-inline" action="/">
                      <div className="form-group">
                        <label className="sr-only" for="page_search">Search for:</label>
                        <input type="text" id="page_search" value="" name="search" className="form-control" placeholder="Search to site"/>
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
                      {/*price slider*/} 
                      <form method="get" action="/" className="form-inline">
                                 
                      
                        
                        <div className="form-group">
                          <label className="grey" for="slider_price_min">From:</label>
                          <input type="number" className="slider_price_min form-control text-center" id="slider_price_min" readonly />
                        </div>

                        <div className="form-group">
                          <label className="grey" for="slider_price_max"> to:</label>
                          <input type="number" className="slider_price_max form-control text-center" id="slider_price_max"  readonly/>
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
                            <span style={{ width:'90%' }}>
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
                            <span style={{ width:'70%' }}>
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
                            <span style= {{ width:'50%' }}>
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
                        <a href="shop.html" style = {{ backgroundColor: "#cacaca"}} >White</a>
                        <span className="count grey">(12)</span>
                      </li>
                      <li>
                        <a href="shop.html" style = {{ backgroundColor: "#67676a" }}>Grey</a>
                        <span className="count grey">(52)</span>
                      </li>
                      <li>
                        <a href="shop.html" style = {{ backgroundColor: "#1b1b19" }}>Darkgrey</a>
                        <span className="count grey">(31)</span>
                      </li>
                      <li>
                        <a href="shop.html" style = {{ backgroundColor: "#255a8b" }}>Black</a>
                        <span className="count grey">(24)</span>
                      </li>
                      <li>
                        <a href="shop.html" style = {{ backgroundColor: "#0b8abf" }}>Darkblue</a>
                        <span className="count grey">(16)</span>
                      </li>
                      <li>
                        <a href="shop.html" style = {{ backgroundColor: "#bc1624" }}>Red</a>
                        <span className="count grey">(5)</span>
                      </li>
                      <li>
                        <a href="shop.html" style = {{ backgroundColor: "#4b0082"}}>Purpule</a>
                        <span className="count grey">(8)</span>
                      </li>
                    </ul>
                  </div>


                </aside>
                {/*eof aside sidebar*/}


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
