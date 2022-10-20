import axios from 'axios';
import { useEffect, useState } from 'react';

const CategoryList = () => {

    //declare state variable to hold the list of categories    
    const [categoryList, setCategoryList] = useState([]);

    //define a data retrieval function
    const getCategoryList = async () => {
    try {
      const result = await axios.get('https://dummyjson.com/products/');
      console.log(result.data.products);
      //update state variable with data from API
      setCategoryList(result.data.products);
      } catch(error) {
        console.log(error);
      }
    }   
    
    //call the function, this only renders once instead of going into a loop
    useEffect(() => {
        getCategoryList();
    }, [])

    return (
        <div className='category'>
            <h6>Categories</h6>
            <ul className='clearfix'>
                {categoryList.map((product)=> {
                    return(
                    <CategoryList
                        id={product.id}
                        category={product.category}
                    />
                    )
                })}
            </ul>
        </div>
        
    )
};

export default CategoryList;