import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HamburSVG(props) {
    return (
        <Svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M3 12h18M3 6h18M3 18h18"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default HamburSVG
