import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { images } from "@/constants";
import InputField from "@/components/InputField";

const SignUp = () => {
  return (
    <ScrollView>
      <View className="bg-white flex grow">
        <Image
          source={images.signUpCar}
          resizeMode="cover"
          className="w-full h-[250]"
        />
        <Text className="text-2xl font-bold mx-auto">Create Your Account</Text>
        <InputField
          label="Username"
          placeholder={"Username"}
          textContentType={""}
          className={""}
        />
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
    </ScrollView>
  );
};

export default SignUp;
