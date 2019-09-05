import React from 'react'
import { StyleSheet , View , Image , TouchableOpacity , Text} from 'react-native'

export default class Fisrt extends React.Component {


  passToLogin = ()  => {

    this.props.navigation.navigate('Login');
  }

  componentDidMount () {

    // On récupère les données qui sont dans le téléphone avec AsynStorage
    //this.fetchedData ()// ------> Récupère les données dans le téléophone
    // ----> On vérifie dans les deonnées qu'il est bien inscrit, si oui, on vérifie qu'il y a une connexion automatique.
    // ----> s'il n'y a pas de
  }

  constructor (props) {
    super (props)

    this.state = {
      autoConnect : null,
    }

  }

  render ()  {

    return (
      <View style = { firstStyle.container }>
          <View style = { { justifyContent : 'center' , alignItems : 'center' } }>
            <Image
              source = { require ('../../assets/logo_mibde.png') }
              style = { { width : 400 , height : 400 } }
            />
          </View>
          <View style = { firstStyle.boutonData }>

              <TouchableOpacity style = { firstStyle.logInStyle } onPress = { () => this.passToLogin() }>
                  <Text style = { firstStyle.inBoutonStyle }>Log in</Text>
              </TouchableOpacity>

              <TouchableOpacity style = { firstStyle.signUpStyle }>
                  <Text style = { firstStyle.inBoutonStyle }>Sign up</Text>
              </TouchableOpacity>
          </View>
      </View>
    )
  }
}

const firstStyle = StyleSheet.create ({

  container : {
    flex : 1,
  },
  boutonData : {

    flexDirection : 'column',
    paddingLeft : 25,
    paddingRight : 25,
  },
  logInStyle : {
    backgroundColor : '#8b2938',
    height : 47,
    justifyContent : 'center',
    alignItems : 'center',
    marginBottom : 5,
  },
  signUpStyle : {

    backgroundColor : '#393f9b',
    justifyContent : 'center',
    alignItems : 'center',
    height : 44,
  },
  inBoutonStyle : {

    color : 'white',
    fontSize : 22,
    fontWeight : 'bold',
  }
});
