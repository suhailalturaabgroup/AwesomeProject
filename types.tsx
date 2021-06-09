/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
//  import { CompositeNavigationProp } from '@react-navigation/native';
//  import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
//  import { StackNavigationProp } from '@react-navigation/stack';
//  import { DrawerNavigationProp } from '@react-navigation/drawer';


export type RootStackParamList = {
  About: undefined;
  NotFound: undefined;
};

export type StackTabParamList = {
  Home: undefined;
  TabTwo: undefined;
};

export type DrawerParamList = {
  Home: undefined;
};

export type TabParamList = {
  Home: undefined;
};

// export type ProfileScreenNavigationProp = CompositeNavigationProp<
// BottomTabNavigationProp<TabParamList, 'Home'>,
// // StackNavigationProp<StackParamList>
// DrawerNavigationProp<DrawerParamList>
// >;