/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="gummybear" width={48} left="10%" top="20%" />
        <Svg icon="sourgummyworm" width={48} left="60%" top="70%" />
        <Svg icon="gummybear" width={30} left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="peachring" width={16} left="80%" top="10%" />
        <Svg icon="peachring" width={12} left="90%" top="50%" />
        <Svg icon="peachring" width={48} left="70%" top="90%" />
        <Svg icon="peachring" width={16} left="30%" top="65%" />
        <Svg icon="pretzel" width={16} left="28%" top="15%" />
        <Svg icon="pretzel" width={40} left="75%" top="10%" />
        <Svg icon="pretzel" width={24} left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="goldfish" width={24} left="5%" top="70%" />
      <Svg icon="marsbar" width={20} left="2%" top="20%" />
      <Svg icon="sourgummyworm" width={12} left="40%" top="60%" />
      <Svg icon="goldfish" width={8} left="95%" top="90%" />
      <Svg icon="marsbar" width={24} left="40%" top="80%" />
      <Svg icon="sourgummyworm" width={20} left="25%" top="5%" />
      <Svg icon="sourgummyworm" width={64} left="95%" top="5%" />
      <Svg icon="marsbar" width={24} left="5%" top="90%" />
      <Svg icon="goldfish" width={20} left="10%" top="10%" />
      <Svg icon="gummybear" width={12} left="40%" top="30%" />
      <Svg icon="gummybear" width={16} left="10%" top="50%" />
      <Svg icon="gummybear" width={8} left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero
