import React from 'react';
import ReactDOM from 'react-dom';
import {App} from '../../../components/containers/App';
import renderer from 'react-test-renderer';
import moment from 'moment';


describe('App component', function () {
    App.prototype.componentDidMount = jest.fn();

    it('renders without crashing', function () {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });


    it('renders correctly', function () {
        const date = moment("20111031", "YYYYMMDD");
        const currencies = ['USD', 'PLN'];
        const currency = 'USD';
        const data = [
            ["2013-09-01", 128.2597],
            ["2013-09-02", 127.3648]
        ];

        const tree1 = renderer.create(<App />).toJSON();
        expect(tree1).toMatchSnapshot();

        const tree2 = renderer.create(<App startDate={date} />).toJSON();
        expect(tree2).toMatchSnapshot();

        const tree3 = renderer.create(<App endDate={date} />).toJSON();
        expect(tree3).toMatchSnapshot();

        const tree4 = renderer.create(<App availableCurrencies={currencies} />).toJSON();
        expect(tree4).toMatchSnapshot();

        const tree5 = renderer.create(<App currency={currency} />).toJSON();
        expect(tree5).toMatchSnapshot();

        const tree6 = renderer.create(<App data={data} />).toJSON();
        expect(tree6).toMatchSnapshot();

        const tree7 = renderer.create(<App isLoading={false} />).toJSON();
        expect(tree7).toMatchSnapshot();

        const tree8 = renderer.create(<App isLoading={true} />).toJSON();
        expect(tree8).toMatchSnapshot();

        const tree9 = renderer.create(<App data={data} isLoading={true} currency={currency} availableCurrencies={currencies} startDate={date} endDate={date} />).toJSON();
        expect(tree9).toMatchSnapshot();

        const tree10 = renderer.create(<App data={data} isLoading={false} currency={currency} availableCurrencies={currencies} startDate={date} endDate={date} />).toJSON();
        expect(tree10).toMatchSnapshot();
    });

    it('should have onStartDateChange method', function () {
        expect(App.prototype.onStartDateChange).not.toBeUndefined();
    });

    it('should have onEndDateChange method', function () {
        expect(App.prototype.onEndDateChange).not.toBeUndefined();
    });

    it('should have onCurrencyChange method', function () {
        expect(App.prototype.onCurrencyChange).not.toBeUndefined();
    });

    it('should have onCurrenciesAvailable method', function () {
        expect(App.prototype.onCurrenciesAvailable).not.toBeUndefined();
    });

    it('should have onSubmit method', function () {
        expect(App.prototype.onSubmit).not.toBeUndefined();
    });

});