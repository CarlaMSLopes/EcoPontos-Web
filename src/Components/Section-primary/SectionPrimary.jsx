import React from "react";
import Banner from "../Banner/Banner";
import "../Section-primary/SectionPrimary.css";
import imageGirl from "../../Assets/image-girl.png";
import imageBoyYellow from "../../Assets/image-boyYellow.png";



const SectionPrimary = () => {
	return (
		<div className="primaryContent fadeInSection">
			<Banner
				classe="banner1"
				descricao="Imagem ilustrativa de um menino vestindo um casaco amarelo reciclando."
				caminhoImagem={imageBoyYellow}
				texto={
					<html>
						EcoPontos é um aplicativo de pontos de reciclagem.{" "}
						<br />
						Feito em parceria com a perfeitura do Recife.
					</html>
				}
			/>
			<Banner
				classe="banner2"
				descricao="Imagem ilustrativa de uma menina vestindo azul segurando uma maça."
				caminhoImagem={imageGirl}
				texto={
					<html>
						Você entrega materiais nos postos de coleta <br />
						em Recife e juntapontos em troca de benefícios, <br />{" "}
						descontos e muito mais!.
					</html>
				}
			/>
		</div>
	);
};

export default SectionPrimary;
