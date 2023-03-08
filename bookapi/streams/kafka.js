const { Kafka } = require('kafkajs');
// const { request } = require('../../Server');
//create connection for the kafka borker
const kafka = new Kafka({
    brokers: ["broker:29092"],
    clientId: 'book-producer'
})

const producer = kafka.producer();
// ACTIVATION WORD
async function produceTestMessage(topic, activationWord, activationData){
    // THIS IS DATA WE'RE PASSING
    console.log(`I am producing ${activationWord} and ${activationData}`);

    try {
        await producer.connect();

        return await producer.send({
            topic: topic,
            messages: [
                {
                    key: activationWord,
                    value: JSON.stringify(activationData),
                },
            ],
        });
    } catch (error) {
        return error;
    }
}


exports.produceTestMessage = produceTestMessage;