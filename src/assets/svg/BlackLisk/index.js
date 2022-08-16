import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BlackListSVG(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox=" -250 -200 1500 1500"
      fill={props.color}
      {...props}
    >
      <Path d="M500 10C229.4 10 10 229.4 10 500s219.4 490 490 490 490-219.4 490-490S770.6 10 500 10zm0 122.5c87.2 0 167.2 30.5 230.2 81.3L213.8 730.2c-50.7-63-81.3-143-81.3-230.2 0-203 164.5-367.5 367.5-367.5zm0 735c-71.4 0-137.9-20.7-194.3-56l505.8-505.8c35.3 56.4 56 122.9 56 194.3 0 203-164.5 367.5-367.5 367.5z" />
    </Svg>
  )
}

export default BlackListSVG
