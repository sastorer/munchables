import * as React from "react"
import { get } from "theme-ui"
import { Global } from "@emotion/react"
import SEO from "./seo"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(t) => ({
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
        },
        html: {
          fontSize: `18px`,
          WebkitTextSizeAdjust: `100%`,
          backgroundColor: `#FAFAF9`,
        },
        body: {
          fontFamily: `"opake", sans-serif`,
        },
        p: {
          fontFamily: `"Segoe UI"`,
          color: `#000000`,
        },
        img: {
          borderStyle: `none`,
        },
        h1: {
          color: `#000000`,
        }, 
        h2: {
          color: `#000000`,
        },
        h3: {
          color: `#000000`,
        },
        h4: {
          color: `#000000`,
        },
        h5: {
          color: `#000000`,
        },
        h6: {
          color: `#000000`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: get(t, `colors.primary`),
          color: get(t, `colors.background`),
        },
      })}
    />
    <SEO />
    <main className={className}>{children}</main>
  </React.Fragment>
)

export default Layout
