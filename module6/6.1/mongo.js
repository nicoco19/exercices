const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://nicolasventurini:${password}@web3react.hbhhe.mongodb.net/repertoireTelephonique?retryWrites=true&w=majority&appName=web3React`


const RepertoireSchema = new mongoose.Schema({
  nom: String,
  telephone: String,
})

const Repertoire = mongoose.model('Repertoire', RepertoireSchema)
const name = process.argv[3];
const telephone = process.argv[4];



if(process.argv.length > 3) {
  mongoose
  .connect(url)
  .then((result) => {
    console.log('Connect !!!')

    const repertoire = new Repertoire({
      nom:name,
      telephone:telephone,
    })
    return repertoire.save();
  })
  .then(() => {
    console.log(`added ${name} number ${telephone} to phonebook`)
    mongoose.connection.close()
  })
  .catch((err) => console.log(err))
}

mongoose
.connect(url)
.then(() => {
  console.log('Connect for the find !!!')
  Repertoire.find({}).then(result => {
    console.log("phonebook:")
    result.forEach(repertoire => {
      console.log(repertoire)
    })
    mongoose.connection.close()
  })
})


