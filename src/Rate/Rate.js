import React from 'react';
import './Rate.css'
import Calc from '../Calc/Calc';

class Rate extends React.Component {

    constructor(props) {
        super(props);
        this.getRate();

        this.state = {
            date: '',
            currencyRate: {},
        }

        this.currency = ['USD', 'PLN', 'RUB', 'CZK'];
    }

    getRate() {
        fetch('https://api.exchangeratesapi.io/latest')
            .then(data => data.json())
            .then(data => {
                this.setState({ date: data.date });
                let neededData = {};
                for (let i = 0; i < this.currency.length; i++) {
                    neededData[this.currency[i]] = data.rates[this.currency[i]];
                }
                this.setState({ currencyRate: neededData });
            });
    }

    render() {
        return (
            <div className='rate'>
                <h3>Exchange Rate on {this.state.date}</h3>
                <div className='flex-container'>
                    {Object.keys(this.state.currencyRate).map((elem) =>
                        (
                            <div className='block flex-item' key={elem}>
                                <div className='currence-name'>{elem}</div>
                                <div className='currence-in'>{this.state.currencyRate[elem].toFixed(2)}*</div>
                                <div className='currence-out'>*Can buy for 1 EUR</div>
                            </div>
                        )
                    )}
                </div>
                <Calc rate={this.state.currencyRate} />
            </div>
        );
    }

}

export default Rate;
