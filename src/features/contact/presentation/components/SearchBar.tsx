import { Text, TextInput, TouchableOpacity, View } from "react-native";

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <View className="px-4 py-2 bg-white">
      <View className="flex-row items-center">
        <TextInput
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Search contacts..."
          className="flex-1 p-3 rounded-full bg-gray-100"
        />
        {searchTerm ? (
          <TouchableOpacity onPress={() => setSearchTerm("")}>
            <Text className="ml-2 text-sm text-blue-500">Clear</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default SearchBar;
