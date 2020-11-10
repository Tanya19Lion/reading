import React from 'react';
import ChidrenPage from '../pages/children-page';
import ClassicPage from '../pages/classic-page';
import DetectivePage from '../pages/detective-page';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainPages = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 50px 10px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const MainPage = () => {
    return (
        <MainPages>
            <Link to='/children'><ChidrenPage /> </Link>	
			<Link to='/classic'><ClassicPage /> </Link>
			<Link to='/detective'><DetectivePage /> </Link>
        </MainPages>
    );
}

export default MainPage;