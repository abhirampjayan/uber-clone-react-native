import { Image, ScrollView, Text, View } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onInputChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const onSignUpPress = async () => {};

  return (
    <ScrollView className="bg-white flex">
      <View className="accent-red-600 flex grow">
        <Image
          source={images.signUpCar}
          resizeMode="cover"
          className="w-full h-[250]"
        />
        <Text className="text-2xl font-bold mx-auto">Create Your Account</Text>
        <View className="pt-6 px-4">
          <InputField
            label="Name"
            placeholder={"Enter your name"}
            icon={icons.person}
            value={form.name}
            onChangeText={(text) => onInputChange("name", text)}
          />
          <InputField
            label="Email"
            placeholder={"Enter your email"}
            icon={icons.email}
            value={form.email}
            onChangeText={(text) => onInputChange("email", text)}
          />
          <InputField
            label="Password"
            placeholder={"Password"}
            icon={icons.lock}
            value={form.password}
            secureTextEntry
            onChangeText={(text) => onInputChange("password", text)}
          />
        </View>
        <CustomButton
          buttonText="Sign Up"
          className="mt-4 rounded-full shadow-lg"
          onPress={onSignUpPress}
        />
        {/*  OAuth*/}
        <Link href="/sign-in" className="mx-auto text-md mt-10">
          <Text>Already have an account?</Text>
          <Text className="text-blue-500">&nbsp;Sign In</Text>
        </Link>
        {/*  Verification Modal*/}
      </View>
    </ScrollView>
  );
};

export default SignUp;
