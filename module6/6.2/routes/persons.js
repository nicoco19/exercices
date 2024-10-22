const router = require('express').Router()
const Person = require("../models/person")

router.get("/", (req, res, next) => {
  // res.json(allPersons)
  Person.find({})
  .then(p => res.json(p))
  .catch(err => next(err))
})

router.get("/:id", (req, res) => {
   const id = req.params.id
  console.log(id);
    Person.findById(id)
    .then(p => {
    if(p){
      res.json(p)
    }else {
      throw new NotFoundError();
    }
  })
})

router.delete("/:id", (req, res) => {
  const id = req.params.id
  console.log(id);
  Person.findByIdAndDelete(id)
  .then(p => {
    if(p){
      res.json(p)
    }else {
      throw new NotFoundError();
    }
  })

})

router.post("/", (req, res) => {
  console.log("body: ", req.body)
  const personPayload = req.body
  // Check existing
  Person.find({ nom: personPayload.nom })
  .then(person => {
    if (person && person.length > 0) {
      errorMessages.push("name must be unique")
      res.status(422).json({ errorMessages })
    } else {
      // Insert
      const person = new Person(personPayload)
      person.save().then(result => {
        res.json(result)
      })
      .catch(err => next(err))
    }
  })
  .catch(err => next(err))

})

/* router.put("/:id", (req, res) => {
  const personPayload = req.body
  const id = Number(req.params.id)
  const personIndex = allPersons.findIndex(person => person.id === id)
  if (personIndex === -1) {
    res.status(404).end()
  }
  else {
    const updatedPerson = { ...personPayload, id:allPersons[personIndex].id }
    allPersons[personIndex] = updatedPerson
    res.json(updatedPerson)
  }
}) */


module.exports = router
