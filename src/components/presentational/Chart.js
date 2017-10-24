import React, {Component} from 'react';
import ReactFauxDOM from 'react-faux-dom'
const d3Selection = require('d3-selection');
const d3Scale = require('d3-scale');
const d3Array = require('d3-array');
const d3TimeFormat = require('d3-time-format');
const d3Axis = require('d3-axis');
const d3Shape = require('d3-shape');
const contains = require('ramda/src/contains');
const isNil = require('ramda/src/isNil');
const find = require('ramda/src/find');
const propEq = require('ramda/src/propEq');

const DEFAULT_MARGIN = {top: 0, right: 0, bottom: 0, left: 0};
const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 300;

class Chart extends Component {
    static timeFormat = '%Y-%m-%d';

    constructor () {
        super(...arguments);
        this.state = {
            tooltip: null,
            showTooltip: false
        }
    }

    getMousePosition (event, element) {
        const rect = element.getBoundingClientRect();

        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    onMouseMove (event) {
        const margin = this.props.margin || DEFAULT_MARGIN;
        const width = (this.props.width || DEFAULT_WIDTH) - margin.left - margin.right;
        const x = d3Scale.scaleTime().rangeRound([0, width]);
        const _data = this.normalizeData(this.props.data);
        const formatTime = d3TimeFormat.timeFormat(Chart.timeFormat);
        const leftPosition = this.getMousePosition(event, event.target).x;
        let selectedDate;
        let tooltip = null;
        let dataElement;

        x.domain(d3Array.extent(_data, d => d[this.props.xKey]))

        selectedDate = formatTime(x.invert(leftPosition));
        dataElement = find(propEq('0', selectedDate))(this.props.data);
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
        const parseTime = d3TimeFormat.timeParse(Chart.timeFormat);

        if (data[0] instanceof Array) {
            _data = data.map(d => [parseTime(d[this.props.xKey]), d[this.props.yKey]])
        } else if (data[0] instanceof Object) {
            _data = data.map((d) => {
                const newObject = {};
                newObject[this.props.xKey] = parseTime(d[this.props.xKey]);
                newObject[this.props.yKey] = Number(d[this.props.yKey]);

                return Object.assign({}, d, newObject);
            });
        }

        return _data;
    }

    normalizeHighlights (highlights) {
        if (highlights && highlights.length) {
            const parseTime = d3TimeFormat.timeParse(Chart.timeFormat);

            return highlights.map(x => {
                return {
                    description: x.description,
                    date: parseTime(x.date)
                };
            });
        }

        return [];
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

        if (isNil(this.props.xKey)) {
            throw new Error('xKey is required');
        }

        if (isNil(this.props.yKey)) {
            throw new Error('yKey is required');
        }

        const el = ReactFauxDOM.createElement('svg');
        const margin = this.props.margin || DEFAULT_MARGIN;
        const svg = d3Selection.select(el);
        const width = (this.props.width || DEFAULT_WIDTH) - margin.left - margin.right;
        const height = (this.props.height || DEFAULT_HEIGHT) - margin.top - margin.bottom;
        const g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
        const x = d3Scale.scaleTime().rangeRound([0, width]);
        const y = d3Scale.scaleLinear().rangeRound([height, 0]);
        const line = d3Shape.line()
            .x(d => x(d[this.props.xKey]))
            .y(d => y(d[this.props.yKey]))
        const _data = this.normalizeData(this.props.data);
        const formatTime = d3TimeFormat.timeFormat(Chart.timeFormat);
        const highlights = this.normalizeHighlights(this.props.highlights);
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

        window.contains = contains;

        highlights.filter(highlight => {
            const domain = x.domain();

            if (highlight.date >= domain[0] && highlight.date <= domain[1]) {
                return true;
            }

            return false;
        }).forEach((highlight, i) => {
            g
                .append('line')
                .attr('class', 'highlight')
                .attr('x1', x(highlight.date))
                .attr('x2', x(highlight.date))
                .attr('y0', 0)
                .attr('y1', height)
            g
                .append('text')
                .html(highlight.description)
                .attr('title', highlight.description)
                .attr('class', 'highlight-description')
                .attr('x', x(highlight.date) + 5)
                .attr('y', i * 20)
        })

        if (this.state.tooltip && this.state.showTooltip) {
            focus = g
                .append('g')
                .attr('class', 'focus')
                .attr("transform", "translate(" + x(this.state.tooltip.x) + "," + y(this.state.tooltip.y) + ")");

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
            .attr('height', height);

        const overlay = el.querySelector('.overlay');

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