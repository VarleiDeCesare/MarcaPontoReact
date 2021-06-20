import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Arquitetura() {
    return (
        <View style={styles.texto}>
            <Text style={styles.titulo} >Arquitetura do aplicativo</Text>
            <Text>O Arquivo Principal que contém todas as declarações de cada página do projeto está contido em App.js que está localizado na raiz do projeto.</Text>
            <Text>Os Demais Arquivos que foram modificados/criados estão todos localizados dentro da pasta src que também está localizado na raiz do projeto.</Text>
            <Text>Dentro da pasta src contém a pasta components que tem um arquivo resposável por um componente Input que é puxado na tela de login por exemplo.</Text>
            <Text>Dentro da pasta services contém todos as pastas e arquivos que fazem alguma modificação de qualquer forma no app.</Text>
            <Text>O arquivo PontoService é responsavel por fazer a criação da coleção de pontos no banco de dados Firebase.</Text>
            <Text>O loginService é responsável por validar e criar um novo usuário para o sistema fazendo conexão com o banco de dados.</Text>
            <Text>Dentro das pastas actions e reducers contém todos os arquivos responsável pelo Redux que faz a ligação com o banco de dados.</Text>
            <Text>Não só responsável como faz todo o CRUD do projeto, inserção exclusão... de dados do DataBase.</Text>
            <Text>Dentro da pasta views contém todas as páginas que são apresentadas no Aplicativo, com toda a estilização e componentes que o usuário é capaz de ver.</Text>
            <Text>Alguns exemplos dessas páginas são a de login, menu, e o Cadastro de Ponto</Text>            
        </View>
    )
}
const styles = StyleSheet.create({
    texto:{
        margin: 30,
        paddingTop: 40,
        textAlign: "justify"
    },

    titulo:{
        fontSize: 25,
        textAlign: "center"
    }
})
