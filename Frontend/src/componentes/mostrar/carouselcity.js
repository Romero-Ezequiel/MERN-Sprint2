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
        pais: '',
        city: []
    }

    //Este metodo ayuda para pedir los datos de la base de datos
    //Para mostrarlo en el frontend
    async componentDidMount() {
        //La direccion en donde quiero que haga la peticion
        //const res = await axios.get('http://localhost:5000/cities');
        //this.setState({ city: res.data });
        //console.log(res);
        //console.log(this.setState({ city: res.data }));
        this.getCiudades();
        console.log(this.state.city);
        //console.log(rest);
    }


    getCiudades = async () => {
        const res = await axios.get('http://localhost:5000/cities');
        this.setState({
            city: res.data
        });
        console.log(res);
        console.log(res.data);
    }
    onChangeCityname = e => {
        //console.log(e.target.value);
        this.setState({
            pais: e.target.value
        })
    }
    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/cities', {
            pais: this.state.pais
        });
        this.setState({ pais: '' });
        this.getCiudades();
    }

    /*   onSubmit = async (e) =>{
           
           await axios.post('http://localhost:5000/cities', {
               cityname: this.state.cityname
           })
     //      this.setState({
       //        cityName:''
         //  })
   //        this.getCiudades();
          // console.log(res);
           e.preventDefault();
   
       }
   */
    /* deleteCity = async (id)=>{
         console.log(id);
         await axios.delete('http://localhost:5000/cities/ ' + id);
         this.getCiudades();
     }*/

    deleteCity = async (userId) => {
        const response = window.confirm('are you sure you want to delete it?');
        if (response) {
            await axios.delete('http://localhost:5000/cities/ ' + userId);
            this.getCiudades();
        }
    }


    render() {
        return (
            <div>

                <h1>Ciudades</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Pais</th>
                            <th scope="col">Eliminar</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.city.map((lugar) => (
                            <tr key={lugar._id}>
                                <td>{lugar._id}</td>
                                <td>{lugar.pais}</td>
                                <td>{lugar.ciudad}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>



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

