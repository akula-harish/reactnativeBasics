//What is componet And nested components And [Text,View,StyleSheet]
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// {/* parent componet*/}
// const App = () => {
//   return (
//     <View style = {styles.container}>
//       <Text>App Parent</Text>
//       <One/>
//       <Two/>
//     </View>
//   )
// }

// {/* child1 componet*/}
// const One = () => {
//   return(
//     <View>
//       <Text>First Child</Text>
//     </View>
//   )
// }

// {/* child2 componet*/}
// const Two = () => {
//   return(
//     <View>
//       <Text>Second Child</Text>
//     </View>
//   )
// }

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
// })



{/* -------------------------------------2-------------------------------------------------*/}

//What is [Button, ScrollView, TouchableOpacity, SafeAreaView] and shadow properties
// import { SafeAreaView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <SafeAreaView style = {styles.container}>
//       <Text>App</Text>
//       <Button title='Click' color='red'/>
//       <TouchableOpacity style = {styles.btn}>
//         <Text style = {{textAlign: 'center', color: '#fff', fontSize: 14, fontWeight: 700}}>TouchableOpacity</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   btn:{
//     height: 40,
//     width: '100%',
//     borderWidth: 1,
//     margin: 20,
//     shadowColor: '#171717',  
//     shadowOpacity: 0.5,  
//     shadowRadius: 3,
//     elevation: 2,
//     borderColor: '#ccc',
//     paddingTop: 8,  
//     backgroundColor: '#ccc',
//     borderRadius: 10,
//   }
// })



{/* ----------------------------------------3----------------------------------------------*/}

//[useState, JSON object, onPress] and here i did when i click the btn then state will be updated to new name and age
// import {StyleSheet, Text, View, Button } from 'react-native'
// import React, { useState } from 'react'

// const App = () => {

//   const[name, setName] = useState('Harish') /* single value */
//   const[person, setPerson] = useState({
//     name: 'Some',
//     age: '26',
//   })  /* two vales here so i taken json format */

//   function click(){
//     setName('Akula Harish') /* single value update*/
//     setPerson({name:'Other User', age: '100'})  /* two values updated */
//   }


//   return (
//       <View style = {styles.container}>
//         <Text>My Name is {name}</Text>
//         <View style = {{margin: 10,}}>
//           <Button title='Click' onPress={click}/>
//         </View>  
//         <Text>Person Name is {person.name} and He Age is {person.age}</Text>
//       </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })


{/* ----------------------------------------4----------------------------------------------*/}

//[TextInput] when i enter the values in text box same values render into the same page like output
// import React, {useState} from 'react';
// import {View, Text, StyleSheet, TextInput} from 'react-native';

// const App = () => {
//   const[name, setName] = useState('');
//   const[age, setAge] = useState('');
//   return(
//     <View style = {styles.container}>
//       <Text>Enter Your Values Here</Text> 
//       <TextInput style = {styles.textInput}
//       placeholder='Enter Your Name'
//       onChangeText={(val)=>setName(val)}
//       />
//       <TextInput style = {styles.textInput}
//       placeholder='Enter Your Age'
//       keyboardType='numeric'
//       onChangeText={(val)=>setAge(val)}
//       />
//       <Text>Name:{name}   (and)   Age: {age}</Text>   
//     </View>
//   )
// }
// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   textInput: {
//     borderWidth: 1,
//     width: '100%',
//     marginTop: 10,
//     marginBottom: 10,
//     paddingLeft: 20,
//     paddingRight: 20,
//     backgroundColor: '#ccc'
//   }
// })



{/* ----------------------------------------5----------------------------------------------*/}

//map function i used here bcs of loop iteration
// import { ScrollView, StyleSheet, Text, View } from 'react-native'
// import React, {useState} from 'react'

