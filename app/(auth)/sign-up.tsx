import { Alert, Image, ScrollView, Text, View } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import SignInWithGoogle from "@/components/SignInWithGoogle";
import AuthDivider from "@/components/AuthDivider";
import { useSignUp } from "@clerk/clerk-expo";
import { ReactNativeModal } from "react-native-modal";
import { set } from "yaml/dist/schema/yaml-1.1/set";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [verification, setVerification] = useState({
    state: "default",
    code: "",
    error: "",
  });

  const onInputChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const onSignUpPress = async () => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setVerification({ ...verification, state: "pending" });
    } catch (err: any) {
      Alert.alert("", err.errors[0].longMessage);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      if (completeSignUp.status === "complete") {
        // TODO: Create a database user
        await setActive({ session: completeSignUp.createdSessionId });
        setVerification({ ...verification, state: "success" });
      } else {
        setVerification({
          ...verification,
          error: "Verification Failed!",
          state: "failed",
        });
      }
    } catch (err: any) {
      setVerification({
        ...verification,
        error: err.errors[0].longMessage,
        state: "failed",
      });
    }
  };

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
        <View className="px-4 pb-6 pt-4 flex">
          <AuthDivider />
        </View>
        <SignInWithGoogle />
        <Link href="/sign-in" className="mx-auto text-md mt-6 mb-10">
          <Text>Already have an account?</Text>
          <Text className="text-blue-500">&nbsp;Sign In</Text>
        </Link>
        {/*  Verification Modal*/}
        <ReactNativeModal
          isVisible={verification.state === "pending"}
          onModalHide={() => {
            if (verification.state === "success") {
              setShowSuccessModal(true);
              setVerification({
                ...verification,
                code: 's              setVerification({ ...verification, code: "success" });\nuccess',
              });
            }
          }}
        >
          <View className="bg-white flex px-7 py-9 rounded-2xl">
            <Text className="text-xl font-JakartaBold">Verification</Text>
            <Text className=" text-gray-400 mt-3 mb-5">
              We&apos;ve sent a verification code to {form.email}
            </Text>
            <Text className="text-lg font-Jakarta">Code</Text>
            <InputField
              placeholder="12345"
              icon={icons.lock}
              value={verification.code}
              keyboardType="numeric"
              onChangeText={(text) =>
                setVerification({ ...verification, code: text })
              }
            />
            <CustomButton
              buttonText="Verify Email"
              className="mt-4 rounded-full shadow-lg bg-green-600 mx-0"
              onPress={onPressVerify}
            />
          </View>
        </ReactNativeModal>
        {/*  Verification Success Modal*/}
        <ReactNativeModal isVisible={showSuccessModal}>
          <View className="bg-white flex px-7 py-9 rounded-2xl">
            <Image source={images.check} className="w-20 h-20 mx-auto mb-5 " />
            <Text className="text-3xl text-center font-JakartaBold">
              Verified
            </Text>
            <Text className="text-center text-gray-400 mt-3">
              You have successfully verified
            </Text>
            <CustomButton
              buttonText="Continue"
              className="mt-4 rounded-full shadow-lg shadow-blue-300"
              onPress={() => router.push("/(root)/(tabs)/home")}
            />
          </View>
        </ReactNativeModal>
      </View>
    </ScrollView>
  );
};

export default SignUp;
