import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchPosts } from "../../features/posts/postsThunks";
import PostsList from "../../components/modules/Posts/PostsList";

export default function Posts() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <ScrollView>
      <SafeAreaView>
        <PostsList />
      </SafeAreaView>
    </ScrollView>
  );
}
