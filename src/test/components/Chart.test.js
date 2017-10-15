import React from 'react';
import ReactDOM from 'react-dom';
import Chart from '../../Chart';
import renderer from 'react-test-renderer';

describe('Chart component', function () {
    const data = [
        ["2013-09-01", 128.2597],
        ["2013-09-02", 127.3648]
    ];
    const xKey = 0;
    const yKey = 1;

    it('renders without crashing', function () {
        const div = document.createElement('div');
        ReactDOM.render(<Chart/>, div);
    });

    it('renders correctly', function () {
        const tree1 = renderer.create(<Chart
            data={data}
            xKey={xKey}
            yKey={yKey}
        />).toJSON();
        expect(tree1).toMatchSnapshot();

        const tree2 = renderer.create(<Chart/>).toJSON();
        expect(tree2).toMatchSnapshot();
    });

    it('throws errors on missing keys', function () {
        expect(() => {
            renderer.create(<Chart data={data}/>)
        }).toThrow();
        expect(() => {
            renderer.create(<Chart data={data} xKey={null}/>)
        }).toThrow();
        expect(() => {
            renderer.create(<Chart data={data} yKey={null}/>)
        }).toThrow();
        expect(() => {
            renderer.create(<Chart data={data} xKey={undefined}/>)
        }).toThrow();
        expect(() => {
            renderer.create(<Chart data={data} yKey={undefined}/>)
        }).toThrow();
    });
});