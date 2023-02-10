import { StyleSheet, Text, View,ScrollView, FlatList } from 'react-native'
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
       {/*
         <ScrollView>
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
         </ScrollView>
      */}
      {
        <FlatList
          data={users}
          renderItem={({item})=>(<Text style={styles.listitems}> { item.name } </Text>)}//dont know y but working only with "item" not working with "user" 
        />
      }
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  listitems:{
    backgroundColor:'lightgreen',
    padding:30,
    marginTop:20,
    marginHorizontal:30,
    fontWeight:'bold',
  },
})