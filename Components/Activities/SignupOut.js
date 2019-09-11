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

// TODO: continuer la fonction changeText qui modifie les state en fonction d'un entier
export default class SignUp extends React.Component {

  

  passToNext = () => {

      this.props.navigation.navigate("Adresse")
  }

  //FonctionAppeller à chaque changement de text --->

  constructor (props) {
    super (props )

    this.nom = null;
    this.prenom = null;
  }

  render () {

    return  (
      <ScrollView contentContainerStyle = { signStyle.mainContainer }>

        <View style = { { flex : 1 , justifyContent : 'center' , alignItems : 'center' } }>
          <Image
            source = { require ('../../assets/logo_mibde.png') }
            style = { { width : 250 , height : 250 } }
          />
        </View>

        <View style = { { flex : 1} }>
          <TextInputText text = 'Prénom'
                         hiddenText = 'Prénom...'
                         callBackFunction = { (text) => { console.log('coucou'); } }
            />
            <TextInputText text = 'Nom'
                            hiddenText = 'Nom...'

              />

            <TouchableOpacity style = { signStyle.boutonStyle } onPress = { () => this.passToNext () }>
              <Text style = { signStyle.boutonTextStyle }>étape suivante</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    );
  }
}

const signStyle = StyleSheet.create ({
  mainContainer : {
    flex : 1,
    padding : 10
  },
  boutonStyle : {

    marginTop : 8,
    backgroundColor : '#8b2938',
    height : 40,
    justifyContent : 'center',
    alignItems : 'center'
  },
  boutonTextStyle : {
    fontSize : 22,
    fontWeight : 'bold',
    color : 'white',
  }
});
