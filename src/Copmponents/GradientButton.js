import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Color } from '../Utils'

export default function GradientButton({ children, style = {}, heighLightedColor = [] }) {
    let normalColor = [Color.orange, "#dd6b60"]
    return (
        <LinearGradient
            colors={(heighLightedColor && heighLightedColor.length !== 0) ? heighLightedColor : normalColor}
            style={{ margin: 1, ...style }}
            start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
            {children}
        </LinearGradient>
    )
}