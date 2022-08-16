import React, { useEffect } from "react";
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../store/actions/app";
import myStyle from './style';
import _ from 'lodash'
import Movie from "../../components/Movie/Movie";


function BlackList(props) {
  const dispatch = useDispatch()
  const data = useSelector(state=> state.app.blackList)

  const renderItem = ({ item }) => (
    <View>
      <Movie filmImage={item.image} title={item.title} />
    </View>
  );



  return (
    <View style={{flex:1, backgroundColor:'#36363d' }}>

      <View style={myStyle.inputView}>
        <Text style={myStyle.titleText}> BlackList</Text>
      </View>

      {
        !_.isEmpty(data) ?  <SafeAreaView>
          <FlatList
            data={data}
            renderItem={renderItem}
            numColumns={4}
            showsVerticalScrollIndicator={false}
            keyExtractor={()=>_.uniqueId()}
          />
        </SafeAreaView> :  <Image style={myStyle.empty} source={require('../../assets/Images/empty.jpeg')}/>
      }







    </View>
  );
}

export default BlackList;
