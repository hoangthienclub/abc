import { createStackNavigator } from 'react-navigation';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
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
    }
}, {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: {
        backgroundColor: 'transparent'
    },
    transparentCard: true,
    transitionConfig: () => ({ //Does not work
        containerStyle: {
            backgroundColor: 'transparent',
        },
    }),
})

export default createAppContainer(routes);