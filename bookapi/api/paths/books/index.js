const database = require("../../../database");
const kafka = require('../../../../bookapi/streams/kafka');
var express = require('express');
const router = express.Router();

module.exports = function(){
    var operations = {    
        GET,
        POST,
        // DELETE

    }

    async function GET(req, res, next) {
        
        database.query(`SELECT * FROM books`, function(err, results){
            if(err) throw(err);
            console.log(results);
    
        });
        //const successful = kafka.produceTestMessage("books", "booksObtained", "A list of books");
        res.status(200).json({message: "successful book"})

    };


    async function POST(req, res, next){
        try{
            database.query(`INSERT INTO books(title, desciption) VALUES("${req.body.title}","${req.body.desciption}");`, function(err, results){
                if(err) throw(err);
                console.log(results);
                //let postParams = JSON.stringify(req.body)
                const successful = kafka.produceTestMessage("books", "bookCreated", req.body );
    
             
            });
     
        } catch(err){
            console.error("FAILURE: " + err )
        }
    
       
     
        res.status(200).json({message: "successful"});

    };

    //API DOC STUFF
    GET.apiDoc = {
        "summary": "Gets a the book",
        "description": "book",
        "operationId": "get-book",
        "responses": {
            "201": {
                "description": "OK",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/books",
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
        summary: "Gets a the book",
        description: "Retrieves all the book that are stored database",
        operationId: "get-books",
        responses: {
            201: {
                description: "OK",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/books",
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

    // DELETE.apiDoc = {
    //     summary: "deletes the book",
    //     description: "deltes book",
    //     operationId: "delete-book",
    //     responses: {
    //         201: {
    //             description: "OK",
    //             content: {
    //                 "application/json": {
    //                     schema: {
    //                         $ref: "#/components/schemas/book",
    //                     },
    //                 },
    //             },
    //         },
    //         400: {
    //             description: "Bad Request",
    //             content: {
    //                 "application/json": {
    //                     schema: {
    //                         type: "object",
    //                         properties: {
    //                             message: {
    //                                 type: "string",
    //                             },
    //                         },
    //                     },
    //                 },
    //             },
    //         },
    //         500: {
    //             description: "Internal Server Error",
    //             content: {
    //                 "application/json": {
    //                     schema: {
    //                         type: "object",
    //                         properties: {
    //                             message: {
    //                                 type: "string",
    //                             },
    //                         },
    //                     },
    //                 },
    //             },
    //         },
    //     },
    // };


    return operations;
};