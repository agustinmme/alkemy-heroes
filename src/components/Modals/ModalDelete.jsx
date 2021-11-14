import React from 'react'
import PropTypes from "prop-types";
function ModalDelete({id,name="",deleteHero}) {
    return (
       
<div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">You sure want to eliminate {name}?</h5>
      </div>
      <div className="modal-footer ">
        <div className="d-flex ">
        <button type="button" className="btn btn-secondary m-1" data-bs-dismiss="modal">No</button>
        <button type="button" className="btn btn-danger m-1 active"  data-bs-dismiss="modal" onClick={deleteHero}>Yes</button>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

ModalDelete.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  deleteHero: PropTypes.func.isRequired,
};

export default ModalDelete
