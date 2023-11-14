import { Text } from "../../Themed";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { router } from "expo-router";
import { Post as IPost } from "../../../features/posts/postsSlice";
import Post from "./Post";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { deletePost } from "../../../features/posts/postsThunks";

export default function PostsList() {
  const { value: posts, isLoading: isPostsLoading } = useAppSelector(
    (state) => state.posts
  );
  const dispatch = useAppDispatch();

  const onPressPostDetails = (id: IPost["id"]) => {
    router.replace(`/posts/${id}`);
  };

  const onPressPostDelete = async (id: IPost["id"]) => {
    try {
      await dispatch(deletePost(id.toString()));
      router.replace("/posts");
    } catch (error) {
      throw error;
    }
  };

  if (isPostsLoading) {
    return <Text>LOADING</Text>;
  }

  return posts.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      title={post.title}
      description={post.description}
      onPressPost={onPressPostDetails}
      onPressPostDelete={onPressPostDelete}
    />
  ));
}
