import React from 'react'
import { StyleSheet, Text, Image, StatusBar, ScrollView, TouchableOpacity, Linking } from 'react-native'

const Details = (props) => {
    const { details } = props.route.params

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: '10%' }}>
            <StatusBar barStyle="light-content" />
            <Image source={{ uri: details.artworkUrl100 }} style={styles.image} resizeMode='contain' />

            <Text style={styles.heading}>Artist Name</Text>
            <Text>{details.artistName}</Text>
            <Text style={styles.heading}>collection Name</Text>
            <Text>{details.collectionName}</Text>
            <Text style={styles.heading}>Release Date</Text>
            <Text>{details.releaseDate}</Text>
            <Text style={styles.heading}>Collection Price</Text>
            <Text>{details.collectionPrice}</Text>
            <Text style={styles.heading}>Genre</Text>
            <Text>{details.primaryGenreName}</Text>
            {details?.description && <Text style={styles.heading}>Discription</Text>}
            <Text>{details.description}</Text>
            <Text style={styles.heading}>URLs</Text>
            <TouchableOpacity onPress={() => Linking.openURL(details.artistViewUrl)}>
                <Text style={styles.url}>{details.artistViewUrl}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(details.collectionViewUrl)}>
                <Text style={styles.url}>{details.collectionViewUrl}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(details.previewUrl)}>
                <Text style={styles.url}>{details.previewUrl}</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFF'
    },
    heading: {
        fontWeight: 'bold', fontSize: 15,
        marginTop: 10
    },
    image: {
        alignSelf: 'center',
        width: '90%',
        height: 200
    },
    url: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginTop: 8
    }
})