import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert, Text } from 'react-native';
import Square from './Square';

const Grid = ({ player1, player2 }) => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentStep, setCurrentStep] = useState(0);
    const [isXNext, setIsXNext] = useState(true);
    const currentSquares = history[currentStep];

    const handleClick = (i) => {
        const newHistory = history.slice(0, currentStep + 1);
        const squares = newHistory[newHistory.length - 1];
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const newSquares = squares.slice();
        newSquares[i] = isXNext ? 'X' : 'O';
        setHistory([...newHistory, newSquares]);
        setCurrentStep(newHistory.length);
        setIsXNext(!isXNext);
    };

    const handleUndo = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            setIsXNext(!isXNext);
        }
    };

    const handleReset = () => {
        setHistory([Array(9).fill(null)]);
        setCurrentStep(0);
        setIsXNext(true);
    };


    const winner = calculateWinner(currentSquares);
    let status;
    if (winner) {
        status = `Le gagnant est ${winner === 'X' ? player1 : player2}`;
    } else {
        status = `Au tour de ${isXNext ? player1 : player2}`;
    }

    return (
        <View style={styles.grid}>
            {Array.from({ length: 3 }, (_, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {currentSquares.slice(rowIndex * 3, rowIndex * 3 + 3).map((square, i) => (
                        <Square key={i} value={square} onPress={() => handleClick(rowIndex * 3 + i)} />
                    ))}
                </View>
            ))}
            <Button title="Undo" onPress={handleUndo} />
            <Button title="Nouvelle Partie" onPress={handleReset} />

            <Text>{status}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    grid: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export default Grid;
