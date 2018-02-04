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
        >
          <View style={{ height: 100, backgroundColor: 'blue' }} />
          <View style={{ height: 100, backgroundColor: 'red' }} />
          <View style={{ height: 100, backgroundColor: 'green' }} />
          <View style={{ height: 100, backgroundColor: 'purple' }} />
          <View style={{ height: 100, backgroundColor: 'orange' }} />
          <View style={{ height: 100, backgroundColor: 'pink' }} />
          <View style={{ height: 100, backgroundColor: 'brown' }} />
          <View style={{ height: 100, backgroundColor: 'yellow' }} />
        </HeaderImageScrollView>
      </View>
    );
  }
}

export default ColorsPage;
