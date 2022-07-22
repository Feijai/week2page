import styled from 'styled-components';
import brand_img1 from '../img/brand_img1.png'
import brand_img2 from '../img/brand_img2.png'
import brand_img3 from '../img/brand_img3.png'
const PageThreeCSS = styled.div`

background-color:black;
color:white;
display: flex;
justify-content: center;
    flex-direction: column;
    align-items: center;
.header{
    display:flex;
    margin-top:56px;
    font-weight:bold;
    font-family: 'Italic';
    font-size:64px;
    line-height:1.3125;
    width: 494px;
    height: 84px;
    text-align:center;
}
.header2{
    width: 271px;
height: 32px;
margin-top:12px;
font-weight:bold;
font-family: 'Italic';
font-size:24px;
line-height:1.5;
}
.word{
    width: 320px;
height: 90px;
margin-top:32px;
text-align: center;
font-weight:700;
font-family: 'Italic';
font-size:20px;
line-height:1.5;
}
.img1{
    margin-top:68px;
    width: 792px;
height: 416px;
}
.img2{
    width:1200px;
    height:416px;
    margin-top:40px;
    margin-bottom:160px;
    display:flex;
    justify-content: space-between;
    img{
        width:588px;
    }
}
}
`
const Page3 = () => {
    return (
        <PageThreeCSS>
            <div className="header">My Brand ‘’XXXD’’</div>
            <div className="header2">Just Keep XXXD Everyday</div>
            <div className="word">2020 年創立的個人服飾品牌<br/> 引領叛逆少年開啟與社會對話的窗口 主打概念潮流T-Shirt</div>
            <img className="img1" src={brand_img1} alt="" />
            <div className="img2">
                <img src={brand_img2} alt="" />
                <img src={brand_img3} alt="" />
            </div>
        </PageThreeCSS>
    )
}

export default Page3