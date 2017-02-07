import React from 'react';

// Stateless functional component
export const ElInfoForm = (props) => (
  
  <form onSubmit={ props.handleSubmit }>
    <div className="input-group">
        <span className="input-group-addon">
            <strong>kr</strong>
        </span>
        <input 
            name="price" 
            placeholder="Ditt el-pris t ex 0,98..." 
            className="form-control input-lg" 
            type="number"
            pattern="[0-9]*"
            min="0" 
            max="10"
            step="0.01"
            onChange={ props.handlePriceChange }
            value={ props.price }/>
    </div>
    <br />
    <div className="input-group">
        <span className="input-group-addon">
            <span className="glyphicon glyphicon-lamp" aria-hidden="true"></span>
        </span>
        <input
            name="effect"
            placeholder="Produktens effekt ex 40W..."
            className="form-control input-lg"
            type="number"
            pattern="[0-9]*"
            step="0.1"
            value={props.effect}
            onChange={props.handleEffectChange} />
    </div>
    <br />
    <div className="input-group">
        <span className="input-group-addon">
            <span className="glyphicon glyphicon-time" aria-hidden="true"></span>
        </span>
        <input
            name="numberOfHours"
            placeholder="Används antal timmar/dygn..."
            className="form-control input-lg"
            type="number"
            pattern="[0-9]*"
            min="0" 
            max="24"
            step="0.5"
            value={props.numberOfHours}
            onChange={props.handleHourChange} />
    </div>
    <p className="btn-space">
        <button className="btn btn-pjl btn-lg" >
            <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
            &nbsp;Räkna ut förbrukningen
        </button>
    </p>
  </form>
)