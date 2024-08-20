import React from 'react'
import { navbar, navlink } from 'bootstrap'

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" >عربيتي</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll" >
              <li class="nav-item">
                <a  style={{textDecoration:'none'}} class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a  style={{textDecoration:'none'}} class="nav-link" href="/Old">Old cars</a>
              </li>
              <li class="nav-item">
                <a  style={{textDecoration:'none'}} class="nav-link" href="/Card1">All vhecicles</a>
              </li>


            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
