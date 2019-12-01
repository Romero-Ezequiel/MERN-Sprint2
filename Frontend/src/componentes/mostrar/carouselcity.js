import React from 'react';
import '../estilos/estilo.css';
import ciudad_1 from '../img/1-B.A-Argentina.jpg';
import ciudad_2 from '../img/2- Bahia-Chile.jpg';
import ciudad_3 from '../img/3-Laguna-colorada-Bolivia.jpg';
import ciudad_4 from '../img/4-cristo-redentor-Brasil.jpg';
import ciudad_5 from '../img/5-muralla_china.jpg';
import ciudad_6 from '../img/6-eiffel-paris.jpg';
import ciudad_7 from '../img/7-Vancouver-Canada.jpg';
import ciudad_8 from '../img/8-islas-phi-phi.jpg';
import ciudad_9 from '../img/9-Venecia-Italia.jpg';
import ciudad_10 from '../img/10-Acapulco.jpg';
import ciudad_11 from '../img/11- EEUU.jpg';
import ciudad_12 from '../img/12-Canada.jpg';
import { Carousel } from 'react-responsive-carousel';

class CarouselCity  extends React.Component {
    render() {
        return (
            <div className="Section-Cities">
                <Carousel autoPlay>
                    <div>
                        <img src={ciudad_1} className="img-fluid" />
                        <p className="legend">Buenos Aires, Argentina</p>
                    </div>
                    <div>
                        <img src={ciudad_2} className="img-fluid" />
                        <p className="legend">Bahia, Chile</p>
                    </div>
                    <div>
                        <img src={ciudad_4} className="img-fluid" />
                        <p className="legend">Cristo Redentor, Brasil</p>
                    </div>
                    <div>
                        <img src={ciudad_7} className="img-fluid" />
                        <p className="legend">Vancouver, Canada</p>
                    </div>
                    <div>
                        <img src={ciudad_8} className="img-fluid" />
                        <p className="legend">Islas phi phi</p>
                    </div>

                    <div>
                        <img src={ciudad_3} className="img-fluid" />
                        <p className="legend">Laguna colorada, Bolivia</p>
                    </div>

                    <div>
                        <img src={ciudad_5} className="img-fluid"  />
                        <p className="legend">Muralla china, China</p>
                    </div>

                    <div>
                        <img src={ciudad_6} className="img-fluid" />
                        <p className="legend">Paris, Francia</p>
                    </div>
                    <div>
                        <img src={ciudad_9} className="img-fluid"  />
                        <p className="legend">Venecia, Italia</p>
                    </div>

                    <div>
                        <img src={ciudad_10} className="img-fluid" />
                        <p className="legend">Acapulco, Canada</p>
                    </div>

                    <div>
                        <img src={ciudad_11} className="img-fluid" />
                        <p className="legend">Nueva York, EEUU</p>
                    </div>

                    <div>
                        <img src={ciudad_12} className="img-fluid"  />
                        <p className="legend">completar, Canada</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default CarouselCity;

