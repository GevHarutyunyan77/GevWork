import resho from "../constants/resho";

const style = {
  header: {
    width: "100%",
    height: 250 * resho,
  },
  wallpaper: {
    width: "100%",
    height: "100%",
  },

  inputView: {

    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 5 * resho,
    width: "70%",
    borderWidth: 2 * resho,
    borderColor: "#a3a6ac",
    height: 40 * resho,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
  },
     logo:{
   width:50*resho,
   height:50*resho
     },

  inputText: {
    height: "100%",
    lineHeight: 16 * resho,
    fontSize: 14 * resho,
  },
  buttonSearch: {
    width: 60 * resho,
    height: "100%",
    backgroundColor: "#a3a6ac",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },

  buttonText: {
    fontSize: 28 * resho,
    color: "white",
  },

  buttonIcon: {
    height: 30,
    width: 30,
  },

};

export default style;
