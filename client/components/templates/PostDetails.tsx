import { Text } from "../../components/Themed";
import { useAppSelector } from "../../hooks/useAppSelector";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

export default function PostDetails({ id }: { id: string | string[] }) {
  const { value: posts, isLoading: isPostsLoading } = useAppSelector(
    (state) => state.posts
  );

  if (isPostsLoading) {
    return <Text>LOADING</Text>;
  }

  const post = posts.find((post) => post.id.toString() === id);

  if (!post) {
    router.back();
    return;
  }

  return (
    <>
      <Text style={styles.line}>id: {post.id}</Text>
      <Text style={styles.line}>title: {post.title}</Text>
      <Text style={styles.line}>description: {post.description}</Text>
      <Text style={styles.line}>createdAt: {post.createdAt}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  line: {
    color: "white",
    fontSize: 16,
    lineHeight: 48,
    fontWeight: "bold",
    paddingHorizontal: 24,
    backgroundColor: "#000000c0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
