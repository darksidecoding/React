import { createStackNavigator } from 'react-navigation'
import HomePage from './HomePage'
import DetailsScreen from './DetailsScreen'
import {
    HOODY_HOME,
    HOODY_DETAILS
} from '../routes'

export default createStackNavigator(
    {
        [HOODY_HOME]: HomePage,
        [HOODY_DETAILS]: DetailsScreen
    },
    {
        headerMode: 'none'
    }
)