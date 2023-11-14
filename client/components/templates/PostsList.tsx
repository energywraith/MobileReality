import { Text } from "../../components/Themed";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Post } from "../../features/posts/postsSlice";

export default function PostsList() {
  const { value: posts, isLoading: isPostsLoading } = useAppSelector(
    (state) => state.posts
  );

  const onPressPostDetails = (id: Post["id"]) => {
    router.replace(`/posts/${id}`);
  };

  if (isPostsLoading) {
    return <Text>LOADING</Text>;
  }

  return posts.map((post) => (
    <Pressable key={post.id} onPress={() => onPressPostDetails(post.id)}>
      <Text style={styles.post}>{post.title}</Text>
    </Pressable>
  ));
}

const styles = StyleSheet.create({
  post: {
    color: "white",
    fontSize: 24,
    lineHeight: 48,
    fontWeight: "bold",
    paddingHorizontal: 24,
    backgroundColor: "#000000c0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
