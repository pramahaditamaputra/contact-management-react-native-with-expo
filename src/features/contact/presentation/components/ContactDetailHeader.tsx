import * as Icon from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

const ContactDetailHeader = ({
  name,
  picture,
  phone,
  handleCall,
  handleSms,
}: {
  name: string;
  picture: string;
  phone: string;
  handleCall: (phone: string) => void;
  handleSms: (phone: string) => void;
}) => {
  return (
    <View className="w-full items-center gap-4 my-6">
      <Image source={{ uri: picture }} className="w-32 h-32 rounded-full" />
      <Text className="text-xl font-bold">{name}</Text>
      <View className="flex-row items-center gap-6">
        <Icon.Ionicons
          name="call"
          size={24}
          color="green"
          onPress={() => handleCall(phone)}
          className="rounded-full p-2 bg-green-100"
        />
        <Icon.Ionicons
          name="chatbubble"
          size={24}
          color="gray"
          className="rounded-full p-2 bg-gray-100"
          onPress={() => handleSms(phone)}
        />
      </View>
    </View>
  );
};

export default ContactDetailHeader;
