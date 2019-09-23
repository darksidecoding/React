// import
import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

/*const img ={
    openMenu: "'./img/openMenu.png'",
    searchTop: "'./img/searchTop.png'"
}*/

// body
const Header = () => {
    return(
        <View style = {styles.headerView} >
            <Image source={require("./img/openMenu.png")} style={{width: 24, height: 24}}/>
            <Image source={require("./img/searchTop.png")} style={{width: 24, height: 24}}/>
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
  }
})

// export
export default Header