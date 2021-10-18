import React from 'react'
import storage from '../../services/storage'
function CardSearch({name,img,id}) {

    return (
        <div className="card mt-2 mx-5">
          <div className="d-flex justify-content-between align-items-center">
            <div className="user d-flex flex-row align-items-center">
              <img
                src={img}
                width="150"
                className="user-img "
              />
              <span>
                <p className="fw-bold text-primary m-3">
                  {name}
                </p>
              </span>
            </div>
            <button className="btn btn-primary m-3" onClick={()=>{storage.addHero(id)}}>AGREGAR</button>
          </div>
        </div>
    )
}

export default CardSearch
