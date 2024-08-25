import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";
import { useRef, useState } from "react";
import Swiper from "react-native-swiper";
import CustomButton from "@/components/CustomButton";
import { data } from "@/constants";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [active, setActive] = useState(0);
  const isLastSlide = active === data.onboarding.length - 1;

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
          {data.onboarding.map(({ description, id, title, image }) => (
            <View key={id} className="justify-center flex items-center grow">
              <Image
                source={image}
                resizeMode="contain"
                className="aspect-square max-w-full h-1/2"
              />
              <Text className="text-xl font-bold">{title}</Text>
              <Text className={"text-center"}>{description}</Text>
            </View>
          ))}
        </Swiper>
        <CustomButton
          buttonText={isLastSlide ? "Get started!" : "Next"}
          onPress={() => {
            isLastSlide
              ? router.replace("/(auth)/sign-up")
              : swiperRef.current?.scrollBy(1);
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Welcome;
