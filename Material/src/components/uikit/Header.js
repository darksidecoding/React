// import
import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

/*const img ={
    openMenu: "'./img/openMenu.png'",
    searchTop: "'./img/searchTop.png'"
}*/

// body
const Header = () => {
    
    const {headerView, iconStyle} = styles
    return(
        <View style = {headerView} >
            <Image source={require("./img/openMenu.png")} style = {iconStyle}/>
            <Image source={require("./img/searchTop.png")} style = {iconStyle}/>
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
    }
})

// export
export { Header }