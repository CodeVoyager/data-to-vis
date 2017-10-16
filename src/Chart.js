import React, {Component} from 'react';
import ReactFauxDOM from 'react-faux-dom'
const d3Selection = require('d3-selection');
const d3Scale = require('d3-scale');
const d3Array = require('d3-array');
const d3TimeFormat = require('d3-time-format');
const d3Axis = require('d3-axis');
const d3Shape = require('d3-shape');
const R = require('ramda');

const DEFAULT_MARGIN = {top: 0, right: 0, bottom: 0, left: 0};
const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 300;

class Chart extends Component {
    static timeFormat = '%Y-%m-%d';

    constructor () {
        super(...arguments);
        this.state = {
            tooltip: null
        }
    }
    onMouseMove (event) {
        let margin = this.props.margin || DEFAULT_MARGIN;
        let width = (this.props.width || DEFAULT_WIDTH) - margin.left - margin.right;
        let x = d3Scale.scaleTime().rangeRound([0, width]);
        let _data = this.normalizeData(this.props.data);
        let formatTime = d3TimeFormat.timeFormat(Chart.timeFormat);
        let dataElement;
        let selectedDate;
        let leftPosition = event.offsetX - margin.left;
        let tooltip = null;

        x.domain(d3Array.extent(_data, d => d[this.props.xKey]))

        selectedDate = formatTime(x.invert(leftPosition));
        dataElement = R.find(R.propEq('0', selectedDate))(this.props.data);
        if (dataElement) {
            tooltip = {
                x: x.invert(leftPosition),
                y: dataElement[this.props.yKey]
            }
        }
        this.setState(Object.assign({}, this.state, {
            tooltip
        }));
    }

    normalizeData (data) {
        let _data;
        let parseTime = d3TimeFormat.timeParse(Chart.timeFormat);

        if (data[0] instanceof Array) {
            _data = data.map(d => [parseTime(d[this.props.xKey]), d[this.props.yKey]])
        } else if (data[0] instanceof Object) {
            _data = data.map((d) => {
                let newObject = {};
                newObject[this.props.xKey] = parseTime(d[this.props.xKey]);
                newObject[this.props.yKey] = Number(d[this.props.yKey]);

                return Object.assign({}, d, newObject);
            });
        }

        return _data;
    }

    onMouseOver () {
        this.setState(Object.assign({}, this.state, {
            showTooltip: true
        }));
    }

    onMouseOut () {
        this.setState(Object.assign({}, this.state, {
            showTooltip: false
        }));
    }

    render () {
        if (!this.props.data) {
            return null;
        }

        if (R.isNil(this.props.xKey)) {
            throw new Error('xKey is required');
        }

        if (R.isNil(this.props.yKey)) {
            throw new Error('yKey is required');
        }

        let el = ReactFauxDOM.createElement('svg');
        let margin = this.props.margin || DEFAULT_MARGIN;
        let svg = d3Selection.select(el);
        let width = (this.props.width || DEFAULT_WIDTH) - margin.left - margin.right;
        let height = (this.props.height || DEFAULT_HEIGHT) - margin.top - margin.bottom;
        let g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
        let x = d3Scale.scaleTime().rangeRound([0, width]);
        let y = d3Scale.scaleLinear().rangeRound([height, 0]);
        let line = d3Shape.line()
            .x(d => x(d[this.props.xKey]))
            .y(d => y(d[this.props.yKey]))
        let _data = this.normalizeData(this.props.data);
        let formatTime = d3TimeFormat.timeFormat(Chart.timeFormat);
        let focus;

        svg.attr('width', this.props.width || DEFAULT_WIDTH);
        svg.attr('height', this.props.height || DEFAULT_HEIGHT);

        x.domain(d3Array.extent(_data, d => d[this.props.xKey]))
        y.domain(d3Array.extent(_data, d => d[this.props.yKey]))

        g.append('g')
            .attr('transform', 'translate(0,' + height + ')')
            .call(d3Axis.axisBottom(x));

        g.append('g')
            .call(d3Axis.axisLeft(y));

        g.append('path')
            .datum(_data)
            .attr('fill', 'none')
            .attr('class', 'path')
            .attr('stroke-linejoin', 'round')
            .attr('stroke-linecap', 'round')
            .attr('stroke-width', 1.5)
            .attr('d', line);

        if (this.state.tooltip && this.state.showTooltip) {
            focus = g
                .append('g')
                .attr('class', 'focus')
                .attr("transform", "translate(" + x(this.state.tooltip.x) + "," + y(this.state.tooltip.y) + ")")

            focus.append('circle')
                .attr('r', 4.5);

            focus.append('text')
                .attr('class', 'focus-text')
                .attr('x', 9)
                .attr('dy', '.35em')
                .attr('transform', 'translate(0, -10)')
                .html([this.state.tooltip.y, formatTime(this.state.tooltip.x)].join(' '));
        }

        g.append('rect')
            .attr('class', 'overlay')
            .attr('width', width)
            .attr('height', height)

        let overlay = el.querySelector('.overlay')

        overlay.addEventListener('mouseover', this.onMouseOver.bind(this));
        overlay.addEventListener('mouseout', this.onMouseOut.bind(this));
        overlay.addEventListener('mousemove', this.onMouseMove.bind(this));

        return (
            <div className='graph graph-line'>
                {el.toReact()}
            </div>
        )
    }
}

export default Chart