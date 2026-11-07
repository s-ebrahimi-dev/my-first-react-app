import React from "react";
import "./CourseCard.css";
import dockerCover from "./assets/docker-course-cover.png";


function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.8 8.8c0 4.1-8.8 10-8.8 10S3.2 12.9 3.2 8.8A4.6 4.6 0 0 1 12 6.5a4.6 4.6 0 0 1 8.8 2.3Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="14" rx="3" />
      <path d="m10 9 5 3-5 3V9Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  );
}

function VolumeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 10v4h3.2l4.3 3.4V6.6L7.2 10H4Z" fill="currentColor" stroke="none" />
      <path d="M15 9a4.3 4.3 0 0 1 0 6M17.5 6.5a7.8 7.8 0 0 1 0 11" />
    </svg>
  );
}

/**
 * A course card matching the supplied Docker course reference.
 * Pass onWatch / onLike to connect the buttons to your app logic.
 */
export default function CourseCard({
  cover = dockerCover,
  title = "آموزش Docker",
  description = "ورود عملی به داکر: از ساخت کانتینر تا مدیریت و استقرار",
  level = "تکمیل ضبط",
  isFree = true,
  duration = "۰۴:۴۰:۰۳",
  lessons = "۵ جلسه",
  likes = "۱۲۰",
  onWatch,
  onLike,
}) {
  return (
    <article className="course-card" dir="rtl">
      <img className="course-card__cover" src={cover} alt="کاور دوره آموزش Docker" />

      <div className="course-card__main">
        <div className="course-card__badges">
          {isFree && <span className="course-card__badge course-card__badge--free">رایگان</span>}
          <span className="course-card__badge course-card__badge--level">{level}</span>
        </div>

        <h2 className="course-card__title">{title}</h2>
        <p className="course-card__description">{description}</p>

        <div className="course-card__meta">
          <button
            className="course-card__like"
            type="button"
            onClick={onLike}
            aria-label={`پسندیدن دوره، ${likes} پسند`}
          >
            <span>{likes}</span>
            <HeartIcon />
          </button>

          <div className="course-card__details">
            <span className="course-card__detail course-card__lessons">
              <PlayIcon />
              <span>{lessons}</span>
            </span>
            <span className="course-card__detail course-card__duration">
              <ClockIcon />
              <span>{duration}</span>
            </span>
          </div>
        </div>
      </div>

      <footer className="course-card__footer">
        <button className="course-card__watch" type="button" onClick={onWatch}>
          <span>مشاهده دوره</span>
          <VolumeIcon />
        </button>
        <span className="course-card__price">{isFree ? "رایگان" : "مشاهده قیمت"}</span>
      </footer>
    </article>
  );
}
