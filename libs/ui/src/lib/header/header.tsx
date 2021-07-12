import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/core';
import SwiperCore from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
/* eslint-disable-next-line */
export interface HeaderProps {}

SwiperCore.use([Mousewheel, Pagination]);

export function Header(props: HeaderProps) {
  const pagination = {
    clickable: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    renderBullet: function (index: any, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <header>
      <nav className="header">
        <h1>Random</h1>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>Pages</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <code>search</code>
          <span>0.00</span>
          <span>Menu</span>
        </div>
      </nav>
      <article>
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={pagination}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="content">
              <div className="content-detail">
                <h3>New Arrival</h3>
                <h1>Cat Tee</h1>
                <button>Start Shopping</button>
              </div>
              <div className="content-image">
                <img
                  src="https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1067&q=80"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <div className="content-detail">
                <h3>New Arrival</h3>
                <h1>Van Prt</h1>
                <button>Start Shopping</button>
              </div>
              <div className="content-image">
                <img
                  src="https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1067&q=80"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <div className="content-detail">
                <h3>New Arrival</h3>
                <h1>Van Prt</h1>
                <button>Start Shopping</button>
              </div>
              <div className="content-image">
                <img
                  src="https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1067&q=80"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </article>
    </header>
  );
}

export default Header;
