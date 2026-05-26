import { useLocalSearchParams } from "expo-router";
import { Linking } from "react-native";
import { ContactUi } from "./mappers/contact.mapper";

const useContactDetailViewModel = () => {
  const { data } = useLocalSearchParams();
  const contactData = JSON.parse(data as string) as ContactUi;

  const handleCall = async (phoneNumber: string) => {
    const url = `tel:${phoneNumber}`;
    const canOpen = await Linking.canOpenURL(url);

    if (canOpen) {
      await Linking.openURL(url);
    }
  };

  const handleSms = async (phoneNumber: string) => {
    const url = `sms:${phoneNumber}`;
    const canOpen = await Linking.canOpenURL(url);

    if (canOpen) {
      await Linking.openURL(url);
    }
  };
  return { contactDetailData: contactData, handleCall, handleSms };
};

export default useContactDetailViewModel;
