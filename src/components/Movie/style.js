import resho from "../../constants/resho";

const style = {
  container: {
    width: 85 * resho,
    height: 190 * resho,
    marginLeft: 10 * resho,
    marginTop: 5 * resho,
    borderWidth: 1 * resho,
    backgroundColor: "#535353",
    justifyContent: "space-between",
  },
  addView: {
    height: 35,
    backgroundColor: "#0bb0d7",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,

  },
  heart: {
    width: 40,
    height: 35,
  },


  image: {
    height: 150 * resho,
    objectFit: "contain",
  },

  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 10,
    color: "white",
  },

};
export default style;
