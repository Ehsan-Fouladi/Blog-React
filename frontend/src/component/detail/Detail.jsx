import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

const Detail = () => {
    const {id} = useParams()
    const [detail, setDetail] = useState({})

    const getdetail = async () => {
        const response = await axios.get(`/blog/list/detail/${id}`)
        setDetail(response.data)
    }

    useEffect(() => {
        getdetail()
    }, [])

    const getTime = (time)=>{
        return new Date(time.create).toLocaleDateString()
    }

    return (
        <div style={{textAlign: "-moz-center", marginTop: '2%'}}>
            <MDBCard style={{maxWidth: '540px', borderRadius: "20px"}}>
                <MDBRow className='g-0'>
                    <MDBCol md='4'>
                        <MDBCardImage src={detail.image} alt=''
                                      fluid style={{borderRadius: "10px"}}/>
                    </MDBCol>
                    <MDBCol md='8'>
                        <MDBCardBody>
                            <MDBCardTitle>{detail.title}</MDBCardTitle>
                            <MDBCardTitle className="text-info">{detail.fullname}</MDBCardTitle>
                            <MDBCardText>{detail.subjects}</MDBCardText>
                            <MDBCardText>
                                <small className='text-muted'>{getTime(detail)}</small>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </div>
    )
}
export default Detail;