import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen314323Navigator from '../features/BlankScreen314323/navigator';
import BlankScreen114320Navigator from '../features/BlankScreen114320/navigator';
import BlankScreen014317Navigator from '../features/BlankScreen014317/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen314323: { screen: BlankScreen314323Navigator },
BlankScreen114320: { screen: BlankScreen114320Navigator },
BlankScreen014317: { screen: BlankScreen014317Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
