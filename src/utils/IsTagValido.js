import tags from '../components/Galeria/Tags/tags.json';

const isTagValido = (tagFoto, textoTagBusqueda) => {
    if (!textoTagBusqueda || textoTagBusqueda === 'Todas')
        return true;

    const index = tags.findIndex((tag) => {
        return (tag.titulo === textoTagBusqueda && Number(tagFoto) === Number(tag.id))
    });

    if (index >= 0)
        return true;

    return false;

}

export default isTagValido;