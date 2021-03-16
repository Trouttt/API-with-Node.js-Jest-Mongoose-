const commentRouter = require('../src/app');
const supertest = require("supertest");
const request = supertest(commentRouter);


describe("Comment register", () => {
    test("A new comment must be created", () => {

        let time = Date.now();
        let Comment = {
            id_class: '604f69f14e8db85696bf4e48', 
            comment: `Coment ${time}`,
            date_created: 19992020
        };

        return request.post('/classes/comments')
        .send(Comment)
        .then(res => {
            expect(res.statusCode).toEqual(200);
        }).catch(err =>{
            fail(err);
        });
    });
    
    test("Should block the comment register", () =>{
        
        let Comment = {
            id_class: '604f69f14e8db85696bf4e48', 
            comment: '',
            date_created: ''
        };

        return request.post("/classes/comments")
            .send(Comment)
            .then(res => {
                expect(res.statusCode).toEqual(400);
            }).catch(err => {
                fail(err);
            });
    });
});

describe("Show comments", () => {
    test("The comments will be showed ", () => {
        return request.get('/classes/comments')
        .then(res => {
            expect(res.statusCode).toEqual(200);
        })
        .catch(err => {
            fail(err);
        });
    });
});

describe("Delete comment", () => {
    test("The comment will be deleted", () => {
        return request.delete('/classes/comments/:id')
        .then(res => {
            expect(res.statusCode).toEqual(200);
        })
        .catch(err => {
            fail(err);
        });
    });
});