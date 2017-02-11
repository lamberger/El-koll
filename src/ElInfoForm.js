import React from 'react';

// Stateless functional component
export const ElInfoForm = (props) => (
  
  <form onSubmit={ props.handleSubmit }>
    <div className="input-group">
        <span className="input-group-addon">
            <span className="glyphicon glyphicon-lamp" aria-hidden="true"></span>
        </span>
        <input
            name="effect"
            placeholder="Produktens effekt ex 40W..."
            className="form-control input-lg"
            type="number"
            min="0"
            step="0.1"
            max="6000"
            value={props.effect}
            onChange={props.handleEffectChange} />
            <span className="input-group-addon">Watt</span>
    </div>
    <p><br /><br /></p>
    <div className="input-group">
        <input
            name="numberOfHours"
            type="range"
            min="0" 
            max="24"
            step="0.5"
            value={props.numberOfHours}
            onChange={props.handleHourChange} />
            <output htmlFor="numberOfHours">{ props.numberOfHours } Tim</output>
    </div>
    <p><br /><br /></p>
    <div className="input-group">
        <input 
            name="price"  
            type="range"
            min="0" 
            step="0.1"
            max="50"
            value={props.price}
            onChange={ props.handlePriceChange }/>
            <output htmlFor="price">{ props.price } kr</output>
    </div>
    <p className="input-group btn-space">
        <button className="btn btn-pjl btn-lg pull-right" >
            <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
            &nbsp;Beräkna
        </button>
    </p>
  </form>
)