import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SettingsSVG(props) {
    return (
        <Svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M9.29 19.371l.584 1.315a2.213 2.213 0 004.044 0l.585-1.315a2.426 2.426 0 012.47-1.423l1.43.152a2.212 2.212 0 002.022-3.502l-.847-1.164a2.428 2.428 0 01-.46-1.434c0-.513.163-1.014.465-1.429l.847-1.163a2.212 2.212 0 00-2.023-3.502l-1.43.152a2.433 2.433 0 01-1.47-.312 2.425 2.425 0 01-1-1.117l-.588-1.315a2.212 2.212 0 00-4.045 0L9.29 4.63c-.207.468-.558.86-1 1.117-.445.256-.96.365-1.47.312l-1.435-.152a2.212 2.212 0 00-2.022 3.502l.847 1.163a2.43 2.43 0 010 2.858l-.847 1.163a2.21 2.21 0 00.786 3.273c.381.195.81.274 1.236.23l1.43-.153a2.434 2.434 0 012.475 1.43z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SettingsSVG
