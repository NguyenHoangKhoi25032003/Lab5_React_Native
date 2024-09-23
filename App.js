import 'react-native-gesture-handler';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
function HomeCre({ navigation , route}) {
  const selectedColor =route.params?.color || null;

  const getImageSource = () => {
    if (selectedColor === 'lightblue') {
      return require('./assets/vs_blue.png');  
    } else if (selectedColor === 'red') {
      return require('./assets/vs_red.png');  
    } else if (selectedColor === 'black') {
      return require('./assets/vs_red.png'); 
    } else if (selectedColor === 'blue') {
      return require('./assets/vs_blue.png'); 
    } else {
      return require('./assets/vs_blue.png');  
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.Fisrtcontainer}>
        <View style={{
        
          flex: 3,
          flexDirection: 'row',
          justifyContent: "center",
          alignItems: "center",
         
         
          
        }}>
           <Image  source={getImageSource()} />
        </View>

        <Text style={{
          
        }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={styles.star}>
          <View style={styles.star1}>
            <Image source={require('./assets/star.png')} />
            <Image source={require('./assets/star.png')} />
            <Image source={require('./assets/star.png')} />
            <Image source={require('./assets/star.png')} />
            <Image source={require('./assets/star.png')} />
          </View>
          <Text style={{ flex: 1 }}>Xem đánh giá</Text>
        </View>
        <View style={styles.Gia}>
          <Text style={{ flex: 1 }}>1.790.000 đ</Text>
          <Text style={{ textDecorationLine: 'line-through', flex: 1 }}>1.790.000 đ</Text>
        </View>
        <Text style={{ flex: 0.3, fontSize: 16, color: 'red', fontWeight: 'bold' }}>
          Ở đâu rẻ hơn hoàn tiền
        </Text>
        <TouchableOpacity style={styles.orderButton1} onPress={() => navigation.navigate('Details')}>
          <Text>4 MÀU-CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.END}>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const VSMartJoy = ({ navigation }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  return (
    <View style={styles.container}>
      <View style={{
        flex: 1,
        flexDirection: 'row'
      }}>
        <Image style={{
          flex: 1,
          width: 120,
          height: 160
        }} source={require('./assets/vs_blue.png')} />
        <View style={{
          flex: 2
        }}>
          <Text>Điện Thoại Vsmart Joy 3</Text>
          <Text>Hàng chính hãng</Text>

        </View>
      </View>
      <Text style={{
        fontSize: 18,
        fontWeight: 500
      }}>Chọn một màu bên dưới:</Text>
      <View style={{
        flex: 2.5,
        justifyContent: "space-around",
        alignItems: "center",
      }}>


        <TouchableOpacity style={[styles.colorbox, { backgroundColor: 'lightblue' }]} 
        onPress={()=>setSelectedColor('lightblue')}>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.colorbox, { backgroundColor: 'red' }]} 
        onPress={()=>setSelectedColor('red')}>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.colorbox, { backgroundColor: 'black' }]} 
        onPress={()=>setSelectedColor('black')}>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.colorbox, { backgroundColor: 'blue' }]} 
        onPress={()=>setSelectedColor('blue')}>

        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.orderButton2}  onPress={()=>navigation.navigate('Home',{ color: selectedColor })}>
          <Text style={styles.orderButtonText} 
         >XONG</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeCre} />
        <Stack.Screen name="Details" component={VSMartJoy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orderButton: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orderButton1: {
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
  },
  orderButton2:{
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  Fisrtcontainer: {
    flex: 9,
  },
  END: {
    flex: 1,
    backgroundColor: "black",
  },
  star: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  star1: {
    flex: 1,
    flexDirection: 'row',
  },
  Gia: {
    flex: 0.3,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  colorbox: {
    width: 90,
    height: 85
  },

});
