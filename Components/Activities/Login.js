import React from 'react'
import { View , StyleSheet , Text,  TouchableOpacity, TextInput , Image} from 'react-native'


export default class Login extends React.Component {

  nextNav = () => {

    this.props.navigation.navigate("BottomNavigation");
  }

  componentDidMount () {

  }

  constructor (props) {
    super (props)
  }

  render () {

    return(
      <View style = { loginStyle.container }>

        <View style = { { justifyContent : 'center' , alignItems : 'center' , marginBottom : 20 } }>
          <Image
            source = { require ('../../assets/logo_mibde.png') }
            style = { { width : 250 , height : 250 } }
          />
        </View>

        <View style = { loginStyle.dataVue }>

            <View style = { loginStyle.inputTextWithText }>
              <Text style = { loginStyle.labelStyle}>Pseudo</Text>
              <TextInput
                placeholder = 'Pseudo ...'
              />
            </View>

            <View style = { loginStyle.inputTextWithText }>
              <Text style = { loginStyle.labelStyle} >Mot de Passe</Text>
              <TextInput
                placeholder = 'Mot de passe...'
              />
            </View>

            <TouchableOpacity style = { loginStyle.logInStyle } onPress = {() => { this.nextNav()}}>
              <Text style = { loginStyle.inBoutonStyle }>Log in</Text>
            </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const loginStyle = StyleSheet.create({

  container : {
    flex : 1,
  },
  inputTextWithText : {

    flexDirection : 'column'
  },
  logInStyle : {
    backgroundColor : '#8b2938',
    height : 47,
    justifyContent : 'center',
    alignItems : 'center',
  },
  dataVue : {
    paddingLeft : 20,
    paddingRight : 20,
  },
  inBoutonStyle : {

    color : 'white',
    fontSize : 22,
    fontWeight : 'bold',
  },
  labelStyle : {
    fontSize : 23,
    fontWeight : 'bold'
  }
});
