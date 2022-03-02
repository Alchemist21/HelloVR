import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class HelloVR extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
        Louell L. Sala MD MBA DPCOM
          </Text>
          <Text>
           NextJS || React 360
          </Text>
          <Text>
          TailwindCss 
          </Text>
         
           <Text>
          Web Developer working with Startups
          </Text>
           <Text>
            on NFTs, Digital Identity,
          </Text>
          <Text>
           Metaverse, AR/VR, 
          </Text>
           <Text>
           Defi's and DAOs, Hackathons and
          </Text>
           <Text>
          Creating Solutions for StartUps
          </Text>
        </View>

           <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
           Hackathons
          </Text>
       
          <Text>
            EthGlobal 2021 Winner
          </Text>
          <Text>
            ChainLink Hackathon 2021 Winner
          </Text>
            <Text>
            EthDenver 2021 Winner
          </Text>
            <Text>
            MIT Hacking Racism 2020 Winner
          </Text>
          <Text> 
            NYC Gotham DLT 2019 Winner
          </Text>
            <Text>
            NYC Techstars 2018 Winner
          </Text>
          <Text>
            MIT Hacking Medicine 2018 Winner 
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('HelloVR', () => HelloVR);
