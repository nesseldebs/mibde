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
  changeText = (text , champ) => {// On est pas obligé de Binder les données ici :)

    // Text -> argument permettant de recuperer le text ecrit dans le champ qui appelle la fonction
    // champ -> entier permettant de choisir quel state modifier

    switch (champ) {

      case 1 :// -> cas nom
        this.setState ({
          nom : text,
        });

        break;
      default :
        this.setState ({
          prenom : text,
        });
        break;
    }
  }

  constructor (props) {
    super (props )

    this.confirmationMdp = null;// Retient le champ Confirmation pour ensuite le verifier avec le champ mdp
    this.motDePasse = null;

    this.state = {

      nom : null,
      prenom : null,
      adresse : null,
      mdp : null,
    }
  }

  componentDidMount () {

    // Appeller pour re render le composant

    // On maintient une ouverture vers la base de donnée
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
                         callBackFunction = { () => this.changeText (text, 1)}
            />
            <TextInputText text = 'Nom'
                            hiddenText = 'Nom...'
                            callBackFunction = { () => this.changeText (text, 2) }
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
