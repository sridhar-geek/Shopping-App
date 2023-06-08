// import { styled } from '@linaria/react';

// const Title = styled.h1`
//   font-fize:2rem;
// `;

// const Container = styled.div`
//   color: ${props => props.color};
//   border: 1px solid red;

//   &:hover {
//     border-color: blue;
//   }

//   ${Title} {
//     margin-bottom: 24px;
//   }
// `;

// Then use the resulting component

import "../Css/Navbar.css";
import { BiSearchAlt } from "react-icons/bi";
import {  BsCart2 } from "react-icons/bs";
function Navbar() {

  return (
      // <Container color="#333">
      //   <Title>Hello world</Title>
      // </Container>
      <div className="container">

          <div className="wrapper">
        
            <div className="left">
              <span className="language">EN</span>
              <div className="search">
                <input type="text" name="" id="inp" placeholder="Search here"/>
                <BiSearchAlt style={{color:"grey",fontSize:20}}/> 
              </div>
            </div>

            <div className="center">Shopping App</div>

            <div className="right">
              <div className="reg-sig">REGISTER </div>
              <div className="reg-sig">SIG IN</div>
              <div className="reg-sig"><BsCart2 fontSize={25}/></div>  
            </div>

          </div>
          
        </div>
  )
}

export default Navbar