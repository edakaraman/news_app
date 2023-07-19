import { StyleSheet , Dimensions } from "react-native";

export default StyleSheet.create({
  container:{
    backgroundColor: '#A8A196',
    margin:10,
    borderRadius:10,
  },
  inner_container:{
    padding:7,
  },
  image:{
    height: Dimensions.get('window').height / 5,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  title:{
    fontWeight:"bold",
    fontSize:17,
  },
  description:{
    padding:3,
  },
  author:{
    textAlign:"right",
    fontStyle:"italic",
    fontWeight:"bold",
  },
});