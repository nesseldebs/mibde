import React from 'react'
import { View , StyleSheet , Text,  TouchableOpacity, TextInput , Image} from 'react-native'



export default class Login extends React.Component {

  nextNav = () => {// On bind les datas

    this.props.navigation.navigate("BottomNavigation");
  }

  componentDidMount () {

  }

  constructor (props) {
    super (props)

    this.state = {

    }
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
                style = { { borderWidth : 1 , paddingLeft : 7 } }
              />
            </View>

            <View style = { loginStyle.inputTextWithText }>
              <Text style = { loginStyle.labelStyle} >Mot de Passe</Text>
              <TextInput
                placeholder = 'Mot de passe...'
                style = { { borderWidth : 1 , paddingLeft : 7 , marginBottom : 10} }
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
    height : 50,
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
