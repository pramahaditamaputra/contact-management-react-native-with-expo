import { View } from "react-native";

const SkeletonRow = () => {
  return (
    <View className="flex-row items-center gap-4 px-4 py-4">
      <View className="h-12 w-12 rounded-full bg-gray-200" />
      <View className="flex-1 gap-2">
        <View className="h-4 w-1/2 rounded-full bg-gray-200" />
        <View className="h-3 w-2/3 rounded-full bg-gray-100" />
      </View>
    </View>
  );
};

const ContactSkeletonList = () => {
  return (
    <View className="flex-1 bg-white pt-2 inset-safe">
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonRow key={index} />
      ))}
    </View>
  );
};

const FooterSkeleton = () => {
  return (
    <View className="bg-white py-2">
      {Array.from({ length: 2 }).map((_, index) => (
        <View key={index} className="opacity-70">
          <SkeletonRow />
        </View>
      ))}
    </View>
  );
};

export { ContactSkeletonList, FooterSkeleton };
