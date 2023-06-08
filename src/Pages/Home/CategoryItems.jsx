import "../../Css/CategoriesItems.css";

function CategoryItems({img,title}) {
  return (
     <div className="cat-container">
        <img src={img} alt="" className="cat-img"/>
        <div className="cat-info">
            <h3 className="cat-title">{title}</h3>
            <button>Shop Now</button>
        </div>
    </div>
  )
}

export default CategoryItems;