import { useSelector } from "react-redux";
import { Route, Navigate, useLocation } from "react-router";

export const PrivateRoute = ({ path, ...props }) => {
    const { isUserLoggedIn } = useSelector((state) => state.user);
    console.log("isUserLoggedIn", isUserLoggedIn);

    const location = useLocation()

    return isUserLoggedIn ? (
        <Route exact {...props} path={path} />
    ) : (
        <Navigate state={{ from: location.pathname }} replace to='/login' />
    );
}