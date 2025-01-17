import {cpSync} from 'fs'
import {join, dirname} from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootPath = join(__dirname, '..')
const distPath = join(rootPath, 'dist')

cpSync(distPath, rootPath, {recursive: true})
