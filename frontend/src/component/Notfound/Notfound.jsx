import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import {NavLink} from "react-router-dom";

const Notfound = () => {
  const [gridModal, setGridModal] = useState(false);

  const toggleShow = () => setGridModal(!gridModal);

  return( <div style={{textAlign:'center', marginTop:"50px", marginBottom:"50px"}}>
    <MDBBtn onClick={toggleShow} className="btn btn-danger">Not Found</MDBBtn>

    <MDBModal tabIndex='-1' show={gridModal} setShow={setGridModal}>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Not Found</MDBModalTitle>
            <MDBBtn
                type='button'
                className='btn-close'
                color='none'
                onClick={toggleShow}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <div className='container-fluid bd-example-row'>
              <h3 className="text-warning text-opacity-75">Sorry The Item Page Was Not Found</h3>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <NavLink className="ripple ripple-surface ripple-surface-light btn btn-warning" to='/'>Back To Home</NavLink>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  </div>)
}
export default Notfound