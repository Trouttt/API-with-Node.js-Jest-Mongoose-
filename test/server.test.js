
const app = require('../src/app');
const supertest = require("supertest");
const request = supertest(app);

test("The application must respond on port 3000", () => {
    return request.get('/').then(res => {
        let status = res.statusCode;
        expect(status).toEqual(200);
    }).catch(err => {
        fail(err);
    })
});