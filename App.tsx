import { TamaguiProvider, Theme } from 'tamagui';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { config } from './tamagui.config';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <TamaguiProvider config={config}>
        <Theme name="light">
          <AppNavigator />
        </Theme>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}
