import React from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

const Pageintion = () => {
  return(
      <>
          <nav aria-label='...'>
              <MDBPagination className='mb-0' center style={{marginTop:"1%"}}>
                  <MDBPaginationItem disabled>
                      <MDBPaginationLink href='#' tabIndex={-1} aria-disabled='true'>
                          Previous
                      </MDBPaginationLink>
                  </MDBPaginationItem>
                  <MDBPaginationItem>
                      <MDBPaginationLink href='#'>1</MDBPaginationLink>
                  </MDBPaginationItem>
                  <MDBPaginationItem active aria-current='page'>
                      <MDBPaginationLink href='#'>
                          2 <span className='visually-hidden'>(current)</span>
                      </MDBPaginationLink>
                  </MDBPaginationItem>
                  <MDBPaginationItem>
                      <MDBPaginationLink href='#'>3</MDBPaginationLink>
                  </MDBPaginationItem>
                  <MDBPaginationItem>
                      <MDBPaginationLink href='#'>Next</MDBPaginationLink>
                  </MDBPaginationItem>
              </MDBPagination>
          </nav>
      </>
  )
}
export default Pageintion