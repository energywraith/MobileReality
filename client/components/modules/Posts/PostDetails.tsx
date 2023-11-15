import { Text } from "../../common/Themed";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { router } from "expo-router";
import { StyleSheet } from "react-native";
import Button from "../../common/Button";

interface PostDetailsProps {
  id: string;
  onButtonRemovePress: () => void;
}

export default function PostDetails({
  id,
  onButtonRemovePress,
}: PostDetailsProps) {
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
      <Button
        onPress={onButtonRemovePress}
        title="Delete"
        style={styles.button}
      />
    </>
  );
}

const styles = StyleSheet.create({
  line: {
    color: "black",
    fontSize: 16,
    lineHeight: 48,
    fontWeight: "bold",
    paddingHorizontal: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginTop: 24,
  },
});
