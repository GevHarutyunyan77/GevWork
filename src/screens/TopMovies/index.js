import React, { useEffect, useCallback, useState } from "react";
import {  FlatList, Image, Pressable, SafeAreaView, TextInput, TouchableOpacity,View,} from "react-native";
import myStyle from './style'
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import Movie from "../../components/Movie/Movie";
import { getTopMovies, setData, setModalMovie } from "../../store/actions/app";
import MyModal from "../../components/MyModal";


function TopMovies(props) {
  const dispatch = useDispatch()
  const data = useSelector(state => state.app.data)
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false)

  useEffect(()=>{
    dispatch(getTopMovies())
  },[])

  const handleEditText = useCallback((ev)=>{
    setText(ev)
  },[])

  const handleSearch = useCallback(()=>{
    if(text !== ''){
      dispatch(setData(text))
      setText('')
    }

  },[text])

  const handleClickOnMovie = useCallback((id)=>{
    dispatch(setModalMovie(id))
    setShowModal(true)
  },[dispatch])

  const renderItem = ({ item }) => (
    <Pressable  onPress={()=>handleClickOnMovie(item.id)}>
      <Movie filmImage={item.image} title={item.title} />
    </Pressable>
  );
  return (
    <View style={{flex:1, backgroundColor:'#36363d'}}>
      <View style={myStyle.inputView}>
        <TextInput  placeholder="Search" style={myStyle.inputText} value={text}
                    onChangeText={(ev)=>handleEditText(ev)} />
        <TouchableOpacity onPress={handleSearch} style={myStyle.buttonSearch}>
          <Image source={require('../../assets/Images/find-icon.png')} style={myStyle.buttonIcon}/>
        </TouchableOpacity>
      </View>

      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={renderItem}
          numColumns={4}
          showsVerticalScrollIndicator={false}
          keyExtractor={()=>_.uniqueId()}
        />
      </SafeAreaView>
      <MyModal show={showModal} close={()=>{setShowModal(false)}}/>
    </View>
  );
}

export default TopMovies;
