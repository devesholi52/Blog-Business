import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Color, Font, width } from '../Utils';
import Profile from '../RegistrationScreens/Profile'
import Passwordreset from '../RegistrationScreens/Passwordreset'
import BlogListing from '../Screens/BlogListing'
import Privacy from '../Screens/Privacy'
import BlogDetails from '../Screens/BlogDetails'
import Confirmation from '../Screens/Confirmation'
import BlogCreate from '../Screens/BlogCreate'
import DraftBlog from '../Screens/DraftBlog'
import Messanger from '../Screens/Messanger'
import Comments from '../Screens/Comments'
import CommentsIcon from '../Screens/CommentsIcon'
import Subscription from '../Screens/Subscription'
import Inbox from '../Screens/Inbox'
import Transaction from '../Screens/Transaction'
import Notification from '../Screens/NotificationScreen/Notification'
import Myorders from '../Orders/Myorders'
import MyOrdersDelivered from '../Orders/MyOrdersDelivered'
import MyUploadProducts from '../Orders/MyUploadProducts'
import Product from '../ScreenProduct/Product'
import Shopping1 from '../ScreenProduct/Shopping1'
import Shopping2 from '../ScreenProduct/Shopping2'
import Service from '../ScreenProduct/Service'
import NewService from '../ScreenProduct/NewService'
import ServiceListing1 from '../ScreenProduct/ServiceListing1'
import MyService from '../ScreenProduct/MyService'
import ServiceListing2 from '../ScreenProduct/ServiceListing2'
import OrderServiceDetails from '../Orders/OrderServiceDetails'
import Shopping3 from '../ScreenProduct/Shopping3'
// import ChatScreen from '../ScreenProduct/ChatScreen'
import WishList from '../ScreenProduct/WishList'
import ProductListing from '../ScreenProduct/ProductListing'
import ProductListingDetails from '../ScreenProduct/ProductListingDetails'
import UploadProduct from '../ScreenProduct/UploadProduct'
import LogingOut from '../Screens/LogingOut'


import Home from '../Screens/Home';
import { useDrawerStatus } from '@react-navigation/drawer';

const BottomTabStack = createBottomTabNavigator();
const ProfileStack = createStackNavigator();
const HomeStack = createStackNavigator();
const searchStack = createStackNavigator();
const uploadStack = createStackNavigator();
const notificationStack = createStackNavigator();

