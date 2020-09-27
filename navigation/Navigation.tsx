import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import TypeOfService from '../screens/Booking/TypeOfService';
import ChooseDoc from '../screens/Booking/ChooseDoc';
import ChooseDate from '../screens/Booking/ChooseDate';
import ChooseTime from '../screens/Booking/ChooseTime';
import SaveService from '../screens/Booking/SaveService';
import WelcomeScreen from '../screens/WelcomeScreen';
import Dashboard from '../screens/User/Dashboard';
import SettingsDashboard from '../screens/User/SettingsDashboard';
import PatientList from '../screens/User/PatientList';
import CalendarListOfPatients from '../screens/User/CalendarListOfPatients';


const Navigator = createStackNavigator({

    Welcome: WelcomeScreen,
    Dashboard: Dashboard,
    SettingsDashboard: SettingsDashboard,
    PatientList: PatientList,
    CalendarListOfPatients: CalendarListOfPatients,
    Service: TypeOfService,
    Doctor: ChooseDoc,
    Date: ChooseDate, 
    Time: ChooseTime,
    SaveService: SaveService
})

export default createAppContainer(Navigator);