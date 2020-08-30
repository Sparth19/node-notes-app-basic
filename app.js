const chalk = require('chalk')
const yargs = require('yargs')
const note = require('./notes.js')

console.log(chalk.redBright.inverse("Welcome to Notes app"))

yargs.command({
    command: 'add',
    builder: {
        title: {
            describe: "Title of add",
            type: 'string',
            demandOption: true
        },
        body: {
            describe: "Body of add",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',

    builder: {
        title: {
            describe: "Title of remove",
            type: 'string',
            demandOption: true
        }
    },
    handler(argv) {
        note.removeNotes(argv.title)
    }
})
yargs.command({
    command: 'read',
    builder: {
        title: {
            demandOption: true,
            describe: "This is read",
            type: 'string'
        }
    },
    handler(argv) {
        note.readNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    handler() {
        note.listNotes()
    }
})
yargs.parse()

//console.log(yargs.argv)