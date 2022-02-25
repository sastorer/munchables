/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import { hidden } from "../styles/utils"

const icons = {
    gummybear: {
        shape:(
            <svg width="300" height="300">
                <image xlinkHref="gummybear.png" width="300" height="300"/>
            </svg>
        ),
        viewBox: `0 0 300 300`,
    },
    peachring: {
        shape:(
            <svg width="300" height="300">
                <image xlinkHref="peachring.png" width="300" height="300"/>
            </svg>
        ),
        viewBox: `0 0 300 300`,
    },
    pretzel: {
        shape:(
            <svg width="300" height="300">
                <image xlinkHref="pretzel.png" width="300" height="300"/>
            </svg>
        ),
        viewBox: `0 0 300 300`,
    },
}

type IconType = "gummybear" | "peachring" | "pretzel"

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: number
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const Svg = ({ stroke = false, color = ``, width, icon, left, top, hiddenMobile = false }: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
)

export default Svg
