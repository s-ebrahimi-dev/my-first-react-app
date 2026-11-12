import Button from "../Button/Button";
function Navbar() {
  return (
    <>
      <nav
        className="site-navbar fixed inset-x-0 top-0 z-50 bg-brand-green text-white shadow-sm"
        aria-label="ناوبری اصلی"
      >
        <div className="site-navbar__inner mx-auto flex max-w-[1440px] items-center justify-between px-5 lg:px-8">
          <a
            className="site-navbar__brand text-xl font-black tracking-tight"
            href="#"
            aria-label="مسعود صرامی"
          >
            مسعود صرامی
          </a>

          <div className="site-navbar__links hidden items-center gap-7 lg:flex">
            <a className="site-navbar__link" href="#">
              صفحه اصلی
            </a>
            <a
              className="site-navbar__link site-navbar__link--dropdown"
              href="#"
            >
              فروشگاه <span>⌄</span>
            </a>
            <a className="site-navbar__link" href="#experiences">
              تجربیات
            </a>
            <a className="site-navbar__link" href="#">
              مقالات
            </a>
            <a className="site-navbar__link" href="#">
              تماس با ما
            </a>
          </div>

          <div className="site-navbar__actions hidden items-center gap-3 lg:flex">
            <a
              className="site-navbar__phone"
              href="tel:09000000000"
              aria-label="تماس تلفنی"
            >
              ♧
            </a>
            <a className="site-navbar__cart" href="#">
              🛒 <span>سبدخرید</span>
            </a>
            <a className="site-navbar__login" href="#">
             <Button isLogin = {false}  />
            </a>
          </div>

          <button
            className="site-navbar__toggle flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg bg-brand-deep lg:hidden"
            type="button"
            aria-label="باز کردن منو"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <span className="site-navbar__toggle-line"></span>
            <span className="site-navbar__toggle-line"></span>
            <span className="site-navbar__toggle-line"></span>
          </button>
        </div>
      </nav>
      {/* Mobile-Nav-Menu */}
      <div
        className="navmenu fixed inset-x-0 top-17 z-40 hidden bg-brand-green px-6 py-5 text-white shadow-xl lg:hidden"
        id="mobile-menu"
      >
        <div className="navmenu__items flex flex-col gap-5">
          <a className="navmenu__link" href="#">
            صفحه اصلی
          </a>
          <a className="navmenu__link" href="#">
            فروشگاه
          </a>
          <a className="navmenu__link" href="#experiences">
            تجربیات
          </a>
          <a className="navmenu__link" href="#">
            مقالات
          </a>
          <a className="navmenu__link" href="#">
            تماس با ما
          </a>
          <a className="navmenu__link" href="#">
            ورود/عضویت
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
