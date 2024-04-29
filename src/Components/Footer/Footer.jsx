import React from "react";
import "../Footer/Footer.css";
import fbIcon from "../../Assets/FB_icon-icons.png";
import instaIcon from "../../Assets/instagram_f_icon-icons.png";
import tewitterIcon from "../../Assets/TWITTER_icon-icons.png";
const Footer = () => {
	return (
		<footer>
			<nav className="nav_footer parceiros">
				<span className="li_span_titulo">Parceiros</span>
				<ul>
					<li>
						<a>Magalu</a>
					</li>
					<li>
						<a>Burguer King</a>
					</li>
					<li>
						<a>Posto ipiranga</a>
					</li>
				</ul>
			</nav>
			<nav className="nav_footer">
				<span className="li_span_titulo">Sobre</span>
				<ul>
					<li>
						<a>Beneficios</a>
					</li>
					<li>
						<a>Baixe nosso Aplicativo</a>
					</li>
					<li>
						<a>Pontos de Coleta</a>
					</li>
					<li>
						<a>Blog</a>
					</li>
				</ul>
			</nav>
			<nav className="nav_footer_redesSociais">
				<span className="li_span_titulo">Redes Sociais</span>
				<ul>
					<li>
						<a>
							<img src={fbIcon} />
						</a>
					</li>
					<li>
						<a>
							<img src={instaIcon} />
						</a>
					</li>
					<li>
						<a>
							<img src={tewitterIcon} />
						</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
