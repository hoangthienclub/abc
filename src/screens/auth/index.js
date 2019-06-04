import { createStackNavigator } from 'react-navigation';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import Register from './Register';
import Login from './Login';
import { createAppContainer } from "react-navigation";

const routes = createStackNavigator({
    Login: {
        screen: Login
    },
    ForgotPassword: {
        screen: ForgotPassword
    },
    ResetPassword: {
        screen: ResetPassword
    },
    Register: {
        screen: Register
    }
}, {
        mode: 'modal',
        headerMode: 'none',
    })

export default createAppContainer(routes);