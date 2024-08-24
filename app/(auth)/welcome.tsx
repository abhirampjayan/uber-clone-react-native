import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { useRef, useState } from "react";
import Swiper from "react-native-swiper";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [active, setActive] = useState(0);
  return (
    <SafeAreaView>
      <View className="w-full flex flex-row justify-end">
        <TouchableOpacity
          onPress={() => {
            router.replace("/(auth)/sign-up");
          }}
          className="flex bg-red-300 items-end justify-center p-5"
        >
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
      <View className="w-full bg-amber-100 flex flex-row grow">
        <Swiper
          loop={false}
          ref={swiperRef}
          onIndexChanged={(index) => setActive(index)}
          dot={<View className="w-2 h-2 bg-amber-500 rounded-full m-1" />}
          activeDot={<View className="w-2 h-2 bg-amber-800 rounded-full m-1" />}
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
