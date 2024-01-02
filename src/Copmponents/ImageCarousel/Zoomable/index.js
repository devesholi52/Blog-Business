
import React, { useRef, useCallback, useState } from 'react'
import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native'
import GestureHandler, { PanGestureHandler, PinchGestureHandler, State } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated';
// import { Color, height, width } from '../../../Utils';
const ITEM_WIDTH = 50 // size of you element
const { height, width } = Dimensions.get('window')


export default function Zoomable({ data = [], currentIndex }) {
    const [activeIndex, setActiveIndex] = useState(currentIndex)
    const flatListRef = useRef(null)
    const scale = useRef(new Animated.Value(1))
    const translateX = new Animated.Value(0)
    const translateY = new Animated.Value(0)

    const handleGesturePan = () => {
        Animated.event([{
            nativeEvent: { translationX: translateX, translationY: translateY }
        }], { useNativeDriver: true }, { listener: e => console.log('hello listener', e.nativeEvent) })
    }
    const onPinchEvent = Animated.event([{ nativeEvent: { scale: scale } }], { useNativeDriver: true })
    const onPinchStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            Animated.spring(scale, {
                toValue: 1,
                useNativeDriver: true
            }).start()
        }
    }
    const scrollToIndex = () => { flatListRef.current.scrollToIndex({ animated: true, index: 2 }) }
    const onFlatlistUpdate = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0);
        }
    }, []);
    const renderItem = (item, index) => {
        return (
            <View style={[styles.container]}>
                <PanGestureHandler onGestureEvent={handleGesturePan}>
                    <View style={[styles.innerContainer]} >
                        <PinchGestureHandler onGestureEvent={onPinchEvent}
                            onHandlerStateChange={onPinchStateChange} >
                            <Animated.Image
                                source={{ uri: item?.image }}
                                style={{ width: width, height: height, transform: [{ scale: scale }] }}
                                resizeMode='contain' />
                        </PinchGestureHandler>
                    </View>
                </PanGestureHandler>
            </View>
        )
    }
    return (
        <>
            <FlatList
                ref={flatListRef}
                initialScrollIndex={activeIndex}
                data={data}
                renderItem={({ item, i }) => renderItem(item, i)}
                keyExtractor={(i, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
                onViewableItemsChanged={onFlatlistUpdate} />
            <View style={styles.dots}>
                {data.map((image, index) => (
                    <View style={[styles.dot, { backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed' }]} />))}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    innerContainer: {
        // flex: 1
    },
    image: {
        width: width,
        height: height
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: '#ededed',
        borderColor: '#c9c9c9',
        margin: 5,
        elevation: 5
    },
})