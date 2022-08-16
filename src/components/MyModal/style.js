import resho from "../../constants/resho";

const style = {

  modal: {
    flex: 1,
    margin: 0,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#28282a",
  },

  bigView: {
    height: "100%",
    width: "100%",
  },
  closeView: {
    width: 60 * resho,
    height: 60 * resho,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
  },

  bannerView: {
    width: "100%",
    height: 410 * resho,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  banner: {
    width: "60%",
    height: 400 * resho,
    objectFit: "cover",
    marginTop: 10 * resho,
    marginLeft: 10 * resho,
  },
  titleView: {
    width: "100%",
    height: 120,
  },
  title: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  infoView: {
    width: "100%",
    height: 200,
  },
  text: {
    color: "#fcfcfc",
  },
  titleText: {
    color: "white",
  },

  infoLine: {
    marginLeft: 5 * resho,
    height: 52,
  },

  ratingView: {
    marginTop: 10 * resho,
    marginLeft: 10 * resho,
    alignItems: "flex-start",
  },

  overViewTitle: {
    color: "white",
    fontSize: 18 * resho,
    letterSpacing: 2 * resho,
  },

  container: {
    width: "80%",
    marginTop: 5 * resho,
  },

  overViewText: {
    borderTopLeftRadius:20*resho,
    borderTopRightRadius:20*resho,
   borderBottomRightRadius:20*resho,
   borderBottomLeftRadius:20*resho,
    color: "white",
    padding: 20,
    marginTop: 10,
    backgroundColor: "#777779",
  },

  favoriteView:{
    width:'35%',
    height:100*resho,
    justifyContent:'space-between'
  },
  svgContainer:{
    flex:1,
  },

};

export default style;
