const fs = require('fs')

const HTML_DIR = 'src/html'
const ARTIFACTS_DIR = 'artifacts/html'

if (!fs.existsSync(ARTIFACTS_DIR)) {
  fs.mkdirSync(ARTIFACTS_DIR)
}
copyFiles()

function copyFiles() {
  const filePaths = collectFilesPaths(HTML_DIR)

  for (const path of filePaths) {
    copyFile(path, `${ARTIFACTS_DIR}/${path.split('/')[3]}`)
  }
}

function collectFilesPaths(dir) {
  const paths = []

  for (const name of fs.readdirSync(dir)) {
    if (fs.statSync(`${dir}/${name}`).isDirectory()) {
      paths.push(...collectFilesPaths(`${dir}/${name}`))
    }
    else {
      paths.push(`${dir}/${name}`)
    }
  }

  return paths
}

function copyFile(original, target) {
  const data = fs.readFileSync(original, 'utf8')

  fs.writeFile(target, data, (err) => {
    if (err) {
      console.error(`Error writing "${target}":`, err)
    } else {
      console.log(`"${target}" created successfully`)
    }
  })
}
