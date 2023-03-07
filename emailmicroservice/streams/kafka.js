const { Kafka } = require("kafkajs");
//const brokerAddress = process.env.BROKER_SERVER_ADDRESS;
//const gameTopic = process.env.GAMES_TOPICS; //for dockerize

const kafka = new Kafka({
    //brokers:["localhost:8008"] , // [localhost:9092]
    brokers: ["broker:29092"], //for dockerized
    clientId: "book-producer",
});

const consumer = kafka.consumer({
    groupId: "mail-consumer",
}); //function that makes producer and takes in config

async function startConsumer(handler) {
    await consumer.connect();
    await consumer.subscribe({
        topics: ["books","users"],
    }); //array of what topics you want to sub to
    consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) =>
            handler(message),
    });
    return consumer;
}

module.exports = startConsumer;