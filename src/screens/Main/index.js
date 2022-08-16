import React from "react";
import { FlatList, Image, Pressable, SafeAreaView,  Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import myStyle from './style';
import _ from 'lodash'
import Movie from "../../components/Movie/Movie";


function Main(props) {
  const data = useSelector(state=> state.app.liked)
  const renderItem = ({ item }) => (
    <View>
      <Movie filmImage={item.image} title={item.title} />
    </View>
  );


  return (
    <View style={{flex:1, backgroundColor:'#36363d' }}>

      <View style={myStyle.inputView}>
        <Text style={myStyle.titleText}> Favorites</Text>
      </View>

      {
        !_.isEmpty(data) ? <SafeAreaView>
          <FlatList
            data={data}
            renderItem={renderItem}
            numColumns={4}
            showsVerticalScrollIndicator={false}
            keyExtractor={()=>_.uniqueId()}
          />
        </SafeAreaView> : <Image style={myStyle.empty} source={require('../../assets/Images/empty.jpeg')}/>
      }
    </View>
  );
}

export default Main;
