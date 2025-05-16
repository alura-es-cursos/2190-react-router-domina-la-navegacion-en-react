import Banner from '../../components/Banner';
import Galeria from '../../components/Galeria';
import banner from '../../assets/banner.png';
import ContenidoGaleria from '../../components/ContenidoGaleria';
import PaginaAnimacion from '../../components/PaginaAnimacion';



const Home = () => {
    return (
        <PaginaAnimacion>
            <ContenidoGaleria>
                <Banner texto="La galería más completa de fotos del espacio"
                    backgroundImage={banner}
                    height="300px" />
                <Galeria />
            </ContenidoGaleria>
        </PaginaAnimacion>
    )
}

export default Home;