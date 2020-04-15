import React from 'react'
import styled from 'styled-components'
import {
  Container,
  BackgroundImage,
  Heading,
  LargeButton,
  theme
} from '@hackclub/design-system'
import { Link } from 'gatsby'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import IconButton from 'components/IconButton'
import { Lead } from 'components/Content'

theme.colors.summer = '#27292b'
theme.colors.summerMuted = '#27292b'

const Hero = styled(BackgroundImage)`
  background-position: 90% center;
`

const Megaline = styled(Heading.h1).attrs({
  color: 'summer',
  fontSize: [6, null, 7, 8],
  pb: 2
})`
  line-height: 1.125;
  max-width: 20rem;
  @supports (-webkit-background-clip: text) {
    background-image: linear-gradient(
      to bottom right,
      #111212 25%,
      ${theme.colors.summer} 50%,
      #090a0a
    );
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ${theme.mediaQueries.md} {
    max-width: none;
  }
`

const CTA = styled(IconButton).attrs({
  is: LargeButton.withComponent(Link),
  bg: 'night',
  color: 'white',
  glyph: 'slack-fill'
})`
  background-image: radial-gradient(
    ellipse farthest-corner at top left,
    #111212 25%,
    ${theme.colors.summer} 50%,
    #090a0a
  );
`

const title = 'Hack Night – a weekly online hackathon by Hack Club'
const desc =
  'On Saturday nights, the Hack Club community of high school hackers gathers for Hack Night, a distributed nighttime hackathon and hangout.'

export default () => (
  <Layout title={title} desc={desc} path="/night/" img="/cards/night.png">
    <Nav color={theme.colors.summerMuted} dark />
    <Hero
      src="/summer.jpg"
      aria-label="Blood moon & stars in the night sky"
      bg="darker"
    >
      <Container px={3} py={[6, 7, 8]}>
        <Megaline>Summer of Making 2020</Megaline>
        <Lead
          fontSize={[3, null, 4]}
          color="summerMuted"
          maxWidth={52}
          my={3}
          mx={0}
        >
          On Saturday nights, the Hack Club community of high school hackers
          gathers for Hack Night, a distributed nighttime hackathon and hangout.
        </Lead>
        <Lead color="summerMuted" maxWidth={36} mb={4} mx={0}>
          Meet some new people, build something cool, talk about it. There are
          no prizes or expectations—just have fun!
        </Lead>
        <CTA to="/community/">Join #hack-night on Slack</CTA>
      </Container>
    </Hero>
    <Footer dark />
  </Layout>
)
