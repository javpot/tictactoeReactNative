import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import Grid from './Grid';

const Home = () => {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [startGame, setStartGame] = useState(false);

    return (

        <View style={styles.container}>
            {!startGame ? (
                <>
                    <Text>Tic tac toe</Text>
                    <Image
                        source={require('./images/react-1-logo-png-transparent.png')}
                        style={{ width: 50, height: 50 }}
                    />


                    <TextInput
                        style={styles.input}
                        placeholder="Nom du Joueur 1"
                        onChangeText={setPlayer1}
                        value={player1}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Nom du Joueur 2"
                        onChangeText={setPlayer2}
                        value={player2}
                    />
                    <Button title="Start" onPress={() => setStartGame(true)} />
                </>
            ) : (
                <Grid player1={player1} player2={player2} />
            )
            }
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
    },
});

export default Home;
