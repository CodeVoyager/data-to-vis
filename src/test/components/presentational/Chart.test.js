import React from 'react';
import ReactDOM from 'react-dom';
import Chart from '../../../components/presentational/Chart';
import renderer from 'react-test-renderer';

describe('Chart component', function () {
    const data = [
        ['2005-09-01', 128.2597],
        ['2018-09-12', 127.3648]
    ];
    const highlights = [
        {
            date: '2005-01-01',
            description: 'Outside BEFORE'
        },
        {
            date: '2006-10-01',
            description: 'Mt. Gox founding'
        },
        {
            date: '2015-01-06',
            description: 'Mt. Gox Bankruptcy'
        },
        {
            date: '2016-05-01',
            description: 'Mt. Gox Bankruptcy (Final)'
        },
        {
            date: '2017-04-01',
            description: 'Bitfinex announced that it was no longer able to let users withdraw their funds in USD'
        },
        {
            date: '2019-04-01',
            description: 'Outside AFTER'
        },
    ];
    const xKey = 0;
    const yKey = 1;

    it('renders without crashing', function () {
        const div = document.createElement('div');
        ReactDOM.render(<Chart/>, div);
    });

    it('renders correctly', function () {
        const div = document.createElement('div');

        const tree1 = renderer.create(<Chart
            data={data}
            xKey={xKey}
            yKey={yKey}
        />).toJSON();
        expect(tree1).toMatchSnapshot();

        const tree2 = renderer.create(<Chart/>).toJSON();
        expect(tree2).toMatchSnapshot();

        const tree3 = renderer.create(<Chart xKey={xKey} yKey={yKey} data={data} highlights={highlights}/>).toJSON();
        expect(tree3).toMatchSnapshot();

        const tree4 = renderer.create(<Chart xKey={xKey} yKey={yKey} data={data} />);

        tree4.getInstance().onMouseOver();

        expect(tree4.toJSON()).toMatchSnapshot();

        const tree5 = renderer.create(<Chart xKey={xKey} yKey={yKey} data={data} />);

        tree5.getInstance().onMouseOut();

        expect(tree5.toJSON()).toMatchSnapshot();

        const tree6 = renderer.create(<Chart xKey={xKey} yKey={yKey} data={data} />);

        tree6.getInstance().onMouseOver();
        tree6.getInstance().onMouseMove({
            clientX: 0,
            clientY: 0,
            target: div
        });

        expect(tree6.toJSON()).toMatchSnapshot();


        expect(tree6.toJSON()).toMatchSnapshot();

        const tree7 = renderer.create(<Chart xKey={xKey} yKey={yKey} data={data.map(d => Object.assign({}, d))} />).toJSON();

        expect(tree7).toMatchSnapshot();

        const tree8 = renderer.create(<Chart xKey={xKey} yKey={yKey} data={data} />);

        tree8.getInstance().onMouseOver();
        tree8.getInstance().onMouseMove({
            clientX: 999,
            clientY: 999,
            target: div
        });

        expect(tree8.toJSON()).toMatchSnapshot();
    });

    it('throws errors on missing keys', function () {
        let xKey = 'XKEY';
        let yKey = 'YKEY';

        expect(() => {
            renderer.create(<Chart data={data}/>)
        }).toThrowErrorMatchingSnapshot();
        expect(() => {
            renderer.create(<Chart data={data} xKey={null} yKey={yKey}/>)
        }).toThrowErrorMatchingSnapshot();
        expect(() => {
            renderer.create(<Chart data={data} xKey={undefined} yKey={yKey}/>)
        }).toThrowErrorMatchingSnapshot();
        expect(() => {
            renderer.create(<Chart data={data} xKey={xKey} yKey={undefined}/>)
        }).toThrowErrorMatchingSnapshot();
        expect(() => {
            renderer.create(<Chart data={data} xKey={xKey} yKey={null}/>)
        }).toThrowErrorMatchingSnapshot();
    });
});