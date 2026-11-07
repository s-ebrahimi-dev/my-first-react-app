
import React from "react";
import "./Card.css";
import rocket from "../../../public/Images/rocket.png"
const Icon = ({ name, className = "" }) => {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };

  const icons = {
    bookmark: (
      <svg {...common}>
        <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4V4.5Z" />
      </svg>
    ),
    heart: (
      <svg {...common}>
        <path d="M20.8 8.8c0 4.2-8.8 10-8.8 10s-8.8-5.8-8.8-10A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.6Z" />
      </svg>
    ),
    flag: (
      <svg {...common}>
        <path d="M5 21V4" />
        <path d="M5 4c4-3 7 3 11 0v9c-4 3-7-3-11 0" />
      </svg>
    ),
    message: (
      <svg {...common}>
        <path d="M21 11.5a7.5 7.5 0 0 1-8 7.5 8.5 8.5 0 0 1-3.5-.8L3 20l1.7-5A7.1 7.1 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 9 7.5Z" />
        <path d="M9 11h6M9 14h4" />
      </svg>
    ),
    clock: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    bookmarkTag: (
      <svg {...common}>
        <rect x="4" y="3" width="16" height="18" rx="3" />
        <path d="M8 7h8M8 11h5M8 15h8" />
      </svg>
    ),
    book: (
      <svg {...common}>
        <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H20v17H7.5A2.5 2.5 0 0 0 5 21.5v-17Z" />
        <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H20" />
      </svg>
    ),
    circle: (
      <svg {...common}>
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  };

  return icons[name] || null;
};

export default function MobileAppCard() {
  return (
    <article
      dir="rtl"
      className="mobile-card relative flex flex-col w-full max-w-[316px] h-[364px] overflow-hidden rounded-[5px] border border-[#29465e] bg-[#1b354d] p-[15px] text-white shadow-sm"
    >
      {/* Cover Image */}
      <div className="mobile-card__cover relative w-full h-[160px] shrink-0 overflow-hidden rounded-[4px] bg-[#f3f4f3]">
        <img
          src={rocket}
          alt="Go Mobile application development"
          className="mobile-card__cover-image block w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <div className="mobile-card__content mt-[10px]">
        <h2 className="mobile-card__title text-[19px] font-extrabold leading-[1.55] text-right text-[#f8fafc]">
          تجربه یک سال توسعه اپلیکیشن
          <br />
          موبایل با GoMobile
        </h2>
      </div>

      {/* Author and Category */}
      <div className="mobile-card__meta flex items-center justify-between mt-auto mb-[13px] gap-2">

        {/* Category */}
        <div className="mobile-card__category flex items-center gap-[5px] h-[25px] px-[9px] rounded-[4px] bg-[#304c65] text-[#77a9e9] whitespace-nowrap">
          <span className="mobile-card__category-text text-[10px] font-bold">
            برنامه‌نویسی موبایل
          </span>
          <Icon name="bookmarkTag" className="mobile-card__category-icon w-[12px] h-[12px]" />
        </div>

        {/* Author */}
        <div className="mobile-card__author flex items-center gap-[6px] shrink-0">
          <span className="mobile-card__author-name text-[11px] font-bold text-[#f2f4f7]">
            ارسطو عباسی
          </span>

          <div className="mobile-card__avatar relative w-[27px] h-[27px] shrink-0 overflow-hidden rounded-full border-[2px] border-white bg-[#d9e4ef]">
            <img
              src="/images/rocket.png"
              alt=""
              className="mobile-card__avatar-image absolute max-w-none"
              style={{
                width: "316px",
                height: "364px",
                left: "-270px",
                top: "-282px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mobile-card__footer flex items-center justify-between">

        {/* Reading Time */}
        <div className="mobile-card__reading flex items-center gap-[4px] text-[#9aafc2]">
          <Icon name="clock" className="mobile-card__reading-icon w-[13px] h-[13px]" />
          <span className="mobile-card__reading-text text-[11px] font-medium">
            زمان مطالعه: ۱۷ دقیقه
          </span>
        </div>

        {/* Actions */}
        <div className="mobile-card__actions flex items-center gap-[7px]">

          {/* Bookmark */}
          <button
            type="button"
            aria-label="ذخیره مقاله"
            className="mobile-card__action mobile-card__action--bookmark flex items-center justify-center w-[36px] h-[29px] rounded-[5px] bg-[#244969] text-[#3986d4]"
          >
            <Icon name="bookmark" />
          </button>

          {/* Flag and Like */}
          <div className="mobile-card__reaction flex items-center justify-center gap-[5px] w-[65px] h-[29px] rounded-[5px] bg-[#303d53]">
            <button
              type="button"
              aria-label="گزارش مقاله"
              className="mobile-card__action mobile-card__action--flag text-[#e34853]"
            >
              <Icon name="flag" />
            </button>

            <button
              type="button"
              aria-label="پسندیدن"
              className="mobile-card__action mobile-card__action--like text-[#e34853]"
            >
              <Icon name="heart" className="w-[21px] h-[21px]" />
            </button>
          </div>

          {/* Comments */}
          <button
            type="button"
            aria-label="نظرات"
            className="mobile-card__action mobile-card__action--comments flex items-center justify-center gap-[2px] w-[40px] h-[29px] rounded-[5px] bg-[#263f57] text-[#8296a9]"
          >
            <Icon name="circle" className="w-[11px] h-[11px]" />
            <Icon name="message" className="w-[19px] h-[19px]" />
          </button>
        </div>
      </div>
    </article>
  );
}
