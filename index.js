import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => {
    return (
        <View>
            <Header headerText='Ngo Minh Hien'/>
            <AlbumList />
        </View>
        
    );
};


AppRegistry.registerComponent('albums', () => App);