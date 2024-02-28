import { Button, Text, View } from "react-native";
import Header from "../components/homepages/header";
import SlideShow from "../components/homepages/slideshow";
import Meeting from "../components/homepages/meeting";
import Upcomming from "../components/homepages/upcoming";
import { User } from "../types/user.type";
import { Root } from "../navigation/types";

const HomePage = ({ navigation }: Root) => {
  const user: User = {
    name: undefined,
    image: undefined,
  };
  return (
    <View className="flex-1">
      <Header user={user} />
      <View className="px-4 transform -translate-y-6 ">
        <SlideShow />
        <Upcomming />
        <Meeting />
        {/* <Meeting /> */}
      </View>
    </View>
  );
};

export default HomePage;
