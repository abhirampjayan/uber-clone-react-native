import { Button, Text, TouchableOpacity } from "react-native";
import { ComponentProps, FC } from "react";

export interface CustomButtonProps
  extends ComponentProps<typeof TouchableOpacity> {
  buttonText?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  buttonText = "Click me",
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      className="bg-blue-500 p-4 flex items-center mx-3 mb-3"
    >
      <Text className="text-white font-bold">{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
