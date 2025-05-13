const fechaFormatada = (fecha) => {
    if (!fecha)
        return "Fecha no válida";

    const partesFecha = fecha.split('-');

    return `${partesFecha[2]}-${partesFecha[1]}-${partesFecha[0]}`;
}

export default fechaFormatada;