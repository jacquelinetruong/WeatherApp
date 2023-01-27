import React from 'react'
import {View, Text, StyleSheet, Image, TextBase} from 'react-native'
import {colors} from '../utils/index'
import {MaterialCommunityIcons, Feather} from '@expo/vector-icons'

const { PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR, DARK_BLUE} = colors 

export default function WeatherInfo({currentWeather, unitsSystem}) {
    const {
        main: {temp, temp_min, temp_max},
        weather: [details],
        name,
        sys: {country},
        coord: {lon, lat},
        wind: {speed, deg}
    } = currentWeather
    const {icon, description} = details
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
    const windSpeed = unitsSystem == 'metric' ? `${Math.round(speed)} m/s`: `${Math.round(speed)} miles/h`

    return (
        <View style = {styles.weatherInfo}>
            <Text style={styles.topCaption}>Current weather in:</Text>
            <Text style={styles.location}>{name}, {country}</Text>               
            <Text style={styles.topCaption}><MaterialCommunityIcons name="longitude" size={20} color={DARK_BLUE} /> {lon}     <MaterialCommunityIcons name="latitude" size={20} color={DARK_BLUE} /> {lat}</Text>
            <Text style={styles.weatherDescription}>{description}</Text>
            <Text style={styles.topCaption}><Feather name="wind" size={20} color={DARK_BLUE} /> Wind Data:</Text>
            <Text style={styles.topCaption}>Speed:  {windSpeed}      Direction:  {deg}°</Text>
            <Image style={styles.weatherIcon} source={{uri: iconUrl}}/>
            <Text style = {styles.temp}>{temp}°</Text>
            <Text style = {styles.otherTemps}>Low: {temp_min}°    High: {temp_max}°</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    weatherInfo: {
       alignItems: 'center',
    },
    weatherDescription: {
        textTransform: 'capitalize',
        color: DARK_BLUE,
        fontWeight: '700',
        marginTop: 20,
        fontSize: 18
    },
    weatherIcon:{
        width: 120,
        height: 120,
    },
    temp: {
        fontSize: 40,
        fontWeight: '900',
        color: SECONDARY_COLOR,
        textShadowColor: DARK_BLUE,
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    otherTemps: {
        fontSize: 15,
        color: DARK_BLUE,
        fontWeight: '900',
        marginTop: 10,
        textShadowColor: PRIMARY_COLOR,
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    labels: {
        color: TEXT_COLOR,
        fontWeight: '400',
        textShadowColor: DARK_BLUE,
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    location: {
        color: DARK_BLUE,
        fontWeight: '600',
        fontSize: 25,
        textShadowColor: PRIMARY_COLOR,
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    topCaption: {
        marginTop: 5,
        color: DARK_BLUE,
        fontWeight: '300',
        fontSize: 15
    }

})