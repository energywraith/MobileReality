import { Text } from "../../common/Themed";
import { Pressable, StyleSheet, View } from "react-native";
import { Post } from "../../../features/posts/postsSlice";
import Button from "../../common/Button";

interface PostProps extends Omit<Post, "createdAt"> {
  onPressPost: (id: Post["id"]) => void;
  onPressPostDelete: (id: Post["id"]) => void;
}

export default function PostComponent({
  id,
  title,
  description,
  onPressPost,
  onPressPostDelete,
}: PostProps) {
  return (
    <Pressable onPress={() => onPressPost(id)} style={styles.post}>
      <Text style={styles.postTitle}>{title}</Text>
      <Text style={styles.postDescription} numberOfLines={2}>
        {description}
      </Text>
      <View style={styles.buttons}>
        <Button title="Details" onPress={() => onPressPost(id)} />
        <Button title="Remove" onPress={() => onPressPostDelete(id)} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  post: {
    color: "black",
    paddingHorizontal: 24,
    paddingVertical: 16,
    paddingBottom: 32,
    display: "flex",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
  },
  postTitle: {
    fontSize: 24,
    lineHeight: 48,
    fontWeight: "bold",
  },
  postDescription: {},
  buttons: {
    display: "flex",
    flexDirection: "row",
    marginTop: 16,
    columnGap: 8,
  },
});
