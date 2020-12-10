import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }) => {

    const navigateDetails = () => {
        navigation.navigate('Details');
    };
    const navigateRecipes = () => {
        navigation.navigate('Recipes');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='MyApp' alignment='center'/>
            <Divider/>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button onPress={navigateDetails}>Details</Button>
                <Button onPress={navigateRecipes}>Recipe</Button>
            </Layout>
        </SafeAreaView>
    );
};
