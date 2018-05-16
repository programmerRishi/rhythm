import { SwitchNavigator, TabNavigator, StackNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import { stackNavigationOptions } from './stackNavigatorNavigationOptions';
import { tabNavigationOptions } from './tabNavigatorNavigationOptions';
import LoginPage from './LoginPage';
import ConsoleScreen from './Console';
import { CulturalEventDetails } from './index';
import { StartUpScreen, Home, Cultural, Sports, About, FunActs } from '../screens';

const SwitchRouterAuth = SwitchNavigator(
  {
    logIn: {
      screen: LoginPage,
      // navigationOptions defined in respective component file
    },
    console: {
      screen: ConsoleScreen
    }
  }
);

const StackRouterHome = StackNavigator(
  {
    // homeStack: {
    //   screen: Home,
    // },
    auth: {
      screen: SwitchRouterAuth
    }
  },
  {
    headerMode: 'float'
  }
);

const StackRouterCultural = StackNavigator(
  {
    culturalStack: {
      screen: Cultural,
      navigationOptions: stackNavigationOptions
    },
    culturalDetails: {
      screen: CulturalEventDetails
    }
  }
);
const StackRouterSports = StackNavigator(
  {
    sportsStack: {
      screen: Sports,
      navigationOptions: stackNavigationOptions
    }
  }
);
const StackRouterFunActs = StackNavigator(
  {
    funActsStack: {
      screen: FunActs,
      navigationOptions: stackNavigationOptions
    }
  }
);
const StackRouterAbout = StackNavigator(
  {
    aboutStack: {
      screen: About,
      navigationOptions: stackNavigationOptions
    }
  }
);

const TabRouter = TabNavigator(
  {
    home: {
      screen: StackRouterHome,
      navigationOptions: tabNavigationOptions
    },
    cultural: {
      screen: StackRouterCultural,
      navigationOptions: tabNavigationOptions
    },
    sports: {
      screen: StackRouterSports,
      navigationOptions: tabNavigationOptions
    },
    funacts: {
      screen: StackRouterFunActs,
      navigationOptions: tabNavigationOptions
    },
    about: {
      screen: StackRouterAbout,
      navigationOptions: tabNavigationOptions
    },
  },
  {
    lazy: false, // renders all tabs immediately
    animationsEnabled: true,
    initialLayout: {
      height: 0,
      width: Dimensions.get('window').width
    },

    tabBarPosition: 'bottom',
    tabBarOptions: {
      scrollEnabled: false,
      showLabel: false,
      showIcon: true,
      activeTintColor: '#fff',
      inactiveTintColor: '#636e72',
      upperCaseLabel: false,
      indicatorStyle: {
        backgroundColor: '#fff'
      },
      labelStyle: {
        fontSize: 15
      },
      style: {
        backgroundColor: '#242424',
      }
    }
  }
);

const Router = SwitchNavigator({
  startup: {
    screen: StartUpScreen
  },
  main: {
    screen: TabRouter
  }
});

export default Router;
