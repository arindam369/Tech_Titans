import RegisterPage from "@/pages/register";
import AuthContext from "@/store/AuthContext";
import { useContext } from "react";

export default function ProtectedRoute(Component){
    const Auth = (props)=>{
        const authCtx = useContext(AuthContext);
        console.log(authCtx.isAuthenticated);
        if(!authCtx.isAuthenticated){
            return (
                <RegisterPage/>
            )
        }
        return (<Component {...props} />);
    };
    if(Component.getInitialProps){
        Auth.getInitialProps = Component.getInitialProps;
    }
    return Auth;
}