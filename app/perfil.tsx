import { View, Text, Image } from 'react-native';

export default function Perfil() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-purple-600">Perfil</Text>
      <Text className="text-base text-gray-600 mt-4">Tu perfil de usuario</Text>
      <Image
        source={{ uri: "https://media.tenor.com/yRSnf6wABQ4AAAAj/pato-duck.gif" }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}