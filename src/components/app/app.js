import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel';
import MainPage from '../pages/main-page';
import Footer from '../footer/footer';
import ClassicListContainer from '../books-lists/classic-list-container';
import DetectiveListContainer from '../books-lists/detective-list-container';
import ChildrenListContainer from '../books-lists/children-list-container';

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

const App = () => {
  return (
	<AppStyled>
		<Content>
			<Header />
			<SearchPanel />
			<Switch>
				<Route path='/' component={MainPage} exact />
				<Route path='/children' render={() => <ChildrenListContainer />} />
				<Route path='/classic' render={() => <ClassicListContainer />} /> 
				<Route path='/detective' render={() => <DetectiveListContainer />} /> 
			</Switch> 
		</Content>
		{/* <FooterWrapper>
			<Footer />
		</FooterWrapper> */}
	</AppStyled>
  );
}

export default App;
