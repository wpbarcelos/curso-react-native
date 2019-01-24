import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'


const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    { id: 2, nome: 'Ana', nota: 9.1 },
    { id: 3, nome: 'Bia', nota: 5.4 },
    { id: 4, nome: 'Claudia', nota: 7.6 },
    { id: 5, nome: 'Roberto', nota: 6.8 },
    { id: 6, nome: 'Rafael', nota: 9.9 },
    { id: 7, nome: 'Guilherme', nota: 10 },
    { id: 8, nome: 'Rebeca', nota: 8.8 },
    { id: 9, nome: 'Hosyane', nota: 8.8 },
    { id: 10, nome: 'Wanderson', nota: 8.9 },
    { id: 11, nome: 'Nicolle', nota: 10 },
    { id: 12, nome: 'Ketlyn', nota: 8.9 },
    { id: 13, nome: 'Hithalo', nota: 8.9 },
]

const itemEstilo ={
    paddingHorizontal : 15,
    height:50,
    backgroundColor: '#DDD',
    borderWidth:0.5,
    borderColor:"#333",

    //Flex
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
}

export const Aluno = props =>
<View style={itemEstilo}>
    <Text>Nome: {props.nome}</Text>
    <Text style={{fontWeight:'bold'}}>Nota: {props.nota}</Text>
</View>

export default props=>{
    const renderItem =  ({item})=>{
        return <Aluno { ... item} />
    }

    return (
        <ScrollView>
            <FlatList 
                data={alunos} 
                renderItem={renderItem}
                keyExtractor={(_, index)=> index.toString()}></FlatList>
        </ScrollView>
    )
}