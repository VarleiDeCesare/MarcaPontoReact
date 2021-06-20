import React, { useState, useLayoutEffect} from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import * as PontoAction from '../services/actions/pontoAction'
import * as LocationAction from '../services/actions/locationAction'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment';

export default function CadastroPonto(props) {
    const dispatch = useDispatch()
    const { navigation } = props

    const [msg, setMsg] = useState("")
    
    const getCurrentDate= async ()=>{
        var agora = moment();
        var agora = agora.format("DD/MM/YYYY HH:mm");
        
        let ponto ={ agora }
        
        try {
            await dispatch(PontoAction.save(ponto))
            navigation.replace("Cadastrado")

        } catch (error) {
            setMsg(error)
        }
    }
        useLayoutEffect(() => {
            getCurrentDate()
        }, [])
        
    return (
        <View style={styles.tela}>
            
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
    },
})
