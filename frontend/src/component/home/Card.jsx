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
    MDBBtn,
    MDBCardSubTitle,
} from 'mdb-react-ui-kit';
import axios from "axios";
import Loading from "../loading/loading";

class Card extends Component {
    state = {
        users: [], isLoading: true
    };

    async componentDidMount() {
        const response = await axios.get('/blog/')
        console.log(response)
        setTimeout(()=>{
            this.setState({users: response.data.results, isLoading: false})
        }, 1000)
    }

    datetime = (time) => {
        return new Date(time.create).toLocaleTimeString()
    }

    render() {
        return (<MDBRow className='row-cols-1 row-cols-md-3 g-4'
                        style={{marginTop: "1%", marginLeft: "0px", marginRight: "0px"}}>
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
                                            className="text-opacity-75 text-uppercase text-primary">{user.fullname}</MDBCardSubTitle>
                                        <MDBCardText>{user.subjects}</MDBCardText>
                                    </MDBCardBody>
                                    <MDBBtn>link</MDBBtn>
                                    <MDBCardFooter>
                                        <small className='text-muted'>{this.datetime(user)}</small>
                                    </MDBCardFooter>
                                </MDBCard>
                            </MDBCol>)
                    }))}
            </MDBRow>);
    };
}

export default Card;