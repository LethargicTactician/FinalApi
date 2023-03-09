const database = require("../../../database");
const kafka = require("../../../../bookapi/streams/kafka");
const { json } = require("express");
const bodyParser = require("body-parser");
//var connection = database.cre

module.exports = function () {
    var operations = {
        GET,
        POST,
        DELETE
    }

    async function GET(req, res, next) {
        database.query(`SELECT * FROM users`, function(err, results){
            
            if(err) throw(err);
            console.log(results);
            //res.status(200).json({message: "HI"});
           const successful = kafka.produceTestMessage("users", "userObtained", req.body);

           res.status(200).json({message: results})
        });       
       

    };

    async function POST(req, res, next){
        try{
            database.query(`INSERT INTO users(username, email, password) VALUES("${req.body.username}","${req.body.email}", "${req.body.password}");`, function(err, results){
                if(err) throw(err);
                console.log(results);
                //let postParams = JSON.stringify(req.body)
                const successful = kafka.produceTestMessage("users", "userCreated", req.body );
    
             
            });
     
        } catch(err){
            console.error("FAILURE: " + err )
        }
        res.status(200).json({message: "successful"});
    };

    async function DELETE(req, res, next){
        database.query(`DELETE FROM users WHERE username="${req.body.username}"`, function(err, results){
            if(err) throw(err);
            console.log(results);
            //res.status(200).json({message: "Bye"});
        });
        //const successful = kafka.produceTestMessage("users", "userDeleted", "A list of books");
        res.status(200).json({message: "bye :("});

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