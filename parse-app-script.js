const fs = require('fs')
const path = require('path')

const appScript = './app-script/patients-data-app.json'

try {
    const data = fs.readFileSync(appScript, 'utf8')
    const jsonData = JSON.parse(data)
    parseAppFiles(jsonData)
} catch (error) {
    console.error('Error reading/parsing JSON file:', error)
}

function parseAppFiles(data) {
    try {
        data.files.forEach(createFiles)
    } catch (error) {
        console.error('Error parsing app files:', error)
    }
}

function createFiles(file) {
    const { name, type, source } = file

    fs.writeFile(getOutPath(name, type), source, (err) => {
        if (err) {
            console.error(`Error writing "${name}.${type}":`, err)
        } else {
            console.log(`"${name}.${type}" created successfully`)
        }
    })
}

function getOutPath(name, type) {
    const fileType = type === 'server_js' ? 'js' : type
    const dirPath = getDirPath(fileType)
    createDir(dirPath)
    return path.join(dirPath, `${name}.${fileType}`)
}

function getDirPath(type) {
    switch (type) {
        case 'html':
            return './src/templates/'

        case 'js':
            return './src/js/'

        default:
            return './src/';
    }
}

function createDir(path) {
    if (!fs.existsSync(path)) {
        fs.mkdir(path, (err) => {
            if (err) {
                console.error('Error creating folder:', err);
            } else {
                console.log(`Folder "${path}" created successfully.`)
            }
        })
    }
}