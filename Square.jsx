import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Square = ({ onPress, value }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.square}>
            <Text style={styles.squareText}>{value}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
    },
    squareText: {
        fontSize: 30,
    },
});

export default Square;
