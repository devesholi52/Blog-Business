

import React, { useState, useCallback, useEffect, } from 'react'
import { StyleSheet, View, ActivityIndicator, picimage, ImageBackground } from 'react-native'
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Divider, IconButton, } from 'react-native-paper';
import { Color } from '../Utils';
// import { GiftedChat, Bubble, Send, SystemMessage } from 'react-native-gifted-chat'

export default function Messanger() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'bncejlgvewbvhlkwehcnbwliuch',
                    avatar: 'https://placeimg.com/140/140/any',
                },
                // image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnw76u3IpWS55jxtfCIvERv_o6cpEDn062VQ&usqp=CAU',
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    function renderLoading() {
        return <View style={styles.loadingContainer}>
            <ActivityIndicator size='large' color='#6646ee' />
        </View>
    }

    function renderBubble(props) {
        return (
            <Bubble {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: 'teal',
                        elevation: 10,
                        borderRadius: 15,
                        borderBottomEndRadius: 2
                    },
                    left: {
                        backgroundColor: '#eee',
                        elevation: 10,
                        borderRadius: 15,
                        borderBottomLeftRadius: 2
                    }
                }}
                textStyle={{ right: { color: 'white' }, left: { color: '#000' } }} />
        )
    }


    function renderSend(props) {
        return (
            <>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 3, paddingRight: 16 }}>
                    <Ionicons name={'document-attach'} size={18} color={Color.gray}
                        onPress={picimage} style={styles.mediaButton} />
                    <Send {...props}>
                        <Ionicons name={'ios-send-sharp'} size={20} color={Color.gray} style={{ alignSelf: 'center', bottom: 10 }} />
                    </Send>
                </View>
            </>)
    }

    function scrollToBottomComponent() {
        return <View style={styles.bottomComponentContainer}>
            <IconButton icon='chevron-double-down' size={20} color={Color.black} />
        </View>
    }


    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}

                user={{
                    _id: 1,
                    // _id: 2
                }}
                // onSend={messages => onSend(messages)}
                // isTyping={true}
                isCustomViewBottom
                renderBubble={renderBubble}
                placeholder={'Type your message here...'}
                showUserAvatar
                textInputProps={{ color: '#000', }}
                alwaysShowSend
                inverted={false}
                renderSend={renderSend}
                scrollToBottom
                scrollToBottomComponent={scrollToBottomComponent}
                renderLoading={renderLoading}
                onQuickReply={reply => handleQuickReply(reply)}


            />
        </View>
    )
}


const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mediaButton: {
        alignSelf: 'center',
        // marginTop: 10,
        paddingHorizontal: 10
    },
    bottomComponentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'teal',
        borderRadius: 100,
        height: 30,
        width: 30
    },
}
)

