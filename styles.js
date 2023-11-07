import { StyleSheet, Dimensions } from "react-native";


const {width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fd0',
        justifyContent: 'space-around',
        alignItems:'center',
    },
    bigText: {
        fontSize: 48,
        fontWeight:'700',
        color:'#d00',
        textAlign:'center'
    },
    punchlineBoxHidden: {
      backgroundColor:'#00d',
      width: width,
      height: 104,
      justifyContent:'center',
        alignItems:'center',
        },
    punchlineTextHidden:{
        color: 'white',
        fontsize: 30,
    },
    punchlineBox: {
      width: width,
      height: 104,
      justifyContent:'center',
        alignItems:'center',
        },
    punchlineText:{
        color: '#00d',
        fontsize: 30,

    },

}
)

export default styles