import {useLocation} from "react-router-dom"

const NotFound404 = ({}) => {
    const location = useLocation();

    return(
        <div>
            <h2>Page {location.pathname} Not Found</h2>
        </div>
    )
}
export default NotFound404;