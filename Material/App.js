//Imports
import React, {Fragment} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native'
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import Header from './src/components/uikit/Header'
import ShopCard from './src/components/uikit/ShopCard'

//Variables
var DBUrl = "https://github.com/darksidecoding/React/blob/master/resMaterial/db/material_db.json"

//Functions
const App = () => {
    state = {
        DBJson: []
    }
    
    componentDidMount = async() => {
        
        try {
            const response = await fetch(DBUrl)
            const DBJson = await response.json()
            this.setState({DBJson})   
        } 
        catch(e){
            throw e
        }

    }
    
  return (
      <View>
        <Header/>
        <ShopCard/>
      </View>
  )
}

export default App;
