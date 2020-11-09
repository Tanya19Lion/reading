import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.div`
    text-align: center;
    border-top: 2px solid lightblue;
    h2 {
        font-size: 18px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
`;

const Footer = () => {
    return (
        <FooterStyled>
            <h2>©2020 Всі права зарезервовані</h2>
        </FooterStyled>
    );
}

export default Footer;