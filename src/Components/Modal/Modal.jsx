import React, { useState } from "react";
import "./Modal.css"; // Arquivo de estilos CSS para o modal
import { teamMembers } from "../../Components/Membros";

const Modal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div>
			<span onClick={openModal} class="material-symbols-outlined close">
				open_in_new
			</span>

			{isOpen && (
				<div className="modal-overlay ">
					<div className="modal">
						<span className="close" onClick={closeModal}>
							<span class="material-symbols-outlined">close</span>
						</span>
						<section className="equipeSection">
							<h1>Equipe</h1>
							{teamMembers.map((member) => (
								<p>
									{member.name} - {member.id}
								</p>
							))}
						</section>
					</div>
				</div>
			)}
		</div>
	);
};

export default Modal;
