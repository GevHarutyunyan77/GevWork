import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

function TopSVG (props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45 45"
      xmlSpace="preserve"
      enableBackground="new 0 0 45 45"
      {...props}
    >
      <Defs>
        <ClipPath id="a" clipPathUnits="userSpaceOnUse">
          <Path d="M0 36h36V0H0v36z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 45)">
        <Path
          d="M0 0l-6.932 10.215c-.601.885-1.558.867-2.127-.037L-15.449.037c-.569-.904-.18-1.644.865-1.644h1.873v-3.526a2 2 0 012-2h6a2 2 0 012 2v3.526h1.899C.234-1.607.602-.885 0 0"
          transform="translate(25.71 25.133)"
          fill={props.color}
          fillOpacity={1}
          fillRule="nonzero"
          stroke="none"
        />
        <Path
          d="M0 0h-2.213c-.975 0-1.381.712-1.381 1.401 0 .71.508 1.4 1.381 1.4h7.469c.874 0 1.382-.69 1.382-1.4C6.638.712 6.232 0 5.256 0H3.044v-10.189c0-1.016-.649-1.584-1.522-1.584S0-11.205 0-10.189V0z"
          transform="translate(3.651 12.425)"
          fill={props.color}
          fillOpacity={1}
          fillRule="nonzero"
          stroke="none"
        />
        <Path
          d="M0 0c0 2.456-1.279 4.67-3.816 4.67-2.538 0-3.817-2.214-3.817-4.67 0-2.476 1.239-4.668 3.817-4.668C-1.238-4.668 0-2.476 0 0m-10.799 0c0 4.222 2.841 7.471 6.983 7.471C.263 7.471 3.166 4.12 3.166 0c0-4.201-2.821-7.471-6.982-7.471-4.121 0-6.983 3.27-6.983 7.471"
          transform="translate(21.194 8)"
          fill={props.color}
          fillOpacity={1}
          fillRule="nonzero"
          stroke="none"
        />
        <Path
          d="M0 0h2.071C3.349 0 4.16.934 4.16 2.151c0 1.219-.811 2.153-2.089 2.153H0V0zm-3.046 5.399c0 .955.569 1.582 1.585 1.582H2.13c2.985 0 5.197-1.947 5.197-4.85 0-2.963-2.293-4.811-5.074-4.811H0v-3.329c0-1.015-.649-1.584-1.521-1.584-.875 0-1.525.569-1.525 1.584V5.399z"
          transform="translate(28.673 8.244)"
          fill={props.color}
          fillOpacity={1}
          fillRule="nonzero"
          stroke="none"
        />
      </G>
    </Svg>
  )
}

export default TopSVG
