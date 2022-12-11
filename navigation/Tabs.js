import React from "react";
import {
    createBottomTabNavigator,
    tabBarIcon,
} from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { BLACK_COLOR, DARK_GERY, LIGHT_GERY, YELLLOW_COLOR } from "../colors";
import Stack from "./Stack";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const isDark = useColorScheme() === "dark";

    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: isDark ? BLACK_COLOR : "white",
            }}
            screenOptions={{
                // unmountOnBlur: true,
                tabBarStyle: {
                    backgroundColor: isDark ? BLACK_COLOR : "white",
                },
                tabBarActiveTintColor: isDark ? YELLLOW_COLOR : BLACK_COLOR,
                tabBarInactiveTintColor: isDark ? DARK_GERY : LIGHT_GERY,
                tabBarLabelStyle: {
                    marginTop: -5,
                    fontSize: 12,
                    fonstWeight: "600",
                },
                headerStyle: {
                    backgroundColor: isDark ? BLACK_COLOR : "white",
                },
                headerTitleStyle: {
                    color: isDark ? "white" : BLACK_COLOR,
                },
            }}>
            <Tab.Screen
                name="Moives"
                component={Movies}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name="film-outline"
                                color={color}
                                size={size}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="TV"
                component={Tv}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name="ios-tv-outline"
                                color={color}
                                size={size}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name={"search-outline"}
                                color={color}
                                size={size}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
