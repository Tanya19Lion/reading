import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app/app';
import ErrorBoundary from './components/error-boundary/error-boundary';

import BooksService from './services/books-service';
import { BooksProvider } from './components/books-context/books-context';

import store from './redux/store';

const booksService = new BooksService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundary>
			<BooksProvider value={booksService}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</BooksProvider>
		</ErrorBoundary>
	 </Provider>,
	document.getElementById('root')
);
