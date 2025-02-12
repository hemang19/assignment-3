import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import CityScreen from "./CityScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      {/* Home Screen Tab */}
      <Tab.Screen name="Home" component={HomeScreen} />

      {/* Calgary Screen Tab */}
      <Tab.Screen 
        name="Calgary" 
        children={() => (
          <CityScreen city="Calgary" link="https://www.calgary.ca/home.html" />
        )} 
      />

      {/* Edmonton Screen Tab */}
      <Tab.Screen 
        name="Edmonton" 
        children={() => (
          <CityScreen city="Edmonton" link="https://www.edmonton.ca/" />
        )} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
