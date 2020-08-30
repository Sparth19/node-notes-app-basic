const chalk = require('chalk')
const fs = require('fs')



const addNotes = (title, body) => {
    const notes = loadNotes()

    const duplicates = notes.filter((note) => note.title === title)

    if (duplicates.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        console.log(notes)
        saveNotes(notes)
    } else {
        console.log(chalk.red.inverse("Duplicate title is not allowed..!"))
    }
}

const removeNotes = (title) => {

    const notes = loadNotes()
    const del = notes.filter((note) => note.title !== title)

    if (notes.length > del.length) {
        console.log(chalk.green.inverse("Deleted..!"))

        saveNotes(del)
    } else {
        console.log(chalk.red.inverse("Not avilable!"))
    }
}

const saveNotes = (notes) => {

    const save = JSON.stringify(notes)
    const fileWrite = fs.writeFileSync('notes.json', save)

}
const loadNotes = () => {
    try {
        const fileData = fs.readFileSync('notes.json')
        const fileString = fileData.toString()
        const notes = JSON.parse(fileString)
        return notes
    } catch (e) {
        return []
    }
}


const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellow.inverse("Your notes..."))
    notes.forEach((note) => {
        console.log("Title :" + chalk.blue(note.title))
        console.log("Body :" + chalk.blue(note.body))
    });

}
const readNotes = (title) => {
    const notes = loadNotes()

    const check = notes.find((note) => note.title == title)
    if (check) {
        console.log(chalk.blue.inverse(check.title))
        console.log(chalk.white.inverse(check.body))
    } else {
        console.log(chalk.red.inverse("NOte not exist.."))

    }


}
module.exports = {

    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes

}