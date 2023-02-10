import { StyleSheet, Text, View,ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'

const List = () => {
    const [users,setUsers] = useState([
        {name:'Prashanth',id:1},
        {name:'Pranav',id:2},
        {name:'Dinesh',id:3},
        {name:'Kalyan',id:4},
        {name:'Mohit',id:5},
        {name:'Subbu',id:6},
        {name:'Praveen',id:7},
        {name:'Bunny',id:8},
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
          numColumns={2}
          keyExtractor={(item)=>item.id}
          data={users}
          renderItem={({item})=>(<Text style={styles.listitems}> { item.name } </Text>)}
          //dont know y but working only with "item" not working with "user" 
          //flat automatically searchs for key in data if not we have to use extractkey
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
    marginTop:24,
    marginHorizontal:30,
    fontWeight:'bold',
    margintop:24,
  },
})