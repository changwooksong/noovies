import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, useColorScheme } from "react-native";
import Detail from "../screens/Detail";
import { BLACK_COLOR } from "../colors";

const NativeStack = createNativeStackNavigator();
const Stack = () => {
    const isDark = useColorScheme() === "dark";
    return (
        <NativeStack.Navigator
            screenOptions={{
                headerBackTitileVisible: false,
                headerStyle: {
                    backgroundColor: isDark ? BLACK_COLOR : "white",
                },
                headerTitleStyle: {
                    color: isDark ? "white" : BLACK_COLOR,
                },
            }}>
            <NativeStack.Screen name="Detail" component={Detail} />
        </NativeStack.Navigator>
    );
};

export default Stack;