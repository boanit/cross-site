import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import FooterForm from './FooterForm';
import './footer.css';

function Footer() {
	return (
		<footer className="footer">
			<h2 className="footer__title">Contact</h2>
			<p className="footer__subtitle">1704, 35, Mallijae-ro, Mapo-gu, Seoul, 04209, Rep. of KOREA</p>
			<p className="footer__subtitle">boanit@boanit.kr</p>
			<FooterForm />

			<div className="footer__base">
				<button
					onClick={scroll.scrollToTop}
					className="footer-base__scroll-to"
					title="Click to scroll to the top">
					<i className="ti-angle-double-up" />
				</button>
				<p className="copyright">© 2023 Boanit Co.,Ltd. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

export default React.memo(Footer);
