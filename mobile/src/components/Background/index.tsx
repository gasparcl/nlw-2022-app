import React from "react"
import { ImageBackground } from "react-native"

import backgroundImg from "../../assets/background-galaxy.png"

import { styles } from "./styles"

interface Props {
    children: React.ReactNode
}

export function Background({ children }: Props) {
    return (
        <ImageBackground
            source={backgroundImg}
            defaultSource={backgroundImg} // memoriza a img padrão e evita delays de carregamento
            style={styles.container}
        >
            {children}
        </ImageBackground>
    )
}
