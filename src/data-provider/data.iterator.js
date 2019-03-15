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
        console.log(this._currentItem);
        console.log(this._dataLength);
        if (this._currentItem < this._dataLength) {
            item = this._data[this._currentItem];

            this._currentItem++;
        }

        return item;
    }
}