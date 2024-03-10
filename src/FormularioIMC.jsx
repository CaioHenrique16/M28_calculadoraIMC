// src/FormularioIMC.js
import React, { useState } from 'react';

const FormularioIMC = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularIMC = () => {
        const alturaMetros = altura / 100;
        const imc = peso / (alturaMetros * alturaMetros);
        setResultado(imc);
    };

    const classificarIMC = (imc) => {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
        if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
        if (imc >= 30 && imc < 34.9) return 'Obesidade Grau I';
        if (imc >= 35 && imc < 39.9) return 'Obesidade Grau II';
        return 'Obesidade Grau III';
    };

    return (
        <div>
            <h2>Calculadora de IMC</h2>
            <form>
                <div>
                    <label htmlFor="altura"><strong style={{ color: 'black' }}>Altura:</strong></label>
                    <input
                        type="number"
                        id="altura"
                        placeholder="Digite sua altura em centímetros"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="peso"><strong style={{ color: 'black' }}>Peso:</strong></label>
                    <input
                        type="number"
                        id="peso"
                        placeholder="Digite seu peso em quilogramas"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                    />
                </div>
                <button type="button" onClick={calcularIMC}>Calcular</button>
            </form>
            {resultado && (
                <div className="result" style={{ color: 'black' }}> {/* Alteração na cor do resultado */}
                    <p>Seu IMC é: {resultado.toFixed(2)}</p>
                    <p>Classificação: {classificarIMC(resultado)}</p>
                </div>
            )}
        </div>
    );
};

export default FormularioIMC;
