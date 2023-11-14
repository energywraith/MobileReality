import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, router } from "expo-router";
import { useEffect } from "react";
import { Button, useColorScheme } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const onPressAddPost = () => {
  router.replace("/posts/add");
};

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ReduxProvider store={store}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="posts/index"
            options={{
              headerTitle: "Posts",
              headerRight: () => (
                <Button onPress={onPressAddPost} title="Add" />
              ),
            }}
          />
          <Stack.Screen
            name="posts/add"
            options={{
              headerTitle: "Add Post",
            }}
          />
          <Stack.Screen
            name="posts/[slug]"
            options={{
              headerTitle: "Post",
            }}
          />
        </Stack>
      </ThemeProvider>
    </ReduxProvider>
  );
}
