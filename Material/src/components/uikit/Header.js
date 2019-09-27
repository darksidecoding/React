// import
import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

/*const img ={
    openMenu: "'./img/openMenu.png'",
    searchTop: "'./img/searchTop.png'"
}*/

// body
const Header = ({ title }) => {
    
    const {headerView, iconStyle, titleStyle} = styles
    return(
        <View style = {headerView} >
            <Image source={require("./img/openMenu.png")} style = {iconStyle}/>
            <Text style = { titleStyle }> { title } </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  headerView: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#2EECE6",
      padding: 20,
      shadowColor: "#000",
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3
  },
    iconStyle: {
        width: 24,
        height: 24
    },
    titleStyle: {
        fontSize: 16,
        color: '#fff',
        fontFamily: "AvenirNext-DemiBold"
    }
})

// export
export { Header }