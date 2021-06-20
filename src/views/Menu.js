import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

export default function Menu(props) {
    const { navigation } = props

    return (
        <View>
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("CadastroPonto")}
                >
                    <View style={styles.botao}>
                        <Text style={styles.textbotao}>Cadastrar um Ponto</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.botoes}>
                <Button
                    color="#00E615"
                    
                    title="Sobre o App"
                    onPress={() => navigation.navigate("SobreApp")}
                />
            </View>
            <View style={styles.botoes}>
                <Button
                    color="#00E615"
                    
                    title="Ver Pontos cadastrados"
                    onPress={() => navigation.navigate("Pontos")}
                />
            </View>
            <View style={styles.botoes}>
                <Button
                    color="#00E615"
                    title="Arquitetura do App"
                    onPress={() => navigation.navigate("Arquitetura")}
                />
            </View>
            <View style={styles.botoes}>
                <Button
                    color="#00E615"
                    title="Cidade do desenvolvedor"
                    onPress={() => navigation.navigate("Mapa")}
                />
            </View>
            <View style={styles.botoes}>
                <Button
                    color="#00E615"
                    title="FAQ"
                    onPress={() => navigation.navigate("Faq")}
                />
            </View>
            <View>
                <Button
                    color="#F5635D"
                    title="Logoff"
                    onPress={() => navigation.replace("Login")}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    botao: {
        width: "100%",
        padding: 70,
        height: 150,
        backgroundColor: "#00E68A",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30
    },
    textbotao:{
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },

    app:{
        width: "100%",
        marginTop: 380
    },
    botoes:{
        marginBottom: 20
    }
})