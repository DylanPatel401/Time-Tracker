import { StyleSheet, StatusBar} from "react-native";

// IOS is null, 24 is the alternate.
const barHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 24;

const normalStyle = StyleSheet.create({
    title: { color: 'black', fontSize: barHeight* 2 , fontWeight: 'bold',  paddingTop:0, textAlign: 'center'},
    text: { color: 'black', fontSize: barHeight },
    title2: { color: 'black', fontSize: barHeight , fontWeight: 'bold',  paddingTop:0},
    mediumTitle: { fontSize: 20, marginBottom: 5, color: 'darkblue'},
    mediumText: {color:'green', fontSize: 16,marginBottom: 10,borderWidth: 3,borderRadius: 4, padding: 10},
    button: { flex:1,padding: barHeight/1.5, borderRadius: 10, backgroundColor: '#4CAF50', alignItems: 'center', justifyContent: 'center'}, 
    buttonText: { color: 'black', fontSize: barHeight/2, fontWeight: 'bold' },
    buttonText2: { padding:15, margin: 10, borderRadius:10, textAlign: 'left', fontSize: barHeight/2, borderWidth:3, color: 'blue'},
    card: {flex:2}
})

export { normalStyle, barHeight};