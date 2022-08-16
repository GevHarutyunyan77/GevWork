import React, { useCallback } from "react";
import Modal from "react-native-modal";
import { ActivityIndicator, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import myStyle from "./style";
import { useDispatch, useSelector } from "react-redux";
import CrossSVG from "../../assets/svg/CrossSVG";
import { AirbnbRating } from "react-native-ratings";
import resho from "../../constants/resho";
import BlackListSVG from "../../assets/svg/BlackLisk";
import FavoriteSVG from "../../assets/svg/Favorite";
import { setLikedMovies, setToBlackList } from "../../store/actions/app";



function MovieModal(props) {
  const modalMovie = useSelector(state => state.app.modalMovie);
  const status = useSelector(state => state.app.status);
  const liked = useSelector(state => state.app.liked);
  const blacklist = useSelector(state => state.app.blackList);
  const dispatch = useDispatch();
  const exist = checkFavorites();
  const existBlackList = checkBlackList();


  function checkFavorites() {
    let status = false;
    liked.map((item) => {
      if (item.id === modalMovie.id) {
        status = true;
      }
    });
    return status;
  }

  function checkBlackList() {
    let status = false;
    blacklist.map((item) => {
      if (item.id === modalMovie.id) {
        status = true;
      }
    });
    return status;
  }


  const handleAddToFavorites = useCallback(() => {
    if (exist) {
      dispatch(setLikedMovies(liked.filter(item => item.id !== modalMovie.id)));
    } else {
      dispatch(setLikedMovies([...liked, modalMovie]));
    }
  }, [dispatch, modalMovie, liked]);


  const handleAddToBlackList = useCallback(() => {
    if (existBlackList) {
      dispatch(setToBlackList(blacklist.filter(item => item.id !== modalMovie.id)));
    } else {
      dispatch(setToBlackList([...blacklist, modalMovie]));
    }
  }, [dispatch, modalMovie, blacklist]);


  return (
    <Modal isVisible={props.show}
           onBackButtonPress={props.close}
           onBackdropPress={props.close}
           style={myStyle.modal}
           backdropOpacity={1}
    >

      {status === "ok" ? <View style={myStyle.bigView}>
        <View style={myStyle.bannerView}>
          {
            status === "ok" ? <Image source={{ uri: modalMovie.image }} style={myStyle.banner} /> : <ActivityIndicator color="orange" size={200} style={{flex:1}}/>
          }
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <Pressable style={myStyle.closeView} onPress={props.close}>
              <CrossSVG />
            </Pressable>
            <View style={myStyle.titleView}>
              <Text style={myStyle.title}>{modalMovie.title}</Text>
            </View>

            <View style={myStyle.infoView}>

              <View style={myStyle.infoLine}>
                <Text style={myStyle.titleText}>Directors</Text>
                <Text style={myStyle.text}>{modalMovie.directors}</Text>
              </View>

              <View style={myStyle.infoLine}>
                <Text style={myStyle.titleText}>Release date</Text>
                <Text style={myStyle.text}>{modalMovie.year}</Text>
              </View>

              <View style={myStyle.infoLine}>
                <Text style={myStyle.titleText}>Duration</Text>
                <Text style={myStyle.text}>{modalMovie.runtimeStr}</Text>
              </View>

              <View style={myStyle.infoLine}>
                <Text style={myStyle.titleText}>Rating</Text>
                <Text style={myStyle.text}>{modalMovie.imDbRating}</Text>
              </View>
            </View>


          </View>

        </View>
        <View style={myStyle.ratingView}>
          <AirbnbRating
            count={10}
            showRating={false}
            defaultRating={modalMovie.imDbRating}
            size={18}
          />
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={myStyle.container}>
            <Text style={myStyle.overViewTitle}>OverView</Text>

            <Text style={myStyle.overViewText}>
              {modalMovie.plot}
            </Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 * resho }}>
              {status === "ok" ? <TouchableOpacity style={myStyle.favoriteView} onPress={handleAddToFavorites}>
                <Text style={{ textAlign: "center", color: exist ? "red" : "white" }}>
                  {exist ? "Remove" : "Add"}
                </Text>
                <View style={myStyle.svgContainer}>
                  <FavoriteSVG color={exist ? "red" : "white"} />
                </View>
              </TouchableOpacity> : <ActivityIndicator color="orange" size={200} style={{flex:1}}/> }


              <TouchableOpacity style={myStyle.favoriteView} onPress={handleAddToBlackList}>
                <Text style={{textAlign: "center", color: existBlackList ? "red" : "white" }}> {existBlackList ? "Remove" : "Add"}</Text>
                <View style={myStyle.svgContainer}>
                  <BlackListSVG color={existBlackList ? "red" : "white"} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View> : <Text>Hello</Text>}


    </Modal>

  );
}

export default MovieModal;
