"use strict";

export default class DataIterator {

    /**
     * @param {DataProvider} dataProvider
     */
    constructor(dataProvider) {
        this._data = dataProvider.data;
        this._currentItem = 0;
        this._dataLength = this._data.length;
    }

    /**
     * @return {string}
     */
    getItem() {
        let item = 'no data';
        if (this._currentItem < this._dataLength) {
            item = this._data[this._currentItem];

            this._currentItem++;
        } else {
            this._currentItem = 0;
        }

        return item;
    }
}