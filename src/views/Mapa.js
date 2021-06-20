import React, { useLayoutEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,FlatList } from 'react-native';
import db from '../services/ConnectFirebase'

export default function Mapa(props) {
  const { navigation } = props
  const [coisa, setlong] = useState(0)
  const [coiso, setlat] = useState(0)

  const get = () => {
    var docRef = db.collection("localizacao").doc("MFESb7qijDDb4BGGW19L");
  
  docRef.get().then((doc) => {
      if (doc.exists) {
          setlong(parseFloat(doc.data().longitude))
          setlat(parseFloat(doc.data().latitude))
      } else {
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
  }


  useLayoutEffect(() => { 
      get()
}, [])

    return (
      <View style={styles.container}>
        <MapView
                    initialRegion={{
                        latitude: -28.179098649893234,
                        longitude: -52.034301301470805,
                        latitudeDelta: 0.215,
                        longitudeDelta: 0.215
                    }}
                    style={styles.mapStyle}>
                        <Marker
                            coordinate={{
                            latitude: coiso,
                            longitude: coisa
                            }}
                            title="Casa Dev - Varlei"
                        >
                        </Marker>
                
                </MapView> 
      </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});