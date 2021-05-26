import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

export default function Menu(props) {
    const { navigation } = props

    return (
        <View>
            <View style={{alignItems: "center"}}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("CadastroPonto")}
                >
                    <View style={styles.botao}>
                        <Text>Cadastrar um Ponto</Text>
                    </View>
                </TouchableOpacity>

            </View>


            <View style={styles.logof}>
                <Button
                    title="Logoff"
                    onPress={() => navigation.replace("Login")}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    botao: {
        width: "48%",
        padding: 70,
        marginTop: 60,
        height: 100,
        backgroundColor: "#dedede",
        borderRadius: 35,
        alignItems: "center",
        paddingTop: 40
    },
    logof:{
        marginTop: 100,
        alignItems: "center", 
    }
})
