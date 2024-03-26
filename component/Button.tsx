import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

interface PropsButton {
  onPress?: (params: any) => any;
  title: string;
  bgColor: string;
  icon?:boolean;
  titleColor:string;
  disable?:boolean;
  heightCustom?:number
}

const Button = ({onPress, title, bgColor,icon,titleColor,disable,heightCustom = 65}: PropsButton) => {
  return (
    <View>
      <TouchableOpacity
        disabled={disable}
        onPress={onPress}
        style={[styles.btn, {backgroundColor: bgColor,height: heightCustom,}]}>
        <Text style={[styles.text,{left:icon ? 20 : 0,color:titleColor}]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius:20
  },
  text: {
    fontSize: 14,
    fontWeight:'bold'
  },
});

export default Button;
