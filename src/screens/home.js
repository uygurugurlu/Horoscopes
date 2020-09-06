/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Image,
  ScrollView
} from 'react-native';

import {db} from '../config';

import HomeStatistics from '../components/HomeStatistics.js';

export default class Home extends Component {
  state = {
    name: '',
  };
 
  
  render() {
    return (
      <ScrollView style={styles.Container}>
        <Text style={styles.title}>Bugünün Burç Yorumu</Text>
        <Image source={require('../../images/virgo.png')} style={styles.image}/>
        <View style = {styles.hindex}>
          <View style={styles.luckyNumberContainer}>
            <Text style={styles.luckyBigText}>5</Text>
            <Text style={styles.luckyLittleText}>Şanslı{"\n"}Numarası</Text>
          </View>
          <View style={styles.luckyNumberContainer}>
            <View style={styles.favColor}></View>
            <Text style={styles.luckyLittleText}>Şanslı Rengi</Text>
            <Text style={styles.luckyColorText}>Kırmızı</Text>

          </View>  
          <View style={styles.luckyNumberContainer}>
            <Text style={styles.luckyBigText}>K</Text>
            <Text style={styles.luckyLittleText}>Şanslı{"\n"}Harfi</Text>
          </View>

        </View>
        <View style = {styles.statisticsContainer}>
            <HomeStatistics count={2} name={'Aşk'} iconName={'heart'} color={'red'}/>
            <HomeStatistics count={2} name={'Kariyer'} iconName={'suitcase'} color={'purple'}/>
            <HomeStatistics count={5} name={'Para'} iconName={'money'} color={'green'}/>
            <HomeStatistics count={4} name={'Sağlık'} iconName={'star'} color={'yellow'}/>

        </View>
        <View style={styles.commentContainer}>
            <View style={styles.commentWrapper}>
            </View>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#331684',
    flex:1,
  },
  title: {
    marginBottom: 20,
    marginTop: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  image: {
    alignSelf:'center',
    justifyContent:'center',
    flexDirection:'row',
    height:130,
    width:200,
  },
  hindex: {
    height: 120,
    marginLeft: 10,
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  luckyNumberContainer: {
    flexDirection:'column',
    alignItems:'center',
  },
  luckyBigText:{
    fontSize:33,
    color:'white',
    fontWeight:'700'
  },
  luckyLittleText:{
    color:'white',
    fontSize:17,
    textAlign:'center'
  },
  luckyColorText:{
    color:'rgb(230,230,230)',
    fontSize:14,
    fontWeight: '300',
  },
  favColor: {
    width: 33,
    height: 33,
    backgroundColor:'red',
    borderRadius:50,
    margin:5
    
  },
  statisticsContainer: {
      alignItems: 'stretch',

  },
  commentContainer: {
    flex:1,
    height: 500,
  },
  commentWrapper: {
      flex: 1,
      height: 300,
      margin:10,
      backgroundColor:'white',
      borderRadius:20,
  },

});
