import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useState } from 'react'

const BUTTON = () => {
    const [name,setName]=useState('prashu')
    const clickHandler=()=>{
        if (name==='prashu'){
            setName('pranav')
        }else{
            setName('prashu')
        }
    }
    return (
        <View>  
            <Text style={{color:'red'}}>my name is {name}</Text>    
            <Button title='update name' onPress={clickHandler} color={'pink'}/>
        </View>
    )
}

export default BUTTON

const styles = StyleSheet.create({})