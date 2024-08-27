import { FC } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface InputFieldProps {
  placeholder: string;
  textContentType: string;
  className?: string;
  label: string;
  labelStyle?: string;
}

const InputField: FC<InputFieldProps> = ({
  label,
  placeholder,
  labelStyle,
}) => {
  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback>
        <View className="my-4 px-4">
          <Text
            className={`text-lg font-JakartaSemiBold font-semibold mb-3 ${labelStyle}`}
          >
            {label}
          </Text>
          <View className="flex flex-row justify-start items-center bg-neutral-50 rounded-full border border-neutral-100 focus:border-blue-500">
            <TextInput placeholder={placeholder} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
