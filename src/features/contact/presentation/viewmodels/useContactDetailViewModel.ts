import { useLocalSearchParams } from "expo-router";
import { Linking } from "react-native";
import { ContactUi } from "./mappers/contact.mapper";

const useContactDetailViewModel = () => {
  const { data } = useLocalSearchParams();
  const contactData = JSON.parse(data as string) as ContactUi;

  const normalizePhoneNumber = (phoneNumber: string) =>
    phoneNumber.replace(/[^\d+]/g, "");

  const handleCall = async (phoneNumber: string) => {
    const normalizedPhoneNumber = normalizePhoneNumber(phoneNumber);
    const url = `tel:${normalizedPhoneNumber}`;

    try {
      await Linking.openURL(url);
    } catch (error) {
      console.warn("Failed to open call URL:", error);
    }
  };

  const handleSms = async (phoneNumber: string) => {
    const normalizedPhoneNumber = normalizePhoneNumber(phoneNumber);
    const url = `sms:${normalizedPhoneNumber}`;

    try {
      await Linking.openURL(url);
    } catch (error) {
      console.warn("Failed to open SMS URL:", error);
    }
  };

  return { contactDetailData: contactData, handleCall, handleSms };
};

export default useContactDetailViewModel;
