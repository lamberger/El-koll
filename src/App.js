import React, { Component } from 'react';
import {ElInfoForm} from './ElInfoForm';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      price: 0, 
      effect: '', 
      numberOfHours: 0, 
      consumption: 0, 
      pricePerDay: 0,
      pricePerWeek: 0,
      pricePerMonth: 0,
      pricePerYear: 0,
      valor:''
    }
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleHourChange = this.handleHourChange.bind(this);
    this.handleEffectChange = this.handleEffectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calc = this.calc.bind(this);
  }
  handlePriceChange(e){
    this.setState({ price: e.target.value });
  }
  handleHourChange(e){
    this.setState({ numberOfHours: e.target.value });
  }
  handleEffectChange(e) {
    this.setState({ effect: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.calc(this.state.effect, this.state.numberOfHours, this.state.price);
  }

  calc(w, h, p){
    let kwh = ((w * h) / 1000);
    let dayPrice = (p * kwh);
    let weekPrice = (dayPrice * 7);
    let monthPrice = (dayPrice * 30.416);
    let yearPrice = (dayPrice * 365);

    this.setState({
      consumption: kwh + ' kWh',
      pricePerDay: dayPrice + ' kr',
      pricePerWeek: weekPrice + ' kr',
      pricePerMonth: monthPrice.toFixed(3) + ' kr',
      pricePerYear: yearPrice.toFixed(2) + ' kr'
    });
  }

  render() {
    
    return (
      <div className="container">
        <div className="row">
        <div className="col-md-12">
          <div className="page-header">
            <h1>Elpris <small>Vad kostar det?</small></h1>
          </div>
        </div>
        <div className="col-md-12">
          <div className="alert alert-warning" role="alert">
            <strong>Elprisberäkning:</strong> Fyll i produktens effekt i fältet. Ställ in hur många timmar produkten används per dygn och viket pris du betalar per kilowattimmar. Tryck på beräkna.
          </div>
        </div>
        <div className="col-md-6">
        
          <ElInfoForm 
            handleSubmit={ this.handleSubmit }
            handlePriceChange={ this.handlePriceChange }
            price={ this.state.price }
            handleEffectChange={ this.handleEffectChange }
            effect={ this.state.effect }
            handleHourChange={ this.handleHourChange }
            numberOfHours={ this.state.numberOfHours }/>
        </div>
        <div className="col-md-6">
            <div className="panel panel-default">
            <div className="panel-heading"><h4>Din produkts elförbrukning kostar</h4></div>
              <div className="panel-body">
                <p>Förbrukning: { this.state.consumption }</p>
                <p>Pris/dygn: { this.state.pricePerDay } {this.state.valor}</p>
                <p>Pris/vecka: { this.state.pricePerWeek }</p>
                <p>Pris/månad: { this.state.pricePerMonth }</p>
                <p>Pris/år: { this.state.pricePerYear }</p>
              </div>
            </div>
        </div>
        <div className="col-md-12">
          <div className="alert alert-warning" role="alert">
            <strong>Applikationen</strong> är kodat i <a href="https://facebook.github.io/react/" target="_blank">React JS</a> & <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a>   
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