// const App = () => { 
//   const[person, setPerson] = useState([
//     {name: 'Harish', key: '1'},
//     {name: 'Mahesh', key: '2'},
//     {name: 'Prashanth', key: '3'},
//     {name: 'Harish', key: '4'},
//     {name: 'Mahesh', key: '5'},
//     {name: 'Prashanth', key: '6'},
//     {name: 'Harish', key: '7'},
//     {name: 'Mahesh', key: '8'},
//     {name: 'Prashanth', key: '9'},
//     {name: 'Harish', key: '10'},
//     {name: 'Mahesh', key: '11'},
//     {name: 'Prashanth', key: '12'},
//   ]) //i stored the objects in a array
//     return (
//     <View style = {styles.container}>
//       <ScrollView>
//         {
//           person.map((item)=>{
//             return(
//               <View key={item.key}>
//                 <Text style = {styles.text}>{item.name}</Text>
//               </View>
//             )
//           })
//         }
//       </ScrollView>  
//     </View>
//   )
// }
// export default App

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   text: {
//     padding: 10,
//     backgroundColor: 'red',
//     margin: 20,
//   }
// })


{/* ----------------------------------------6----------------------------------------------*/}

// FLATLIST instaed of [scrollview and map-fun] and destructuring concept i lernt here
// import { FlatList, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'

// const App = () => {
//   const[person, setPerson] = useState([
//     {name: 'Harish', key: '1'},
//     {name: 'Harish', key: '2'},
//     {name: 'Harish', key: '3'},
//     {name: 'Harish', key: '4'},
//     {name: 'Harish', key: '5'},
//     {name: 'Harish', key: '6'},
//     {name: 'Harish', key: '7'},
//     {name: 'Harish', key: '8'},
//     {name: 'Harish', key: '9'},
//     {name: 'Harish', key: '10'},
//     {name: 'Harish', key: '11'},
//     {name: 'Harish', key: '12'},
//     {name: 'Harish', key: '13'},
//     {name: 'Harish', key: '14'},
//     {name: 'Harish', key: '15'},
//   ])
//   return (
//     <View style = {styles.container}>
//       <FlatList
//         numColumns={2}
//         keyExtractor={(item)=>item.key}
//         data = {person}
//         renderItem={({item}) => (
//           <Text style = {styles.text_box}>{item.name}</Text>
//         )}
//       />
//     </View>
//    )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   text_box: {
//     fontSize: 20,
//     backgroundColor: 'green',
//     margin: 15,
//     padding: 15,
//     backgroundColor: 'red'
//   }
// })


{/* ----------------------------------------7----------------------------------------------*/}

//[FlatList] here i did when i click the item it will show the item id number in console box
// import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'

// const App = () => {
//   const[person, setPerson] = useState([
//     {name: 'Harish', id: '1'},
//     {name: 'Harish', id: '2'},
//     {name: 'Harish', id: '3'},
//   ])

// const pressHandler = (id) =>{
//   console.log(id);
// }

//   return (
//     <View style = {styles.conatiner}>
//       <FlatList
//         data = {person}
//         renderItem={({item})=>(
//           <TouchableOpacity onPress={()=> pressHandler(item.id)}>
//             <Text style = {styles.text_box}>{item.name}</Text>
//           </TouchableOpacity>  
//         )}
//       />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   conatiner: {
//     flex: 1,
//     padding: 20,
//   },
//   text_box: {
//     padding: 20,
//     backgroundColor: 'green',
//     margin: 20,
//   }
// })




{/* <FlatList
    data = {data}
    renderItem={()=> 
      <Text>{item.text}</Text>
    }
/> */}



{/* ----------------------------------------8----------------------------------------------*/}

//sample task i did here [when i gave the value in txt box and enter add btn item will be added in list and when i click the item automatically item will be delted] and Alert And Dismissing the keyboard touch any where actionf
// import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
// import React, { useState } from 'react'
// import Header from './Components/Header'
// import TodoItem from './Components/TodoItem'
// import AddTodo from './Components/AddTodo'

// const App = () => {
//   const[todo, setTodo] = useState([
//     {text: 'water', key: '1'},
//     {text: 'milk', key: '2'},
//     {text: 'tea', key: '3'},
//   ]);
//   const pressHandler = (key) => {
//     setTodo((prevTodo)=>{
//       return prevTodo.filter( todo => todo.key != key)
//     })
//   }


//   const submitHandler = (text) => {
//     if(text.length > 3){
//       setTodo((prevTodo) => {
//         return[
//           { text: text, key: Math.random().toString() },
//           ...prevTodo
//         ];
//       })
//     }  
//     else{
//       Alert.alert('OOPS!', 'Need 3 characters must',
//       [{text: 'Undestood', onPress: () => console.log('alert.closed')}]
//     )
//     }
//   }

//   return (
//     <TouchableWithoutFeedback onPress={()=>{
//       Keyboard.dismiss(); //by the help of this keyboard removed press any where on the screen
//       console.log('dismissed keyboard'); //just op will display in console box
//     }}>
//       <View style = {styles.container}>
//         <Header/>
//         <AddTodo submitHandler={submitHandler}/>
//         <View style = {styles.list_data}>
//           <FlatList data = {todo}
//           renderItem={({item}) => (
//           <TodoItem item = {item} pressHandler = {pressHandler}/>
//           )}
//           />
//         </View>  
//       </View>
//     </TouchableWithoutFeedback>  
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   list_data: {
//     marginTop: 20,
//   },
//   text_list: {
//     fontSize: 18,
//     marginTop: 5,
//     marginBottom: 5,
//   }
// })



{/* ----------------------------------------9----------------------------------------------*/}

//[FlexBox]
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View style = {styles.container}>
//       <Text style = {styles.one}>One</Text>
//       <Text style = {styles.two}>Two</Text>
//       <Text style = {styles.three}>Three</Text>
//       <Text style = {styles.four}>Four</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: '#ccc',
//     padding: 20,
//     alignItems: 'center',
//   },
//   one: {
//     padding: 10,
//     backgroundColor: 'yellow',
//     flex: 1.5,
//     fontSize: 14,
//     fontWeight: 600,
//     color: 'red'
//   },
//   two: {
//     padding: 15,
//     backgroundColor: 'red',
//     flex: 2,
//     marginLeft: 6,
//     marginRight: 6,
//     fontSize: 14,
//     fontWeight: 600,
//     color: 'white'
//   },
//   three: {
//     padding: 20,
//     backgroundColor: 'blue',
//     flex: 3,
//     fontSize: 14,
//     fontWeight: 600,
//     color: 'white'
//   },
//   four: {
//     padding: 25,
//     backgroundColor: 'green',
//     flex: 4,
//     marginLeft: 6,
//     fontSize: 14,
//     fontWeight: 600,
//     color: 'red'
//   }
// })




{/* -----------------------------------Grid View------------------------------------------- */}


//import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
// import React from 'react'

// const App = () => {
//   return(
//     <Grid/>
//   )
// }
// export default App;

// const data = [
//   {id: 'a', value: 'A'},
//   {id: 'b', value: 'B'},
//   {id: 'c', value: 'C'},
//   {id: 'd', value: 'D'},
//   {id: 'e', value: 'E'},
//   {id: 'f', value: 'F'},
// ];
// const numColumns = 3;
// const size = Dimensions.get('window').width/numColumns;

// function Grid() {
//   return (
//     <FlatList
//       data={data}
//       renderItem={({item}) => (
//         <View style={styles.itemContainer}>
//           <Text style={styles.item}>{item.value}</Text>
//         </View>
//       )}
//       keyExtractor={item => item.id}
//       numColumns={numColumns} />
//   );
// }

// const styles = StyleSheet.create({
//   itemContainer: {
//     width: size,
//     height: size,
//   },
//   item: {
//     flex: 1,
//     margin: 2,
//     backgroundColor: 'lightblue',
//   }
// });


{/* ----------------------------------------9----------------------------------------------*/}

//dashboard and bottom tab and body content

// import { ScrollView, StyleSheet, Text, TouchableOpacity, View, DrawerLayoutAndroid } from 'react-native'
// import React from 'react'
// import Icon from 'react-native-vector-icons/Ionicons'



// const App = () => {
//   return (
//     <View style = {styles.container}>
//       <Header/>
//         <Body/>
//       <Bottom/>
//     </View>
//   )
// }

// const Body = () => {
//   return(
//     <View style = {styles.body_part}>
//       <ScrollView vertical = {true}> 
//         <View style = {styles.body_flex_box}> 
//           <TouchableOpacity style = {styles.box}>
//             <Icon name = "calendar" size = {44} color = "#bdbdbd"/>
//             <Text style = {{fontSize: 20, marginTop: 10,}}>Today Worklog</Text>
//             <Text style = {{fontSize: 16, color: '#4cbfe6', marginTop: 5,}}>(Empty)</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style = {styles.box}>
//             <Icon name = "calendar" size = {44} color = "#bdbdbd"/>
//             <Text style = {{fontSize: 20, marginTop: 10,}}>Today Worklog</Text>
//             <Text style = {{fontSize: 16, color: '#4cbfe6', marginTop: 5,}}>(Empty)</Text>
//           </TouchableOpacity>
//         </View>
//         <View style = {styles.body_flex_box}> 
//           <TouchableOpacity style = {styles.box}>
//             <Icon name = "calendar" size = {44} color = "#bdbdbd"/>
//             <Text style = {{fontSize: 20, marginTop: 10,}}>Today Worklog</Text>
//             <Text style = {{fontSize: 16, color: '#4cbfe6', marginTop: 5,}}>(Empty)</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style = {styles.box}>
//             <Icon name = "calendar" size = {44} color = "#bdbdbd"/>
//             <Text style = {{fontSize: 20, marginTop: 10,}}>Today Worklog</Text>
//             <Text style = {{fontSize: 16, color: '#4cbfe6', marginTop: 5,}}>(Empty)</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>  
//     </View>
//   )
// }

// const Header = () => { 
//   return(
//     <View>
//       <Text style = {styles.dash_head_txt}>Dashboard</Text>
//     </View>
//   )
// }

// const Bottom = () => {
//   return(
//     <View style = {styles.bottom_tab}>
//       <TouchableOpacity style = {styles.bottom_tab_icon}>
//         <Icon name = "home" size = {24} color = "#4cbfe6"/>
//       </TouchableOpacity>
//       <TouchableOpacity style = {styles.bottom_tab_icon}>
//         <Icon name = "md-person-add" size = {24} color = "#bdbdbd"/>
//       </TouchableOpacity>
//       <TouchableOpacity style = {styles.bottom_tab_icon}>
//         <Icon name = "calendar" size = {24} color = "#bdbdbd"/>
//       </TouchableOpacity>
//       <TouchableOpacity style = {styles.bottom_tab_icon}>
//         <Icon name = "grid" size = {24} color = "#bdbdbd"/>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//   },
//   dash_head_txt: {
//     fontSize: 20,
//     padding: 20,
//     backgroundColor: '#fff',
//     color: '#3f88e0',
//     textAlign: 'center',
//     elevation: 10,
//   },
//   bottom_tab: {
//     position: 'absolute',
//     backgroundColor: '#fff',
//     bottom: 0,
//     width: '100%',
//     height: 50,
//     flexDirection: 'row',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     elevation: 10,
//   },
//   bottom_tab_icon: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   body_part: {
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   body_flex_box: {
//     flex: 1,
//     flexDirection: 'row',
//     height:200,
//   },
//   box: {
//     backgroundColor: '#fff',
//     elevation: 2,
//     width: '50%',
//     margin: 10,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },

// })


{/* ------------------------validations-------------------------- */}

// import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
// import React, { useState } from 'react'

// const App = () => {
//   const[name, setName] = useState();
//   function clickHandler(){
//     if(name === 0)
//     {
//       alert('Not Ok')
//     }
//     else
//     {
//       alert('Ok')
//     }
//   }
//   return (
//     <View>
//       <TextInput 
//         style = {{padding: 10, borderWidth: 1,}}
//         onChangeText={(val)=>setName(val)}
//       />
//       <Text>{name}</Text>
//       <Button title='Ok' onPress={clickHandler}/>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})


// import React from 'react';
// import {StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar} from 'react-native';

// const DATA = [
//   {
//     title: 'Main dishes',
//     data: ['Pizza', 'Burger', 'Risotto'],
//   },
//   {
//     title: 'Sides',
//     data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
//   },
//   {
//     title: 'Drinks',
//     data: ['Water', 'Coke', 'Beer'],
//   },
//   {
//     title: 'Desserts',
//     data: ['Cheese Cake', 'Ice Cream'],
//   },
// ];

// const App = () => (
//   <SafeAreaView style={styles.container}>
//     {
//       DATA.map((item)=>{
//         return(
//           <View>
//             <Text style = {{ fontSize: 30,fontFamily: 'Lobster-Regular',}}>{item.data}</Text>
//           </View>
//         )
//       })
//     }
//   </SafeAreaView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//     marginHorizontal: 16,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//   },
//   header: {
//     fontSize: 32,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//   },
// });

// export default App;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text style = {{fontFamily: 'Lobster-Regular', fontSize: 34}}>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})