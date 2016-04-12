import React, {StyleSheet, Dimensions} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "marginTop": 40,
        "marginRight": 40,
        "marginBottom": 40,
        "marginLeft": 40
    },
    "wrapper": {
        "width": 600,
        "display": "grid",
        "gridGap": 10,
        "gridTemplateColumns": "repeat(6, 200px)",
        "gridTemplateRows": "100px 100px 100px",
        "gridAutoFlow": "column",
        "color": "#444"
    },
    "box": {
        "backgroundColor": "#444",
        "color": "#fff",
        "borderRadius": 5,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "fontSize": "150%"
    },
    "a": {
        "gridColumnStart": 2,
        "gridColumnEnd": 3,
        "gridRowStart": 1,
        "gridRowEnd": 3
    },
    "b": {
        "gridColumnStart": 4,
        "gridColumnEnd": 5,
        "gridRowStart": 1,
        "gridRowEnd": 4
    },
    "c": {
        "gridColumnStart": 1,
        "gridColumnEnd": 2,
        "gridRowStart": 2,
        "gridRowEnd": 3
    },
    "d": {
        "gridColumnStart": 1,
        "gridColumnEnd": 2,
        "gridRowStart": 1,
        "gridRowEnd": 2
    },
    "e": {
        "gridColumnStart": 3,
        "gridColumnEnd": 6,
        "gridRowStart": 2,
        "gridRowEnd": 3,
        "backgroundColor": "red",
        "zIndex": -1
    },
    "f": {
        "gridColumnStart": 5,
        "gridColumnEnd": 6,
        "gridRowStart": 1,
        "gridRowEnd": 2
    }
});