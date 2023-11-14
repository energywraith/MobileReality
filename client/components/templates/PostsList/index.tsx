import { Text } from "../../Themed";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { router } from "expo-router";
import { Post as IPost } from "../../../features/posts/postsSlice";
import Post from "./Post";

export default function PostsList() {
  const { value: posts, isLoading: isPostsLoading } = useAppSelector(
    (state) => state.posts
  );

  const onPressPostDetails = (id: IPost["id"]) => {
    router.replace(`/posts/${id}`);
  };

  if (isPostsLoading) {
    return <Text>LOADING</Text>;
  }

  return posts.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      title={post.title}
      onPressPost={onPressPostDetails}
    />
  ));
}
