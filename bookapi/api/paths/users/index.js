const database = require("../../../database");
const kafka = require("../../../../bookapi/streams/kafka");
const { json } = require("express");
//var connection = database.cre

module.exports = function () {
    var operations = {
        GET,
        POST,
        DELETE
    }

    async function GET(req, res, next) {
        
        database.query(`SELECT * FROM books`, function(err, results){
            if(err) throw(err);
            console.log(results);
    
        });
        const successful = kafka.produceTestMessage("books", "booksObtained", "A list of books");
        res.status(200).json({message: "successful bitch"})

    };

    async function POST(req, res, next){
        database.query(`INSERT INTO users(username, email, password) VALUES("${req.body.username}","${req.body.email}", "${req.body.password}")`, function(err, results){
            if(err) throw(err);
            console.log(results);
        });
        const successful = kafka.produceTestMessage("books", "booksCreated", "A list of books");
        res.status(200).json({message: "successful post"});

    };

    async function DELETE(req, res, next){
        database.query(`DELETE FROM users WHERE username="${req.body.username}"`, function(err, results){
            if(err) throw(err);
            console.log(results);
        });
        const successful = kafka.produceTestMessage("books", "bookDeleted", "A list of books");
        res.status(200).json({message: "Deleted successfully"});

    };



    //API DOC STUFF
    GET.apiDoc = {
        summary: "Gets a the user",
        description: "Retrieves all the users that are reserved in our database",
        operationId: "get-users",
        responses: {
            200: {
                description: "OK",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/users",
                        },
                    },
                },
            },
            400: {
                description: "Bad Request",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                },
                            },
                        },
                    },
                },
            },
            500: {
                description: "Internal Server Error",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                },
                            },
                        },
                    },
                },
            },
        },
    };

    POST.apiDoc = {
        summary: "posts a the user",
        description: "adds a  user on your thing",
        operationId: "post-users",
        responses: {
            200: {
                description: "OK",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/users",
                        },
                    },
                },
            },
            400: {
                description: "Bad Request",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                },
                            },
                        },
                    },
                },
            },
            500: {
                description: "Internal Server Error",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                },
                            },
                        },
                    },
                },
            },
        },
    };

    DELETE.apiDoc = {
        summary: "deletes the user",
        description: "deltes user",
        operationId: "delete-users",
        responses: {
            200: {
                description: "OK",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/users",
                        },
                    },
                },
            },
            400: {
                description: "Bad Request",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                },
                            },
                        },
                    },
                },
            },
            500: {
                description: "Internal Server Error",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                },
                            },
                        },
                    },
                },
            },
        },
    };


    return operations;
};