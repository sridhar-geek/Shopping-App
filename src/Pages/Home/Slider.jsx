import { useState } from "react";
import "../../Css/Slider.css";
import { sliderData } from "../../Data"
import { BiLeftArrow,BiRightArrow } from "react-icons/bi";

function Slider() {

  let [pageIndex, setPageIndex]=useState(0);

  const handleClick=(direction)=>{
    if (direction==="left") {
        setPageIndex(pageIndex > 0 ? pageIndex-1 : 4 );   
    }else{
      setPageIndex(pageIndex < 4? pageIndex+1 :0);
    }
  }

  console.log(pageIndex);

  return (
    <div className="slider-container">
            <BiLeftArrow className="left arrow" onClick={()=> handleClick("left")} />
          <div className="wrapperPage" style={{transform:`translate(${pageIndex*-100}vw)`}}>
                {sliderData.map((page)=>(
                  <div className="slidePage" style={{backgroundColor:page.bg}}>
                    <div className="slideImage">
                      <img src= {page.img} alt="Imagine something" className="img-img" />
                    </div>
                    <div className="slideDesc">
                      <h1>{page.title}</h1>
                      <p>{page.desc}</p>
                      <button>Shop Now</button>
                    </div>
                </div>
                  ))}
            </div>    
            <BiRightArrow className="right arrow" onClick={()=> handleClick("right")} />
        </div>
  )
}

export default Slider;