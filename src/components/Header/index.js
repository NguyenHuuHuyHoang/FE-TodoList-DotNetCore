import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function Header() {
  return (
    <div className="container">
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-3 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
          Demo ToDo
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <Link>
              <Button color="primary" className="mr-2">
                Đăng nhập
              </Button>
            </Link>
            <Link>
              <Button color="success">Đăng ký</Button>
            </Link>
          </li>
        </ul>
      </nav>
      
      

      {/* <Link to="/">Home</Link>
      <Link to="/courses/frontend">Course List</Link>
      <Link to="/course/bootcamp">Course Detail</Link> */}
    </div>
  );
}
