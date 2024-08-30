import { Text, View } from "react-native";

const AuthDivider = () => {
  return (
    <View className="flex w-full items-center text-gray-300 flex-row">
      <View className="border-t border-gray-300 grow"></View>
      <View className="px-4">
        <Text>or</Text>
      </View>
      <View className="border-t border-gray-300 grow"></View>
    </View>
  );
};
export default AuthDivider;
