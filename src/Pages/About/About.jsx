import React from "react";
import SideImage from "../../Components/SideImage/SideImage";
import "../About/StyleAbout.css";

import BackButton from "../../Components/BackButton/BackButton";
import coisImg from "../../Assets/coins.png";
import exhangingImg from "../../Assets/exchanging.png";
import fileImg from "../../Assets/file 1.png";
import placeImg from "../../Assets/place.png";
import planetImg from "../../Assets/save-the-planet.png";
import teamImg from "../../Assets/Team.png";
import Modal from "../../Components/Modal/Modal";
const About = () => {
	return (
		<div className="About-conteiner">
			<BackButton />
			<section className="aboutSection">
				<h1>Sobre EcoPontos</h1>
				<div className="about_intro">
					<p>
						EcoPoints é um aplicativo que incentiva a reciclagem e a
						sustentabilidade. O aplicativo permite que os usuários
						ganhem pontos ao coletar e entregar materiais
						recicláveis em postos de coleta específicos
					</p>
				</div>
				<section className="About_features_container">
					<div className="coluna_1">
						<div className="About_features g1">
							<img src={coisImg} />
							<p>
								Encontre os postos de coleta mais próximos de
								você.
							</p>
						</div>
						<div className="About_features g2">
							<img src={exhangingImg} />
							<p>
								Dicas e informações sobre como ajudar nosso
								planeta no nosso blog.
							</p>
						</div>
						<div className="About_features g3">
							<img src={fileImg} />
							<p>
								Acompanhe seu histórico de compras, seus pontos
								e o quanto você ajudou o planeta terra.
							</p>
						</div>
					</div>
					<div className="coluna_2">
						<div className="About_features g4">
							<img src={placeImg} />
							<p>
								Troque seus pontos por descontos e benefícios
								usando nosso app. Baixe aqui.
							</p>
						</div>
						<div className="About_features g5">
							<img src={planetImg} />
							<p>
								Ganhe pontos entregando materiais recicláveis
								nos postos de coleta.
							</p>
						</div>
						<div className="About_features g6">
							
							<img src={teamImg} />
							<p>Conheça os nossos desenvolvedores</p>
							<Modal />
						</div>
					</div>
				</section>

				
			</section>
		</div>
	);
};

export default About;
