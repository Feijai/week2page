import styled from 'styled-components';

const FooterCss = styled.div`
background-color:black;
height:310px;
color:white;
display:flex;
flex-direction: column;
align-items: center;
.head{
    margin-top:64px;
    width: 220px;
    height: 84px;
    font-weight:700;
    font-family: 'Italic';
    font-size:64px;
    line-height:1.3125;
}

.word{
    margin-top:16px;
    font-weight:700;
    font-family: 'Italic';
    font-size:24px;
    line-height:1.5;
}
`
const Footer = () => {
    return <FooterCss>
        <div className="head">
            Contact
        </div>
        <div className="word">Mail：xxxd@hexschool.com</div>
        <div className="word">Phone Number：0910123456</div>
    </FooterCss>
}

export default Footer