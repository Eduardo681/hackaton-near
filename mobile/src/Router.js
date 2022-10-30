import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from "./pages/Welcome";
import Initial from "./pages/Initial";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FlushCash from "./pages/FlushCash";
import Permission from "./pages/Permission";

const Stack = createNativeStackNavigator();

const options = {
    headerStyle: {
        backgroundColor: "#16171D",
        color: "#fff",
    },
    headerTintColor: "white",
    headerTitleAlign: 'center',
}

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
                <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
                <Stack.Screen name="Initial" component={Initial} options={options}/>
                <Stack.Screen name="FlushCash" component={FlushCash} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={Login} options={options}/>
                <Stack.Screen name="Register" component={Register} options={options}/>
                <Stack.Screen name="Permission" component={Permission} options={options}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;