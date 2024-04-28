import remoteConfig from '@react-native-firebase/remote-config';

export const getRemoteConfigValue = async (key: any) => {
  try {
    await remoteConfig().fetchAndActivate();
    return remoteConfig().getValue(key)._value;
  } catch (error) {
    console.error('Error: ', error);
  }
};

