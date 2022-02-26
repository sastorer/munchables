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
          fontFamily: `"opake", sans-serif`,
          fontSize: `18px`,
          WebkitTextSizeAdjust: `100%`,
        },
        body: {
          fontFamily: `"Segoe UI"`,
        },
        p: {
          fontFamily: `"Segoe UI"`,
        },
        img: {
          borderStyle: `none`,
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
