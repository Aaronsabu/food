import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  }, 
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Business Search'
  }
});

export default createAppContainer(navigator);

//Client ID
// LKU0OOTDADOh4iYehPLA3A

//API Key
// 1UUnKdyAWusYSCapZBGm65utgCbTx4UzHgGpQjnkSzP9vPWmHo4rT25AD8oa-sL5dnYSSTxh-RHjKY_dn4M8fEsdIVfhw8pBVnXaT00_g6NaXKT5HShaJW05gxMQYHYx
