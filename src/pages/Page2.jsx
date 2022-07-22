import personPhoto from '../img/photo.png'
import styled from 'styled-components';
const PageTwoCss = styled.div`
height:992px;
display:flex;
width:412px;
align-items:center;
flex-direction:column;
margin:0 auto;
.header{
  width: 168px;
  height: 84px;
  font-weight:bold;
  font-family: 'Italic';
  font-size:64px;
  line-height:1.3125;
  margin-top:56px;
  flex
}
img {
  margin-top:40px;
  width:384px;
  height:384px;
}
#name{
  margin-top:20px;
  height:32px;
  width:138px;
  font-weight:bold;
  font-family: 'Italic';
  font-size:24px;
  line-height:1.75;
}
#birthday{
  margin-top:4px;
  height:32px;
  width:125px;
  font-weight:bold;
  font-family: 'Italic';
  font-size:24px;
  line-height:1.75;
}

#grade{
  display:flex;
  width: 412px;
height: 72px;
font-weight:bold;
font-family: 'Italic';
font-size:24px;
line-height:1.5;
text-align:center;
margin-top:8px;
}
.line{
  margin-top:24px;
border-top: solid black 1px;
width:384px;
  height:1px;
}

ul{
  margin-top:28px;
  margin-bottom:56px;
  width:324px;
  height:152px;
  display:flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  font-weight:bold;
  font-family: 'Italic';
  font-size:24px;
  line-height:1.75;
  li::before {
    color:#891818;
  }
  .dot::before{
    content: "";
    position: absolute;
    background-color: #891818;
    height: 22px;
    width: 22px;
    border-radius: 50px;
    transform: translate(-36px,10px);
  }
}

}
`

const Page2 = () => (
  <PageTwoCss>
    <div class="header">
      About
    </div>
    <img src={personPhoto} alt='personPhoto' />
    <div id="name">Joanne Chen</div>
    <div id='birthday'>1997/10/10</div>
    <div id='grade'>National Hex School Normal University Department of Visual Design</div>
    <div className="line" />
    <ul>
      <li className="dot">Founder of ‘’XXXD Official’’</li>
      <li className="dot">Graphic Designer</li>
      <li className="dot">Graphic Intern of Hex School</li>
    </ul>
  </PageTwoCss>
);

export default Page2;
