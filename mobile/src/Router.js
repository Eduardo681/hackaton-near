import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from "./pages/Welcome";
import Initial from "./pages/Initial";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
                <Stack.Screen name="Initial" component={Initial} options={{headerShown: false}}/>
                <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={Login} options={{
                    headerStyle: {
                        backgroundColor: '#16171D',
                        color: "#fff"
                    },
                    headerTintColor: "white"
                }}/>
                <Stack.Screen name="Register" component={Register} options={{
                    headerStyle: {
                        backgroundColor: '#16171D',
                        color: "#fff"
                    },
                    headerTintColor: "white"
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;