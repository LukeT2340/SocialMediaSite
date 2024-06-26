import { useFetchStatuses } from "../../hooks/useFetchStatuses"
import Status from './Status';


/* 
This component displays recent statuses. This component is used on the home page to fetch 
recent statuses from all users and also on the profile page to fetch recent statuses for 
that particular user
*/
const Statuses = ({clientProfile, pageProfile, onlyFetchOwnStatuses}) => {
    const { statuses, areStatusesLoading } = useFetchStatuses(20, 1, onlyFetchOwnStatuses ? pageProfile._id : null) // Fetch 20 statuses
    if (areStatusesLoading) {
        return (
            <div></div>
        )
    }

    return (
        <div className="d-flex flex-column mb-3 w-100">
            {statuses && statuses.map((status) => (
                <Status key={status._id} status={status} clientsProfile={clientProfile} />
            ))}
        </div>
    )
}

export default Statuses