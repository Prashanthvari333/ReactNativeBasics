import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState}from 'react'

const Input = () => {
    const [name,setName]=useState('prashanth kumar')
    const [age,setAge]=useState(35)
  return (
    <View style={styles.comp}>
      <View>
        <Text>Enter Name:</Text>
        <TextInput
            placeholder='prashanth kumar'
            style={styles.input}
            onChangeText={(peru)=>setName(peru)}
        />
      </View>
      <View>
          <Text>Enter Age:</Text>
          <TextInput
            style={styles.input}
            placeholder='35'
            onChangeText={(a)=>setAge(a)}
            keyboardType='numeric'
          />
      </View>
      <Text style={{color:'violet',fontSize:20,fontWeight:'bold'}}>You  name is :{name} and Your age is:{age}</Text>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    comp:{
        padding:5,
        margin:20,
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        borderColor:'skyblue',
        borderWidth:1,
        Width:400,
        margin:5,
        
    },
});