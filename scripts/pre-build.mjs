// scripts/move-dist.js
import {copyFileSync, readdirSync} from 'fs'
import {join, dirname} from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootPath = join(__dirname, '..')
const distPath = join(rootPath, 'dist')

const files = readdirSync(distPath)

files.forEach((file) => {
    copyFileSync(join(distPath, file), join(rootPath, file))
})
