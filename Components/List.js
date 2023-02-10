import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const List = () => {
    const [users,setUsers] = useState([
        {name:'Prashanth',key:1},
        {name:'Pranav',key:2},
        {name:'Dinesh',key:3},
        {name:'Kalyan',key:4},
        {name:'Mohit',key:5},
        {name:'Subbu',key:6},
        {name:'Praveen',key:7},
        {name:'Bunny',key:8},
    ])
  return (
    <View>
       {
         users.map(
           (user)=>{
             return (
               <View key={user.key}>
                <Text style={styles.listitems}>{user.name}</Text>
               </View>
             );
           }
         )
       }
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  listitems:{
    backgroundColor:'lightgreen',
    padding:10,
    marginTop:20,
    fontWeight:'bold',
  },
})