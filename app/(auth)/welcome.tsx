import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { useRef, useState } from "react";
import Swiper from "react-native-swiper";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [active, setActive] = useState(0);
  return (
    <SafeAreaView className="min-h-full max-h-full">
      <View className="w-full flex flex-row justify-end">
        <TouchableOpacity
          onPress={() => {
            router.replace("/(auth)/sign-up");
          }}
          className="flex items-end justify-center p-5"
        >
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
      <View className="h-full flex pb-12">
        <Swiper
          loop={false}
          ref={swiperRef}
          onIndexChanged={(index) => setActive(index)}
          dot={<View className="w-2 h-2 bg-gray-300 rounded-full m-1" />}
          activeDot={<View className="w-2 h-2 bg-blue-500 rounded-full m-1" />}
        >
          <View>
            <Text>hello</Text>
          </View>
          <View>
            <Text>hello</Text>
          </View>
          <View>
            <Text>hello</Text>
          </View>
        </Swiper>
      </View>
    </SafeAreaView>
  );
};
export default Welcome;
