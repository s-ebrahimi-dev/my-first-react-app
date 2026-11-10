const experiences = [
  {
    title: "۱. سیتی سنتر اصفهان",
    year: "۱۳۹۲",
    image: "https://mjkhajeh.ir/holding/wp-content/uploads/2024/06/ex1.png",
    alt: "نشان سیتی سنتر اصفهان",
  },
  {
    title: "۲. شهرک سلامت اصفهان",
    year: "۱۳۹۴",
    image: "https://mjkhajeh.ir/holding/wp-content/uploads/2024/06/ex2.png",
    alt: "نشان شهرک سلامت اصفهان",
  },
  {
    title: "۳. دبیرستان اقتصاد سیتی سنتر اصفهان",
    year: "۱۳۹۸",
    image: "https://mjkhajeh.ir/holding/wp-content/uploads/2024/06/ex3.png",
    alt: "نشان دانشگاه اصفهان",
  },
  {
    title: "۴. برنا باتری",
    year: "۱۳۷۱",
    image: "https://mjkhajeh.ir/holding/wp-content/uploads/2024/06/ex4.png",
    alt: "نشان برنا باتری",
  },
  {
    title: "۵. سحر صنعت",
    year: "۱۳۷۲",
    image: "https://mjkhajeh.ir/holding/wp-content/uploads/2024/06/ex4.png",
    alt: "نشان سحر صنعت",
  },
  {
    title: "۶. سپاهان برنا",
    year: "۱۳۷۳",
    image: "https://mjkhajeh.ir/holding/wp-content/uploads/2024/06/ex4.png",
    alt: "نشان سپاهان برنا",
  },
  {
    title: "۷. صدف سای",
    year: "۱۳۷۶",
    image: "https://mjkhajeh.ir/holding/wp-content/uploads/2024/06/ex4.png",
    alt: "نشان صدف سای",
  },
  {
    title: "۸. شرکت صادراتی مادر اصفهان",
    year: "۱۳۷۷",
    image: "https://mjkhajeh.ir/holding/wp-content/uploads/2024/06/ex4.png",
    alt: "نشان شرکت صادراتی مادر اصفهان",
  },
];

function Articles() {
  const cardClass = `
    experience-card
    relative grid
    grid-cols-[minmax(0,1fr)_120px_104px]
    items-center gap-[22px]
    min-h-[145px] mb-[29px]

    max-lg:grid-cols-[72px_minmax(0,1fr)]
    max-lg:gap-4
    max-lg:mb-6
    max-lg:pr-[58px]

    max-[640px]:grid-cols-1
    max-[640px]:gap-2
    max-[640px]:mb-[22px]
    max-[640px]:pr-[34px]

    after:content-['']
    after:absolute after:right-[82px] after:top-1/2
    after:w-[68px]
    after:border-t after:border-dashed after:border-brand-line

    max-[640px]:after:right-[26px]
    max-[640px]:after:w-2
  `;

  return (
    <section
      className="
        experience-section
        mx-auto max-w-[1440px]
        px-5 pb-20
        pt-[18px]
        min-[641px]:max-[1023px]:mt-[65px]
        max-[640px]:mt-[55px]
        lg:mt-28 lg:px-8 lg:pt-5
      "
      id="experiences"
      aria-labelledby="experience-title"
    >
      <h2
        className="
          experience-section__mobile-title
          mb-8 text-center text-xl
          font-extrabold lg:hidden
        "
        id="experience-title"
      >
        پروژه‌ها و تجربیات
      </h2>

      <div
        className="
          experience-timeline
          relative pr-[165px]

          max-lg:pr-0

          before:content-['']
          before:absolute before:top-0 before:bottom-0
          before:right-[74px]
          before:border-r before:border-dashed
          before:border-brand-line

          max-lg:before:right-[29px]
          max-[640px]:before:right-[13px]
        "
      >
        {experiences.map((item, index) => (
          <article className={cardClass} key={item.year}>
            <div
              className="
                experience-card__content
                col-start-1 row-start-1
                flex min-h-[145px] flex-col
                justify-center
                rounded-2xl border border-brand-line
                bg-white
                px-7 py-[22px]

                max-lg:col-start-2
                max-lg:min-h-[132px]
                max-lg:p-[18px]

                max-[640px]:col-start-1
                max-[640px]:row-start-1
                max-[640px]:px-4
                max-[640px]:py-[17px]
              "
            >
              <h3
                className="
                  experience-card__title
                  mb-4 text-base
                  font-black text-[#050505]

                  max-[640px]:mb-[9px]
                  max-[640px]:text-sm
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  experience-card__description
                  m-0 text-right
                  text-[15px] leading-[2]
                  text-[#333]

                  max-[640px]:text-xs
                  max-[640px]:leading-[1.9]
                "
              >
                دومین مرکز خرید بزرگ شرق خاورمیانه و بزرگ‌ترین مرکز خرید ایران،
                اصفهان سیتی سنتر نام دارد که در حومه شهر تاریخی اصفهان بنا شده
                است.
              </p>
            </div>

            <div
              className="
                experience-card__meta
                col-start-2 row-start-1
                flex flex-col items-end
                gap-[5px] whitespace-nowrap

                max-lg:col-start-1
                max-lg:items-center

                max-[640px]:col-start-1
                max-[640px]:row-start-2
                max-[640px]:flex-row
                max-[640px]:justify-start
                max-[640px]:items-center
                max-[640px]:gap-[7px]
                max-[640px]:pr-1
              "
            >
              <span
                className="
                  experience-card__year-label
                  text-[13px] text-[#8b8178]
                "
              >
                سال احداث:
              </span>

              <strong
                className="
                  experience-card__year
                  text-[15px] font-black
                "
              >
                {item.year}
              </strong>
            </div>

            <div
              className="
                experience-card__logo-wrap
                col-start-3 row-start-1
                flex size-[104px]
                items-center justify-center
                rounded-[17px]
                bg-brand-gold
                max-lg:hidden
              "
            >
              <img
                className="
                  experience-card__logo
                  max-h-[75%] max-w-[75%]
                  object-contain
                  [filter:sepia(1)_saturate(0.8)_brightness(0.78)]
                "
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />
            </div>

            <span
              className="
                experience-card__dot
                absolute right-[68px] top-1/2
                size-[15px]
                -translate-y-1/2 translate-x-1/2
                rounded-full
                border border-brand-line
                bg-brand-gold
                shadow-[inset_0_0_0_3px_var(--color-brand-cream)]

                max-[640px]:right-[13px]
                max-[640px]:size-[13px]
              "
              aria-hidden="true"
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Articles;
