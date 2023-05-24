import './Footer.css';

function Footer() {
	return (
		<div className="footer">
			<ul className="socials">
				<li>
					<a
						href="https://www.facebook.com/fiap/"
						target="_blank"
						rel="noreferrer"
					>
						<img src="/images/fb.png" alt="Facebook" />
					</a>
				</li>
				<li>
					<a
						href="https://twitter.com/FIAP"
						target="_blank"
						rel="noreferrer"
					>
						<img src="/images/tw.png" alt="Twitter" />
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/fiapoficial/"
						target="_blank"
						rel="noreferrer"
					>
						<img src="/images/ig.png" alt="Instagram" />
					</a>
				</li>
			</ul>

			<div>
				<a
					href="https://www.fiap.com.br"
					target="_blank"
					rel="noreferrer"
				>
					<img src="/images/logo.png" alt="Logo FIAP" />
				</a>
			</div>

			<div>
				<p>Desenvolvido por Artur Duarte.</p>
			</div>
		</div>
	);
}

export default Footer;
