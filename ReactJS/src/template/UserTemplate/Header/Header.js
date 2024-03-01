import React from "react";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="headerarea headerarea__2  header__sticky header__area">
        <div className="container desktop__menu__wrapper">
          <div className="row">
            <div className="col-xl-2 col-lg-3 col-md-6">
              <div className="headerarea__left">
                <div className="headerarea__left__logo">
                  <NavLink to="/">
                    <img loading="lazy" src="img/logo/logo_1.png" alt="logo" />
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-3 main_menu_wrap">
              <div className="headerarea__main__menu">
                <nav className="d-flex align-items-center justify-content-center">
                  <ul>
                    <li className="mega__menu position-static">
                      <a
                        className="headerarea__has__dropdown text-decoration-none"
                        href="course.html"
                      >
                        Courses
                        <i className="icofont-rounded-down" />{" "}
                      </a>
                      <div className="headerarea__submenu mega__menu__wrapper">
                        <div className="row">
                          <div className="col-4 mega__menu__single__wrap">
                            <h4 className="mega__menu__title">
                              <a href="#">Get Started 1 </a>
                            </h4>
                            <ul className="mega__menu__item">
                              <li>
                                {/*  */}
                                <NavLink to="/course">
                                  Grid{" "}
                                  <span className="mega__menu__label">
                                    All Courses
                                  </span>
                                </NavLink>
                              </li>
                              
                              <li>
                                <NavLink to="course-list.html">Course List</NavLink>
                              </li>

                              <li>
                                <NavLink to="course-details.html">Course Details</NavLink>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="col-4 mega__menu__single__wrap">
                            <h4 className="mega__menu__title">
                              <a href="#">Get Started 2</a>
                            </h4>
                            <ul className="mega__menu__item">
                              <li>
                                <a href="dashboard/become-an-instructor.html">
                                  Become An Instructor
                                </a>
                              </li>
                              <li>
                                <a href="dashboard/create-course.html">
                                  Create Course{" "}
                                  <span className="mega__menu__label">
                                    Career
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="instructor.html">Instructor</a>
                              </li>
                              
                              <li>
                                <a href="instructor-details.html">
                                  Instructor Details
                                </a>
                              </li>
                              <li>
                                <a href="lesson.html">
                                  Course Lesson
                                  <span className="mega__menu__label new">
                                    New
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-4 mega__menu__single__wrap">
                            <div className="mega__menu__img">
                              <NavLink to="#">
                                <img
                                  loading="lazy"
                                  src="img/mega/mega_menu_1.png"
                                  alt="Mega Menu"
                                />
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <NavLink
                        className="headerarea__has__dropdown text-decoration-none"
                        to="ecommerce/shop.html"
                      >
                        Pages
                        <i className="icofont-rounded-down" />
                      </NavLink>
                      <ul className="headerarea__submenu">
                        <li>
                          <NavLink to="ecommerce/shop.html">
                            About
                            <span className="mega__menu__label">
                              Sale Everything
                            </span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="ecommerce/product-details.html">
                            blog
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="ecommerce/cart.html">Blog Detail</NavLink>
                        </li>
                        
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        className="headerarea__has__dropdown text-decoration-none"
                        to="ecommerce/shop.html"
                      >
                        eCommerce
                        <i className="icofont-rounded-down" />
                      </NavLink>
                      <ul className="headerarea__submenu">
                        <li>
                          <NavLink to="ecommerce/shop.html">
                            Shop
                            <span className="mega__menu__label">
                              Online Store
                            </span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="ecommerce/product-details.html">
                            Product Details
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="ecommerce/cart.html">Cart</NavLink>
                        </li>
                        <li>
                          <NavLink to="ecommerce/checkout.html">Checkout</NavLink>
                        </li>
                        <li>
                          <NavLink to="ecommerce/wishlist.html">Wishlist</NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3">
              <div className="headerarea__2__input">
                <input type="text" placeholder="Search Course" />
                <i className="icofont-search-1" />
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-12">
              <div className="headerarea__right">
                <div className="d-flex">
                  <div className="header__cart">
                    <NavLink to = "/" className="text-decoration-none">
                      {" "}
                      <i className="icofont-cart-alt" />
                    </NavLink>
                    <div className="header__right__dropdown__wrapper">
                      <div className="header__right__dropdown__inner">
                        <div className="single__header__right__dropdown">
                          <div className="header__right__dropdown__img">
                            <NavLink to = "/">
                              <img
                                loading="lazy"
                                src="img/grid/cart1.jpg"
                                alt="photo"
                              />
                            </NavLink>
                          </div>
                          <div className="header__right__dropdown__content">
                            <NavLink to="shop-product.html">Web Directory</NavLink>
                            <p>
                              1 x <span className="price">$ 80.00</span>
                            </p>
                          </div>
                          <div className="header__right__dropdown__close">
                            <NavLink to="/">
                              <i className="icofont-close-line" />
                            </NavLink>
                          </div>
                        </div>
                        <div className="single__header__right__dropdown">
                          <div className="header__right__dropdown__img">
                            <NavLink to="/">
                              <img
                                loading="lazy"
                                src="img/grid/cart2.jpg"
                                alt="photo"
                              />
                            </NavLink>
                          </div>
                          <div className="header__right__dropdown__content">
                            <NavLink to="shop-product.html">Design Minois</NavLink>
                            <p>
                              1 x <span className="price">$ 60.00</span>
                            </p>
                          </div>
                          <div className="header__right__dropdown__close">
                            <NavLink to="/">
                              <i className="icofont-close-line" />
                            </NavLink>
                          </div>
                        </div>
                        <div className="single__header__right__dropdown">
                          <div className="header__right__dropdown__img">
                            <NavLink to="/">
                              <img
                                loading="lazy"
                                src="img/grid/cart3.jpg"
                                alt="photo"
                              />
                            </NavLink>
                          </div>
                          <div className="header__right__dropdown__content">
                            <NavLink to="shop-product.html">Crash Course</NavLink>
                            <p>
                              1 x <span className="price">$ 70.00</span>
                            </p>
                          </div>
                          <div className="header__right__dropdown__close">
                            <NavLink to="/">
                              <i className="icofont-close-line" />
                            </NavLink>
                          </div>
                        </div>
                      </div>
                      <p className="dropdown__price">
                        Total: <span>$1,100.00</span>
                      </p>
                      <div className="header__right__dropdown__button">
                        <NavLink to="ecommerce/cart.html" className="white__color">
                          View Cart
                        </NavLink>
                        <NavLink
                          to="ecommerce/checkout.html"
                          className="blue__color"
                        >
                          Checkout
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="headerarea__login">
                    <NavLink to="/sign-in">
                      <i className="icofont-user-alt-5" />
                    </NavLink>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mob_menu_wrapper">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="mobile-logo">
                <a className="logo__dark" href="#">
                  <img loading="lazy" src="img/logo/logo_1.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-6">
              <div className="header-right-wrap">
                <div className="headerarea__right">
                  <div className="header__cart">
                    <a href="#">
                      {" "}
                      <i className="icofont-cart-alt" />
                    </a>
                    <div className="header__right__dropdown__wrapper">
                      <div className="header__right__dropdown__inner">
                        <div className="single__header__right__dropdown">
                          <div className="header__right__dropdown__img">
                            <a href="#">
                              <img
                                loading="lazy"
                                src="img/grid/cart1.jpg"
                                alt="photo"
                              />
                            </a>
                          </div>
                          <div className="header__right__dropdown__content">
                            <a href="shop-product.html">Web Directory</a>
                            <p>
                              1 x <span className="price">$ 80.00</span>
                            </p>
                          </div>
                          <div className="header__right__dropdown__close">
                            <a href="#">
                              <i className="icofont-close-line" />
                            </a>
                          </div>
                        </div>
                        <div className="single__header__right__dropdown">
                          <div className="header__right__dropdown__img">
                            <a href="#">
                              <img
                                loading="lazy"
                                src="img/grid/cart2.jpg"
                                alt="photo"
                              />
                            </a>
                          </div>
                          <div className="header__right__dropdown__content">
                            <a href="shop-product.html">Design Minois</a>
                            <p>
                              1 x <span className="price">$ 60.00</span>
                            </p>
                          </div>
                          <div className="header__right__dropdown__close">
                            <a href="#">
                              <i className="icofont-close-line" />
                            </a>
                          </div>
                        </div>
                        <div className="single__header__right__dropdown">
                          <div className="header__right__dropdown__img">
                            <a href="#">
                              <img
                                loading="lazy"
                                src="img/grid/cart3.jpg"
                                alt="photo"
                              />
                            </a>
                          </div>
                          <div className="header__right__dropdown__content">
                            <a href="shop-product.html">Crash Course</a>
                            <p>
                              1 x <span className="price">$ 70.00</span>
                            </p>
                          </div>
                          <div className="header__right__dropdown__close">
                            <a href="#">
                              <i className="icofont-close-line" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <p className="dropdown__price">
                        Total: <span>$1,100.00</span>
                      </p>
                      <div className="header__right__dropdown__button">
                        <a href="#" className="white__color">
                          VIEW CART
                        </a>
                        <a href="#" className="blue__color">
                          CHECKOUT
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mobile-off-canvas">
                  <a className="mobile-aside-button" href="#">
                    <i className="icofont-navigation-menu" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
