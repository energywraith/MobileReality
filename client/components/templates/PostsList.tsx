import { Text } from "../../components/Themed";
import { useAppSelector } from "../../hooks/useAppSelector";
import { StyleSheet } from "react-native";

export default function PostsList() {
  const { value: posts, isLoading: isPostsLoading } = useAppSelector(
    (state) => state.posts
  );

  if (isPostsLoading) {
    return <Text>LOADING</Text>;
  }

  return posts.map((post) => <Text style={styles.post}>{post.title}</Text>);
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
