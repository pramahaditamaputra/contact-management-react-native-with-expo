import { View } from "react-native";
import Card from "./Card";

const ContactDetailContent = ({
  email,
  dob,
  location,
  phone,
}: {
  email: string;
  dob: string;
  location: string;
  phone: string;
}) => {
  return (
    <View className="w-full gap-4">
      <Card title="Phone" description={phone} />
      <Card title="Email" description={email} />
      <Card title="Date of Birth" description={dob} />
      <Card title="Address" description={location} />
    </View>
  );
};

export default ContactDetailContent;
