import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import PostDetails from "../../components/modules/Posts/PostDetails";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { deletePost } from "../../features/posts/postsThunks";
import { router } from "expo-router";

export default function Page() {
  const { slug } = useLocalSearchParams();
  const dispatch = useAppDispatch();

  const onButtonRemovePress = async () => {
    try {
      await dispatch(deletePost(slug?.[0]));
      router.replace("/posts");
    } catch (error) {
      throw error;
    }
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <PostDetails id={slug?.[0]} onButtonRemovePress={onButtonRemovePress} />
      </SafeAreaView>
    </ScrollView>
  );
}
