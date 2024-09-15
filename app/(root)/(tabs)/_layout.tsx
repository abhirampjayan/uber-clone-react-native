import { Tabs } from "expo-router";
import TabIcon from "@/components/TabIcon";
import { icons } from "@/constants";

const Layout = () => {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333",
          borderRadius: 50,
          paddingBottom: 0,
          overflow: "hidden",
          marginBottom: 20,
          marginHorizontal: 20,
          height: 78,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.home} alt="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          headerShown: true,
          title: "chat",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.chat} alt="chat" />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          headerShown: true,
          title: "rides",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.list} alt="rides" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: true,
          title: "profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.profile} alt="profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
