import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import FooterForm from './FooterForm';
import './footer.css';

function Footer() {
	return (
		<footer className="footer">
			<h2 className="footer__title">Contact</h2>
			<p className="footer__subtitle">10, 3rd Floor, 8, Mapo-daero 4ra-gil, Mapo-gu, Seoul, 04178, Rep. of KOREA</p>
			<p className="footer__subtitle">032-569-0236 / boanit@boanit.kr</p>
			<FooterForm />

			<div className="footer__base">
				<button
					onClick={scroll.scrollToTop}
					className="footer-base__scroll-to"
					title="Click to scroll to the top">
					<i className="ti-angle-double-up" />
				</button>
				<p className="copyright">© 2020 Boanit Co.,Ltd. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

export default React.memo(Footer);
