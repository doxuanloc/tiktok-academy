import React, { useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Pagination from "../Common/Pagination";
import CourseBar from "../Course/CourseBar";
import ShopSidebar from "../Shop/ShopSidebar";
import Link from "next/link";
import axios from "../../api/axios";

const CourseMain = () => {
  const [dataCourses, setDataCourses] = useState([]);
  const DATA_COURSES_URL = "courses";

  async function getDataCourse() {
    const token = localStorage.getItem("token");
    await axios
      .get(DATA_COURSES_URL, JSON.stringify({}), {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        setDataCourses(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getDataCourse();
  }, []);

  return (
    <main>
      <Breadcrumb breadcrumbTitle="Khóa Học" breadcrumbSubTitle="Khóa Học" />

      <CourseBar />

      <section className="course-content-area pb-90">
        <div className="container">
          <div className="row mb-10">
            <div className="col-xl-3 col-lg-4 col-md-12">
              <ShopSidebar />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="row">
                {dataCourses?.map((item) => (
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="protfolio-course-2-wrapper mb-30">
                      <div className="student-course-img">
                        <Link href="/course">
                          <a>
                            <img
                              src="assets/img/course/course-15.jpg"
                              alt="course-img"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="course-cart">
                        <div className="course-info-wrapper">
                          <div className="cart-info-body">
                            <Link href="/course">
                              <a className="category-color category-color-3">
                                {item.tag} Tag
                              </a>
                            </Link>
                            <Link href="/course-details">
                              <a>
                                <h3>{item.title}</h3>
                              </a>
                            </Link>
                            <div className="cart-lavel">
                              <h5>
                                Level : <span>{item.level}</span>
                              </h5>
                            </div>
                            <div className="info-cart-text">
                              <ul>
                                <li>
                                  <i className="far fa-check"></i>Nhanh
                                </li>
                                <li>
                                  <i className="far fa-check"></i>Gọn
                                </li>
                                <li>
                                  <i className="far fa-check"></i>Lẹ
                                </li>
                                <li>
                                  <i className="far fa-check"></i>Đẹp
                                </li>
                              </ul>
                            </div>
                            <div className="course-action">
                              <Link href="/course-details">
                                <a className="view-details-btn">Chi tiết</a>
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
                      <div className="portfolio-course-2-content">
                        <div className="portfolio-course-wrapper">
                          <div className="portfolio-price">
                            <span>{item.price} đ</span>
                          </div>
                          <div className="portfolio-course-2">
                            <h3>
                              <Link href="/course-details">
                                <a>{item.title}</a>
                              </Link>
                            </h3>
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
                      <div className="course-2-footer">
                        <div className="coursee-clock">
                          <i className="flaticon-clock"></i>
                          <span>~ 30 phút</span>
                        </div>
                        <div className="course-creadit">
                          <i className="flaticon-menu-1"></i>
                          <span>8 Bài Học</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
    </main>
  );
};

export default CourseMain;
