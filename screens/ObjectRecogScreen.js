import React, {useState, useEffect} from 'react';
import {View,Text,TextInput,TouchableOpacity,FlatList,Dimensions,Image,ImageBackground, StyleSheet} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import * as tf from '@tensorflow/tfjs'
import * as mobilenet from '@tensorflow-models/mobilenet'
import {fetch} from '@tensorflow/tfjs-react-native'
import * as jpeg from 'jpeg-js'

const HomeScreen = ({navigation}) => {
    const [blogs,setBlogs]= useState([
        {name:"This Law could make Google Accountable For Information",image:"link",details:{p1:"paragraph"}},
        {name:"This Law could make Google Accountable For Information",image:"link",details:{p1:"paragraph"}},
        {name:"This Law could make Google Accountable For Information",image:"link",details:{p1:"paragraph"}},
        {name:"This Law could make Google Accountable For Information",image:"link",details:{p1:"paragraph"}},
        {name:"Name1",image:"link",details:{p1:"paragraph"}
    }
    ]);
    const image = { uri: "https://source.unsplash.com/featured/?animal,random=" };
    const bgImage = { uri: "https://images.unsplash.com/photo-1525562932397-2b8d29361f35?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjEyfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" };
    const [img,setImg] = useState('')
    const  [result,setResult] = useState('')

    async function getPrediction(url){
        console.log("Loading Tensor Flow")
        await tf.ready()
        console.log("Loading Mobile Net")
        const model = await mobilenet.load()
        console.log("Fetching Image")
        const res = await fetch(url,{},{isBinary:true})
        console.log("Getting Image Buffer")
        const imgData= await res.arrayBuffer()
        console.log("Getting Image Tensor")
        const imgTensor = imageToTensor(imgData)
        console.log("Getting Classification Result")
        const prediction = await model.classify(imgTensor)
        setResult(prediction)
        console.log(JSON.stringify(prediction))
    }
    function imageToTensor(rawData){
        const {width,height,data} = jpeg.decode(rawData,true)
        const buffer  =new Uint8Array(width*height*3)
        let offset = 0
        for(let i = 0; i < buffer.length; i+=3){
            buffer[i] = data[offset]
            buffer[i+1] = data[offset+1]
            buffer[i+2] = data[offset+2]
            offset+=4
        }
        return tf.tensor3d(buffer,[height,width,3])
    }
    return(
        <View style={{}}>
        <ImageBackground source={bgImage} style={{width:Dimensions.get('window').width,
                        height:Dimensions.get('window').height, marginTop:40,
                        justifyContent:'center', alignItems:'center'
                        }}
                        >
           
                <View style={{borderRadius:10,
                    backgroundColor:'white',marginBottom:10, paddingVertical:40
                    ,borderRadius:10,width:Dimensions.get('window').width*0.675,
                    justifyContent:'center', alignItems:'center'
                        }}>
                            <Image
                                source={{uri:img}}
                                style={{
                                    height:200,width:Dimensions.get('window').width*0.575
                                }}
                            />
                            <FlatList
                                data={result}
                                keyExtractor={item=>Math.random().toString(36).substring(7)}
                                renderItem={({item})=>{
                                    if(Math.round(item.probability * 100) / 100!=0){
                                    return(
                                    <Text
                                style={{marginVertical:10,
                                    fontSize:12, backgroundColor:'#87ceeb',
                                    padding:7,marginVertical:1
                                }}
                            >
                            {item.className},{Math.round(item.probability * 100) / 100}
                            
                            </Text>
                            )
                                    }
                            }
                            }
                            />
                            <TextInput
                                placeholder="Link"
                                style={{
                                    backgroundColor:'silver',
                                    height:40,width:Dimensions.get('window').width*0.575,
                                    marginTop:20
                                }}
                                onChangeText={(txt)=>{
                                    setImg(txt)
                                }}
                            />
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{
                                    marginTop:20,
                                    backgroundColor:'#841584',
                                    padding:15,
                                    borderRadius:10
                                }}
                                onPress={()=>{
                                    getPrediction(img)
                                }}
                            >
                                <Text>Recognize</Text>
                            </TouchableOpacity>
                            
                                </View>
                        </ImageBackground>
                        </View>
                        
);
}

const styles = StyleSheet.create({
    bg:{
        borderColor:"rgb(255,255,255)",
        borderWidth:1,
        marginHorizontal:70,
        paddingTop:40,
        paddingBottom:10,
        paddingHorizontal:30,
        borderRadius:40,
        shadowColor: "rgb(255,255,255)",
            shadowOffset: {
            width: 0,
            height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
    },
    img: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default HomeScreen;