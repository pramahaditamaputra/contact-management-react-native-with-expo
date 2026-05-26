import { useLocalSearchParams } from "expo-router";
import { ContactUi } from "./mappers/contact.mapper";

const useContactDetailViewModel = () => {
  const { data } = useLocalSearchParams();
  const contactData = JSON.parse(data as string) as ContactUi;
  return { contactDetailData: contactData };
};

export default useContactDetailViewModel;