function MyTabBar({ state, descriptors, navigation, index }) {
  // const isDrawerStatus = useDrawerStatus();
  return (
    <ImageBackground style={{ ...style.footer, ...style.shodow, ...style.imageback }} key={index}
      source={require('../assets/img/1-splash-6_1.jpg')}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };
        const onLongPress = () => {
          navigation.emit({ type: 'tabLongPress', target: route.key });
        };
        const getIcon = labelname => {
          let iconName = '',
            type = '';
          if (labelname == 'Blog') {
            iconName = 'form';
            type = 'ant-design';
          }
          if (labelname == 'Product') {
            iconName = 'inbox';
            type = 'ant-design';
          }
          if (labelname == 'Service') {
            iconName = 'settings';
            type = 'SimpleLineIcons';
          }
          if (labelname == 'Inbox') {
            iconName = 'envelope';
            type = 'font-awesome-5';
          }
          if (labelname == 'Notification') {
            iconName = 'bells';
            type = 'ant-design';
          }
          return (
            <View style={[{ alignItems: 'center', justifyContent: 'center', alignContent: 'center' }]}>
              <Icon name={iconName} type={type} size={20} color={(iconName == 'plussquare'/*  && isFocused */) ? Color.blue : Color.mainBlack} />
              <Text style={{ textAlign: 'center', fontSize: 12 }}>{label}</Text>
            </View>
          );
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              { flex: 1, alignItems: 'center', padding: 6 },
              // label == 'Add' && { ...style.createEvent, ...style.shodow, },
              // label == 'Add' && { ...style.createEvent, ...style.shodow, },
              // (label == 'Add' && isFocused) && { ...style.createEvent, ...style.shodow, backgroundColor: Color.primaryColor },
            ]}>
            {getIcon(label)}
          </TouchableOpacity>
        );
      })}
    </ImageBackground>
  );
}
const withHeaderOptions = (navigation, title = '') => {
  return {
    title: title,
    headerStyle: {
      backgroundColor: Color.white,
      borderBottomColor: '#eee',
      borderBottomWidth: 1.2,
    },
    headerTitleStyle: {
      textAlign: 'left',
      fontFamily: Font.Medium,
      fontSize: 19,
    },
    headerRight: React.useCallback(() => {
      return (
        <View style={{ right: 20, flexDirection: 'row', alignItems: 'center' }}>
          {title == 'Blog Create' && <Text style={{ paddingHorizontal: 10, fontSize: 18 }}>{'Save draft'}</Text>}
          {title == 'Wishlist' && <Icon name='shopping-bag' type='font-awesome' size={17} style={{ paddingHorizontal: 13 }} />}
          <FeatherIcon name="align-left" size={30} color={Color.black} onPress={() => navigation.openDrawer()} style={{}} />
          {title !== 'Profile' && <FontAwesome name="user-circle" size={22} color={Color.black} onPress={() => navigation.navigate('Profile')} style={{ marginLeft: 12 }} />}

        </View>
      );
    }),
  };
};
const withoutHeaderOption = (navigation, isHeader = true, title = '') => {
  return {
    title: title,
    gestureEnabled: false,
    swipeEnabled: false,
    headerTintColor: '#000',
    headerStyle: {
      backgroundColor: Color.white,
      borderBottomColor: '#eee',
      borderBottomWidth: 1.2,
    },
    headerShown: isHeader,
  };
};
const HomeStackNavigator = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="BlogListing" component={BlogListing} options={withHeaderOptions(navigation, 'Blog Listing')} />
      <HomeStack.Screen name="BlogDetails" component={BlogDetails} options={withHeaderOptions(navigation, 'Blog Details')} />
      <HomeStack.Screen name="Comments" component={Comments} options={withHeaderOptions(navigation, 'Review & Comments')} />
      <HomeStack.Screen name="CommentsIcon" component={CommentsIcon} options={withHeaderOptions(navigation, 'Comments')} />
      <HomeStack.Screen name="DraftBlog" component={DraftBlog} options={withHeaderOptions(navigation, 'Draft Blog')} />
      <HomeStack.Screen name="BlogCreate" component={BlogCreate} options={withHeaderOptions(navigation, 'Blog Create')} />
      <HomeStack.Screen name="Myorders" component={Myorders} options={withHeaderOptions(navigation, 'Orders')} />
      <HomeStack.Screen name="OrderServiceDetails" component={OrderServiceDetails} options={withHeaderOptions(navigation, 'Order Details')} />
      <HomeStack.Screen name="MyUploadProducts" component={MyUploadProducts} options={withHeaderOptions(navigation, 'My Products')} />
      <HomeStack.Screen name="MyOrdersDelivered" component={MyOrdersDelivered} options={withHeaderOptions(navigation, 'Item Details')} />
      <HomeStack.Screen name="Transaction" component={Transaction} options={withHeaderOptions(navigation, 'Transaction')} />
      <HomeStack.Screen name="Subscription" component={Subscription} options={withHeaderOptions(navigation, 'Subscription')} />
      <HomeStack.Screen name="Service" component={Service} options={withHeaderOptions(navigation, 'Service Category')} />
      <HomeStack.Screen name="ServiceListing1" component={ServiceListing1} options={withHeaderOptions(navigation, 'IT Service')} />
      <HomeStack.Screen name="ServiceListing2" component={ServiceListing2} options={withHeaderOptions(navigation, 'Service Details')} />
      <HomeStack.Screen name="WishList" component={WishList} options={withHeaderOptions(navigation, 'Wishlist')} />
      <HomeStack.Screen name="MyService" component={MyService} options={withHeaderOptions(navigation, 'My Service')} />
      <HomeStack.Screen name="NewService" component={NewService} options={withHeaderOptions(navigation, 'Service list')} />
      <HomeStack.Screen name="Inbox" component={Inbox} options={withHeaderOptions(navigation, 'Inbox')} />
      <HomeStack.Screen name="Messanger" component={Messanger} options={withHeaderOptions(navigation, 'Chat')} />
      <HomeStack.Screen name="Privacy" component={Privacy} options={withHeaderOptions(navigation, 'Terms and Conditions')} />
      <HomeStack.Screen name="Passwordreset" component={Passwordreset} options={withoutHeaderOption(navigation, true, 'Change Password')} />
      <HomeStack.Screen name="Confirmation" component={Confirmation} options={withHeaderOptions(navigation, 'Confirmation')} />
      <HomeStack.Screen name="Profile" component={Profile} options={withHeaderOptions(navigation, 'Profile')} />
      {/* <HomeStack.Screen name="Chat" component={ChatScreen} options={withHeaderOptions(navigation, 'Confirmation')} /> */}
      {/* <HomeStack.Screen name="UploadProduct" component={UploadProduct} options={withHeaderOptions(navigation, 'Upload Products')} /> */}

    </HomeStack.Navigator>
  );
};
const searchStackNavigator = ({ navigation }) => {
  return (
    <searchStack.Navigator>
      <searchStack.Screen name="Product" component={Product} options={withHeaderOptions(navigation, 'Product Category')} />
      <searchStack.Screen name="ProductListing" component={ProductListing} options={withHeaderOptions(navigation, 'Cloths')} />
      <searchStack.Screen name="ProductListingDetails" component={ProductListingDetails} options={withHeaderOptions(navigation, 'Product Listing Details')} />
      <searchStack.Screen name="Shopping1" component={Shopping1} options={withHeaderOptions(navigation, 'Shopping Bag')} />
      <searchStack.Screen name="Shopping2" component={Shopping2} options={withHeaderOptions(navigation, 'Address')} />
      <searchStack.Screen name="Shopping3" component={Shopping3} options={withHeaderOptions(navigation, 'Payment')} />
    </searchStack.Navigator>
  );
};
const uploadStackNavigator = ({ navigation }) => {
  return (
    <uploadStack.Navigator>
      <uploadStack.Screen name="NewService" component={NewService} options={withHeaderOptions(navigation, 'Service list')} />
    </uploadStack.Navigator>
  );
};
const notificationStackNavigator = ({ navigation }) => {
  return (
    <notificationStack.Navigator>
      <notificationStack.Screen name="Inbox" component={Inbox} options={withHeaderOptions(navigation, 'Inbox')} />
    </notificationStack.Navigator>
  );
};
const ProfileStackNavigator = ({ navigation }) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Notification" component={Notification} options={withHeaderOptions(navigation, 'Notification')} />
      <ProfileStack.Screen name="Logout" component={LogingOut} options={withHeaderOptions(navigation, 'Profile')} />
    </ProfileStack.Navigator>
  );
};
export default function BottomNavigation({ }) {
  const drawerStatus = useDrawerStatus()
  const generateRandomNumber = () => Math.floor(Math.random() * 10 + 1);
  return (
    <BottomTabStack.Navigator
      tabBar={props => <MyTabBar {...props} index={props.state.index} />}
      sceneContainerStyle={{ flex: 1, opacity: drawerStatus === 'open' ? 0.7 : 1.0 }}
      initialRouteName="Home">
      <BottomTabStack.Screen options={{ headerShown: false }} name="Blog" component={HomeStackNavigator} />
      <BottomTabStack.Screen options={{ headerShown: false }} name="Product" component={searchStackNavigator} />
      <BottomTabStack.Screen options={{ headerShown: false }} name="Service" component={uploadStackNavigator} />
      <BottomTabStack.Screen options={{ headerShown: false }} name="Inbox" component={notificationStackNavigator} />
      <BottomTabStack.Screen options={{ headerShown: false }} name="Notification" component={ProfileStackNavigator} />
    </BottomTabStack.Navigator>
  );
}

const style = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    // backgroundColor: Color.white,
    position: 'relative',
    // elevation: 3,
    // borderBottomLeftRadius: 25,
    // padding: 3,
    // margin:20

  },
  imageback: {
    height: 60,
    width: width,
  },
  rightImg: {
    height: 35,
    width: 35,
    borderRadius: 40,
  },
  shodow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 2,
  },
  createEvent: {
    // width:30,
    // height:30,
    top: -12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 50,
    elevation: 10,
  },
  focusedStyle: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginBottom: 5,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});
