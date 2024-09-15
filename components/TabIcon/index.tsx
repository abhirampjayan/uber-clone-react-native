import { FC } from "react";
import { Image, ImageSourcePropType, View } from "react-native";

const TabIcon: FC<{
  focused: boolean;
  source: ImageSourcePropType;
  alt: string;
}> = (props) => {
  return (
    <View
      className={`flex flex-row justify-center items-center rounded-full ${props.focused ? "bg-blue-500" : ""}`}
    >
      <View
        className={`rounded-full w-12 h-12 items-center justify-center ${props.focused ? "bg-blue-400" : ""}`}
      >
        <Image
          {...props}
          tintColor="white"
          resizeMode="contain"
          className="w-7 h-7"
        />
      </View>
    </View>
  );
};

export default TabIcon;
