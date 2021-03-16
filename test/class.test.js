const classRouter = require('../src/app');
const supertest = require("supertest");
const request = supertest(classRouter);




describe("Class register", () => {
    test("A new class must be created", () => {

        let time = Date.now();
        let Classes = {
            name:`Class ${time}`, 
            description: `Lorem ipsum ${time}`, 
            video: `www.google.com.br/${time}`,
            data_init: 19992020,
            data_end: 19992020,
            data_created: 19992020,
            data_updated: 19992020,
            total_comments: 19992020
        };

        return request.post('/classes')
        .send(Classes)
        .then(res => {
            expect(res.statusCode).toEqual(200);
        }).catch(err =>{
            fail(err);
        });
    });

    test("Should block the class register", () =>{
        
        let Classes = {
            name:'', 
            description: '', 
            video: '',
            data_init: '',
            data_end: '',
            data_created: '',
            data_updated: '',
            total_comments: ''
        };

        return request.post("/classes")
            .send(Classes)
            .then(res => {
                expect(res.statusCode).toEqual(400);
            }).catch(err => {
                fail(err);
            })
    });

});


describe("Show Classes", () => {
    test('Will be showed the classes', () => {
        return request.get('/classes')
        .then(res => {
            expect(res.statusCode).toEqual(200);
        })
        .catch(err => {
            fail(err);
        })
    })
})

describe("Show a unique class", () => {
    test("will be showed only one class", () => {
        return request.get('/classes/:id')
        .then(res => {
            expect(res.statusCode).toEqual(200);
        })
        .catch(err => {
            fail(err);
        })
    })
})

describe("Delete a unique class", () => {
    test("the comment will be deleted", () => {
        return request.delete('/classes/:id')
        .then(res => {
            expect(res.statusCode).toEqual(200);
        })
        .catch(err => {
            fail(err);
        })
    })
})
describe("Update the class", () => {
    test("will be updated the classe ", () => {

        return request.put('/classes')
        
        .then(res => {
            expect(res.statusCode).toEqual(200);
        })
        .catch(err => {
            fail(err);
        });
    });

    test("Should block the class update", () =>{
        
        let Classes = {
            name:'', 
            description: '', 
            video: '',
            data_init: '',
            data_end: '',
            data_created: '',
            data_updated: '',
            total_comments: ''
        };

        return request.put("/classes")
            .send(Classes)
            .then(res => {
                expect(res.statusCode).toEqual(400);
            }).catch(err => {
                fail(err);
            })
    });
});