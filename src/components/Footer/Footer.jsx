import React from "react";

function Footer() {
  return (

      <footer className="site-footer bg-brand-deep text-white">
        <div className="site-footer__main mx-auto flex max-w-[1440px] flex-col items-center px-5 py-12 lg:px-8">
          <a className="site-footer__brand text-lg font-black" href="#">
            مسعود صرامی
          </a>
          <nav
            className="site-footer__nav mt-14 flex flex-wrap items-center justify-center gap-x-5 gap-y-4"
            aria-label="پیوندهای پایین صفحه"
          >
            <a className="site-footer__link" href="#">
              صفحه اصلی
            </a>
            <a className="site-footer__link" href="#">
              خدمات
            </a>
            <a className="site-footer__link" href="#">
              درباره من
            </a>
            <a className="site-footer__link" href="#">
              کسب و کار
            </a>
            <a className="site-footer__link" href="#">
              تماس با ما
            </a>
          </nav>
        </div>
        <div className="site-footer__bottom bg-[#002521]">
          <div className="site-footer__bottom-inner mx-auto flex max-w-[1440px] flex-col-reverse items-center justify-between gap-5 px-5 py-4 sm:flex-row lg:px-8">
            <div
              className="site-footer__socials flex items-center gap-3"
              aria-label="شبکه‌های اجتماعی"
            >
              <a
                className="site-footer__social"
                href="#"
                aria-label="اینستاگرام"
              >
                ◎
              </a>
              <a className="site-footer__social" href="#" aria-label="واتساپ">
                ◉
              </a>
              <a className="site-footer__social" href="#" aria-label="تلگرام">
                ➤
              </a>
            </div>
            <p className="site-footer__copyright text-sm">
              تمامی حقوق این وبسایت محفوظ می‌باشد.
            </p>
          </div>
        </div>
      </footer>

  );
}

export default Footer;
