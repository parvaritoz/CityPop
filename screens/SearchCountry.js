import React from 'react';
import {Text, StyleSheet, View, Modal, Pressable, ActivityIndicator} from 'react-native';
import { set } from 'react-native-reanimated';
import { useState } from 'react/cjs/react.development';
import BackButton from '../components/BackButton';
import SearchButton from '../components/SearchButton';
import TextButton from '../components/TextButton';
import colors from '../config/colors';


export default function SearchCountry(props) {

    const [textInput, setTextInput] = useState('');
    const [inValidText, setInvalidText] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [load, setLoad] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    function fetchingCountry_api(arg){
        setTimeout(3000);
        fetch('http://api.geonames.org/searchJSON?name=' + arg + '&featureClass=A&orderby=population&maxRows=1&username=weknowit')
        .then((response) => response.json())
        .then((response) => {
            setLoad(false);
            if(response.totalResultsCount > 0 && arg != ''){
                console.log(response.geonames[0])
            }
            else{ 
                setInvalidText(true);
                setModalVisible(true);
            }
        })
        .catch((error) => console.log(error));
    }

    const getAPI = async (arg) => {
        setLoad(!load);
        fetchingCountry_api(arg);
    }

    return (
        <>
            <View style={styles.container}>
                {/*<BackButton/>*/}
                <Text style={styles.text}>SEARCH BY COUNTRY</Text> 
                <TextButton placeholder="Enter a country" onChangeText={textValue=> setTextInput(textValue)} value={textInput}/>
                <SearchButton onPress={()=> getAPI(textInput)}/>
                <View>
                    {load && <ActivityIndicator size='large' color="#000000" style={styles.isLoading}/>}
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.container}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Invalid input, please try again.</Text>
                            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal> 
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    text: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 30,
        color: colors.black,
        fontWeight: "bold",
        marginTop: "30%", 
        marginBottom: "10%",
    },
    isLoading:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15%",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 35,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: colors.primary,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 17,
    }
});
