import React, { useState } from 'react';
import {Text, StyleSheet, View, Modal, Pressable} from 'react-native';
import TextButton from '../components/TextButton';
import BackButton from '../components/BackButton';
import colors from '../config/colors';
import SearchButton from '../components/SearchButton';
import LoadingIndicator from '../components/LoadingIndicator';
import CityPopulation from './CityPopulation';

export default function SearchCity({navigation}) {

    const [inValidText, setInvalidText] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [textInput, setTextInput] = useState('');
    const [load, setLoad] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    
    function fetchingCity_api(arg){
        setTimeout(3000);
        fetch('http://api.geonames.org/searchJSON?name=' + arg + '&featureClass=P&maxRows=1&username=weknowit')
        .then((response) => response.json())
        .then((response) => {
            setLoad(false);
            if(response.totalResultsCount > 0 && arg != ''){
                console.log("Population: " + response.geonames[0].population + ", City: " + response.geonames[0].toponymName);
            }
            else{
                setInvalidText(true);
                setModalVisible(true);
            }
        })
        .catch((error) => console.error(error))
        .finally(()=> setLoading(false));
    }

    const getData = (arg) => {
        setLoad(!load)
        fetchingCity_api(arg);
    }

    return (
        <>
            <View style={styles.container}>
                {/*<BackButton/>*/}
                <Text style={styles.text}>SEARCH BY CITY</Text>
                <TextButton placeholder="Enter a city" onChangeText={textValue=> setTextInput(textValue)} value={textInput}/>
                <SearchButton onPress={()=> getData(textInput)}/>
                <View>
                    {load && <LoadingIndicator/>}
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.conatiner}>
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
    conatiner:{
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
        marginBottom: "5%",
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