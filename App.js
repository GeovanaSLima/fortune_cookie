import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button , TouchableOpacity, Touchable, ListViewBase, requireNativeComponent} from 'react-native';
import { act } from 'react-test-renderer';


function App() {

  const [img, setImg] = useState(require("./src/biscoito.png"));
  const [textPhrase, setTextPhrase] = useState('');

  let phrases = [
    "Don't hold onto things that require a tight grip.",
    "I didn't come this far to only come this far.",
    "There is nothing stronger than a broken woman who has rebuilt herself.",
    "Every new beginning comes from some other beginning's end.",
    "I never dreamed about success. I worked for it.",
    "If you want the rainbow, you gotta put up with the rain!",
    "All we have to decide is what to do with the time that is given to us.",
    "Do not let making a living prevent you from making a life.",
    "You must expect great things of yourself before you can do them.",
    "The most difficult thing is the decision to act, the rest is merely tenacity.",
    "If you set your goals ridiculously high and its a failure, you will fail above everyone elses success.",
    "If we wait until we're ready, we'll be waiting for the rest of our lives.",
    "What you do makes a difference and you have to decide what kind of a difference you want to make.",
    "I didn't come this far to do only come this far.",
    "Every new beginning comes from some other beginning's end.",
    "Don't let yesterday take up too much of today.",
    "You are not what you've done. You are what you keep doing.",
    "It is never too late to be what you might have been.",
    "The road to success is always under construction.",
    "Always do your best. What you plant now, you will harvest later.",
    "The most effective way to do it, is to do it.",
    "Do something today that your future will thank you for.",
    "Be the heroine of your life, not the victim.",
    "Make bold choices and make mistakes. Its all those things that add up to the person you become.",
    "The formula of happiness and success is just being actually yourself in the most vivid way you possibly can.",
    "Nobody gets to tell you how big your dreams can be.",
    "Each time you break your own boundaries to ensure that someone else likes you, you like yourself a little less.",
  ];


  function breakCookie() {
    let randomNumber = Math.floor(Math.random() * phrases.length)
    
    setTextPhrase(' "' + phrases[randomNumber] + '"');
    setImg(require('./src/biscoitoAberto.png'));
  }


  function resetCookie() {
    setTextPhrase('');
    setImg(require("./src/biscoito.png"));
  }


  return(
    <View style={ styles.container }>
      <Image source={img} style={ styles.img  } />

      <Text style={ styles.textPhrase }> { textPhrase } </Text>

      <TouchableOpacity style={ styles.button } onPress={ breakCookie }>
        <View style={ styles. btnArea}>
          <Text style={ styles.btnText }>Break Cookie</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={ [styles.button, { marginTop: 15, borderColor: '#005069' } ]} onPress={ resetCookie }>
        <View style={ styles. btnArea}>
          <Text style={ [styles.btnText, { color: '#005069'}] }>Reset Cookie</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 230,
    height: 230,
  },
  textPhrase: {
    fontSize: 20,
    color: "#FC5C65",
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button: {
    width: 230,
    height: 50,
    borderColor: "#FC5C65",
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontStize: 18,
    fontWeight: 'bold',
    color: "#FC5C65",
  }
})

export default App;