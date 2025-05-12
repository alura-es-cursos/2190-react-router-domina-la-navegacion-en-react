const isSearchVisble = (consulta, foto) => {
    return consulta == '' || foto.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
        .includes(consulta.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""));
}

export default isSearchVisble;