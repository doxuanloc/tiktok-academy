import React from "react";
import Pagination from "../Common/Pagination";
import ShopSidebar from "../Shop/ShopSidebar";
import Link from "next/link";

const CourseContent = () => {
  return (
    <section className="course-content-area pb-90">
      <div className="container">
        <div className="row mb-10">
          <div className="col-xl-3 col-lg-4 col-md-12">
            <ShopSidebar />
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="course-wrapper-2 mb-30">
                  <div className="student-course-img">
                    <img src="assets/img/logo/tiktok.jpg" alt="courde-img" />
                  </div>
                  <div className="course-cart">
                    <div className="course-info-wrapper">
                      <div className="cart-info-body">
                        <Link href="/course">
                          <a className="category-color category-color-1">
                            Development
                          </a>
                        </Link>
                        <Link href="/course-details">
                          <a>
                            <h3>
                              WordPress Development Course for Plugins and
                              Themes
                            </h3>
                          </a>
                        </Link>
                        <div className="cart-lavel">
                          <h5>
                            Level : <span>Beginner</span>
                          </h5>
                          <p>
                            Knowledge is power. Information is liberating.
                            Education is the premise of progress, in every
                            society, in every family
                          </p>
                        </div>
                        <div className="info-cart-text">
                          <ul>
                            <li>
                              <i className="far fa-check"></i>Scratch to HTML
                            </li>
                            <li>
                              <i className="far fa-check"></i>Learn how to code
                              in Python
                            </li>
                            <li>
                              <i className="far fa-check"></i>Unlimited backend
                              database creation
                            </li>
                            <li>
                              <i className="far fa-check"></i>Adobe XD Tutorials
                            </li>
                          </ul>
                        </div>
                        <div className="course-action">
                          <Link href="/course-details">
                            <a className="view-details-btn">View Details</a>
                          </Link>
                          <button className="wishlist-btn">
                            <i className="flaticon-like"></i>
                          </button>
                          <Link href="/course-details">
                            <a className="c-share-btn">
                              <i className="flaticon-previous"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="student-course-footer">
                    <div className="student-course-linkter">
                      <div className="course-lessons">
                        <i className="fal fa-tv"></i>
                        <span className="ms-2">12 Lessons</span>
                      </div>
                      <div className="portfolio-price">
                        <span>$12.57</span>
                        <del>$24.50</del>
                      </div>
                    </div>
                    <div className="student-course-text">
                      <h3>
                        <Link href="/course-details">
                          <a>
                            WordPress Development Course for Plugins and Themes
                          </a>
                        </Link>
                      </h3>
                    </div>
                    <div className="portfolio-user">
                      <div className="user-icon">
                        <Link href="/instructor-profile">
                          <a>
                            <i className="fas fa-user"></i>Bravo
                          </a>
                        </Link>
                      </div>
                      <div className="course-icon">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fal fa-star"></i>
                        <span>(25)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="course-wrapper-2 mb-30">
                  <div className="student-course-img">
                    <img
                      src="assets/img/course/course-02.jpg"
                      alt="course-img"
                    />
                  </div>
                  <div className="course-cart">
                    <div className="course-info-wrapper">
                      <div className="cart-info-body">
                        <Link href="/course">
                          <a className="category-color category-color-3">
                            Business
                          </a>
                        </Link>
                        <Link href="/course-details">
                          <a>
                            <h3>
                              Write Better Emails: Tactics for Smarter Team
                              Communication
                            </h3>
                          </a>
                        </Link>
                        <div className="cart-lavel">
                          <h5>
                            Level : <span>Beginner</span>
                          </h5>
                          <p>
                            Knowledge is power. Information is liberating.
                            Education is the premise of progress, in every
                            society, in every family
                          </p>
                        </div>
                        <div className="info-cart-text">
                          <ul>
                            <li>
                              <i className="far fa-check"></i>Scratch to HTML
                            </li>
                            <li>
                              <i className="far fa-check"></i>Learn how to code
                              in Python
                            </li>
                            <li>
                              <i className="far fa-check"></i>Unlimited backend
                              database creation
                            </li>
                            <li>
                              <i className="far fa-check"></i>Adobe XD Tutorials
                            </li>
                          </ul>
                        </div>
                        <div className="course-action">
                          <Link href="/course-details">
                            <a className="view-details-btn">View Details</a>
                          </Link>
                          <button className="wishlist-btn">
                            <i className="flaticon-like"></i>
                          </button>
                          <Link href="/course-details">
                            <a className="c-share-btn">
                              <i className="flaticon-previous"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="student-course-footer">
                    <div className="student-course-linkter">
                      <div className="course-lessons">
                        <i className="fal fa-tv"></i>
                        <span className="ms-2">12 Lessons</span>
                      </div>
                      <div className="portfolio-price">
                        <span>FREE</span>
                      </div>
                    </div>
                    <div className="student-course-text">
                      <h3>
                        <Link href="/course-details">
                          <a>
                            Write Better Emails: Tactics for Smarter Team
                            Communication
                          </a>
                        </Link>
                      </h3>
                    </div>
                    <div className="portfolio-user">
                      <div className="user-icon">
                        <Link href="/instructor-profile">
                          <a>
                            <i className="fas fa-user"></i>Prince
                          </a>
                        </Link>
                      </div>
                      <div className="course-icon">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fal fa-star"></i>
                        <span>(25)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="course-wrapper-2 mb-30">
                  <div className="student-course-img">
                    <img
                      src="assets/img/course/course-03.jpg"
                      alt="course-img"
                    />
                  </div>
                  <div className="course-cart">
                    <div className="course-info-wrapper">
                      <div className="cart-info-body">
                        <Link href="/course">
                          <a className="category-color category-color-1">
                            Development
                          </a>
                        </Link>
                        <Link href="/course-details">
                          <a>
                            <h3>
                              Data Science Real-Life Data Science Exercises
                              Included
                            </h3>
                          </a>
                        </Link>
                        <div className="cart-lavel">
                          <h5>
                            Level : <span>Beginner</span>
                          </h5>
                          <p>
                            Knowledge is power. Information is liberating.
                            Education is the premise of progress, in every
                            society, in every family
                          </p>
                        </div>
                        <div className="info-cart-text">
                          <ul>
                            <li>
                              <i className="far fa-check"></i>Scratch to HTML
                            </li>
                            <li>
                              <i className="far fa-check"></i>Learn how to code
                              in Python
                            </li>
                            <li>
                              <i className="far fa-check"></i>Unlimited backend
                              database creation
                            </li>
                            <li>
                              <i className="far fa-check"></i>Adobe XD Tutorials
                            </li>
                          </ul>
                        </div>
                        <div className="course-action">
                          <Link href="/course-details">
                            <a className="view-details-btn">View Details</a>
                          </Link>
                          <button className="wishlist-btn">
                            <i className="flaticon-like"></i>
                          </button>
                          <Link href="/course-details">
                            <a className="c-share-btn">
                              <i className="flaticon-previous"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="student-course-footer">
                    <div className="student-course-linkter">
                      <div className="course-lessons">
                        <i className="fal fa-tv"></i>
                        <span className="ms-2">12 Lessons</span>
                      </div>
                      <div className="portfolio-price">
                        <span>$22.14</span>
                      </div>
                    </div>
                    <div className="student-course-text">
                      <h3>
                        <Link href="/course-details">
                          <a>
                            Data Science Real-Life Data Science Exercises
                            Included
                          </a>
                        </Link>
                      </h3>
                    </div>
                    <div className="portfolio-user">
                      <div className="user-icon">
                        <Link href="/instructor-profile">
                          <a>
                            <i className="fas fa-user"></i>William
                          </a>
                        </Link>
                      </div>
                      <div className="course-icon">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fal fa-star"></i>
                        <span>(25)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="course-wrapper-2 mb-30">
                  <div className="student-course-img">
                    <img
                      src="assets/img/course/course-04.jpg"
                      alt="course-img"
                    />
                  </div>
                  <div className="course-cart">
                    <div className="course-info-wrapper">
                      <div className="cart-info-body">
                        <Link href="/course">
                          <a className="category-color category-color-3">
                            Business
                          </a>
                        </Link>
                        <Link href="/course-details">
                          <a>
                            <h3>
                              MySQL Database : Beginner SQL Database Design
                            </h3>
                          </a>
                        </Link>
                        <div className="cart-lavel">
                          <h5>
                            Level : <span>Beginner</span>
                          </h5>
                          <p>
                            Knowledge is power. Information is liberating.
                            Education is the premise of progress, in every
                            society, in every family
                          </p>
                        </div>
                        <div className="info-cart-text">
                          <ul>
                            <li>
                              <i className="far fa-check"></i>Scratch to HTML
                            </li>
                            <li>
                              <i className="far fa-check"></i>Learn how to code
                              in Python
                            </li>
                            <li>
                              <i className="far fa-check"></i>Unlimited backend
                              database creation
                            </li>
                            <li>
                              <i className="far fa-check"></i>Adobe XD Tutorials
                            </li>
                          </ul>
                        </div>
                        <div className="course-action">
                          <Link href="/course-details">
                            <a className="view-details-btn">View Details</a>
                          </Link>
                          <button className="wishlist-btn">
                            <i className="flaticon-like"></i>
                          </button>
                          <Link href="/course-details">
                            <a className="c-share-btn">
                              <i className="flaticon-previous"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="student-course-footer">
                    <div className="student-course-linkter">
                      <div className="course-lessons">
                        <i className="fal fa-tv"></i>
                        <span className="ms-2">12 Lessons</span>
                      </div>
                      <div className="portfolio-price">
                        <span>$147.00</span>
                      </div>
                    </div>
                    <div className="student-course-text">
                      <h3>
                        <Link href="/course-details">
                          <a>MySQL Database : Beginner SQL Database Design</a>
                        </Link>
                      </h3>
                    </div>
                    <div className="portfolio-user">
                      <div className="user-icon">
                        <Link href="/instructor-profile">
                          <a>
                            <i className="fas fa-user"></i>Jonny
                          </a>
                        </Link>
                      </div>
                      <div className="course-icon">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fal fa-star"></i>
                        <span>(25)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="course-wrapper-2 mb-30">
                  <div className="student-course-img">
                    <img
                      src="assets/img/course/course-05.jpg"
                      alt="course-img"
                    />
                  </div>
                  <div className="course-cart">
                    <div className="course-info-wrapper">
                      <div className="cart-info-body">
                        <Link href="/course">
                          <a className="category-color category-color-1">
                            Development
                          </a>
                        </Link>
                        <Link href="/course-details">
                          <a>
                            <h3>
                              Python and Django Full Stack Web Developer
                              Bootcamp
                            </h3>
                          </a>
                        </Link>
                        <div className="cart-lavel">
                          <h5>
                            Level : <span>Beginner</span>
                          </h5>
                          <p>
                            Knowledge is power. Information is liberating.
                            Education is the premise of progress, in every
                            society, in every family
                          </p>
                        </div>
                        <div className="info-cart-text">
                          <ul>
                            <li>
                              <i className="far fa-check"></i>Scratch to HTML
                            </li>
                            <li>
                              <i className="far fa-check"></i>Learn how to code
                              in Python
                            </li>
                            <li>
                              <i className="far fa-check"></i>Unlimited backend
                              database creation
                            </li>
                            <li>
                              <i className="far fa-check"></i>Adobe XD Tutorials
                            </li>
                          </ul>
                        </div>
                        <div className="course-action">
                          <Link href="/course-details">
                            <a className="view-details-btn">View Details</a>
                          </Link>
                          <button className="wishlist-btn">
                            <i className="flaticon-like"></i>
                          </button>
                          <Link href="/course-details">
                            <a className="c-share-btn">
                              <i className="flaticon-previous"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="student-course-footer">
                    <div className="student-course-linkter">
                      <div className="course-lessons">
                        <i className="fal fa-tv"></i>
                        <span className="ms-2">12 Lessons</span>
                      </div>
                      <div className="portfolio-price">
                        <span>$21.00</span>
                      </div>
                    </div>
                    <div className="student-course-text">
                      <h3>
                        <Link href="/course-details">
                          <a>
                            Python and Django Full Stack Web Developer Bootcamp
                          </a>
                        </Link>
                      </h3>
                    </div>
                    <div className="portfolio-user">
                      <div className="user-icon">
                        <Link href="/instructor-profile">
                          <a>
                            <i className="fas fa-user"></i>Halse
                          </a>
                        </Link>
                      </div>
                      <div className="course-icon">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fal fa-star"></i>
                        <span>(25)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
