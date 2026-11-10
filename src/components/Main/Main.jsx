import Articles from "../Articles/Articles";
import Header from "../Header/Header";
import Partner from "../Partner/Partner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
function Main() {
  return (
  
      <main className="page-main pt-21.5">
        <Navbar/>
        <Header />
        <Articles />
        <Partner />
        <Footer />
      </main>

  );
}

export default Main;
