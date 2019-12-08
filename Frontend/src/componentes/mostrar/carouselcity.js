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
//import nombrarCitie from './Cities';
import axios from 'axios';
class CarouselCity extends React.Component {

    state = {
        city: [],
        cityName: ''
    }

    //Este metodo ayuda para pedir los datos de la base de datos
    //Para mostrarlo en el frontend
    async componentDidMount() {
        //La direccion en donde quiero que haga la peticion
        this.getCiudades();
        console.log(this.state.city);
        //console.log(rest);
    }

    getCiudades = async () =>{
        const rest = await axios.get('http://localhost:5000/cities');
        this.setState({ city: rest.data });
    }

    onChangeCityname = (e) =>{
        //console.log(e.target.value);
        this.setState({
            cityName: e.target.value
        })
    }

    onSubmit = async e =>{
        
        const res = await axios.post('http://localhost:5000/cities', {
            cityName:this.state.cityName
        })
  //      this.setState({
    //        cityName:''
      //  })
//        this.getCiudades();
        console.log(res);
        e.preventDefault();

    }
    
    deleteCity = async (id)=>{
        console.log(id);
        await axios.delete('http://localhost:5000/cities/ ' + id);
        this.getCiudades();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card card-body">
                            <h3>Agregua una ciudad</h3>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={this.state.cityName}
                                        onChange={this.onChangeCityname}
                                     />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Guardar
                                </button>

                            </form>
                        </div>
                    </div>
                    
                    <div className="col-md-8">
                        <ul className="list-group">
                            {
                                //Aca estoy recorriendo a cada una de las ciudades y por cada una tengo una id distinta
                                this.state.city.map(ciudad => 
                                    (<li 
                                        className="list-group-item list-group-item-action" 
                                        key={ciudad._id}
                                        onDoubleClick={()=>this.deleteCity(ciudad._id)}
                                    >
                                            {ciudad.pais}
                                    </li>)
                                )
                            }
                        </ul>
                    </div>

                </div>


                <div className="Section-Cities">

                    <Carousel autoPlay>
                        <div>
                            <img src={ciudad_1} alt='Imagen city 1' className="img-fluid" />
                            <p className="legend">Buenos Aires, Argentina</p>
                        </div>
                        <div>
                            <img src={ciudad_2} alt='Imagen city 2' className="img-fluid" />
                            <p className="legend">Bahia, Chile</p>
                        </div>
                        <div>
                            <img src={ciudad_4} alt='Imagen city 4' className="img-fluid" />
                            <p className="legend">Cristo Redentor, Brasil</p>
                        </div>
                        <div>
                            <img src={ciudad_7} alt='Imagen city 7' className="img-fluid" />
                            <p className="legend">Vancouver, Canada</p>
                        </div>
                        <div>
                            <img src={ciudad_8} alt='Imagen city 8' className="img-fluid" />
                            <p className="legend">Islas phi phi</p>
                        </div>

                        <div>
                            <img src={ciudad_3} alt='Imagen city 3' className="img-fluid" />
                            <p className="legend">Laguna colorada, Bolivia</p>
                        </div>

                        <div>
                            <img src={ciudad_5} alt='Imagen city 5' className="img-fluid" />
                            <p className="legend">Muralla china, China</p>
                        </div>

                        <div>
                            <img src={ciudad_6} alt='Imagen city 6' className="img-fluid" />
                            <p className="legend">Paris, Francia</p>
                        </div>
                        <div>
                            <img src={ciudad_9} alt='Imagen city 9' className="img-fluid" />
                            <p className="legend">Venecia, Italia</p>
                        </div>

                        <div>
                            <img src={ciudad_10} alt='Imagen city 10' className="img-fluid" />
                            <p className="legend">Acapulco, Canada</p>
                        </div>

                        <div>
                            <img src={ciudad_11} alt='Imagen city 11' className="img-fluid" />
                            <p className="legend">Nueva York, EEUU</p>
                        </div>

                        <div>
                            <img src={ciudad_12} alt='Imagen city 12' className="img-fluid" />
                            <p className="legend">completar, Canada</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        );

    }

}


export default CarouselCity;

