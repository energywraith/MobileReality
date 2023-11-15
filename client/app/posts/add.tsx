import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import PostForm from "../../components/modules/Posts/PostForm";

export default function Posts() {
  return (
    <ScrollView>
      <SafeAreaView>
        <PostForm />
      </SafeAreaView>
    </ScrollView>
  );
}
