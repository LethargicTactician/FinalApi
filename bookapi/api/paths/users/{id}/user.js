//const kafka = require('../../../../streams/kafka')
const database = require("../../../../../bookapi/database");
const kafka = require("../../../../streams/kafka");
//const { json } = require("express");
//const bodyParser = require("body-parser");

module.exports = function () {
    let operations = {
        GET
    };

    async function GET(req, res, next) {
        
        console.log("Endpoint hit");
        database.query(`SELECT * FROM users where id="${req.params.id}"`, function(err, results){
        
            if(err) throw(err);
            console.log(results);
            const successful = kafka.produceTestMessage("books", "userObtained", req.params.id);

        });       
        res.status(200).json({message: "HI"})        
    }

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

    return operations;
};