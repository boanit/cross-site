/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-03-31 13:47:46
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-03-31 15:16:06
 */
import React from 'react';

import HomeAboutSection from './HomeAboutSection';

const HomeAbout = () => (
	<div className="home-about">
		<h2 className="home-about__title">About me</h2>
		<div className="home-about__section-container grid pad-grid">
			<HomeAboutSection />
		</div>
	</div>
);

export default React.memo(HomeAbout);
