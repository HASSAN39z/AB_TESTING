import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  getRemoteConfigValue,
} from './services/remoteConfig';
const Home = () => {
  const [welcomeMessage, setWelcomeMessage]: any = useState();
  const [backgroundColor, setBackgroundColor]: any = useState();
  const [btnColor, setBtnColor]: any = useState();
  const [isSubscribed, setisSubscribed]: any = useState();
  const [numberValue, setNumberValue] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const msg = await getRemoteConfigValue('getString');
      const bgColor = await getRemoteConfigValue('bgColor');
      const btnColor = await getRemoteConfigValue('btnColor');
      const isSubscribed = await getRemoteConfigValue('is_subscribed');
      const numberValue = await getRemoteConfigValue('number_value');
      setWelcomeMessage(msg);
      setBackgroundColor(bgColor);
      setBtnColor(btnColor);
      setisSubscribed(isSubscribed);
      setNumberValue(numberValue);
    } catch (error) {
      console.error('Error fetching remote config:', error);
    }
  };
  console.log('===========DATA FROM REMOTE CONFIG==============');
  console.log(welcomeMessage);
  console.log(backgroundColor);
  console.log(btnColor);
  console.log(numberValue)
  console.log('===========DATA FROM REMOTE CONFIG==============');

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <Text style={{fontSize: 30}}>A/B Testing</Text>
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        textAlignVertical="top"
      />
      <TouchableOpacity style={[styles.btn, {backgroundColor: btnColor}]}>
        <Text style={{color: 'white'}}>My Button</Text>
      </TouchableOpacity>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white'}}>{welcomeMessage || 'no msg'}</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white'}}>{numberValue ? numberValue : 0}</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white'}}>
          {isSubscribed
            ? 'Yes the user is subscribed'
            : 'NO he is not purhase the subscription'}
        </Text>
      </View>
    </View>
  );
};
``
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderWidth: 2,
  },
  input: {
    height: '30%',
    width: '80%',
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#fff',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 35,
    backgroundColor: 'red',
    elevation: 5,
  },
});
