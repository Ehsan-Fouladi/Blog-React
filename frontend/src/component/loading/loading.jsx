import Skeleton from "react-loading-skeleton";
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText} from 'mdb-react-ui-kit';

const Loading = () => {
    return Array(6).fill({}).map(() => {
        return (
            <MDBCard className='h-100'>
                <Skeleton height={100} width={100}/>
                <MDBCardBody>
                    <MDBCardTitle>
                        <Skeleton width={200} count={2}/>
                    </MDBCardTitle>
                    <MDBCardText>
                        <Skeleton height={100}/>
                    </MDBCardText>
                    <Skeleton height={100}/>
                </MDBCardBody>
            </MDBCard>
        )
    })
};
export default Loading;