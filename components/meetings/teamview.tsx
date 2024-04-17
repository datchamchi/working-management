import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Room } from "../../types/room.type";
import { useDispatch } from "react-redux";
import { saveCurrentRoom } from "../../redux/socketSlice";
import { AppDispatch } from "../../redux/store";

export default function TeamView({ room }: { room: Room }) {
  const navigation = useNavigation();
  const dispatch: AppDispatch = useDispatch();
  const calling = false;
  useEffect(() => {
    if (!room.id) return;
    dispatch(saveCurrentRoom("room" + room.id));
  }, []);
  if (!room) return;
  return (
    <View
      className={`${
        calling ? "bg-[#E4E7F6]" : "bg-[#D0E7E1] "
      } mt-4 px-4 py-4 rounded-lg space-y-4`}>
      <Text className="text-lg font-medium">{room.name}</Text>
      {calling && (
        <View className="flex-row items-center gap-x-2">
          <FontAwesome name="microphone" size={24} color="#F35A54" />
          <Text className="text-xs text-primary">Calling about 5 minutes</Text>
        </View>
      )}

      <View className="flex-row justify-between">
        <Text className="font-semibold text-gray-600">12 members</Text>
        <Text className="font-semibold text-gray-600">John Smith's room</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Meeting", {
            screen: "Chat",
            params: { room: room },
          });
        }}>
        <View className="w-1/3 bg-primary py-2 rounded-full">
          <Text className="text-white text-sm font-medium text-center">
            Join Now
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
