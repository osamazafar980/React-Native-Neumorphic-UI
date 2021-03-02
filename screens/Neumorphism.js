import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    Slider,
    StyleSheet
} from 'react-native';
import {
    AntDesign,
    Entypo,
    EvilIcons 
} from '@expo/vector-icons'

const NeuMorph = ({children,size,style})=>{
    return(
        <View style={{
            borderColor: "#FBFFFF",
            elevation:1, 
            borderRadius:size/2||30,
            borderTopWidth:1,
            borderLeftWidth:1,
        }}>
            <View style={{
                borderColor: "#B7C4DD",
                elevation:1, 
                borderRadius:size/2||30,
                borderBottomWidth:1,
                borderRightWidth:1,
            }}>
                <View style={[
                    styles.inner,
                    {width:size||40,height:size||40,borderRadius:size/2||40/2},
                    style]}>
                    {children}
                </View>
            </View>
        </View>
    );
}

const NeumorphismScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <SafeAreaView style={{alignSelf:'stretch'}}>
                <View style={{
                    marginHorizontal:32,
                    marginTop:50,
                    flexDirection:'row',
                    justifyContent:'space-between'
                    }}>
                    <NeuMorph>
                        <AntDesign
                            name='arrowleft'
                            size={30}
                            color='gray'
                        />
                    </NeuMorph>
                    <Text
                        style={{
                            color:'gray',
                            fontSize:20,
                            }}
                    >Playing</Text>
                    <NeuMorph>
                        <Entypo
                            name='menu'
                            size={30}
                            color='gray'
                        />
                    </NeuMorph>
                </View>
                <View
                    style={{
                        marginVertical:32,
                        alignItems:'center'
                    }}
                >
                <NeuMorph size={300}> 
                    <Image
                        source={require('./Title.jpg')}
                        style={styles.image}
                    />
                    </NeuMorph>
                </View>
                <View style={{
                    alignItems:'center'
                }}>
                    <Text style={styles.title}>Let Her Go</Text>
                    <Text style={styles.artist}>The Blond Girl Band</Text>
                </View>
                
                <View style={styles.songContainer}>
                <View style={{flexDirection:'row',
                justifyContent:'space-between',
                marginHorizontal:15
                }}>
                    <Text style={styles.time}>00.00</Text>
                    <Text style={styles.time}>01.29</Text>
                </View>
                <Slider
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#8AAAFF"
                    maximumTrackTintColor="#DAE6F4"
                    thumbTintColor="#7B98FF"
                    style={{transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]}}
                />
                <View style={{
                    marginTop:30,
                    marginHorizontal:30,
                    flexDirection:'row',
                    justifyContent:'space-between'
                    }}>
                    <NeuMorph size={70}>
                        <AntDesign
                            name='banckward'
                            size={30}
                            color='#91A1BD'
                        />
                    </NeuMorph>
                    <NeuMorph size={70}
                    style={{
                        backgroundColor:'#8AAAFF',
                        borderColor:"#8AAAFF"
                    }}
                    >
                        <EvilIcons 
                            name='play'
                            size={50}
                            color='#FFFFFF'
                        />
                    </NeuMorph>
                    <NeuMorph size={70}>
                        <AntDesign
                            name='forward'
                            size={30}
                            color='#91A1BD'
                        />
                    </NeuMorph>
                </View>
                </View>
            </SafeAreaView>
        </View>
                        
);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#DEE9FD',
        alignItems: 'center'
    },
    title:{
        fontSize:30,
        color:"#6C7A93",
        fontWeight:'600'
    },
    artist:{
        fontSize:14,
        color:'gray',
        fontWeight:'500',
        marginTop:5
    },
    time:{
        fontSize:10,
        color:'gray',
        fontWeight:'700',
    },
    inner:{
        backgroundColor:'#DEE9F7',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#E2ECFD',
        borderRadius:1,
    },
    image:{
        width:300,height:300,
        borderRadius:150, borderColor: '#D7E1F3',
        borderWidth:10
    },
    songContainer:{
        marginTop:32,
        marginBottom:64
    }
});

export default NeumorphismScreen;