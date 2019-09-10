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

            <View style = { { flex : 1 , alignItems: 'center'} }>
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
    justifyContent : 'center',
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
