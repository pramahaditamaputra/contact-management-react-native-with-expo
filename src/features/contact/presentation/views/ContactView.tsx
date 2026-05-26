import * as Icon from "@expo/vector-icons";
import { LegendList, LegendListRenderItemProps } from "@legendapp/list";
import { Image, Text, TouchableOpacity, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { ContactSkeletonList, FooterSkeleton } from "../components/Skeleton";
import { ContactUi } from "../viewmodels/mappers/contact.mapper";
import useContactViewModel from "../viewmodels/useContactViewModel";

const ContactView = () => {
  const { contacts, listRef, loadMore, navigate, setSearchTerm, searchTerm } =
    useContactViewModel();

  const footerComponent = contacts.loadingMore ? <FooterSkeleton /> : null;

  if (contacts.loading) {
    return <ContactSkeletonList />;
  }

  if (!contacts.items.length) {
    return (
      <View className="inset-safe flex-1 bg-white">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <View className="flex-1 items-center justify-center">
          <Text className="mb-4">No contacts found.</Text>
        </View>
      </View>
    );
  }

  const renderItem = ({ item }: LegendListRenderItemProps<ContactUi>) => {
    return (
      <TouchableOpacity onPress={() => navigate.gotoContactDetailScreen(item)}>
        <View className="bg-white flex-row items-center justify-between gap-4 px-4 py-4">
          <View className="flex-row items-center gap-4">
            <Image
              source={{ uri: item.picture }}
              className="w-12 h-12 rounded-full"
            />
            <Text>{item.name}</Text>
          </View>
          <View>
            <Icon.MaterialIcons name="navigate-next" size={24} color="gray" />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="inset-safe flex-1 bg-white">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <LegendList
        data={contacts.items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        recycleItems={true}
        maintainVisibleContentPosition
        ref={listRef}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        onRefresh={contacts.refetch}
        refreshing={contacts.refreshing}
        ListFooterComponent={footerComponent}
        contentContainerStyle={{
          gap: 6,
          backgroundColor: "#EAEAEA",
        }}
      />
    </View>
  );
};

export default ContactView;
