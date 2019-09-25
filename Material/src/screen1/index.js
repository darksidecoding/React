import { createStackNavigator } from 'react-navigation'
import HomePage from './HomePage'
import {
    MATERIAL_HOME,
    MATERIAL_DETAILS
} from '../routes'

export default createStackNavigator(
    {
        [MATERIAL_HOME]: HomePage
    },
    {
        headerMode: 'none'
    }
)