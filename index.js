const yargs = require('yargs')
const pkg = require('./package.json')
const { addNote, getNotes } = require('./notes.controller')

yargs.version(pkg.version)

// node index add --title=Hello

yargs.command({
    command: 'add',
    describe: 'Add naw note to list',
    builder: {
        title: {
            type: 'string',
            describe: 'Note title',
            demandOption: true
        }
    },
    handler({ title }) {
        addNote(title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Print all notes',
    handler() {
        const notes = getNotes()
        console.log('list command', notes)
    }
})

yargs.parse()