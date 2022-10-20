import { useEffect, useState } from "react";
import axios from 'axios';
import '../../../App.css';

const CategoryMenu = () => {
  //declare a state variable
  const [categoryMenu, setCategoryMenu] = useState([]);

  //create a retrieval function
  const getCategoryMenu = async () => {
    try {
      const result = await axios.get('https://dummyjson.com/products/categories');
      setCategoryMenu(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  //call the function
  useEffect(() => {
    getCategoryMenu();
  }, []);


  return (
    <div className="col-lg-3 d-none d-lg-block">
      <a
        className="btn d-flex align-items-center justify-content-between bg-primary w-100"
        data-toggle="collapse"
        href="#navbar-vertical"
        style={{height: '65px', padding: '30px'}}
      >
        <h6 className="text-dark m-0">
          <i className="fa fa-bars mr-2"></i>Categories
        </h6>
        <i className="fa fa-angle-down text-dark"></i>
      </a>
      <nav
        className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
        id="navbar-vertical"
        style={{width: `calc(100% - 30px)`, zIndex: 999}}
      >
        <div className="navbar-nav w-100">
          {categoryMenu.map((category) => {
            let categoryFormatted = category.replace("-", " ");
            let words = categoryFormatted.split(" ");

            return (
              <a href={'/products/category/' + category} className="nav-item nav-link" key={category}>
                {
                  words.map((word) => {
                    return word[0].toUpperCase() + word.substring(1);
                  }).join(" ") 
                }
              </a>
            )
          })}
        </div>
      </nav>
    </div>
  )
};

export default CategoryMenu;