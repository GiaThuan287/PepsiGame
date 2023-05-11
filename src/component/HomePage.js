import { Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Modal } from '@ui-kitten/components';
const HomePage = (props) => {
    const {navigation}= props;

    const play=()=>{
        navigation.navigate('GamePlay')
    }
    const login=()=>{
        navigation.navigate('Login')
    }
    const collection=()=>{
        navigation.navigate('Collection')

    } 
    const detail=()=>{
        navigation.navigate('DetailGift')
    }
    const [dialogDiem, setDialogDiem] = useState(false);
    return (
        <LinearGradient
            colors={['#0063A7', '#02A7F0', '#0063A7']}
            
            style={styles.linearGradient}>
            {/* <Modal
                animationType="fade"
                transparent={true}
                visible={dialogDiem}
                onRequestClose={() => {
                    setDialogDiem(!dialogDiem);

                    
                    onPress={() => setDialogDiem(true)}
                }}
            >
                <View>
          /**
                   <Text>hello</Text>
                </View>
            </Modal> */}

            <View style={{ flexDirection: 'row', height: 300 }}>
                <View style={{ flexDirection: "row", flex: 7 }}>
                    <Image style={styles.vector1} source={require('../media/HomePage/Vector1.png')} />
                    <Image style={styles.vector2} source={require('../media/HomePage/Vector2.png')} />
                    <Image style={styles.vector3} source={require('../media/HomePage/Vector3.png')} />
                    <Image style={styles.vector7} source={require('../media/HomePage/Vector7.png')} />
                    <Image style={styles.vector8} source={require('../media/HomePage/Vector8.png')} />
                    <Image style={styles.vector9} source={require('../media/HomePage/Vector9.png')} />
                    <Image style={{ position: 'absolute', width: 400, marginTop: 350 }} source={require('../media/HomePage/Vector10.png')} />


                </View>
                <View style={{ flexDirection: "column", flex: 2 }}>
                    <Image style={styles.vector4} source={require('../media/HomePage/Vector4.png')} />
                    <Image style={styles.vector5} source={require('../media/HomePage/Vector5.png')} />
                    <Image style={styles.vector6} source={require('../media/HomePage/Vector6.png')} />
                    <TouchableOpacity onPress={login}>
                        <Image style={styles.vectorlogout} source={require('../media/HomePage/logout.png')} />

                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>


                <Image style={styles.vector11} source={require('../media/HomePage/Vector11.png')} />
                <Text style={styles.title1}>Hướng dẫn</Text>

                {/* PLAY-BUTTON */}
                <TouchableOpacity style={styles.btnPlay} onPress={play} >
                    <Image style={styles.vectorbtn1} source={require('../media/HomePage/btnPlay/Vector1.png')} />
                    <Image style={styles.vectorbtn1} source={require('../media/HomePage/btnPlay/Vector2.png')} />
                    <Image style={styles.vectorbtn3} source={require('../media/HomePage/btnPlay/Vector3.png')} />
                    <Image style={styles.vectorbtn4} source={require('../media/HomePage/btnPlay/Vector4.png')} />
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold', paddingTop: 10 }}>Chơi ngay</Text>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 10 }}>Bạn có tổng cộng <Text style={{ color: '#FFDD00' }}>8</Text> lượt chơi</Text>

                </TouchableOpacity>
                <Image style={styles.vectorbtn5} source={require('../media/HomePage/btnPlay/quetma.png')} />

                {/* COLLECTION-BUTTON */}
                <TouchableOpacity onPress={collection}>
                <Image style={styles.vectorbtn5} source={require('../media/HomePage/btnPlay/bosuutap.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={detail}>
                <Image style={styles.vectorbtn5} source={require('../media/HomePage/btnPlay/chitiet.png')} />

                </TouchableOpacity>



            </View>



            <Image style={styles.vector14} source={require('../media/HomePage/Vector14.png')} />
            <Image style={styles.vector13} source={require('../media/HomePage/Vector13.png')} />

            <Image style={styles.vector15} source={require('../media/HomePage/Vector15.png')} />
            <Image style={styles.VectorSmart} source={require('../media/HomePage/VectorSmart.png')} />


            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 110 }}>

                <Image style={styles.Vector12} source={require('../media/HomePage/Vector12.png')} />

            </View>


        </LinearGradient>
    )
}

export default HomePage

const styles = StyleSheet.create({
    vectorbtn5: {
        marginTop: 10
    },
    vectorbtn3: {
        position: 'absolute',
        marginTop: 24.9,
        marginLeft: 185,
        borderRadius: 5

    },
    vectorbtn4: {

        marginLeft: 47,
        position: 'absolute'
    },
    vectorbtn1: {
        position: 'absolute',
        borderRadius: 10
    },
    btnPlay: {
        width: 220,
        height: 62,
        backgroundColor: '#D02027',
        borderRadius: 10,
        borderColor: '#DBe5C0',
        borderWidth: 1,

    },
    title1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFDD00',
        textAlign: 'center'
        ,
    },
    linearGradient: {
        flex: 1,
        textAlign: 'center'
    },
    vector1: {
        width: 300,
        height: 400

    },
    vector2: {
        width: 145, height: 105,
        marginLeft: -230
    },
    vector3: {
        width: 50,
        height: 60,
        marginLeft: -215,
        marginTop: 130

    },
    vector4: {
        marginLeft: 5

    },
    vector5: {
        marginLeft: 20,
        marginTop: -20
    },
    vector6: {
        marginLeft: 50,
        marginTop: -80
    },
    vector7: {
        width: 50,
        height: 80,
        marginTop: 20,
        marginLeft: -50

    },
    vector8: {
        marginTop: 50,
        marginLeft: 23

    },
    vector9: {

        marginLeft: 20

    },
    vector10: {
        marginLeft: 300,
        marginTop: -300,


    },
    vector11: {
        marginTop: -180


    },
    vector13: {
        position: 'absolute',
        marginTop: 300


    },
    vector14: {
        position: "absolute",
        marginTop: 450


    },
    vector15: {
        position: 'absolute',
        marginTop: 330


    },

    vectorlogout: {
        marginTop: -120,
        marginLeft: 50
    },
    VectorSmart: {
        marginLeft: 300,
        marginTop: -300,

    }

})