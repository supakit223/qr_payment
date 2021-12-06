const generatePayload = require('promptpay-qr') 
const qrcode = require('qrcode') 
const fs = require('fs') 

const mobileNumber = '081-996-5660' 
const IDCardNumber = '3-4503-00319-88-7'
const amount = 10
// const payload = generatePayload(mobileNumber, { amount }) //First parameter : mobileNumber || IDCardNumber
const payload = generatePayload(IDCardNumber, { amount }) //First parameter : mobileNumber || IDCardNumber
console.log(payload)

// Convert to SVG QR Code
const options = { type: 'svg', color: { dark: '#000', light: '#fff' } }
qrcode.toString(payload, options, (err, svg) => {
    if (err) return console.log(err)
    fs.writeFileSync('./qr.svg', svg)
    console.log(svg)
})