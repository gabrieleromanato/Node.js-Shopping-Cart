'use strict';

const assert = require('assert');
const request = require('request');
const BASEURL = 'http://localhost:8000/';

describe('CMS', () => {
    describe('GET /', () => {
        it('returns status code 200', done => {
            request.get(BASEURL, (error, response, body) => {

                assert.equal(200, response.statusCode);
                done();
            });
        });
    });
    describe('GET /category/blog', () => {
        it('returns status code 200', done => {
            request.get(BASEURL + 'category/blog', (error, response, body) => {

                assert.equal(200, response.statusCode);
                done();
            });
        });
    });
});
