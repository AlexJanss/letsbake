import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './components/navigation.component';
import { default as theme } from './assets/theme.json';
import { default as mapping } from './mapping.json';

export default () => (
    <>
        <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider    {...eva}
                                theme={{...eva.dark, ...theme}}
                                customMapping={mapping}>>
            <AppNavigator/>
        </ApplicationProvider>
    </>
);

