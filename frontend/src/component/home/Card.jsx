import {Component} from "react";
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBRow,
    MDBCol,
    MDBCardSubTitle,
} from 'mdb-react-ui-kit';
import axios from "axios";
import Loading from "../loading/loading";
import {Link} from "react-router-dom";

class Card extends Component {
    state = {
        users: [], isLoading: true
    };

    async componentDidMount() {
        const response = await axios.get('/blog/')
        setTimeout(() => {
            this.setState({users: response.data.results, isLoading: false})
        }, 1000)
    }

    datetime = (time) => {
        return new Date(time.create).toLocaleDateString()
    }

    render() {
        return (<div>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <h1 style={{marginTop: "3%"}} className="text-uppercase font-monospace">new Article post:</h1>
                <Link className='btn btn-primary text-uppercase text-light' to='list/'>all article</Link>
            </div>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'
                    style={{marginLeft: "0px", marginRight: "0px"}}>
                {this.state.isLoading ? (<Loading/>) : (this.state.users.map((user) => {
                    return (<MDBCol>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src={user.image}
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>{user.title}</MDBCardTitle>
                                <MDBCardSubTitle
                                    className="text-opacity-75 text-uppercase text-primary">{user.fullname}
                                </MDBCardSubTitle>
                                <MDBCardText>{user.subjects}</MDBCardText>
                            </MDBCardBody>
                            <Link className="ripple ripple-surface btn btn-primary" to={`/list/detail/${user.id}`}>detail</Link>
                            <MDBCardFooter>
                                <small className='text-muted'>{this.datetime(user)}</small>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>)
                }))}
            </MDBRow>
        </div>);
    };
}

export default Card;