import React from 'react';
import { Image, View, Dimensions } from 'react-native';

import HeaderImageScrollView from 'react-native-image-header-scroll-view';

class ColorsPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderImageScrollView
          maxHeight={150}
          minHeight={80}
          fadeOutForeground
          headerImage={require('../../assets/cutecat.jpg')}
          overScrollMode="never"
          overlayColor="#4A148C"
          maxOverlayOpacity={0.9}
        >
          <View style={{ height: 100, backgroundColor: '#4CAF50' }} />
          <View style={{ height: 100, backgroundColor: '#F44336' }} />
          <View style={{ height: 100, backgroundColor: '#009688' }} />
          <View style={{ height: 100, backgroundColor: '#03A9F4' }} />
          <View style={{ height: 100, backgroundColor: '#FF9800' }} />
          <View style={{ height: 100, backgroundColor: '#673AB7' }} />
          <View style={{ height: 100, backgroundColor: '#795548' }} />
          <View style={{ height: 100, backgroundColor: '#FFEB3B' }} />
        </HeaderImageScrollView>
      </View>
    );
  }
}

export default ColorsPage;
