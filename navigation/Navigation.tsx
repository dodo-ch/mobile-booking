import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'

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
import TodayCalendarListOfPatients from '../screens/User/TodayCalendarListOfPatients'

const Navigator = createStackNavigator({
    Welcome: WelcomeScreen,
    Dashboard: Dashboard,
    SettingsDashboard: SettingsDashboard,
    PatientList: PatientList,
    CalendarListOfPatients: CalendarListOfPatients,
    TodayCalendarListOfPatients: TodayCalendarListOfPatients,
    Service: TypeOfService,
    Doctor: ChooseDoc,
    Date: ChooseDate, 
    Time: ChooseTime,
    SaveService: SaveService
})


const SettingsDashboardNavigator = createStackNavigator({
    SettingsDashboard: SettingsDashboard,
})

const PatientListNavigator = createStackNavigator({
    PatientList: PatientList,
})
const CalendarListOfPatientsNavigator = createStackNavigator({
    CalendarListOfPatients: CalendarListOfPatients,
})

const TodayCalendarListOfPatientsNavigator = createStackNavigator({
    TodayCalendarListOfPatients: TodayCalendarListOfPatients,
})

const ServiceNavigator = createStackNavigator({
    Service: TypeOfService,
    Doctor: ChooseDoc,
    Date: ChooseDate, 
    Time: ChooseTime,
    SaveService: SaveService
})

const DoctorNavigator = createStackNavigator({
    Doctor: ChooseDoc,
    Date: ChooseDate, 
    Time: ChooseTime,
    SaveService: SaveService
})

const DateNavigator = createStackNavigator({
    Date: ChooseDate, 
    Time: ChooseTime,
    SaveService: SaveService
})

const TimeNavigator = createStackNavigator({ 
    Time: ChooseTime,
    SaveService: SaveService
})

const SaveServiceNavigator = createStackNavigator({ 
    SaveService: SaveService
})

const WelcomeNavigator = createStackNavigator({
    Welcome: WelcomeScreen,
})
const DashboardNavigator = createStackNavigator({
    Dashboard: Dashboard,
})
const MainNavigator = createDrawerNavigator({
    Welcome: WelcomeNavigator,
    Dashboard: DashboardNavigator,
    SettingsDashboard: SettingsDashboardNavigator,
    PatientList: PatientListNavigator,
    CalendarListOfPatients: CalendarListOfPatientsNavigator,
    TodayCalendarListOfPatients: TodayCalendarListOfPatientsNavigator,
    Service: ServiceNavigator,
    Doctor: DoctorNavigator,
    Date: DateNavigator, 
    Time: TimeNavigator,
    SaveService: SaveServiceNavigator
});

export default createAppContainer(Navigator);