import type { StackScreenProps } from '@react-navigation/stack';

import { AuthorizationStackParams, MainStackParams } from 'screens';

export type RootStackParamList = AuthorizationStackParams & MainStackParams;

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
