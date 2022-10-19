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
  })


  return (
    <div className='categories'>
      <h6>Categories</h6>
      <ul className='clearfix'>
        {categoryMenu.map((categories) => {
          return (
            <CategoryMenu
              name={categories.name}
            />
          )
        })}
      </ul>
    </div>
  )
};

export default CategoryMenu;