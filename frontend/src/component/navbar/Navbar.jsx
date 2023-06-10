import {useState} from 'react';
import {NavLink} from "react-router-dom";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBBtn,
    MDBCollapse
} from 'mdb-react-ui-kit';

const Navbar = () => {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' dark bgColor='primary'>
            <MDBContainer fluid>
                <NavLink className="navbar-brand" to='/'>Blog Api</NavLink>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas/>
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <NavLink className="nav-link" to='/'>Home</NavLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <NavLink className="nav-link" to='list/'>Article</NavLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <NavLink className="nav-link" to='login/'>Login</NavLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <NavLink className="nav-link" to='register/'>Register</NavLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <NavLink className="nav-link" to='panel/'>Panel User</NavLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                    <form className='d-flex input-group w-auto'>
                        <input type='search' className='form-control' name="q" placeholder='Type query' aria-label='Search'/>
                        <MDBBtn color='dark'>Search</MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
export default Navbar;