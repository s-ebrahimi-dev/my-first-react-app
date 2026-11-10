import React from "react";

function Header() {
  return (
    <header className="intro-section mx-auto max-w-360 px-5 lg:px-8">
      <div className="intro-section__breadcrumb flex items-center justify-end gap-4 text-sm">
        <a className="intro-section__breadcrumb-home" href="#">
          مسعود صرامی
        </a>
        <span className="intro-section__breadcrumb-arrow">‹</span>
        <span className="intro-section__breadcrumb-current">
          تجربیات مسعود صرامی
        </span>
      </div>

      <div className="intro-section__titlebar mt-16 rounded-2xl bg-brand-pale px-6 py-4">
        <h1 className="intro-section__title text-xl font-extrabold md:text-2xl">
          تجربیات مسعود صرامی
        </h1>
      </div>

      <div className="profile-section mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
        <div className="profile-section__content order-2 text-center lg:order-1">
          <h2 className="profile-section__heading mb-10 text-xl font-extrabold md:text-2xl">
            سوابق کاری مسعود صرامی
          </h2>
          <div className="profile-section__founders grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3">
            <div className="profile-section__founder">
              <span className="profile-section__label">بنیان‌گذار</span>
              <strong className="profile-section__name">
                سیتی سنتر اصفهان
              </strong>
            </div>
            <div className="profile-section__founder">
              <span className="profile-section__label">بنیان‌گذار</span>
              <strong className="profile-section__name">
                شهرک سلامت اصفهان
              </strong>
            </div>
            <div className="profile-section__founder">
              <span className="profile-section__label">بنیان‌گذار</span>
              <strong className="profile-section__name">دبیرستان اقتصاد</strong>
            </div>
            <div className="profile-section__founder">
              <span className="profile-section__label">بنیان‌گذار</span>
              <strong className="profile-section__name">برنا باتری</strong>
            </div>
            <div className="profile-section__founder">
              <span className="profile-section__label">بنیان‌گذار</span>
              <strong className="profile-section__name">سحر صنعت</strong>
            </div>
            <div className="profile-section__founder">
              <span className="profile-section__label">بنیان‌گذار</span>
              <strong className="profile-section__name">سپاهان برنا</strong>
            </div>
            <div className="profile-section__founder">
              <span className="profile-section__label">بنیان‌گذار</span>
              <strong className="profile-section__name">سپاهان برنا</strong>
            </div>
            <div className="profile-section__founder">
              <span className="profile-section__label">بنیان‌گذار</span>
              <strong className="profile-section__name">صدف سای</strong>
            </div>
            <div className="profile-section__founder">
              <span className="profile-section__label">بنیان‌گذار</span>
              <strong className="profile-section__name">
                شرکت مادر اصفهان
              </strong>
            </div>
          </div>
        </div>
        <div className="profile-section__visual order-1 mx-auto w-full max-w-[500px] lg:order-2">
          <img
            className="profile-section__portrait h-auto w-full"
            src="https://mjkhajeh.ir/holding/wp-content/uploads/2024/06/exp-cover.png"
            alt="تصویر مسعود صرامی"
          />
        </div>
      </div>

      <div className="stats-section mx-auto mt-8 grid max-w-3xl grid-cols-3 divide-x divide-x-reverse divide-brand-line text-center">
        <div className="stats-section__item">
          <div className="stats-section__top">
            <strong className="stats-section__number">۱۶+</strong>
            <span className="stats-section__icon">◇</span>
          </div>
          <span className="stats-section__caption">پروژه موفق</span>
        </div>
        <div className="stats-section__item">
          <div className="stats-section__top">
            <strong className="stats-section__number">۱۰+</strong>
            <span className="stats-section__icon">♙</span>
          </div>
          <span className="stats-section__caption">هزار نیرو</span>
        </div>
        <div className="stats-section__item">
          <div className="stats-section__top">
            <strong className="stats-section__number">۵۰</strong>
            <span className="stats-section__icon">✥</span>
          </div>
          <span className="stats-section__caption">سال تجربه</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
