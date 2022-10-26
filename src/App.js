import './App.css';
import Container from './components/Layout/Container';
import NavBar from './components/Layout/NavBar';
import Breadcrumb from './components/Layout/Breadcrumb';
import Layout from './components/Layout/Layout';
import CategoryList from './components/Layout/Categories/CategoryList';
import ProductSidebar from './components/Products/ProductSidebar';
import FeaturedProducts from './components/Products/FeaturedProducts';
import ProductsByCategory from './components/Products/ProductsByCategory';
import ProductDetail from './components/Products/ProductDetail';
import ProductContext from './store/product-context';
import { ProductContextProvider } from './store/product-context';

let content;

function App() {
    let crumbs = [
        {
            name: 'Home',
            path: '/'
        }
    ];
    

    switch (window.location.pathname) {
        case "/categories":
            crumbs.push({
                name: 'Categories',
                path: '/categories'
            })

            content = 
                <> 
                    <CategoryList />
                </>;
            break;

        case window.location.pathname.match(/\/products\/category\/[a-z,A-Z]/)?.input:
            let categoryParts = window.location.pathname.split("/");
            let category = categoryParts[categoryParts.length - 1];
            let words = category.replace("-", " ").split(" ");
            let categoryFormatted = words.map((word) => {
                return word[0].toUpperCase() + word.substring(1);
            }).join(" ");

            crumbs.push({
                name: 'Categories',
                path: '/categories'
            });

            crumbs.push({
                name: categoryFormatted,
                path: '/categories/' + category
            });

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

        case window.location.pathname.match(/\/products\/[0-9]*/)?.input:
            let productParts = window.location.pathname.split("/");
            let productId = productParts[productParts.length - 1];

            crumbs.push({
                name: "Product Detail",
                path: '/products/' + productId
            });

            content = 
                <> 
                    <ProductDetail id={productId} />
                </>;
            break;

        default:
            content = <>
                <FeaturedProducts />
            </>;
        break;
    }

    return (
        <>
            <ProductContextProvider>
                <Layout>
                    <NavBar />
                    <Breadcrumb crumbs={crumbs} />
                    {content}
                </Layout>
            </ProductContextProvider>
        </>
    )
};


export default App;
