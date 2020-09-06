import React, {Component} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

export default class HomeStatistics extends Component {
  handleIcons = (count, iconName) => {
    var views = [];
    for (let index = 0; index < count; index++) {
      views.push(<Icon key={index} name={iconName} type="font-awesome" color={this.props.color}/>);
    }
    for (let index = 0; index < 5 - count; index++) {
      views.push(<Icon key={count+index} name={iconName} type="font-awesome"  color="rgb(200,200,200)" />);
    }
    return views;
  };

  render() {
    return (
      <View style={styles.statisticsWrapper}>
        <View style={styles.statistics}>
          <Text style={styles.statisticsText}>{this.props.name}</Text>
          <View style={styles.statisticsBar}>{this.handleIcons(this.props.count, this.props.iconName)}</View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  statisticsWrapper: {
    height: 60,
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
  },
  statistics: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  statisticsText: {
    fontSize: 20,
    flex: 0.4,
    textAlign: 'center',
    fontWeight:"700",
    color: '#301272',
  },
  statisticsBar: {
    alignItems: 'stretch',
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingRight:10,
  },
})