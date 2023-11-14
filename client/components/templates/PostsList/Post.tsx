import { Text } from "../../Themed";
import { Pressable, StyleSheet } from "react-native";
import { Post } from "../../../features/posts/postsSlice";

interface PostProps {
  id: Post["id"];
  title: Post["title"];
  onPressPost: (id: Post["id"]) => void;
}

export default function PostComponent({ id, title, onPressPost }: PostProps) {
  return (
    <Pressable onPress={() => onPressPost(id)}>
      <Text style={styles.post}>{title}</Text>
    </Pressable>
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
