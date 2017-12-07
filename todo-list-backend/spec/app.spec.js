//app.spec.js
let Request = require('request');
describe("server", () => {
    let server;
    let userId
    let projectId;
    let todoId;
    beforeAll(() => {
        server = require('../app');
        userId = '5a29706c22dbd32fc59bb966';
    });
    afterAll(() => {});
    // Test een project toevoegen aan een user
    describe("POST /projects/user/:userid", () => {
        let data = {}
        beforeAll((done) => {
            Request({
                method: "POST",
                uri: "http://localhost:8080/projects/user/" + userId,
                json: true,
                body: {
                    "projectName": "Test Project"
                }
            }, (error, response, body) => {
                data.status = response.statusCode
                data.body = body;
                done();
            }).auth(null, null, true, process.env.VALID_TOKEN);
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check project body", () => {
            expect(data.body.projectName).toBe("Test Project");
            expect(data.body.todos.length).toBe(0);
            expect(data.body._id).toBeDefined();
            projectId = data.body._id;
        });
    });
    // Test een todo toevoegen aan een project
    describe("POST /todos/project/:projectid", () => {
        let data = {};
        let newDate = new Date().toLocaleDateString()
        beforeAll((done) => {
            Request({
                method: 'POST',
                uri: 'http://localhost:8080/todos/project/' + projectId,
                json: true,
                body: {
                    "description": "Test Todo",
                    "dueDate": newDate,
                }
            }, (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            }).auth(null, null, true, process.env.VALID_TOKEN);
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check todo body", () => {
            expect(data.body.description).toBe("Test Todo");
            expect(data.body.dueDate).toBe(new Date(newDate).toISOString());
            expect(data.body._id).toBeDefined();
            todoId = data.body._id;
        });
    });
    // Test ophalen van projecten voor een user
    describe("GET /projects/user/:userid", () => {
        let data = {};
        beforeAll((done) => {
            Request.get("http://localhost:8080/projects/user/" + userId, (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            }).auth(null, null, true, process.env.VALID_TOKEN);
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check projects", () => {
            expect(data.body.length).toBe(1);
        });
    });
    // Test het deleten van een project voor een user
    describe("DELETE /projects/:projectid/:todoid", () => {
        let data = {};
        beforeAll((done) => {
            Request.delete("http://localhost:8080/todos/" + projectId + "/" + todoId, (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            }).auth(null, null, true, process.env.VALID_TOKEN);
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check todos", () => {
            expect(data.body._id).toBe(todoId);
        });
    });
    // Test het deleten van een project voor een user
    describe("DELETE /projects/:userid/:projectid", () => {
        let data = {};
        beforeAll((done) => {
            Request.delete("http://localhost:8080/projects/" + userId + "/" + projectId, (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            }).auth(null, null, true, process.env.VALID_TOKEN);
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check projects", () => {
            expect(data.body._id).toBe(projectId);
        });
    });
});