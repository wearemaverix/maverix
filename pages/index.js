import styled from "styled-components";
import Image from 'next/image';
import Logo from "../public/logo.svg";

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};



const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const HomeBackground = styled(Image)`
  z-index: -1;
`;




const MainContainer = styled.div`
  width: 70%;
  display: flex;
  height: 250px;
  z-index: 999;
`

const CompanySide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 5%;
`
const TextLogo = styled.span`
  color: white;
  font-size: 1.3em;
  font-weight: bold;
  text-transform: uppercase;
`;

const SubTitle = styled.span`
  font-family: Playfair Display;
  font-style: italic;
  margin-top: 12px;
  font-size: 12px;
  color: white;
  font-weight: bold;
`;

const Divider = styled.div`
  margin-top: 5%;
  height: 87px;
  margin-right: 5%;
  border-left: 1px solid #fff;
`;

const DescriptionSide = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex: 1;
`;

const HeadBody = styled.span`
  max-width: 420px;
  color: white;
  font-size: 16px;
  font-weight: bold;
`
const DescriptionBody = styled.span`
  font-size: 16px;
  color: white;
`;

const ContactButton = styled.div`
width: 188px;
height: 39px;
background: #CEA64A;
color: white;
text-align: center;
padding: 10px;
border-radius: 3px;
cursor: pointer;
`;



export default function Home() {
  return (
    <HomeContainer>
      <HomeBackground
        src="/maverix_bg.png"
        layout='fill'
        objectFit="cover"
      />
      <MainContainer>
        <CompanySide>
          <Logo />
          <TextLogo>maverix</TextLogo>
          <SubTitle>Web-, concept design and artdirectoring</SubTitle>
        </CompanySide>
        <Divider />
        <DescriptionSide>
          <HeadBody>??dv??z??lj??k! Weboldalunk hamarosan elstartol. De addig is ??rjon nek??nk bizalommal!</HeadBody>
          <DescriptionBody>A Maverix egyet jelent az innovat??v k??s??rletez??ssel ??s a lehet?? legmagasabb min??s??ggel. C??lunk partnernek lenni az ??gyf??l elk??pzel??seiben, ??s k??z??sen megalkotni egy olyan v??zi?? alapjait, melyek ezel??zz nem l??tott t??vlatokat fednek fel a megrendel?? c??g sz??m??ra, ??s seg??t messzebbre jutni ??s m??g messzebre ell??tni. Szeml??let??nk szerint a modernista felfedez?? felfog??s, a finetech innovativit??s.</DescriptionBody>
          <a href="mailto: wearethemaverix.io">
            <ContactButton>Contact me</ContactButton>
          </a>
        </DescriptionSide>
      </MainContainer>
    </HomeContainer>


  )
}
