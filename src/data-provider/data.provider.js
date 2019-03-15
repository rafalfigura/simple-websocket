"use strict";

import fs from 'fs';

export default class DataProvider {
    /**
     * @param {string} fileName
     */
    constructor(fileName) {
        const file = fs.readFileSync(__dirname + process.env.DATA_FILE_PATH + fileName, 'utf8');
        this._data = JSON.parse(file);
        if (!Array.isArray(this._data)) {
            throw new Error('File must have Array');
        }
    }

    /**
     * @return {array}
     */
    get data() {
        return this._data;
    }
}