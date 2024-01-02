import React, { useState, useCallback, useRef } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions, useWindowDimensions, Modal, TouchableOpacity, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import * as Animatable from 'react-native-animatable';
import { PanGestureHandler, PinchGestureHandler } from 'react-native-gesture-handler'
import Zoomable from './Zoomable';
import CloseButton from './Zoomable/CloseButton';
const { height, width } = Dimensions.get('window')

const ImageCarousel = ({ navigation, images = [], isBanners = false }) => {
  const imagesArray = images || []
  const [isModelOpen, setIsModelOpen] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;

  const scale = useRef(new Animated.Value(1));
  const translateX = useRef(new Animated.Value(0)).current;

  const onFlatlistUpdate = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);
  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => setIsModelOpen(!isModelOpen)} disabled={true}>
            {isBanners ? <Image resizeMode='contain' style={[styles.image, { width: windowWidth - 40 }]} source={{ uri: item?.banner }} /> :
              <Image style={[styles.image, { width: windowWidth - 40 }]} source={{ uri: item?.image }} />}
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        onViewableItemsChanged={onFlatlistUpdate} />

      <View style={styles.dots}>
        {images.map((image, index) => (
          <View style={[styles.dot, { backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed' }]} />))}
      </View>

      {/* <Modal visible={isModelOpen}>
        <CloseButton onClose={() => { setIsModelOpen(!isModelOpen) }} />
        <Zoomable data={images} key={activeIndex} currentIndex={activeIndex} />
      </Modal> */}

    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  image: {
    margin: 10,
    height: width / 1.6,
    resizeMode: 'contain',
  },
  zoomedImage: {
    height: height,
    width: width,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#ededed',
    borderColor: '#c9c9c9',
    margin: 5,
  },
});

export default ImageCarousel;
