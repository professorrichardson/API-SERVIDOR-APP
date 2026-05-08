import {View, Text,Button,TextInput, FlatList, Image} from "react-native";
import { useState, useEffect } from "react";

export default function APP(){
const API = "http://10.0.2.2:3000/filmes";

const [filmes,setFilmes] = useState([]);
const [nome,setNome] = useState("");
const [ano,setAno] = useState("");
const [genero,setGenero] = useState("");
const [capa,setCapa] = useState("");

//Get- buscar filmes
async function carregarFilmes(){
  const resposta = await fetch(API);
  const dados = await resposta.json();
  setFilmes(dados);
}
// POST Criar um filme
async function adicionaFilme () {
  const novoFilme = {
 
    nome,
    ano:Number(ano),
    genero,
    capa
  };
  await fetch(API,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(novoFilme)
  });
  setNome("");
  setAno("");
  setGenero("");
  setCapa("");
  carregarFilmes();
}

// DELETE filmes
async function deletarFilme(id) {
  await fetch(`${API}/${id}`,{
    method:"DELETE"
  });
  carregarFilmes();
}


// executar ao abrir
useEffect(()=>{
  carregarFilmes();
},[]);
return(
  <View style={{marginTop:50, padding:20}}>
    <Text>Lista de Filmes</Text>
    {/*Formulario de cadastro */}

  <TextInput 
  placeholder="Digite o nome do filme"
  value={nome}
  onChangeText={setNome} //arrumar colocar o TEXT
  style={{borderWidth:1,marginTop:10}}
  />


   <TextInput 
  placeholder="Digite o ano do filme"
  value={ano}
  onChangeText={setAno}//arrumar colocar o TEXT
  keyboardType="numeric"
  style={{borderWidth:1,marginTop:10}}
  />

  <TextInput 
  placeholder="Digite o genero do filme"
  value={genero}
  onChangeText={setGenero}//arrumar colocar o TEXT
  style={{borderWidth:1,marginTop:10}}
  />
  <TextInput 
  placeholder="Digite o url da capa do filme"
  value={capa}
  onChangeText={setCapa}//arrumar colocar o TEXT
  style={{borderWidth:1,marginTop:10}}
  />
<Button title="Adicionar" onPress={adicionaFilme}/>
    
    
    {/* LISTA*/}
    <FlatList  
    data = {filmes}
    keyExtractor={(item)=>item.id.toString()}
    renderItem={({item})=>(
      <View style={{marginTop:10}}>
      <Text> {item.nome} - {item.ano}</Text>
      <Button 
      title="Excluir"
      onPress={()=>deletarFilme(item.id)}
      />
<Image 
source={{uri:item.capa}}
style={styles.imagem}
/>
      </View>
    )}
    />
    </View>
)
}

const styles ={
  imagem:{
    width:"100%",
    height: 200,
    borderRadius:10
  },
}