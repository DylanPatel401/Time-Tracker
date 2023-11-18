import { SafeAreaView, Text, View, TouchableHighlight} from 'react-native';
import { normalStyle, barHeight } from './style';
import { AntDesign } from '@expo/vector-icons'; 

const CustomHeader = ({ title, icon_name, onPress }) => {
    return (
      <SafeAreaView style={{ flexDirection: 'row', margin: barHeight/2, justifyContent: 'center'}}>
        <View style={{flex:2}}>
        	<Text style={normalStyle.title}>
            {title}
          </Text>          
        </View>
          
          <TouchableHighlight
            style={{ justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center'}}
            onPress={onPress}
            underlayColor="transparent"
          >
            <AntDesign name={icon_name} size={barHeight*2} color="black" />
          </TouchableHighlight>          
      </SafeAreaView>
    );
  };

  export {CustomHeader}