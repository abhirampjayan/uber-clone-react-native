import { Image, Text, TouchableOpacity, View } from "react-native";
import { icons } from "@/constants";

const SignInWithGoogle = () => {
  return (
    <View className="px-4 flex">
      <TouchableOpacity className="border border-gray-300 p-3 rounded-full max-w-min justify-center flex flex-row items-center">
        <Image source={icons.google} className="w-6 h-6 mr-3" />
        <Text>Sign In with Google</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignInWithGoogle;
