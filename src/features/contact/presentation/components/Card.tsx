import { StyleSheet, Text, View } from "react-native";

type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <View className="bg-white rounded-lg p-4 shadow-md w-full items-center gap-2">
      {icon && icon}
      <Text className="text-lg font-bold">{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
