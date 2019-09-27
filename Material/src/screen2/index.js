import { createStackNavigator } from 'react-navigation'
import HomePage from './HomePage'
import DetailsScreen from './DetailsScreen'
import {
    SNAP_HOME,
    SNAP_DETAILS
} from '../routes'

export default createStackNavigator(
    {
        [SNAP_HOME]: HomePage,
        [SNAP_DETAILS]: DetailsScreen
    },
    {
        headerMode: 'none'
    }
)