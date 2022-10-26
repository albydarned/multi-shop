import './App.css';
import Container from './components/Layout/Container';
import NavBar from './components/Layout/NavBar';
import Layout from './components/Layout/Layout';
import CategoryList from './components/Layout/Categories/CategoryList';
import ProductSidebar from './components/Products/ProductSidebar';
import FeaturedProducts from './components/Products/FeaturedProducts';
import ProductsByCategory from './components/Products/ProductsByCategory';

let content;

function App() {

    switch (window.location.pathname) {
        case "/categories":
            content = 
                <> 
                    <CategoryList />
                </>;
            break;

        case window.location.pathname.match(/\/products\/category\/[a-z,A-Z]/)?.input:
            let parts = window.location.pathname.split("/");
            let category = parts[parts.length - 1];

            content = 
                <> 
                    <Container className="container-fluid">
                        <Container className="row px-xl-5">
                            <ProductSidebar />
                            <ProductsByCategory category={category} />
                        </Container>
                    </Container>
                </>;
            break;

        case window.location.pathname.match(/\/products\/category\/[0-9]/)?.input:
            let parts = window.location.pathname.split("/");
            let productId = parts[parts.length - 1];

            content = 
                <> 
                    <Container className="container-fluid">
                        <Container className="row px-xl-5">
                            <ProductSidebar />
                            <ProductsByCategory category={category} />
                        </Container>
                    </Container>
                </>;
            break;

        default:
            content = <></>;
        break;
    }

    return (
        <>
            <Layout>
                <NavBar />
                {content}
            </Layout>
        </>
    )
};


export default App;
