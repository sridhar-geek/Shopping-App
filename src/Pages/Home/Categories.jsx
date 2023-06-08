import {catagoriesData } from "../../Data.jsx";
import CategoryItems from "./CategoryItems.jsx"

function Categories() {
  return (
    <div>
        {catagoriesData.map((item)=>{
            <CategoryItems />
        })}
    </div>
  )
}

export default Categories;