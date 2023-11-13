import { Text } from "../components/Themed";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppSelector } from "../hooks/useAppSelector";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { fetchPosts } from "../features/posts/postsThunks";

export default function Posts() {
  const { value: posts, isLoading: isPostsLoading } = useAppSelector(
    (state) => state.posts
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <ScrollView>
      <SafeAreaView>
        {!isPostsLoading &&
          posts.map((post) => <Text style={styles.post}>{post.title}</Text>)}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  post: {
    color: "white",
    fontSize: 24,
    lineHeight: 48,
    fontWeight: "bold",
    paddingHorizontal: 24,
    backgroundColor: "#000000c0",
  },
});
