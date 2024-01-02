import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import GradientButton from '../Copmponents/GradientButton';
import { Color, Font, width } from '../Utils';
export default function Profile() {
    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.Image} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsu34yqIKdjK5cAWEcuUq3ryD30iiqd2ArQ&usqp=CAU', }}
            />
            <Text style={styles.Text}>Name</Text>
            <View style={styles.textIconContainer}>
                <TextInput
                    placeholder='Enter your name'
                    placeholderTextColor={'gray'}
                    style={styles.inputBox}
                />
                <Icon name="edit" size={15} color={Color.black} />
            </View>


            <Text style={styles.Text}>Email</Text>
            <View style={styles.textIconContainer}>
                <TextInput placeholder='Enter your Email' placeholderTextColor={'gray'}
                    style={styles.inputBox}
                />
                <Icon name="edit" size={15} color={Color.black} />
            </View>


            <Text style={styles.Text}>Mobile</Text>
            <View style={styles.textIconContainer}>
                <TextInput placeholder='Enter your Mobile' placeholderTextColor={'gray'}
                    style={styles.inputBox}
                />
                <Icon name="edit" size={15} color={Color.black} />
            </View>


            <Text style={styles.Text}>Gender</Text>
            <View style={styles.textIconContainer}>
                <TextInput placeholder='Gender' placeholderTextColor={'gray'}
                    style={styles.inputBox}
                />
                <Icon name="edit" size={15} color={Color.black} />
            </View>


            <Text style={styles.Text}>Location</Text>
            <View style={styles.textIconContainer}>
                <TextInput placeholder='Enter your Location' placeholderTextColor={'gray'}
                    style={styles.inputBox}
                />
                <Icon name="edit" size={15} color={Color.black} />
            </View>


            <Text style={styles.Text}>Password</Text>
            <View style={styles.textIconContainer}>
                <TextInput placeholder='Enter your Password' placeholderTextColor={'gray'}
                    style={styles.inputBox}
                />
                <Icon name="edit" size={15} color={Color.black} />
            </View>
            <TouchableOpacity>
                <GradientButton style={styles.button}>
                    <Text style={styles.buttontext}>
                        Update
                    </Text>
                </GradientButton>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.white,
        flex: 1
    },
    Image: {
        height: 120,
        width: 120,
        alignSelf: 'center',
        marginVertical: 25,
        borderRadius: 100
    },
    textIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 18,
        alignItems: 'center',
        width: width / 1.1,
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
        marginBottom: 15,
    },
    Text: {
        fontSize: 17,
        fontFamily: Font.Medium,
        color: Color.black,
        marginLeft: 22,
        // marginVertical:8
    },
    inputBox: {
        width: width / 1.2,
        // width: width / 1.1,
        fontSize: 15,
        fontFamily: Font.Regular,
    },
    button: {
        borderColor: Color.orange,
        alignSelf: 'center',
        padding: 6,
        paddingHorizontal: 40,
        marginTop: 20,
        borderRadius: 15
    },
    buttontext: {
        color: Color.white,
        fontSize: 18,
        fontFamily: 'Roboto-Medium'

    },
})