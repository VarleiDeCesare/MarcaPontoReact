import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native'
import * as PontosAction from '../services/actions/pontosAction'
import * as PontoAction from '../services/actions/pontoAction'
import { useSelector, useDispatch } from 'react-redux'

export default function Pontos(props) {
    const { navigation } = props
    const dispatch = useDispatch()
    const pontos = useSelector(store => store.pontos)
    const user = useSelector(store => store.login)
    
    useLayoutEffect(() => {
        dispatch(PontosAction.getList())
    }, [dispatch])

    const deletar = (id) => {
        dispatch(PontoAction.remove(id))
    }
    return (
        <View>
        <View>
            <FlatList
                data={pontos}
                renderItem={({ item }) =>
                    <View style={styles.conteudo}>
                        <Text style={styles.dado}>{`${item.agora}`}</Text>
                        <Button 
                        title="Delete" onPress={() => deletar(item.id)} 
                        color="#F5635D"
                        />
                    </View>
                }
                keyExtractor={item => item.id}
            />
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    conteudo:{
        display: "flex",
        flexDirection: "row",
        marginBottom: 20
    },
    dado:{
        marginRight: 20
    }

})