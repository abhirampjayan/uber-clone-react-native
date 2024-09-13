import { ComponentProps, FC } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image,
  ImageSourcePropType,
  Keyboard,
  Platform,
} from "react-native";

interface InputFieldProps extends ComponentProps<typeof TextInput> {
  placeholder: string;
  className?: string;
  label?: string;
  labelStyle?: string;
  secureTextEntry?: boolean;
  icon?: ImageSourcePropType;
  value: string;
  onChangeText: (text: string) => void;
}

const InputField: FC<InputFieldProps> = ({
  label,
  labelStyle,
  className,
  icon,
  ...props
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          {label && (
            <Text
              className={`text-md text-neutral-600 font-JakartaSemiBold font-semibold mb-3 ${labelStyle}`}
            >
              {label}
            </Text>
          )}
          <View className="flex flex-row justify-start items-center bg-neutral-50 rounded-full border border-neutral-100 focus:border-blue-500">
            {icon && <Image source={icon} className={`w-6 h-6 ml-4`} />}
            <TextInput
              {...props}
              className={`p-4 flex mr-4 grow ${className}`}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
