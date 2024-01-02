import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './src/Main';
import store from './src/redux/Store'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

export default function App() {

  if (Platform.OS === 'ios') {
    return (
      <PaperProvider >
        <SafeAreaProvider>
          <SafeAreaView>
            <StoreProvider store={store}>
              <Main />
            </StoreProvider>
          </SafeAreaView>
        </SafeAreaProvider>
      </PaperProvider>
    );
  } else {
    return (
      <PaperProvider >
        <SafeAreaProvider>
          <StoreProvider store={store}>
          <NavigationContainer>
            {/* <StatusBar  barStyle="light-content"  backgroundColor="transparent"  translucent/> */}
            <Main />
          </NavigationContainer>
          </StoreProvider>
        </SafeAreaProvider>
      </PaperProvider>
    );
  }
}
