import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {colors} from '../utils/index'
import {} from '@expo/vector-icons'
import {Ionicons, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'

const {PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR, TEXT_COLOR} = colors

export default function WeatherDetails({currentWeather}) {
    const {
        main: { feels_like, humidity, pressure },
        clouds: { all },
    } = currentWeather
    
    return (
    <View>         
        <View style={styles.weatherDetails}>
            <View style={styles.weatherDetailsRow}>
                <View style={{...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>
                    <View style={styles.weatherDetailsRow}>
                        <FontAwesome5 name="temperature-low" size={25} color={PRIMARY_COLOR} />
                        <View style={styles.weatherDetailsItems}>
                            <Text style={styles.textOther}>Feels like:</Text>
                            <Text style={styles.textSecondary}>{feels_like}°</Text>
                        </View>
                    </View>
                </View>                
                <View style={styles.weatherDetailsBox}>
                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons name="water" size={35} color={PRIMARY_COLOR} />
                        <View style={styles.weatherDetailsItems}>
                            <Text style={styles.textOther}>Humidity:</Text>
                            <Text style={styles.textSecondary}>{humidity}%</Text>
                        </View>
                    </View>
                </View>                
            </View>
            <View style={{...styles.weatherDetailsRow, borderTopWidth: 1, borderTopColor: BORDER_COLOR}}>
                <View style={{...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>
                    <View style={styles.weatherDetailsRow}>
                        <Ionicons name="cloud" size={30} color={PRIMARY_COLOR} />
                        <View style={styles.weatherDetailsItems}>
                            <Text style={styles.textOther}>Cloudiness:</Text>
                            <Text style={styles.textSecondary}>{all}%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons name="speedometer" size={30} color={PRIMARY_COLOR} />
                        <View style={styles.weatherDetailsItems}>
                            <Text style={styles.textOther}>Pressure:</Text>
                            <Text style={styles.textSecondary}>{pressure} hPa</Text>
                        </View>
                    </View>
                </View>                
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    weatherDetails: {
        marginTop: 'auto',
        margin: 15,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 10,

    },
    invisibleBox: {
        marginTop: 'auto',
        margin: 15,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 10,
    },
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weatherDetailsBox: {
        flex: 1,
        padding: 20,
    },
    weatherDetailsItems: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    textSecondary: {
        fontSize: 15,
        color: SECONDARY_COLOR,
        fontWeight: '700',
        margin: 7,
    },
    textOther: {
        fontWeight: '300',
        color: TEXT_COLOR,
    },
    sunStuff: {
        margin: 15,

    }
    
    
})