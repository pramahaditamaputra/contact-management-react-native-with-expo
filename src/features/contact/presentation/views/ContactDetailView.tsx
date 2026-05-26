import { Image, Text, View } from "react-native";
import Card from "../components/Card";
import useContactDetailViewModel from "../viewmodels/useContactDetailViewModel";

const ContactDetailView = () => {
  const { contactDetailData } = useContactDetailViewModel();

  return (
    <View className="flex-1 px-4 items-center bg-white">
      <View className="w-full items-center gap-4 my-6">
        <Image
          source={{ uri: contactDetailData.picture }}
          className="w-32 h-32 rounded-full"
        />
        <Text className="text-xl font-bold">{contactDetailData.name}</Text>
        <Text>{contactDetailData.email}</Text>
      </View>

      <View className="w-full gap-4">
        <Card title="Phone" description={contactDetailData.phone} />
        <Card title="Email" description={contactDetailData.email} />
        <Card title="Date of Birth" description={contactDetailData.dob} />
      </View>
    </View>
  );
};

export default ContactDetailView;
