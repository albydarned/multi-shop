import TopBar from "./TopBar";
import Footer from "./Footer";

const Layout =({children}) => {
    return (
        <>
        <TopBar />
        <div id="contents">
            <div className="clearfix">
                {children}
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Layout;