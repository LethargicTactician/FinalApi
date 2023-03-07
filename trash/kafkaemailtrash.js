// produce a message on a topic
// async function produceMessage(gEvent) {
//     console.log("Generating");
//     await producer.connect()
//     await producer.send({
//         topic: "offers",
//         messages: [
//             { key: gEvent, value: "Hello?" }
//         ]
//     });
//     res.sendStatus(200)
//     await producer.disconnect()
// }
// consumer stuff
// const consumer  = kafka.consumer({groupId: 'consumer-group'})

// await consumer.subscribe({topic: 'offers', fromBeginning: true})

// await consumer.run({
//     eachMessage: async ({topic, partition, message}) =>{
//         console.log({
//             value: message.value.toString()
//         })
//     }
// })

// consumer stuff
// async function consumerThingie() {
//     const consumer = kafka.consumer({ groupId: 'consumer-group' })
//     await consumer.subscribe({ topic: 'games', fromBeginning: true })

//     await consumer.run({
//         eachMessage: async ({ topic, partition, message }) => {
//             console.log({
//                 value: message.value.toString()
//             })
//         }
//     })
// }