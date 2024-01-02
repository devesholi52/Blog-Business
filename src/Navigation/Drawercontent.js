import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, StatusBar, } from 'react-native';
import { DrawerContentScrollView, DrawerItem, useDrawerStatus, } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { height, width, Color, Font, } from '../Utils';
import { Avatar, Text, Icon, Divider } from 'react-native-elements';
import { setGuest } from '../redux/Actions/UserAction';
import { Drawer } from 'react-native-paper';
import { color } from 'react-native-reanimated';
// import { useIsFocused } from '@react-navigation/native';

const avatar =
  'https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4';

export function Drawercontent(props) {
  const isDrawerStatus = useDrawerStatus();
  const dispatch = useDispatch();
  const selectedTab = useSelector(state => state?.tabReducer?.selectedTab);
  const guest = useSelector(state => state?.user?.guest);

  const tokenfunc = useSelector(state => state?.user?.tokenfunc);
  const userData = useSelector(state => state?.user?.userData);


  const SignOut = async () => {
    await AsyncStorage.clear();
    dispatch(setGuest(false));
    tokenfunc(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor={isDrawerStatus == 'open' ? Color.white : Color.white} translucent={false} />

      <Image
        style={styles.image}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnw76u3IpWS55jxtfCIvERv_o6cpEDn062VQ&usqp=CAU',
        }} />
      <Text style={{ fontSize: 17, fontFamily: Font.Medium, paddingTop: 15, alignSelf: 'center' }}>Vinay Shanki</Text>
      <Text style={{ fontSize: 14, fontFamily: Font.Regular, alignSelf: 'center' }}>Vinayshanki@gmail.com</Text>

      <View style={{ borderBottomWidth: 1, marginTop: 20, borderColor: '#eee' }}>

      </View>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <Drawer.Section >
          <DrawerItem
            icon={({ color, size }) => <Icon type='ant-design' name="creditcard" size={18} color={Color.blue} />}
            label={'Blogs'}
            labelStyle={{ color: 'black', fontSize: 15, marginHorizontal: -18 , fontFamily: Font.Regular}}
            onPress={() => props.navigation.navigate('BlogListing')}
          />
          <DrawerItem
            icon={({ color, size }) => <Icon type='material-community' name="notebook-edit-outline" size={18} color={Color.blue} />}
            label={'Create Blog'}
            labelStyle={{ color: 'black', fontSize: 15, marginHorizontal: -18, fontFamily: Font.Regular }}
            onPress={() => props.navigation.navigate('BlogCreate')}
          />
            <DrawerItem
              icon={({ color, size }) => <Icon type='entypo' name="shopping-bag" size={18} color={Color.blue} />}
              label={'Products'}
              labelStyle={{ color: 'black', fontSize: 15, marginHorizontal: -18, fontFamily: Font.Regular }}
              onPress={() => props.navigation.navigate('Product')}
            />
          <DrawerItem
            icon={({ color, size }) => <Icon type='entypo' name="shopping-bag" size={18} color={Color.blue} />}
            label={'My Product Order'}
            labelStyle={{ color: 'black', fontSize: 15, marginHorizontal: -18 , fontFamily: Font.Regular}}
            onPress={() => props.navigation.navigate('Myorders')}
          />
          <DrawerItem
            icon={({ color, size }) => <Icon type='entypo' name="shopping-bag" size={18} color={Color.blue} />}
            label={'New Product'}
            labelStyle={{ color: 'black', fontSize: 15, marginHorizontal: -18, fontFamily: Font.Regular}}
            onPress={() => props.navigation.navigate('OrderServiceDetails')}
          />
            <DrawerItem
              icon={({ color, size }) => <Icon type='ant-design' name="setting" size={18} color={Color.blue} />}
              label={'Service'}
              labelStyle={{ color: 'black', fontSize: 15, marginHorizontal: -18, fontFamily: Font.Regular }}
              onPress={() => props.navigation.navigate('Service')}
            />
          <DrawerItem
            icon={({ color, size }) => <Icon type='ant-design' name="setting" size={18} color={Color.blue} />}
            label={'My Service'}
            labelStyle={{ color: 'black', fontSize: 15, marginHorizontal: -18 , fontFamily: Font.Regular}}
            onPress={() => props.navigation.navigate('MyService')}
          />
          <DrawerItem
            icon={({ color, size }) => <Icon type='ant-design' name="setting" size={18} color={Color.blue} />}
            label={'New Service'}
            labelStyle={{ color: 'black', fontSize: 15, marginHorizontal: -18, fontFamily: Font.Regular }}
            onPress={() => props.navigation.navigate('NewService')}
          />
          <DrawerItem
            icon={({ color, size }) => <Icon type='ant-design' name="bells" size={18} color={Color.blue} />}
            label={'Notification'}
            labelStyle={{ color: 'black', fontSize: 15, marginHorizontal: -18, fontFamily: Font.Regular }}
            onPress={() => props.navigation.navigate('Notification')}
          />
          <DrawerItem
            icon={({ color, size }) => <Icon type='material-community' name="bookmark-plus-outline" size={18} color={Color.blue} />}
            label={'Transaction'}
            labelStyle={{ color: 'black', fontSize: 15, marginHorizontal: -18, fontFamily: Font.Regular }}
            onPress={() => props.navigation.navigate('Transaction')}
          />
          <DrawerItem
            icon={({ color, size }) => <Icon type='material-community' name="bookmark-plus-outline" size={18} color={Color.blue} />}
            label={'Subscription'}
            labelStyle={{ color: 'black', fontSize: 15, marginHorizontal: -18, fontFamily: Font.Regular }}
            onPress={() => props.navigation.navigate('Subscription')}
          />
            <DrawerItem
              icon={({ color, size }) => <Icon type='ant-design' name="inbox" size={18} color={Color.blue} />}
              label={'Inbox'}
              labelStyle={{ color: 'black', fontSize: 15, marginHorizontal: -18, fontFamily: Font.Regular }}
            // onPress={() => props.navigation.navigate('Home')}
            onPress={() => props.navigation.navigate('Inbox')}
            />
          <DrawerItem
            icon={({ color, size }) => <Icon type='material-icons' name="privacy-tip" size={18} color={Color.blue} />}
            label={'Privacy'}
            labelStyle={{ color: 'black', fontSize: 15, marginHorizontal: -18, fontFamily: Font.Regular }}
          // onPress={() => props.navigation.navigate('Home')}
          onPress={() => props.navigation.navigate('Privacy')}
          />
          <DrawerItem
            icon={({ color, size }) => <Icon type='entypo' name="lock" size={18} color={Color.blue} />}
            label={'Change Password'}
            labelStyle={{ color: 'black', fontSize: 15, marginHorizontal: -18 , fontFamily: Font.Regular}}
          onPress={() => props.navigation.navigate('Passwordreset')}
          />
          <DrawerItem
            icon={({ }) => (<Icon color={Color.blue} iconStyle={{}} name="exit-to-app" onPress={() => console.log('onPress()')} size={18} type="MaterialCommunityIcons" />)}
            label="Logout"
            labelStyle={{ color: Color.black, fontSize: 15,  marginHorizontal: -18, fontFamily: Font.Regular }}
            onPress={() => { SignOut(); }} />

        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 25,
    width: 25,
    borderRadius: 30,
    marginHorizontal: 20,
  },
  drawercontent: {
    backgroundColor: Color.white,
    flexDirection: 'row',
    // alignItems: 'center',
    paddingVertical: 4,
    // borderBottomColor: '#BDBDBD',
    // borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  logo: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: height / 6,
    width: width / 3,
  },
  userInfoSection: {
    // paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawersection: {
    marginTop: 15,
  },
  bottomdrawersection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: Color.iconColor,
    padding: 3,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 20
  }
});





// privacy-tip
// material-icons