import { Text, View, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { StyleSheet } from "react-native";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { AddPostBody, addPost } from "../../../features/posts/postsThunks";
import { router } from "expo-router";
import Button from "../../common/Button";

export default function App() {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (data: AddPostBody) => {
    await dispatch(addPost(data));
    router.replace("/posts");
  };

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Title"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="title"
      />
      {errors.title && <Text style={styles.inputError}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Description"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="description"
      />
      {errors.description && (
        <Text style={styles.inputError}>This is required.</Text>
      )}

      <Button
        title="Submit"
        onPress={handleSubmit(onSubmit)}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputError: {
    marginHorizontal: 12,
    color: "red",
  },
  button: {
    marginTop: 24,
  },
});
