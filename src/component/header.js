import React from 'react'
import {Text,View} from 'react-native'

const Header = () => {
    return(
        <View style={{
            height:80,
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'green'
        }}>
            <Text style={{
                color:'white'
            }}> Sample Chat</Text>
        </View>
    )
}

export default Header