import React from 'react'
import {
         View ,
         Text ,
         StyleSheet ,
         Image  ,
         TextInput ,
         TouchableOpacity,
         ScrollView

       } from 'react-native'

import TextInputText from '../TextInputLogin.js'

//<div>Icons made by <a href="https://www.flaticon.com/authors/picol" title="Picol">Picol</a> from <a href="https://www.flaticon.com/"
//<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>

export default class Adresse extends React.Component {


  connect = () => {

    this.props.navigation.navigate("BottomNavigation")
  }

  constructor (props) {
    super (props)

    this.state = {
      nom : null,
      prenom : null,
      adresse : null,
      motDePasse : null,
    }
  }

  render () {
    return (
      <ScrollView contentContainerStyle = { signStyle.mainContainer }>

            <View style = { { flex : 1 , alignItems: 'center' , justifyContent : 'center'} }>
              <TextInputText text = 'Adresse Mail'
                             hiddenText = 'Mail...'
                />
                <TextInputText text = 'Mot de passe'
                                hiddenText = 'Mot de passe...'
                  />
                  <TextInputText text = 'Confirmation'
                                  hiddenText = 'Confirmation'
                    />

                <TouchableOpacity style = { signStyle.boutonStyle } onPress = { () => this.connect() }>
                  <Text style = { signStyle.boutonTextStyle }>étape suivante</Text>
                </TouchableOpacity>
            </View>
      </ScrollView>
    );
  }
}

const signStyle = StyleSheet.create ({
  mainContainer : {
    padding : 10,
  },
  boutonStyle : {

    marginTop : 8,
    backgroundColor : '#8b2938',
    height : 40,
  },
  boutonTextStyle : {
    fontSize : 22,
    fontWeight : 'bold',
    color : 'white',
  }
});
