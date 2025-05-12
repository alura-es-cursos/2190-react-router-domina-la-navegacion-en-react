const idRandom = (inicio, fin) => {
    const idAleatorio = Math.floor(Math.random() * (fin - inicio));
    return idAleatorio;
}

export default idRandom;