import React from 'react'
import {View, StyleSheet, Platform} from 'react-native'
import {Picker} from '@react-native-community/picker'
import {colors} from '../utils/index'

const {DARK_BLUE} = colors

export default function UnitsPicker({unitsSystem, setUnitsSystem}) {
    return (
        <View style={styles.unitsSystem}>
                <Picker 
                    selectedValue={unitsSystem}
                    onValueChange={(item)=>setUnitsSystem(item)} 
                    mode="dropdown" 
                    itemStyle={{fontSize: 12, color: DARK_BLUE}}
                >
                    <Picker.Item label = "°C" value = "metric"/>
                    <Picker.Item label = "°F" value= "imperial"/>
                </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    unitsSystem: {
        position: 'absolute',
        ...Platform.select({
            ios:{
                top: -60,
            },
            android: {
                top: 60,
            },
        }),

        left: 20,
        height: 80,
        width:50,
    },
    changeUnit:{
        color: DARK_BLUE,
        fontSize: 12,
        fontWeight: '300'
    }
})