import api from '../../../api/bpi';
import toPairs from 'ramda/src/toPairs'
import map from 'ramda/src/map'
import prop from 'ramda/src/prop'
import moment from 'moment';

jest.mock('../../../store', () => {
    return {
        dispatch: jest.fn()
    };
});


describe('BPI api', () => {
    const store = require('../../../store');
    let counter = 0;

    global.fetch = (url, args) => {
        if (-1 !== url.indexOf('http://localhost:8080/https://api.coindesk.com/v1/bpi/historical/close.json')) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    console.log(counter);
                    if (++counter % 3 === 0) {
                        reject();
                        return;
                    }
                    resolve({
                        json: () => {
                            return {
                                bpi: {
                                    "2017-09-26": 3895.5125,
                                    "2017-09-27": 4208.5613,
                                    "2017-09-28": 4185.2925,
                                    "2017-09-29": 4164.1038,
                                    "2017-09-30": 4353.0475,
                                },
                                "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.",
                                "time": {
                                    "updated": "Oct 27, 2017 00:03:00 UTC",
                                    "updatedISO": "2017-10-27T00:03:00+00:00"
                                }
                            };
                        }
                    });
                }, 100);
            });
        }
        if ('http://localhost:8080/https://api.coindesk.com/v1/bpi/supported-currencies.json' === url) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    if (++counter % 2 === 0) {
                        reject();
                        return;
                    }
                    resolve({
                        json: () => {
                            return [{
                                "currency": "AED",
                                "country": "United Arab Emirates Dirham"
                            }, {
                                "currency": "AFN",
                                "country": "Afghan Afghani"
                            }, {
                                "currency": "ALL",
                                "country": "Albanian Lek"
                            }];
                        }
                    });
                }, 100);
            });
        }
    }

    it('should exist', () => {
        expect(api).toBeDefined();
    });


    it('should properly handle .getData', (done) => {
        const DATE = moment('20171021', 'YYYYMMDD');

        store.dispatch.mockReset();

        api.getData(null, null, null, (result) => {
            expect(result).toEqual(toPairs({
                "2017-09-26": 3895.5125,
                "2017-09-27": 4208.5613,
                "2017-09-28": 4185.2925,
                "2017-09-29": 4164.1038,
                "2017-09-30": 4353.0475,
            }));
            store.dispatch.mock.calls.forEach((arg) => {
                expect(arg).toMatchSnapshot();
            });

            done();
        });
        store.dispatch.mockReset();

        api.getData(DATE, DATE, null, (result) => {
            expect(result).toEqual(toPairs({
                "2017-09-26": 3895.5125,
                "2017-09-27": 4208.5613,
                "2017-09-28": 4185.2925,
                "2017-09-29": 4164.1038,
                "2017-09-30": 4353.0475,
            }));
            store.dispatch.mock.calls.forEach((arg) => {
                expect(arg).toMatchSnapshot();
            });

            done();
        });

        store.dispatch.mockReset();

        api.getData(DATE, DATE, null, (result) => {
            expect(result).toEqual(null);
            store.dispatch.mock.calls.forEach((arg) => {
                expect(arg).toMatchSnapshot();
            });

            done();
        });

    });

    it('should properly handle .getCurrencies', (done) => {
        store.dispatch.mockReset();

        api.getCurrencies((result) => {
            expect(result).toEqual(map(prop('currency'))([{
                "currency": "AED",
                "country": "United Arab Emirates Dirham"
            }, {
                "currency": "AFN",
                "country": "Afghan Afghani"
            }, {
                "currency": "ALL",
                "country": "Albanian Lek"
            }]));
            store.dispatch.mock.calls.forEach((arg) => {
                expect(arg).toMatchSnapshot();
            });

            done();
        });

    });


});