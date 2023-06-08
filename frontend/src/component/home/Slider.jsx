import {Component} from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import axios from "axios";
import Card from "./Card";

class Slider extends Component {
    state = {
        users: []
    };

    async componentDidMount() {
        const response = await axios.get('/blog/')
        this.setState({users: response.data.results})
    };

    render() {
        return (<>
            {this.state.users.map((user, id) => {
                return (
                    <MDBCarousel showControls showIndicators dark fade style={{marginTop: "15px"}} touch={true}>
                        <MDBCarouselItem
                            className='w-100 d-block'
                            itemId={id}
                            src={user.image}
                            alt='image'>
                            <h5>{user.title}</h5>
                            <p>{user.subjects}</p>
                        </MDBCarouselItem>
                    </MDBCarousel>
                );
            })}
            <Card/>
        </>);
    };
}

export default Slider;