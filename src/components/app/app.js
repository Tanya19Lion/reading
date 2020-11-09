import React from 'react';
import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel';
import ChidrenPage from '../pages/children-page';
import ClassicPage from '../pages/classic-page';
import DetectivePage from '../pages/detective-page';
import Footer from '../footer/footer';

import styled from 'styled-components';

const AppStyled = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100%;
`;
const Content = styled.div`
	flex: 1 0 auto;
	height: 94vh;
`;
const FooterWrapper = styled.div`
	flex: 0 0 auto;
`;
const MainPages = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 50px 10px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const App = () => {
  return (
	<AppStyled>
		<Content>
			<Header />
			<SearchPanel />
			<MainPages>
				<ChidrenPage />
				<ClassicPage />
				<DetectivePage />
			</MainPages>
		</Content>
		<FooterWrapper>
			<Footer />
		</FooterWrapper>
	</AppStyled>
  );
}

export default App;
