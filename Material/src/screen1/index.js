import { createStackNavigator } from 'react-navigation'
import HomePage from './HomePage'
import DetailsScreen from './DetailsScreen'
import {
    TSHIRT_HOME,
    TSHIRT_DETAILS
} from '../routes'

export default createStackNavigator(
    {
        [TSHIRT_HOME]: HomePage,
        [TSHIRT_DETAILS]: DetailsScreen
    },
    {
        headerMode: 'none'
    }
)