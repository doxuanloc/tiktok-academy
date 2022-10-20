import React from "react";
import Link from "next/link";

const CourseTabTwo = () => {
  return (
    <div className="student-course-area pt-110 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 f-left">
            <div className="section-title mb-50">
              <h2>
                Chọn
                <br />
                <span className="down-mark-line-2">Khóa Học</span>
              </h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="portfolio-button mt-60">
              <nav>
                <div
                  className="nav portfolio-button-tabs"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Xem Tất Cả<span className="port-red">[99]</span>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Edit Video<span className="port-red">[01]</span>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    Marketing<span className="port-red">[03]</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="course-main-items">
          <div
            className="tab-content portfolio-tabs-content"
            id="nav-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6  grid-item c-2">
                  <div className="course-wrapper-2 mb-30">
                    <div className="student-course-img">
                      <img
                        src="assets/img/student-choose/student-chourse-1.jpg"
                        alt="image not found"
                      />
                    </div>

                    <div className="student-course-footer">
                      <div className="student-course-linkter">
                        <div className="course-lessons">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16.471"
                            height="16.471"
                            viewBox="0 0 16.471 16.471"
                          >
                            <g id="blackboard-8" transform="translate(-0.008)">
                              <path
                                id="Path_106"
                                data-name="Path 101"
                                d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                fill="#575757"
                              />
                            </g>
                          </svg>
                          <span className="ms-2">12 Bài Học</span>
                        </div>
                        <div className="portfolio-price">
                          <span>600.000 đ</span>
                          <del>400.000 đ</del>
                        </div>
                      </div>
                      <div className="student-course-text">
                        <h3>
                          <Link href="/course-details">
                            <a>Chỉnh Sửa Video</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="portfolio-user">
                        <div className="user-icon">
                          <Link href="/instructor-profile">
                            <a>
                              <span>Tiktoker</span>
                            </a>
                          </Link>
                        </div>
                        <div className="course-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>4.9(25)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6  grid-item c-2">
                  <div className="course-wrapper-2 mb-30">
                    <div className="student-course-img">
                      <img
                        src="assets/img/student-choose/student-chourse-1.jpg"
                        alt="image not found"
                      />
                    </div>

                    <div className="student-course-footer">
                      <div className="student-course-linkter">
                        <div className="course-lessons">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16.471"
                            height="16.471"
                            viewBox="0 0 16.471 16.471"
                          >
                            <g id="blackboard-8" transform="translate(-0.008)">
                              <path
                                id="Path_106"
                                data-name="Path 101"
                                d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                fill="#575757"
                              />
                            </g>
                          </svg>
                          <span className="ms-2">12 Bài Học</span>
                        </div>
                        <div className="portfolio-price">
                          <span>600.000 đ</span>
                          <del>400.000 đ</del>
                        </div>
                      </div>
                      <div className="student-course-text">
                        <h3>
                          <Link href="/course-details">
                            <a>Chỉnh Sửa Video</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="portfolio-user">
                        <div className="user-icon">
                          <Link href="/instructor-profile">
                            <a>
                              <span>Tiktoker</span>
                            </a>
                          </Link>
                        </div>
                        <div className="course-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>4.9(25)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6  grid-item c-2">
                  <div className="course-wrapper-2 mb-30">
                    <div className="student-course-img">
                      <img
                        src="assets/img/student-choose/student-chourse-1.jpg"
                        alt="image not found"
                      />
                    </div>

                    <div className="student-course-footer">
                      <div className="student-course-linkter">
                        <div className="course-lessons">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16.471"
                            height="16.471"
                            viewBox="0 0 16.471 16.471"
                          >
                            <g id="blackboard-8" transform="translate(-0.008)">
                              <path
                                id="Path_106"
                                data-name="Path 101"
                                d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                fill="#575757"
                              />
                            </g>
                          </svg>
                          <span className="ms-2">12 Bài Học</span>
                        </div>
                        <div className="portfolio-price">
                          <span>600.000 đ</span>
                          <del>400.000 đ</del>
                        </div>
                      </div>
                      <div className="student-course-text">
                        <h3>
                          <Link href="/course-details">
                            <a>Chỉnh Sửa Video</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="portfolio-user">
                        <div className="user-icon">
                          <Link href="/instructor-profile">
                            <a>
                              <span>Tiktoker</span>
                            </a>
                          </Link>
                        </div>
                        <div className="course-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>4.9(25)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6  grid-item c-2">
                  <div className="course-wrapper-2 mb-30">
                    <div className="student-course-img">
                      <img
                        src="assets/img/student-choose/student-chourse-1.jpg"
                        alt="image not found"
                      />
                    </div>

                    <div className="student-course-footer">
                      <div className="student-course-linkter">
                        <div className="course-lessons">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16.471"
                            height="16.471"
                            viewBox="0 0 16.471 16.471"
                          >
                            <g id="blackboard-8" transform="translate(-0.008)">
                              <path
                                id="Path_106"
                                data-name="Path 101"
                                d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                fill="#575757"
                              />
                            </g>
                          </svg>
                          <span className="ms-2">12 Bài Học</span>
                        </div>
                        <div className="portfolio-price">
                          <span>600.000 đ</span>
                          <del>400.000 đ</del>
                        </div>
                      </div>
                      <div className="student-course-text">
                        <h3>
                          <Link href="/course-details">
                            <a>Chỉnh Sửa Video</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="portfolio-user">
                        <div className="user-icon">
                          <Link href="/instructor-profile">
                            <a>
                              <span>Tiktoker</span>
                            </a>
                          </Link>
                        </div>
                        <div className="course-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>4.9(25)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6  grid-item c-2">
                  <div className="course-wrapper-2 mb-30">
                    <div className="student-course-img">
                      <img
                        src="assets/img/student-choose/student-chourse-1.jpg"
                        alt="image not found"
                      />
                    </div>

                    <div className="student-course-footer">
                      <div className="student-course-linkter">
                        <div className="course-lessons">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16.471"
                            height="16.471"
                            viewBox="0 0 16.471 16.471"
                          >
                            <g id="blackboard-8" transform="translate(-0.008)">
                              <path
                                id="Path_106"
                                data-name="Path 101"
                                d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                fill="#575757"
                              />
                            </g>
                          </svg>
                          <span className="ms-2">12 Bài Học</span>
                        </div>
                        <div className="portfolio-price">
                          <span>600.000 đ</span>
                          <del>400.000 đ</del>
                        </div>
                      </div>
                      <div className="student-course-text">
                        <h3>
                          <Link href="/course-details">
                            <a>Chỉnh Sửa Video</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="portfolio-user">
                        <div className="user-icon">
                          <Link href="/instructor-profile">
                            <a>
                              <span>Tiktoker</span>
                            </a>
                          </Link>
                        </div>
                        <div className="course-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>4.9(25)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6  grid-item c-2">
                  <div className="course-wrapper-2 mb-30">
                    <div className="student-course-img">
                      <img
                        src="assets/img/student-choose/student-chourse-1.jpg"
                        alt="image not found"
                      />
                    </div>

                    <div className="student-course-footer">
                      <div className="student-course-linkter">
                        <div className="course-lessons">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16.471"
                            height="16.471"
                            viewBox="0 0 16.471 16.471"
                          >
                            <g id="blackboard-8" transform="translate(-0.008)">
                              <path
                                id="Path_106"
                                data-name="Path 101"
                                d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                fill="#575757"
                              />
                            </g>
                          </svg>
                          <span className="ms-2">12 Bài Học</span>
                        </div>
                        <div className="portfolio-price">
                          <span>600.000 đ</span>
                          <del>400.000 đ</del>
                        </div>
                      </div>
                      <div className="student-course-text">
                        <h3>
                          <Link href="/course-details">
                            <a>Chỉnh Sửa Video</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="portfolio-user">
                        <div className="user-icon">
                          <Link href="/instructor-profile">
                            <a>
                              <span>Tiktoker</span>
                            </a>
                          </Link>
                        </div>
                        <div className="course-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>4.9(25)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6  grid-item c-2">
                  <div className="course-wrapper-2 mb-30">
                    <div className="student-course-img">
                      <img
                        src="assets/img/student-choose/student-chourse-1.jpg"
                        alt="image not found"
                      />
                    </div>

                    <div className="student-course-footer">
                      <div className="student-course-linkter">
                        <div className="course-lessons">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16.471"
                            height="16.471"
                            viewBox="0 0 16.471 16.471"
                          >
                            <g id="blackboard-8" transform="translate(-0.008)">
                              <path
                                id="Path_106"
                                data-name="Path 101"
                                d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                fill="#575757"
                              />
                            </g>
                          </svg>
                          <span className="ms-2">12 Bài Học</span>
                        </div>
                        <div className="portfolio-price">
                          <span>600.000 đ</span>
                          <del>400.000 đ</del>
                        </div>
                      </div>
                      <div className="student-course-text">
                        <h3>
                          <Link href="/course-details">
                            <a>Chỉnh Sửa Video</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="portfolio-user">
                        <div className="user-icon">
                          <Link href="/instructor-profile">
                            <a>
                              <span>Tiktoker</span>
                            </a>
                          </Link>
                        </div>
                        <div className="course-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>4.9(25)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3">
            <div className="portfolio-brn mt-20 text-center">
              <Link href="/course">
                <a className="edu-sec-btn">Xem Tất Cả Khóa Học</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTabTwo;
