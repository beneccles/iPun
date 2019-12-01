const {TWILIO_SID, AUTH_TOKEN} = process.env
module.exports = {
    async makeCall (req, res) {
        const client = require('twilio')(TWILIO_SID, AUTH_TOKEN)
        const {to, from} = req.body
        client.calls.create({
            to: to,
            from: from
        })
        .then(call => {console.log(`Call ${call.sid} Initiated`)})

    }
}