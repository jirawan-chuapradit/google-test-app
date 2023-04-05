import "./Navbar.css";
import Profile from "../images/profile.jpg"
import {useState} from 'react'
const Navbar = () => {
  const [open, setOpen] = useState(false)

  let more_app;
  const openMoreApp = () => {
    return (
      <ul style={{ listStyle: 'none', border: '1px solid #000' }}>
        <li>User data </li>
        <li>Edit</li>
      </ul>
    )
  }

  const openDropDown = () =>{
    console.log("click !!!")
    console.log(open)
    setOpen(!open)
  }

  return (
    <div className="navbar">
      <div className="rightLinks">
          <a href="/gmail">
            Gmail
          </a>
          <a href="/images" >
            ค้นรูป
          </a>
          <div className="container">
            <svg focusable='false' viewBox='0 0 24 24' onClick={openDropDown}>
                <path d='M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z' />
            </svg>
            {
              open && (
                <div className="dropdown">
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
              </ul>
            </div>
              )
            }
          </div>
          
          <img src={Profile} alt="บัญชี google" className="profile" ></img>
      </div>
    </div>
  );
};

export default Navbar;
