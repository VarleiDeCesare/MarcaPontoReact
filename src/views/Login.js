import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Button, CheckBox, TouchableOpacity, Image } from 'react-native'
import Input from '../components/Input'
import { AsyncStorage } from "react-native"
import * as LoginAction from '../services/actions/loginAction'
import { useDispatch } from 'react-redux'

export default function Login(props) {

    const { navigation } = props
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [lembreme, setLembreme] = useState(false);
    const [msg, setMsg] = useState("")

     useLayoutEffect(() => {

         const getUsernameAndPassord = async () => {
            let email = await AsyncStorage.getItem("email")
            let senha = await AsyncStorage.getItem("senha")
            if (email) {
                setEmail(email)
                setLembreme(true)
            }
            if (senha) setPassword(senha)
        }
        getUsernameAndPassord()

    },  [])

    const validarCredenciais = async () => {
        try {
            await dispatch(LoginAction.login(email, password, lembreme))
            navigation.replace("Menu")
        } catch (error) {
            setMsg(error)
        }
    }

    return (
        <View style={styles.container}>
            <Image
                    source={require('../../assets/login.png')}
                    style={styles.foto} 
                />
            <View>
                <Text>Login</Text>
                <Text style={{ color: "red", margin: 10 }}>{msg}</Text>
            </View>
            <Input
                label="E-mail"
                value={email}
                setValue={setEmail}

            />
            <Input
                label="Password"
                seguro={true}
                value={password}
                setValue={setPassword}
                keyboardType="numeric"
            />

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={lembreme}
                    onValueChange={setLembreme}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Lembre-me</Text>
            </View>
            <View style={styles.caixaBotao}>
                <Button
                    title="Login"
                    onPress={validarCredenciais}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Registro")}
                >
                    <Text>Não possui Cadastro? Clique aqui.</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 30
    },
    caixaBotao: {
        marginTop: 10,
        width: "80%"
    },
    checkboxContainer: {
        flexDirection: "row",
    },
    checkbox: {
        alignSelf: "center",
    }, label: {
        margin: 8,
    }, button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    foto:{
        marginLeft: 60,
        marginBottom: 10
    }
})
