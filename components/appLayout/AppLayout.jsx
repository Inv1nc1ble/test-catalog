import Header from "../header/Header";
import Footer from "../footer/Footer";

const AppLayout = ({ children, pageProps }) => {
  // const [mobileMenu, setMobileMenu] = useState(false);
  // const [scrollPos, setScrollPos] = useState(0);

  return (
    <div className="app-layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
