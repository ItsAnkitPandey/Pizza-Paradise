import React from 'react'

const Menu = () => {
  return (
    <div className='about' id='menu'>
       <div className="container">
          <div className="row">            
            <div className="col-6">
              <div className="about__img">
                <img src="\img\pizza.jpg" alt="Pizza" />
              </div>
            </div>
            <div className="col-6 p-25">
            <h3>
                The Pizza Menu
            </h3>
            <h1>CHICAGO THIN CRUST</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perspiciatis magni, quae ea corporis deserunt fuga eligendi eum in odit?</p>
            <div className="about__btn">
                <a href="" className='btn btn-smart'>READ MORE</a>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Menu
