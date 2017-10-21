import React from 'react';
import ReactDOM from 'react-dom';
import {App} from '../../../components/containers/App';
import renderer from 'react-test-renderer';
import moment from 'moment';


describe('App component', function () {
    it('renders without crashing', function () {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('renders correctly', function () {
        const startDate = moment('20171031', 'YYYYMMDD');
        const endDate = startDate.subtract(30, 'days');
        const currencies = ['USD', 'PLN'];
        const currency = 'USD';
        const data = [
            ['2013-09-01', 128.2597],
            ['2013-09-02', 127.3648]
        ];

        const tree1 = renderer.create(<App />).toJSON();
        expect(tree1).toMatchSnapshot();

        const tree2 = renderer.create(<App startDate={startDate} />).toJSON();
        expect(tree2).toMatchSnapshot();

        const tree3 = renderer.create(<App endDate={endDate} />).toJSON();
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

        const tree9 = renderer.create(<App data={data} isLoading={true} currency={currency} availableCurrencies={currencies} startDate={startDate} endDate={endDate} />).toJSON();
        expect(tree9).toMatchSnapshot();

        const tree10 = renderer.create(<App data={data} isLoading={false} currency={currency} availableCurrencies={currencies} startDate={startDate} endDate={endDate} />).toJSON();
        expect(tree10).toMatchSnapshot();
    });

    it('should have onCurrencyChange method', function () {
        expect(App.prototype.onCurrencyChange).not.toBeUndefined();
    });

    it('should onCurrencyChange pass valid data to props.onCurrencyChange on invoke', function (done) {
        const fn = jest.fn();
        const component = renderer.create(<App onCurrencyChange={fn} />);
        const VALUE = 'VALUE';

        component.getInstance().onCurrencyChange({
            target: {
                value: VALUE
            }
        });

        expect(fn.mock.calls.length).toBe(1);
        expect(fn.mock.calls[0][0]).toBe(VALUE);

        done();
    });

    it('should have onCurrenciesAvailable method', function () {
        expect(App.prototype.onCurrenciesAvailable).not.toBeUndefined();
    });

    it('should onCurrenciesAvailable pass valid data to props.onCurrenciesAvailable on invoke', function (done) {
        const fn = jest.fn();
        const component = renderer.create(<App onCurrenciesAvailable={fn} />);
        const DATA = 'DATA';

        component.getInstance().onCurrenciesAvailable(DATA);

        expect(fn.mock.calls.length).toBe(1);
        expect(fn.mock.calls[0][0]).toBe(DATA);

        done();
    });

    it('should have onSubmit method', function () {
        expect(App.prototype.onSubmit).not.toBeUndefined();
    });

    it('should run onNilStartDate function on falsy start date', function (done) {
        const endDate = moment('20171031', 'YYYYMMDD');
        const onNilStartDateMock = jest.fn();
        const div = document.createElement('div');

        ReactDOM.render(<App endDate={endDate} onNilStartDate={onNilStartDateMock}/>, div);
        expect(onNilStartDateMock.mock.calls.length).toBe(1);

        done();
    });

    it('should run onNilEndDate function on falsy start date', function (done) {
        const startDate = moment('20171031', 'YYYYMMDD');
        const onNilEndDateMock = jest.fn();
        const div = document.createElement('div');

        ReactDOM.render(<App startDate={startDate} onNilEndDate={onNilEndDateMock}/>, div);
        expect(onNilEndDateMock.mock.calls.length).toBe(1);
        done();
    });

});