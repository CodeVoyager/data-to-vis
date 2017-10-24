import React from 'react';
import ReactDOM from 'react-dom';
import {BPI} from '../../../components/containers/BPI';
import renderer from 'react-test-renderer';
import moment from 'moment';


describe('BPI component', function () {
    it('renders without crashing', function () {
        const div = document.createElement('div');
        ReactDOM.render(<BPI />, div);
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
        const highlights = [
            ['2013-09-01', 'HIGHLIGHT'],
            ['2013-09-02', null],
            ['2014-09-02', undefined],
        ];

        const tree1 = renderer.create(<BPI />).toJSON();
        expect(tree1).toMatchSnapshot();

        const tree2 = renderer.create(<BPI startDate={startDate} />).toJSON();
        expect(tree2).toMatchSnapshot();

        const tree3 = renderer.create(<BPI endDate={endDate} />).toJSON();
        expect(tree3).toMatchSnapshot();

        const tree4 = renderer.create(<BPI availableCurrencies={currencies} />).toJSON();
        expect(tree4).toMatchSnapshot();

        const tree5 = renderer.create(<BPI currency={currency} />).toJSON();
        expect(tree5).toMatchSnapshot();

        const tree6 = renderer.create(<BPI data={data} />).toJSON();
        expect(tree6).toMatchSnapshot();

        const tree7 = renderer.create(<BPI isLoading={false} />).toJSON();
        expect(tree7).toMatchSnapshot();

        const tree8 = renderer.create(<BPI isLoading={true} />).toJSON();
        expect(tree8).toMatchSnapshot();

        const tree9 = renderer.create(<BPI data={data} isLoading={true} currency={currency} availableCurrencies={currencies} startDate={startDate} endDate={endDate} />).toJSON();
        expect(tree9).toMatchSnapshot();

        const tree10 = renderer.create(<BPI data={data} isLoading={false} currency={currency} availableCurrencies={currencies} startDate={startDate} endDate={endDate} />).toJSON();
        expect(tree10).toMatchSnapshot();

        const tree11 = renderer.create(<BPI data={data} highlights={highlights} />).toJSON();
        expect(tree11).toMatchSnapshot();

        const tree12 = renderer.create(<BPI data={data} highlights={highlights} isLoading={false} currency={currency} availableCurrencies={currencies} startDate={startDate} endDate={endDate} />).toJSON();
        expect(tree12).toMatchSnapshot();
    });

    it('should have onCurrencyChange method', function () {
        expect(BPI.prototype.onCurrencyChange).not.toBeUndefined();
    });

    it('should onCurrencyChange pass valid data to props.onCurrencyChange on invoke', function (done) {
        const fn = jest.fn();
        const component = renderer.create(<BPI onCurrencyChange={fn} />);
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
        expect(BPI.prototype.onCurrenciesAvailable).not.toBeUndefined();
    });

    it('should onCurrenciesAvailable pass valid data to props.onCurrenciesAvailable on invoke', function (done) {
        const fn = jest.fn();
        const component = renderer.create(<BPI onCurrenciesAvailable={fn} />);
        const DATA = 'DATA';

        component.getInstance().onCurrenciesAvailable(DATA);

        expect(fn.mock.calls.length).toBe(1);
        expect(fn.mock.calls[0][0]).toBe(DATA);

        done();
    });

    it('should have onSubmit method', function () {
        expect(BPI.prototype.onSubmit).not.toBeUndefined();
    });

    it('should run onNilStartDate function on falsy start date', function (done) {
        const endDate = moment('20171031', 'YYYYMMDD');
        const onNilStartDateMock = jest.fn();
        const div = document.createElement('div');

        ReactDOM.render(<BPI endDate={endDate} onNilStartDate={onNilStartDateMock}/>, div);
        expect(onNilStartDateMock.mock.calls.length).toBe(1);

        done();
    });

    it('should run onNilEndDate function on falsy start date', function (done) {
        const startDate = moment('20171031', 'YYYYMMDD');
        const onNilEndDateMock = jest.fn();
        const div = document.createElement('div');

        ReactDOM.render(<BPI startDate={startDate} onNilEndDate={onNilEndDateMock}/>, div);
        expect(onNilEndDateMock.mock.calls.length).toBe(1);
        done();
    });

    it('should run onComponentDidMount function on mount when provided', function (done) {
        const onComponentDidMountMock = jest.fn();
        const div = document.createElement('div');

        ReactDOM.render(<BPI onComponentDidMount={onComponentDidMountMock}/>, div);
        expect(onComponentDidMountMock.mock.calls.length).toBe(1);
        done();
    });
});