import { createStackNavigator } from 'react-navigation'
import HomePage from './HomePage'
import DetailsScreen from './DetailsScreen'
import {
    MATERIAL_HOME,
    MATERIAL_DETAILS
} from '../routes'

export default createStackNavigator(
    {
        [MATERIAL_HOME]: HomePage,
        [MATERIAL_DETAILS]: DetailsScreen
    },
    {
        headerMode: 'none'
    }
)