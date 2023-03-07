const database = require("../../../database");
const kafka = require("../../../../bookapi/streams/kafka");

module.exports = function(){
    var operations = [
        GET,
        POST,
        DELETE
    ]

    function GET(req,res, next){
        // database.query(`SELECT * FROM users`, function(err, results){
        //     if(err) throw(err);
        //     console.log(results);
    
        // });

        res.send("Hello ")
    };

    function POST(req, res, next){
        database.query(`INSERT INTO users(username, email, password) VALUES("${req.body.username}","${req.body.email}", "${req.body.password}")`, function(err, results){
            if(err) throw(err);
            console.log(results);
        });
        
    };

    function DELETE(req, res, next){
        database.query(`DELETE FROM users WHERE username = ${req.body.username}`, function(err, results){
            if(err) throw(err);
            console.log(results);
        });
        
    };

    // function PUT(req, res, next){
    //     database.query(`UPDATE `, function(err, results){
    //         if(err) throw(err);
    //         console.log(results);
    //     });
    // }

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
        summary: "Gets a the user",
        description: "Retrieves all the users that are reserved in our database",
        operationId: "get-users",
        responses: {
            200: {
                description: "OK",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/games",
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