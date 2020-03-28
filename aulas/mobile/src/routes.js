import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import Incidents from './pages/Incidents'
import Detail from './pages/Detail'

const AppStack = createStackNavigator()


export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen component={Incidents} />
                <AppStack.Screen component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}