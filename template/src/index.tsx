import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from '@shopify/restyle';
import { QueryClientProvider } from '@tanstack/react-query';

import { Navigator } from 'routers/Navigator';
import { queryClient } from 'storages/queryClient';
import { theme } from 'theme';

export const Application: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <GestureHandlerRootView style={style.rootView}>
            <Navigator />
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

const style = StyleSheet.create({
  rootView: { flex: 1 },
});
