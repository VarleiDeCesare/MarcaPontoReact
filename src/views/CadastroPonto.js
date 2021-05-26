import React, { useState, useLayoutEffect} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Input from '../components/Input'
import * as PontoService from '../services/PontoService'

export default function CadastroPonto(props) {

    const { navigation } = props
    
    const [dia, setDia] = useState("")
    const [mes, setMes] = useState("")
    const [ano, setAno] = useState("")
    const [hora, sethora] = useState("")
    const [minuto, setMinuto] = useState("")

    const getCurrentDate=()=>{
        var day = new Date().getDate();
        var mounth = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hour = new Date().getHours(); 
        var minute = new Date().getMinutes(); 
        setDia(day)
        setMes(mounth)
        setAno(year)
        sethora(hour)
        setMinuto(minute)        
    }

        useLayoutEffect(() => {
            getCurrentDate()
        }, [])

    return (
        <View style={styles.tela}>
            <View style={styles.recebido}>
                <Text style={styles.text}>Horario Marcado no Banco de Horas!</Text>
            </View>
            <View style={styles.image}>
                
                <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/und.svg')}
                    style={{width: 360, height: 255}}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    tela:{
        backgroundColor: '#00FF17',
        height: "100%",
        width: "100%",
        position: 'absolute'
    },
     
    text:{
        fontSize: 19,
        marginTop: "50",
    },
    image:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }



})
