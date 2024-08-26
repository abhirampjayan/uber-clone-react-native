import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";

const SignUp = () => {
  return (
    <View className="bg-white flex grow">
      <Image
        source={images.signUpCar}
        resizeMode="cover"
        className="w-full h-[250]"
      />
      <Text className="text-2xl font-bold mx-auto">Create Your Account</Text>
      <View className="pt-12 px-4 flex gap-8">
        <TextInput
          placeholder="Username"
          className=" p-4 rounded-xl bg-gray-50 border border-gray-300 focus:border-blue-500"
        />
        <TextInput
          placeholder="First name"
          className=" p-4 rounded-xl bg-gray-50 border border-gray-300 focus:border-blue-500"
        />
        <TextInput
          placeholder="Last name"
          className=" p-4 rounded-xl bg-gray-50 border border-gray-300 focus:border-blue-500"
        />
        <TextInput
          placeholder="E-mail"
          textContentType="emailAddress"
          className=" p-4 rounded-xl bg-gray-50 border border-gray-300 focus:border-blue-500"
        />
        <TextInput
          placeholder="Password"
          textContentType="password"
          className=" p-4 rounded-xl bg-gray-50 border border-gray-300 focus:border-blue-500"
        />
        <TextInput
          placeholder="Confirm Password"
          className=" p-4 rounded-xl bg-gray-50 border border-gray-300 focus:border-blue-500"
        />
      </View>
    </View>
  );
};

export default SignUp;
