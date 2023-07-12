import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './views/Main';
import PetmanContent from './views/PetmanContent';
import NotFound from './views/NotFound';
import Notice from './views/Notice';
import Adopt from './views/Adopt';
import AdoptDetail from './views/AdoptDetail';
import ResetStyle from './css/Reset.css';

const App = () => {
	return (
		<div class={ResetStyle}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}></Route>					
					<Route path="/content" element={<PetmanContent />}></Route>
					<Route path="/notice" element={<Notice />}></Route>
					<Route path="/adopt" element={<Adopt />}></Route>
					<Route path="/adopt/detail" element={<AdoptDetail />}></Route>
					{/* <Route path="/product/*" element={<Product />}></Route> */}
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;