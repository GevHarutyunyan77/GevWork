import resho from "../../constants/resho";

const style = {
  inputView: {
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 5 * resho,
    width: "100%",
    height: 40 * resho,
    justifyContent:'center',
    alignItems:'center',

  },

  titleText:{
    color:'#fcfcfc',
    fontSize:30*resho,
    lineHeight:30*resho,
    letterSpacing:2*resho,
    textShadowColor: 'rgba(255, 255, 255, 1)',
    textShadowOffset: { width: -4, height: 3 },
    textShadowRadius: 10,
  },
  empty:{
    width:'100%',
    height:'90%'
  }

}

export default style
