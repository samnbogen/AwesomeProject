import React from 'react';
import {View, Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function About() {
  return (
    <MainLayout>
        <View>
            <Text>Sam's Awesome To Do App</Text>
            <Text>Version 1.0</Text>
            <Text>Created by Sam</Text>
        </View>
    </MainLayout>
  );
}

export default About;