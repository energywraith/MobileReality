import { Text } from "../components/Themed";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppSelector } from "../hooks/useAppSelector";

export default function Posts() {
  const posts = useAppSelector((state) => state.posts.value);

  return (
    <ScrollView>
      <SafeAreaView>
        {posts.map((post) => (
          <Text>{post.title}</Text>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
}
