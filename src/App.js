import './App.css';
import NavBar from './components/Layout/NavBar';
import Layout from './components/Layout/Layout';
import CategoryList from './components/Layout/Categories/CategoryList';

let content;

function App() {

    switch (window.location.pathname) {
        case "/categories":
            content = 
                <> 
                    <CategoryList />
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
