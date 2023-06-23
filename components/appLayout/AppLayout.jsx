import Header from "../header/Header";

const AppLayout = ({ children, pageProps }) => {
	// const [mobileMenu, setMobileMenu] = useState(false);
	// const [scrollPos, setScrollPos] = useState(0);

	return (
		<div className="app-layout">
			<Header />
			{children}
		</div>
	);
};

export default AppLayout;
