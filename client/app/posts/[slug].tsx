import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import PostDetails from "../../components/templates/PostDetails";

export default function Page() {
  const { slug } = useLocalSearchParams();

  return (
    <ScrollView>
      <SafeAreaView>
        <PostDetails id={slug} />
      </SafeAreaView>
    </ScrollView>
  );
}
