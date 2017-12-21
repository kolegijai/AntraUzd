/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity

} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export default class App extends Component<{}> {
  constructor(){
    super()
      this.state =
      {
       pointedText : '',
       clr1 : 'transparent',
       clr2 : 'transparent',
       clr3 : 'transparent',
       clr4 : 'transparent'
      }
    }




  render() {
    return (

      <View style={styles.container}>
              <View style={styles.flexbox1}>
              <TouchableOpacity onPress = {() => this.changeClr0()}>
              <Text style = {styles.button}>
                 Button1
              </Text>
           </TouchableOpacity>

           <TouchableOpacity onPress = {()=> {this.changeClr11()}}>
           <Text style = {styles.button}>
              Button2
           </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress = {()=> {this.changeClr12()}}>
        <Text style = {styles.button}>
           Button3
        </Text>
     </TouchableOpacity>

     <TouchableOpacity onPress = {()=> {this.changeClr13()}}>
     <Text style = {styles.button}>
        Button4
     </Text>
      </TouchableOpacity>

              </View>
              <View style={styles.flexbox2}>
              <Text style={[styles.txtBox, {backgroundColor: this.state.clr1}]}>Text1</Text>
              <Text style={[styles.txtBox, {backgroundColor: this.state.clr2}]}>Text2</Text>
              <Text style={[styles.txtBox, {backgroundColor: this.state.clr3}]}>Text3</Text>
              <Text style={[styles.txtBox, {backgroundColor: this.state.clr4}]}>Text4</Text>
              </View>
      </View>


    );
  }
}
//const Box = ({align}) => (
 // <View style={styles.flexBox1}/>
//)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#A4A4A4',

  },
  flexbox1: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 50,
    paddingLeft: 50,
    marginTop: 30,
    flexWrap: 'wrap'
    },
  flexbox2: {
    flex:1,
    backgroundColor: '#F6CEF5',
    justifyContent: 'center',
    alignItems: 'center',
    },
    button: {
      height: 60,
      width: 200,
      backgroundColor: 'white',
      borderColor: '#ffd700',
      borderWidth: 4,
      borderRadius: 1,
      textAlign: 'center',
      marginBottom: 50,
      marginLeft: 15,
      padding: 15,
      fontWeight: 'bold'
    },
    txtBox: {
      height: 60,
      width: 120,
      backgroundColor: 'transparent',
      borderColor: '#A4A4A4',
      borderWidth: 4,
      borderRadius: 1,
      textAlign: 'center',
      marginLeft: 30,
      padding: 15,
      fontWeight: 'bold',
      marginBottom: 30,
    },

});
