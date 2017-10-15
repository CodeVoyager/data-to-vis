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