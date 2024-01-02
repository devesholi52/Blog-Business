
import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, Image, FlatList } from 'react-native'
import style from './Styles'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { TextInput } from 'react-native'

export default function index({ data, placeholder = "Select an item",
    onChangeValue, isSearch = false, styles = {}, bottomstyles = {} }) {

    const [newData, setNewData] = useState(data)
    const [isOpen, setisOpen] = useState(false)
    const [value, setValue] = useState("")
    const [searchValue, setSearchValue] = useState("")
    const renderItem = ({ item }) => {
        const { image, label, value, id } = item
        return (
            <TouchableOpacity style={style.itemStyle}
                onPress={() => {
                    setisOpen(false)
                    onChangeValue(item)
                    setValue(value)
                }}>
                {!!image && <Image source={{ uri: image }} style={style.image} />}
                <Text style={{ color: '#000' }}>{label ? label : ''}</Text>
            </TouchableOpacity>
        )
    }
    const handleSearch = text => {
        setSearchValue(text)
        if (!text) return setNewData(data)
        const list = data.filter(val => val.label.toLowerCase().includes(text.toLowerCase()))
        setNewData([...list] || [])
    }


    return (
        <>
            {!isOpen ? (
                <TouchableOpacity style={[style.button, { ...styles }]} onPress={() => setisOpen(!isOpen)}>
                    <Text style={style.valueText}>{value ? value : placeholder}</Text>
                    <AntIcon name="caretdown" size={10} color="grey" />
                </TouchableOpacity>
            ) :
                <>
                    <TouchableOpacity style={[style.button, { ...styles }]} onPress={() => setisOpen(!isOpen)}>
                        <Text style={style.valueText}>{value ? value : placeholder}</Text>
                        <AntIcon name="caretup" size={10} color="grey"/>
                    </TouchableOpacity>
                    <View style={[style.bottom, { ...bottomstyles }]}>
                        {isSearch &&
                            <TextInput
                                value={searchValue}
                                onChangeText={handleSearch}
                                placeholder='Search your query here'
                                placeholderTextColor="gray"
                                style={style.searchbox} />}
                        {(newData && newData.length !== 0) ?
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                nestedScrollEnabled={true}
                                data={[...newData]}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => index.toString()}
                            /> : <View style={style.noData}>
                                <Text style={style.noDataText} >No Data Found</Text>
                            </View>
                        }
                    </View>
                </>
            }
        </>
    )
}


// import CustomDropDown from '../Components/Advanced/CustomDropDown'
// {(!!category && category.length !== 0) && <CustomDropDown data={category} placeholder="Business Category" onChangeValue={onSelectBusinessCategory} />}

