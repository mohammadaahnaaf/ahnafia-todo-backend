const ToDoModel = require("../models/ToDoModel");

//get all data
module.exports.getToDo = async (req, res) => {
    const todo = await ToDoModel.find();
    res.send(todo);
}

// create data 
module.exports.saveToDo = (req, res) => {
    const { text, status } = req.body;

    ToDoModel
        .create({ text: text, status: false })
        .then((data) => {
            console.log("Added Successfully...")
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err));
}

//delete data
module.exports.deleteToDo = (req, res) => {
    const { _id } = req.body;

    console.log('id: ', _id);

    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully"))
        .catch((err) => console.log(err));
}

// edit data 
module.exports.updateToDo = (req, res) => {
    const { _id, text, status } = req.body;

    ToDoModel
        .findByIdAndUpdate(_id, { text: text, status: status })
        .then(() => res.set(201).send("Updated Successfully"))
        .catch((err) => console.log(err));
}