const {v4: uuid} = require('uuid')
const {format} = require('date-fns')
const fs = require('fs')
const path = require('path')

const createLogItem = (msg) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    return `${uuid()}\t${dateTime}\t${msg}\n`

}

const saveLogItem = (logItem) => {
    if(!fs.existsSync(path.join(__dirname, 'logs'))) {
        fs.mkdir(path.join(__dirname, 'logs'), (err) =>{
            if(err) console.log(err)
        })
    }
    fs.appendFile(path.join(__dirname, 'logs', 'event-logs.txt'),
    logItem, (err) => {
        if (err) console.log(err)}
        )
}



// const log = (msg) => {
    

//     // const example = 'Current date time is: ${new Date()}'
//     // const ex1 = "Current date time is: " + new Date()
//     // console.log(logItem);
//     // console.log(example);
//     // console.log(ex1);
//     }

// saveLogItem(createLogItem("test event"))

const log = (msg) => {
    saveLogItem(createLogItem(msg))
}
module.exports = {log}
