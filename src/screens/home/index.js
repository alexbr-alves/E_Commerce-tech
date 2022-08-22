import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import styles from "./styles";

export default function Home() {
    return(
        <ScrollView style={styles.container}>
            <Text>Home</Text>
        </ScrollView>
    )
}