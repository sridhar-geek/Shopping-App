import {categoriesData } from "../../Data.jsx";
import CategoryItems from "./CategoryItems.jsx"
import "../../Css/CategoriesItems.css";


function Categories() {
  return (
    <>
      <h3 className="heading">Choose your style</h3>
      <div className="catge-con">
        {categoriesData.map((item)=>{
          <CategoryItems data={item}/>
          console.log("this is coming from catagories")
        })}
      </div>
    </>
  )
}

export default Categories;