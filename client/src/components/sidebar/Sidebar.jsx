import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://drive.google.com/file/d/1xfug4DolgBdBBjccOZ5OcCCYoRSmAFS6/view?usp=share_link"
          alt=""
        />
        <p>
          I am Sachin Kumar.Currently doing MCA from VIT Vellore
          university.💛Sachin
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com/friends/suggestions/?profile_id=100014886575463">
            <i className="sidebarIcon fab fa-facebook-square"></i>
          </a>
          <a href="https://twitter.com/SachinS94086583">
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </a>
          <a href="">
            <i className="sidebarIcon fab fa-pinterest-square"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
