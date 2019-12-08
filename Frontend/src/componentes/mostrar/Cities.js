import React from 'react'

class Cities extends React.Component {

  state = {
    cities: [],
    id: 0,
    intervalIsSet: false
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch('/city')
      .then(res => res.json())
      .then(cities => this.setState({ cities }));
  };

  render() {
    return (
      <React.Fragment>
        <h1>Ciudades</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Pais</th>
            </tr>
          </thead>
          <tbody>
            { this.state.cities.map((dat) => (
              <tr key={dat.name}>
                <td>{dat._id}</td>
                <td>{dat.name}</td>
                <td>{dat.country}</td>
              </tr>
              ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}


export default Cities;
