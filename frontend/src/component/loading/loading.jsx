import Skeleton from "react-loading-skeleton";
import {MDBRow} from "mdb-react-ui-kit";

const Loading = () => {
    return Array(6).fill({}).map(() => {
        return (
            <div className='col'>
                <Skeleton className='card h-100' circle={true}/>
                <div className='card-body'>
                    <Skeleton className='card-title'/>
                </div>
                <div className='card-footer'><Skeleton className='text-muted'/></div>
            </div>
        )
    })
};
export default Loading;