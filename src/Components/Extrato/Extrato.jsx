import React from "react";
import "../Extrato/Extrato.css";

const Extrato = () => {
  return (
    <div className="extratoBox">
      <div className="extrato">
        <h1>EXTRATO</h1>
        <div>
          <div className="miniStatus">
            <h2>total de pontos</h2>
            <button className="btnMais"></button>
          </div>
          <p className="paragrafo-miniStatus">
            atualizado em <br />
            23/04/2024, <br /> às 17:25
          </p>
        </div>
        <div className="miniStatus">
          <h2>pontos adquiridos</h2>
          <button className="btnMais"></button>
        </div>
        <div className="miniStatus">
          <h2>pontos usados</h2>
          <button className="btnMais"></button>
        </div>
      </div>
    </div>
  );
};

export default Extrato;
