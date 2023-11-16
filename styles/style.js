import { StyleSheet, StatusBar, View, TouchableHighlight, Text} from "react-native";

var barHeight = StatusBar.currentHeight;

const normalStyle = StyleSheet.create({
    title: { color: 'black', fontSize: barHeight*2, fontWeight: 'bold',  paddingTop:barHeight*1.5},
    text: { color: 'black', fontSize: 34 },
    mediumTitle: { fontSize: 20, marginBottom: 5, color: 'darkblue'},
      mediumText: {
        fontSize: 16,
        marginBottom: 10,
        borderWidth: 3,
        borderRadius: 4, 
        padding: 10
      },
    button: { padding: 15, borderRadius: 10, backgroundColor: '#4CAF50', alignItems: 'center', justifyContent: 'center'}, 
    buttonText: { color: 'black', fontSize: 18, fontWeight: 'bold' },
    buttonText2: { padding:15, margin: 10, borderRadius:10, textAlign: 'left', fontSize: 18, borderWidth:3, color: 'blue'},

})

export { normalStyle, barHeight};