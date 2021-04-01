import React, {useEffect,useState} from 'react'
import { FlatList, RefreshControl, SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native'
import { GET_MOVIE_LIST } from '../network/url'
import { GetApi } from '../network/fetch'
import { Loader, MovieCard } from '../components/common'

const Home = (props) => {
const [loading, setloader] = useState(true)
const [isRefresh, setisRefresh] = useState(false)

const [moviedata, setmoviedata] = useState([])


    useEffect(() => {
       GetApi(GET_MOVIE_LIST)
       .then(async (response) => {
           if(response.status == 200){
            setmoviedata(response.data.results)
            setloader(false)
            setisRefresh(false)
           }
          
       })
    }, [isRefresh])

 
    return (
        <SafeAreaView style={styles.container}>
             <StatusBar barStyle="light-content" />
            {loading && <Loader/>}
           <FlatList
             refreshControl={
                <RefreshControl
                    tintColor={'blue'}
                    refreshing={isRefresh}
                    onRefresh={()=>setisRefresh(true)} />
            }
            data={moviedata}
            ListEmptyComponent={!loading && <Text style={styles.empty}>No Movies Found</Text>}
            keyExtractor={item => item.collectionId}
            renderItem={({item,index}) => 
             <MovieCard details={item} navigation={props.navigation}/>
             }
           />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center',
        alignItems: 'center', backgroundColor: '#FFF'
    },
    empty:{
        marginTop:'50%',fontSize:18,textAlign:'center'
    },

})
