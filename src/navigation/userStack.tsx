import React from "react";
import { View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import ToursScreen from '../screens/TourScreen';
import CategoryScreen  from '../screens/CategoryScreen';
import CategoryList  from '../screens/CategoryList';
import SettingsScreen from "../screens/Settings";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator   
        // screenOptions={{
        //   headerShown: false
        // }}
        >
        <HomeStack.Screen name="HomeScreen" component={HomeScreen}/>
        <HomeStack.Screen name="CategoryList" component={CategoryList}/>
        <HomeStack.Screen name="CategoryScreen" component={CategoryScreen} options={({ route }) => ({ title: route.params.name })}/>
        <HomeStack.Screen name="ToursScreen" component={ToursScreen} options={({ route }) => ({ title: route.params.name })}/>
    </HomeStack.Navigator>
  );
}


const TourStack = createStackNavigator();
function TourStackScreen() {
  return (
    <TourStack.Navigator
        screenOptions={{
          headerShown: true
        }}>
        <TourStack.Screen name="CategoryList" component={CategoryList}/>
        <TourStack.Screen name="CategoryScreen" component={CategoryScreen} options={({ route }) => ({ title: route.params.name })}/>
        <TourStack.Screen name="ToursScreen" component={ToursScreen} options={({ route }) => ({ title: route.params.name })}/>
    </TourStack.Navigator>
  );
}



export default function UserStack() {
  return (
    <NavigationContainer>
      
     <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "white" },
        }}
        sceneContainerStyle={{ backgroundColor: "white" }}
      >
        <Tab.Screen
          name="Categories"
          component={TourStackScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View>
                  <Image
                    source={require("./assets/category.png")}
                    resizeMode="contain"
                    style={{
                      width: 35,
                      height: 35,
                      tintColor: focused ? "#0053A9" : "rgba(0, 83, 169, 0.5)",
                    }}
                  />
            </View>
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View>
                  <Image
                    source={require("./assets/home.png")}
                    resizeMode="contain"
                    style={{
                      width: 35,
                      height: 35,
                      tintColor: focused ? "#0053A9" : "rgba(0, 83, 169, 0.5)",
                    }}
                  />
            </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
            },
          }}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => <SettingsScreen />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


