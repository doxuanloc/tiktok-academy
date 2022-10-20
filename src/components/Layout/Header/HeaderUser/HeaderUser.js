import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useSticky from "../../../../hooks/useSticky";
import MobileMenu from "../../Header/MobileMenu";
import HeaderCart from "../../Header/HeaderCart";
import SignIn from "../../Header/SignIn";
import SignUp from "../../Header/SignUp";
import axios from "../../../../api/axios";
const HeaderUser = ({ setShowHeaderUser }) => {
  // sticky nav
  const { sticky } = useSticky();

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSingUpOpen] = useState(false);
  const [usernameProfile, setUsernameProfile] = useState("");
  const [avtUserProfile, setAvtUserProfile] = useState("");

  const GET_USER_URL = "auth/profile/";

  async function getProfileUser() {
    const token = localStorage.getItem("token");

    if (token) {
      await axios
        .get(GET_USER_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          setUsernameProfile(res.data.data.fullName);
          setAvtUserProfile(res.data.data.avatarUrl);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    getProfileUser();
  }, []);

  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    router.push("/");
    setShowHeaderUser(false);
  };

  return (
    <header>
      <div className="header-top-area d-none d-lg-block">
        <div className="container-fluid">
          <div className="header-top-inner">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-8"></div>
              <div className="col-xl-4 col-lg-4">
                <div className="header-top-login d-flex f-right">
                  <div className="header-social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          sticky
            ? "sticky header-area sticky-header"
            : "header-area sticky-header"
        }
      >
        <div className="container-fluid">
          <div className="header-main-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7 col-md-5 col-sm-9 col-9">
                <div className="header-left d-flex align-items-center">
                  <div className="header-logo">
                    <Link href="/">
                      <a>
                        <img
                          width="70px"
                          src="assets/img/logo/tiktok.jpg"
                          alt="logo"
                        />
                      </a>
                    </Link>
                  </div>
                  <Link href="/course">
                    <div className="category-menu d-none d-xxl-block">
                      <div className="Category-click">
                        <figure className="cattext">
                          <svg
                            className="icons"
                            id="menu_1_"
                            data-name="menu (1)"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18.087"
                            height="18.087"
                            viewBox="0 0 18.087 18.087"
                          >
                            <path
                              id="Path_25"
                              data-name="Path 25"
                              d="M3.768,0H.754A.754.754,0,0,0,0,.754V3.768a.754.754,0,0,0,.754.754H3.768a.754.754,0,0,0,.754-.754V.754A.754.754,0,0,0,3.768,0Z"
                              fill="#141517"
                            ></path>
                            <path
                              id="Path_26"
                              data-name="Path 26"
                              d="M3.768,9H.754A.754.754,0,0,0,0,9.754v3.015a.754.754,0,0,0,.754.754H3.768a.754.754,0,0,0,.754-.754V9.754A.754.754,0,0,0,3.768,9Z"
                              transform="translate(0 -2.217)"
                              fill="#141517"
                            ></path>
                            <path
                              id="Path_27"
                              data-name="Path 27"
                              d="M3.768,18H.754A.754.754,0,0,0,0,18.754v3.015a.754.754,0,0,0,.754.754H3.768a.754.754,0,0,0,.754-.754V18.754A.754.754,0,0,0,3.768,18Z"
                              transform="translate(0 -4.434)"
                              fill="#141517"
                            ></path>
                            <path
                              id="Path_28"
                              data-name="Path 28"
                              d="M12.768,0H9.754A.754.754,0,0,0,9,.754V3.768a.754.754,0,0,0,.754.754h3.015a.754.754,0,0,0,.754-.754V.754A.754.754,0,0,0,12.768,0Z"
                              transform="translate(-2.217)"
                              fill="#141517"
                            ></path>
                            <path
                              id="Path_29"
                              data-name="Path 29"
                              d="M12.768,9H9.754A.754.754,0,0,0,9,9.754v3.015a.754.754,0,0,0,.754.754h3.015a.754.754,0,0,0,.754-.754V9.754A.754.754,0,0,0,12.768,9Z"
                              transform="translate(-2.217 -2.217)"
                              fill="#141517"
                            ></path>
                            <path
                              id="Path_30"
                              data-name="Path 30"
                              d="M12.768,18H9.754A.754.754,0,0,0,9,18.754v3.015a.754.754,0,0,0,.754.754h3.015a.754.754,0,0,0,.754-.754V18.754A.754.754,0,0,0,12.768,18Z"
                              transform="translate(-2.217 -4.434)"
                              fill="#141517"
                            ></path>
                            <path
                              id="Path_31"
                              data-name="Path 31"
                              d="M21.768,0H18.754A.754.754,0,0,0,18,.754V3.768a.754.754,0,0,0,.754.754h3.015a.754.754,0,0,0,.754-.754V.754A.754.754,0,0,0,21.768,0Z"
                              transform="translate(-4.434)"
                              fill="#141517"
                            ></path>
                            <path
                              id="Path_32"
                              data-name="Path 32"
                              d="M21.768,9H18.754A.754.754,0,0,0,18,9.754v3.015a.754.754,0,0,0,.754.754h3.015a.754.754,0,0,0,.754-.754V9.754A.754.754,0,0,0,21.768,9Z"
                              transform="translate(-4.434 -2.217)"
                              fill="#141517"
                            ></path>
                            <path
                              id="Path_33"
                              data-name="Path 33"
                              d="M21.768,18H18.754a.754.754,0,0,0-.754.754v3.015a.754.754,0,0,0,.754.754h3.015a.754.754,0,0,0,.754-.754V18.754A.754.754,0,0,0,21.768,18Z"
                              transform="translate(-4.434 -4.434)"
                              fill="#141517"
                            ></path>
                          </svg>
                          <span className="text">Khóa Học</span>
                        </figure>
                        <div className="dropdown-category">
                          <nav>
                            <ul>
                              <li className="item-has-children">
                                <Link href="/course">
                                  <a>Development</a>
                                </Link>
                                <ul className="category-submenu">
                                  <li>
                                    <Link href="/course">
                                      <a>All Development</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/course">
                                      <a>Mobile App</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/course">
                                      <a>Web Development</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/course">
                                      <a>Development tools</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/course">
                                      <a>Database</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/course">
                                      <a>Programming language</a>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="item-has-children">
                                <Link href="/course">
                                  <a>Art and Design</a>
                                </Link>
                                <ul className="category-submenu">
                                  <li>
                                    <Link href="/course">
                                      <a>Web Design</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/course">
                                      <a>Graphic Design</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/course">
                                      <a>Design tools</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/course">
                                      <a>All Art</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/course">
                                      <a>Marketing</a>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="main-menu d-none d-xl-block">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="menu-item-has-children">
                          <Link href="/shop">
                            <a>Cửa Hàng</a>
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/shop-details">
                                <a>Chi Tiết Cửa Hàng</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/wishlist">
                                <a>Danh Sách Đơn Hàng</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/cart">
                                <a>Giỏ Hàng</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/checkout">
                                <a>Thanh Toán</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/about">
                            <a>Về Chúng Tôi</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <a>Liên Hệ</a>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-7 col-sm-3 col-3">
                <div className="header-right d-flex align-items-center justify-content-end">
                  <div className="header-search d-none d-xxl-block mr-30">
                    <form action="#">
                      <div className="search-icon p-relative">
                        <input type="text" placeholder="Tìm Khóa Học...." />
                        <button type="submit">
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="cart-wrapper mr-30">
                    <a
                      href="#!"
                      className="cart-toggle-btn"
                      onClick={() => {
                        setCartOpen(!cartOpen);
                      }}
                    >
                      <div className="header__cart-icon p-relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19.988"
                          height="19.988"
                          viewBox="0 0 19.988 19.988"
                        >
                          <g id="trolley-cart" transform="translate(-1 -1)">
                            <path
                              id="Path_36"
                              data-name="Path 36"
                              d="M1.666,2.333H3.8L6.159,12.344a1.993,1.993,0,0,0,.171,3.98H17.656a.666.666,0,1,0,0-1.333H6.33a.666.666,0,0,1,0-1.333H17.578a1.992,1.992,0,0,0,1.945-1.541l1.412-6a2,2,0,0,0-1.946-2.456H5.486L4.98,1.514A.666.666,0,0,0,4.331,1H1.666a.666.666,0,0,0,0,1.333ZM18.989,5a.677.677,0,0,1,.649.819l-1.412,6a.662.662,0,0,1-.648.514H7.524L5.8,5Z"
                              transform="translate(0 0)"
                              fill="#141517"
                            />
                            <path
                              id="Path_37"
                              data-name="Path 37"
                              d="M20,27a2,2,0,1,0,2-2A2,2,0,0,0,20,27Zm2.665,0A.666.666,0,1,1,22,26.333.666.666,0,0,1,22.665,27Z"
                              transform="translate(-6.341 -8.01)"
                              fill="#141517"
                            />
                            <path
                              id="Path_38"
                              data-name="Path 38"
                              d="M9,27a2,2,0,1,0,2-2A2,2,0,0,0,9,27Zm2.665,0A.666.666,0,1,1,11,26.333.666.666,0,0,1,11.665,27Z"
                              transform="translate(-2.67 -8.01)"
                              fill="#141517"
                            />
                          </g>
                        </svg>
                        <span className="item-number">1</span>
                      </div>
                    </a>
                  </div>
                  <div className="main-menu d-none d-xxl-block mr-80">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="menu-item-has-children">
                          <span className="pr-5">
                            <h5>Hi {usernameProfile} !</h5>
                          </span>
                          <img
                            className="rounded-circle shadow-lg rounded"
                            width="40px"
                            height="40px"
                            src={avtUserProfile}
                          />

                          <ul className="sub-menu">
                            <li>
                              <Link href="/course">
                                <a>Khoá Học Của Tôi</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/wishlist">
                                <a>Quản Lý Đơn Hàng</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/profile">
                                <a>Chỉnh Sửa Hồ Sơ</a>
                              </Link>
                            </li>
                            <li>
                              <button
                                type="button"
                                class="btn btn-danger"
                                onClick={logout}
                              >
                                Đăng Xuất
                              </button>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="menu-bar d-xl-none ml-20">
                    <a
                      className="side-toggle"
                      href="#!"
                      onClick={() => {
                        setMenuOpen(!menuOpen);
                      }}
                    >
                      <div className="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        onClick={() => setMenuOpen(false)}
        className={
          menuOpen ? "offcanvas-overlay overlay-signin" : "offcanvas-overlay"
        }
      ></div>

      <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <div
        onClick={() => setCartOpen(false)}
        className={cartOpen ? "body-overlay opened" : "body-overlay"}
      ></div>

      <SignIn
        signInOpen={signInOpen}
        setSignInOpen={setSignInOpen}
        setShowHeaderUser={setShowHeaderUser}
      />
      <div
        onClick={() => setSignInOpen(false)}
        className={
          signInOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"
        }
      ></div>

      <SignUp signUpOpen={signUpOpen} setSingUpOpen={setSingUpOpen} />
      <div
        onClick={() => setSingUpOpen(false)}
        className={
          signUpOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"
        }
      ></div>
    </header>
  );
};

export default HeaderUser;
