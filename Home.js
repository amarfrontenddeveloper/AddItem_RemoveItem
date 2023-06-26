import { Alert, Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { apiCall, customerSelectors, otpApiCall, setCartData } from './redux/reducer';
import cart from './cart';

const Home = ({ navigation }) => {
    const dispatch = useDispatch()
    const { apiResponse, cartData } = customerSelectors()

    const [cart, setCart] = useState([]);
    console.log("cart data!!", cart.length)
   

    useEffect(() => {
        console.log("cartData!! >====", cartData)
        dispatch(setCartData(cart))
    }, [cart])

    const response = () => {
        console.log("sdfsadfsdf")
        // dispatch(apiCall(data))
        dispatch(apiCall())
    }

    const addItem = (data) => {
        if (cartData.length == 0) {
            setCart([...cartData, data])
            Alert.alert('Sucessfuly added')
            dispatch(setCartData(cartData))
        } else if (cartData.some((item) => item.id === data.id)) {
            Alert.alert('already added this item!')
        } else {
            setCart([...cartData, data])
            Alert.alert('Sucessfuly added')
            dispatch(setCartData(cartData))
        }

    }



    const renderItem = ({ item }) => {

        return (
            <View style={styles.container}>
                <Image style={{
                    width: 200,
                    height: 150,
                    resizeMode: 'contain',
                }}
                    source={{ uri: item.image }} />
                <Text style={{ fontSize: 20, color: 'purple' }}>{item.title}</Text>
                <Text style={{ fontSize: 20, color: 'black' }}>Price {item.price}</Text>
                <Text style={{ fontSize: 20, color: 'blue' }}>Category: {item.category}</Text>
                {/* <Text style={{ fontSize: 30, color: 'purple' }}>{item.likecount}</Text> */}
                {/* <TouchableOpacity onPress={() => LikeFunction()}><Text>Like status</Text></TouchableOpacity> */}
                <Button title='Add item' onPress={() => addItem(item)} />
            </View>
        )
    }

    return (
        <View>
            <Text>home page</Text>
            <Text>Total Cart Item: {cartData ? cartData.length : 0}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}><Text>Cart</Text></TouchableOpacity>
            <FlatList data={apiResponse}
                renderItem={renderItem}
            />
            <Button onPress={() => response()} title='click' />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 12,
        paddingBottom:75,
    }
})

// import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React, { useState } from 'react'
// import axios from 'axios'

// const data = {
//     Mobile_No: '+917676767676',
//     pageNumber: 0,
//     pageSize: 50,
// }

// const Home = () => {
//     const [search, setSearch] = useState('');
//     const [filteredDataSource, setFilteredDataSource] = useState([]);
//     const [masterDataSource, setMasterDataSource] = useState([]);

//     const featchData = () => {
//         axios.get(`http://103.117.66.70:5013/api/Channel/GetChannelMasterList?Mobile_No=${data.Mobile_No}&pageNumber=${data.pageNumber}&pageSize=${data.pageSize}`)
//             .then(res => console.log("amar!!", res.data))
//             .catch(err => console.log("errr", err))

//         fetch(`http://103.117.66.70:5013/api/Channel/GetChannelMasterList?Mobile_No=${data.Mobile_No}&pageNumber=${data.pageNumber}&pageSize=${data.pageSize}`)
//             .then(res => res.json())
//             .then(res => {
//                 console.log("fetch get method with parameters", res)
//                 setFilteredDataSource(res?.items);
//                 setMasterDataSource(res?.items);
//             })
//             .catch(err => console.log("err!!!", err))

//         fetch('http://103.117.66.70:5013/api/Login/SendOTP', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 mobile_No: "+919898989898"
//             })
//         })
//             .then(res => res.json())
//             .then(res => console.log("fetch post res", res))
//             .catch(err => console.log("post err", err))

//         axios.post('http://103.117.66.70:5013/api/Login/SendOTP', {
//             mobile_No: "+919898989898"
//         })
//             .then(res => console.log("axios post res", res?.data))
//             .catch(err => console.log("axios post err", err))
//     }

//     const searchFilterFunction = (text) => {
//         if (text) {
//             const newData = masterDataSource.filter(
//                 function (item) {
//                     const itemData = item.name
//                         ? item.name.toUpperCase()
//                         : ''.toUpperCase();
//                     const textData = text.toUpperCase();
//                     return itemData.indexOf(textData) > -1;
//                 });
//             setFilteredDataSource(newData);
//             setSearch(text);
//         } else {
//             setFilteredDataSource(masterDataSource);
//             setSearch(text);
//         }
//     };


//     const renderItem = ({ item }) => {
//         return (
//             <View>
//                 <Text style={{ fontSize: 30, color: 'purple' }}>{item.name}</Text>
//             </View>
//         )
//     }

//     return (
//         <View>
//             <Text>Home</Text>
//             <TouchableOpacity onPress={() => featchData()}>
//                 <Text>
//                     Click here!
//                 </Text>
//             </TouchableOpacity>
//             <TextInput
//                 style={styles.textInputStyle}
//                 onChangeText={(text) => searchFilterFunction(text)}
//                 value={search}
//                 underlineColorAndroid="transparent"
//                 placeholder="Search Here"
//             />
//             <FlatList data={filteredDataSource}
//                 renderItem={renderItem} />
//         </View>
//     )
// }

// export default Home

// const styles = StyleSheet.create({
//     textInputStyle: {
//         height: 40,
//         borderWidth: 1,
//         paddingLeft: 20,
//         margin: 5,
//         borderColor: '#009688',
//         backgroundColor: '#FFFFFF',
//     },
// })