import { ScrollView } from "react-native";
import ContactDetailContent from "../components/ContactDetailContent";
import ContactDetailHeader from "../components/ContactDetailHeader";
import useContactDetailViewModel from "../viewmodels/useContactDetailViewModel";

const ContactDetailView = () => {
  const { contactDetailData, handleCall, handleSms } =
    useContactDetailViewModel();

  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center", flexGrow: 1 }}
      className="px-4 py-6 bg-white pb-safe"
    >
      <ContactDetailHeader
        name={contactDetailData.name}
        picture={contactDetailData.picture}
        phone={contactDetailData.phone}
        handleCall={handleCall}
        handleSms={handleSms}
      />
      <ContactDetailContent
        email={contactDetailData.email}
        dob={contactDetailData.dob}
        location={contactDetailData.location}
        phone={contactDetailData.phone}
      />
    </ScrollView>
  );
};

export default ContactDetailView;
