import PropTypes from "prop-types";
import LoadingSpinner from "../Components/Common/LoadingSpinner";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (user) return children;

    if (loading) return <LoadingSpinner />

    return <Navigate to="/login" state={{ from: location.pathname }} />
};

PrivateRouter.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRouter;