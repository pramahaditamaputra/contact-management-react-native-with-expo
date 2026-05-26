import { LegendList, LegendListRenderItemProps } from "@legendapp/list";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ContactSkeletonList, FooterSkeleton } from "../components/Skeleton";
import { ContactUi } from "../viewmodels/mappers/contact.mapper";
import useContactViewModel from "../viewmodels/useContactViewModel";

const ContactView = () => {
  const { contacts, listRef, loadMore, navigate } = useContactViewModel();

  const footerComponent = contacts.loadingMore ? <FooterSkeleton /> : null;

  if (contacts.loading) {
    return <ContactSkeletonList />;
  }

  if (!contacts.items.length) {
    return (
      <View className="inset-safe flex-1 items-center justify-center">
        <Text>No contacts found.</Text>
      </View>
    );
  }

  const renderItem = ({ item }: LegendListRenderItemProps<ContactUi>) => {
    return (
      <TouchableOpacity
        className="flex-row items-center gap-4 p-4"
        onPress={() => navigate.gotoContactDetailScreen(item)}
      >
        <Image
          source={{ uri: item.picture }}
          className="w-12 h-12 rounded-full"
        />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="inset-safe flex-1 bg-white">
      <LegendList
        data={contacts.items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        recycleItems={true}
        maintainVisibleContentPosition
        ref={listRef}
        onEndReached={loadMore}
        ListFooterComponent={footerComponent}
      />
    </View>
  );
};

export default ContactView;
