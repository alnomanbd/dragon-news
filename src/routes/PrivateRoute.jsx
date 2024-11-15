import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  // console.log(location)
    if (loading) {
        return <LoadingSpinner/>
    }
    if (user && user?.email) {
        return children;
    }
  return (
    <Navigate state={location.pathname} to={'/auth/login'}/>
  )
}

export default PrivateRoute