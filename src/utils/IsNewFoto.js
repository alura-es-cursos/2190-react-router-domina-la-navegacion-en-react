const isNewFoto = (fecha) => {
    const hoy = new Date();
    const fechaFoto = new Date(fecha);

    const periodoValido = new Date();
    periodoValido.setMonth(hoy.getMonth() - 3);

    return fechaFoto > periodoValido;
}

export default isNewFoto;