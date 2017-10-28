import React from 'react';
import ReactDOM from 'react-dom';
import Chart from '../../../../components/presentational/Chart';
import renderer from 'react-test-renderer';


describe('Chart component', () => {

    it('should render default component', () => {
        const data = [
            ['2005-09-01', 128.2597],
            ['2018-09-12', 127.3648]
        ];
        const xKey = 0;
        const yKey = 1;

        const tree1 = renderer.create(<Chart
            data={data}
            xKey={xKey}
            yKey={yKey}
        />).toJSON();
        expect(tree1).toMatchSnapshot();
    });

    it('should render LineChart component', () => {
        const data = [
            ['2005-09-01', 128.2597],
            ['2018-09-12', 127.3648]
        ];
        const xKey = 0;
        const yKey = 1;

        const tree1 = renderer.create(<Chart
            data={data}
            xKey={xKey}
            yKey={yKey}
            type="line"
        />).toJSON();
        expect(tree1).toMatchSnapshot();
    });

});
