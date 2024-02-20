import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(){
const isdarkmode = useColorScheme() === 'dark'
return(
    <View style={styles.container}>
<Text style={isdarkmode ? styles.whitetext : styles.blacktext}>
    fuck react !
</Text>
    </View>
)

}

const  styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',//horizontal allingment hello hellllllllllllllll
        justifyContent : 'center'//vertical allingmnet
    },
    whitetext : {
        color : '#ffffff'
    },
    blacktext : {
        color : '#000000'
    }
})

export default AppPro;