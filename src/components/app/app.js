import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';
import MainPage from '../pages/main-page';
import OrderModal from '../order-modal/order-modal';
import SearchPanel from '../search-panel/search-panel';
import ClassicListContainer from '../books-lists/classic-list-container';
import ChildrenListContainer from '../books-lists/children-list-container';
import DetectiveListContainer from '../books-lists/detective-list-container';

import styled from 'styled-components';

const AppStyled = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100%;
`;
const Content = styled.div`
	flex: 1 0 auto;
`;
const FooterWrapper = styled.div`
	flex: 0 0 auto;
`;

const App = ({ isOpen }) => {
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
				{isOpen && <OrderModal/>}
			</Content>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
		</AppStyled>
	);
}

const mapStateToProps = (state) => {
	return {
		isOpen: state.isModalOpen
	}
} 
export default connect(mapStateToProps)(App);



