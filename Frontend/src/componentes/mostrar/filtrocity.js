import React from 'react';
import axios from 'axios';




class FiltroCity extends React.Component {

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

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Pais</th>
                            <th scope="col">Ciudad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.city.map((lugar) => (
                            <tr key={lugar._id}>
                                <td>{lugar.pais}</td>
                                <td>{lugar.ciudad}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>)
    }
}
/*
var FilteredList = React.createClass({
    filterList: function (event) {
        var updatedList = this.state.city;
        updatedList = updatedList.filter(function (item) {
            return item.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList });
    },
    getInitialState: function () {
        return {
            city: [],
            lugar: []
        }
    },
    componentWillMount: function () {
        this.setState({ lugar: this.state.city })
    },
    render: function () {
        return (
            <div className="filter-list">
                <input type="text" placeholder="Search" onChange={this.filterList} />
                <List lugar={this.state.lugar} />
            </div>
        );
    }
});

var List = React.createClass({
    render: function () {
        return (
            <ul>
                {
                    this.props.lugar.map(function (item) {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        )
    }
});
*/
//React.render(<FilteredList />, document.getElementById('mount-point'));

export default FiltroCity;
