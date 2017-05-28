'use strict';

const assert = require('assert');
const request = require('request');
const BASEURL = 'http://localhost:8080/';

describe('Node Store', () => {
    describe('GET /', () => {
        it('returns status code 200', done => {
            request.get(BASEURL, (error, response, body) => {

                assert.equal(200, response.statusCode);
                done();
            });
        });
    });
    describe('GET /cart', () => {
        it('returns status code 200', done => {
            request.get(BASEURL + 'cart', (error, response, body) => {

                assert.equal(200, response.statusCode);
                done();
            });
        });
    });
    describe('GET /checkout', () => {
        it('returns status code 200', done => {
            request.get(BASEURL + 'checkout', (error, response, body) => {

                assert.equal(200, response.statusCode);
                done();
            });
        });
    });
    describe('POST /cart', () => {
        it('returns status code 302', done => {
            request.post(BASEURL + 'cart', (error, response, body) => {

                assert.equal(302, response.statusCode);
                done();
            });
        });
    });
    describe('POST /cart params', () => {
        it('returns status code 302', done => {
            request.post(BASEURL + 'cart', {form: {product_id: '123', qty: '1'}}, (error, response, body) => {

                assert.equal(302, response.statusCode);
                done();
            });
        });
    });
    describe('POST /checkout', () => {
        it('returns status code 302', done => {
            request.post(BASEURL + 'checkout', (error, response, body) => {

                assert.equal(302, response.statusCode);
                done();
            });
        });
    });
});