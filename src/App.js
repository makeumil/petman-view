import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import NotFound from './views/NotFound';
import ResetStyle from './css/Reset.css';

const App = () => {
	return (
		<div class={ResetStyle}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					{/* <Route path="/product/*" element={<Product />}></Route> */}
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;