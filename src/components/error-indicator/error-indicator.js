import React from 'react';
import image from './error-chat.svg'
import styled from 'styled-components';

const StyledError = styled.div`
    font-size: 30px;
    img {
        widht: 200px;
        height: 150px;
    }
`;

const ErrorIndicator = () => {
    return (
        <StyledError>
            <img src={image} alt='icon for error indicator' />
            <p>На жаль, виникла помилка! Спробуйте ще раз, будь ласка...</p>
        </StyledError>
    );
}

export default ErrorIndicator;