import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { default as theme } from './assets/theme.json';

const HomeScreen = () => (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category='h1'>Let's bake!</Text>
    </Layout>
);

export default () => (
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <HomeScreen />
    </ApplicationProvider>
);
