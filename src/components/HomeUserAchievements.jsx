/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-03-31 16:00:52
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-03-31 16:43:21
 */
import React from 'react';
import { bool as booleanProp } from 'prop-types';

import HomeUserProgress from './HomeUserProgress';

const ACHIEVEMENTS = [
	{ title: 'Web App consulting', value: 100 },
	{ title: 'Mobile App consulting', value: 100 },
	{ title: 'DBMS consulting', value: 97.5 },
	{ title: 'Server consulting', value: 100 },
	{ title: 'Network consulting', value: 100 },
	{ title: 'WEB/WAS consulting', value: 100 },
	{ title: 'API', value: 100 },
	{ title: 'IoT', value: 85 },
	{ title: 'Cloud', value: 80 },
	{ title: 'AI', value: 95 },
	{ title: 'Bigdata', value: 90 }
];

export default function HomeUserAchievements({ isVisible }) {
	return ACHIEVEMENTS.map(({ title, value }, index) => (
		<HomeUserProgress
			isVisible={isVisible}
			key={index}
			title={title}
			value={value}
			delay={index * 100}
		/>
	));
}

HomeUserAchievements.propTypes = {
	isVisible: booleanProp
};
