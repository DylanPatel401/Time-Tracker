import { SafeAreaView, Text, View, TouchableHighlight} from 'react-native';
import { normalStyle, barHeight } from './style';
import { AntDesign } from '@expo/vector-icons'; 

const CustomHeader = ({ title, icon_name, onPress }) => {
    return (
      <SafeAreaView style={{ flexDirection: 'row', flex:1}}>
        <View style={{flex:2}}>
        	<Text style={normalStyle.title}>
            {title}
          </Text>          
        </View>
          
        <View style={{flex:1}}>
          <TouchableHighlight
            style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row', marginTop: barHeight*2, paddingRight: barHeight }}
            onPress={onPress}
            underlayColor="transparent" // Change this to the desired underlay color
          >
            <AntDesign name={icon_name} size={barHeight*2} color="black" />
          </TouchableHighlight>          
        </View>
      </SafeAreaView>
  
    );
  };

  export {CustomHeader}