import { StyleSheet, Text, View } from "react-native";

type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <View className="bg-gray-100 rounded-full p-4 w-full items-center gap-2">
      {icon && icon}
      <Text className="text-md font-bold">{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
