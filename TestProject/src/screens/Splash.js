import React, { useEffect } from 'react'
import { StatusBar, StyleSheet, Image, View } from 'react-native'

const Splash = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.reset({ routes: [{ name: 'Home' }], index: 0 })
        }, 3000)
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Image source={require('../assets/logo.png')} resizeMode='contain'
                style={styles.logo} />
        </View>
    )
}

export default Splash


const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center',
        alignItems: 'center', backgroundColor: '#FFF'
    },
    logo: {
        width: '50%',
        height: '50%',
    }
})