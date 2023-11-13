import { ScrollView } from "react-native-gesture-handler";
import MainScreen from "../screens/MainScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Main() {
  return (
    <ScrollView>
      <SafeAreaView>
        <MainScreen />
      </SafeAreaView>
    </ScrollView>
  );
}
