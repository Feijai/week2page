import styled from 'styled-components';
import work_img1 from '../img/work_img1.png'
import work_img2 from '../img/work_img2.png'
import work_img3 from '../img/work_img3.png'
import work_img4 from '../img/work_img4.png'
import work_img5 from '../img/work_img5.png'
import work_img6 from '../img/work_img6.png'
import work_img7 from '../img/work_img7.png'
import work_img8 from '../img/work_img8.png'

const PageFourCSS = styled.div`
display: flex;
flex-direction: column;
align-items: center;

.header{
    margin-top:56px;
    width: 347px;
    height: 84px;
    font-weight:700;
    font-family: 'Italic';
    font-size:64px;
    line-height:1.3125;
}

.word{
    width: 226px;
    height: 60px;
    text-align: center;
    font-weight:700;
    font-family: 'Italic';
    font-size:20px;
    line-height:1.5;
}

span{
    margin-top:16px;
    text-align: center;
    font-weight:700;
    font-family: 'Italic';
    font-size:20px;
    line-height:2.1;
}

.line1{
display:flex;
width:1200px;
height:572px;
justify-content: space-between;
}

.card1{
    display:flex;
    flex-direction: column;
    width:384px;
    img{
        height:528px;
    }

}

.line2{
    margin-top:48px;
    display:flex;
    width:1200px;
    height:468px;
    justify-content: space-between;
}
.card2{
    display:flex;
    flex-direction: column;
    width:588px;
    img{
        height:424px;
    }
}

.line3{
    margin-top:48px;
    display:flex;
    width:1200px;
    height:324px;
    justify-content: space-between;
    margin-bottom:144px;
}
.card3{
    display:flex;
    flex-direction: column;
    width:384px;
    img{
        height:280px;
    }
}

`
const Page4 = () => {
    return (
        <PageFourCSS>
            <div className="header">Other Works</div>
            <div className="word">2016-2020 年累積的作品 海報/廣告/攝影/LOGO/3D</div>
            <div className="line1">
                <div className="card1"><img src={work_img1} alt="" /><span>海報設計/2017</span></div>
                <div className="card1"><img src={work_img2} alt="" /><span>海報設計/2018</span></div>
                <div className="card1"><img src={work_img3} alt="" /><span>海報設計/2018</span></div>
            </div>
            <div className="line2">
                <div className="card2"><img src={work_img4} alt="" /><span>海報設計/2018</span></div>
                <div className="card2"><img src={work_img5} alt="" /><span>海報設計/2018</span></div>
            </div>
            <div className="line3">
                <div className="card3"><img src={work_img6} alt="" /><span>海報設計/2018</span></div>
                <div className="card3"><img src={work_img7} alt="" /><span>海報設計/2018</span></div>
                <div className="card3"><img src={work_img8} alt="" /><span>海報設計/2018</span></div>
            </div>

        </PageFourCSS>
    )
}

export default Page4