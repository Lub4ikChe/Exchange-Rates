import React from 'react';

class Calc extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            res: 0,
        }
    }

    static getDerivedStateFromProps(props) {
        return { rate: props.rate };
    }
    rateCalc = (e) => {
        e.preventDefault();
        let elems = e.target.elements;
        let [countCurrency, typeCurrency] = elems;
        this.setState({ res: +countCurrency.value / this.state.rate[typeCurrency.value] });

    }
    render() {
        return (
            <div className='calculator'>
                <div className='container'>
                    <h3>Exchange Calc</h3>
                    <div className='block'>
                        <div>I want</div>

                        <div>
                            <form onSubmit={this.rateCalc}>
                                <input type='number' defaultValue="0" />
                                <select>
                                    {Object.keys(this.props.rate).map((elem) =>
                                        (
                                            <option key={elem} value={elem}>{elem}</option>
                                        )
                                    )}
                                </select>
                                <input type='submit' defaultValue='calc' />
                            </form>
                        </div>
                        <div >
                            <h4 className='res-titel'>Result:</h4>
                            <div className='calc-res'>
                                {this.state.res.toFixed(2)} EUR
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Calc;
