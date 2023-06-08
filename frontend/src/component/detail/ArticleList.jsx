import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBRow,
    MDBCol, MDBCardSubTitle,
} from 'mdb-react-ui-kit';
import {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Pageintion from "../nav/pageintion";

class ArticleList extends Component {
    state = {
        users: [], isLoading: true
    };

    async componentDidMount() {
        const response = await axios.get('/blog/list/')
        setTimeout(() => {
            this.setState({users: response.data, isLoading: false})
        }, 1000)
    }

    datetime = (time) => {
        return new Date(time.create).toDateString()
    }

    render() {
        return (
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'
                    style={{marginLeft: "0px", marginRight: "0px", marginTop: "2px"}}>
                {this.state.users.map((article) => {
                    return (
                        <MDBCol>
                            <MDBCard className='h-100'>
                                <MDBCardImage
                                    src={article.image}
                                    alt='image'
                                    position='top'
                                />
                                <MDBCardBody>
                                    <MDBCardTitle>{article.title}</MDBCardTitle>
                                    <MDBCardSubTitle
                                        className="text-opacity-75 text-uppercase text-primary">{article.fullname}
                                    </MDBCardSubTitle>
                                    <MDBCardText>
                                        {article.subjects}
                                    </MDBCardText>
                                </MDBCardBody>
                                <Link className="ripple ripple-surface btn btn-primary"
                                      to={`/list/detail/${article.id}`}>detail</Link>
                                <MDBCardFooter>
                                    <small className='text-muted'>{this.datetime(article)}</small>
                                </MDBCardFooter>
                            </MDBCard>
                        </MDBCol>
                    );
                })};
                <Pageintion/>
            </MDBRow>
        )
    }
}

export default ArticleList;