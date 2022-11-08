import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import * as React from 'react'
import { Audio } from 'expo-av'

export default function App() {
    const [beep, setBeep] = React.useState()

    async function playSound() {
        console.log('Loading Sound')
        const { sound } = await Audio.Sound.createAsync(
            require('./assets/Hello.mp3')
        )
        setBeep(sound)

        console.log('Playing Sound')
        await sound.playAsync()
    }

    // React.useEffect(() => {
    //     return beep
    //         ? () => {
    //               console.log('Unloading Sound')
    //               beep.unloadAsync()
    //           }
    //         : undefined
    // }, [beep])

    return (
        <View style={styles.container}>
            <Text>TEST</Text>

            <Text>Open up App.js to start working on your app!</Text>
            <View>
                <Button title='Play Sound' onPress={playSound} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
