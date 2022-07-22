import behance from "../img/behance.svg";
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";
import youtube from "../img/youtube.svg";
import styled from 'styled-components'
import backgroundImg from '../img/banner.png'

const Header = styled.div`
margin: 0 auto;
background: url(${backgroundImg}) center center;
background-repeat: no-repeat;
height: 958px;
display: flex;
align-items: center;
justify-content: center;
.box1{
  height: 342px;
  width: 304px;
  color: white;
}

#word1 {
  font-family: 'Italic';
  font-size:24px;
  line-height:1.75;
  font-weight:bold;
  height: 32px;
  width: 65px;
}
#word2 {
  text-align: left;
  font-weight:900;
  font-family: 'Italic';
  font-size:80px;
  line-height:1.325;
  letter-spacing: 0px;
  height: 106px;
}

#word3 {
  margin: 32px 13px 40px 8px;
  width: 283px;
  height: 72px;
  text-align: left;
  font-weight:bold;
  font-family: 'Italic';
  font-size:23px;
  line-height:1.5;
}

.link {
  margin: 0px 10px 0px 6px;
  display: flex;
  justify-content: space-between;

  img {
      width: 60px;
      height: 60px;
  }
}
`

const Page1 = () => (
  <Header >
    <div className="box1">
      <div id="word1">Here's</div>
      <div id="word2">JOANNE</div>
      <div id="word3">Founder of “XXXD Official’’ & Graphic Designer</div>
      <div class="link">
        <img src={behance} alt="behance" />
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={youtube} alt="youtube" />
      </div>
    </div>
  </Header >
);

export default Page1;
