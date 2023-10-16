import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)

console.log("имя файла: ", path.basename(__filename))
console.log("имя директории: ", path.dirname(__filename))
console.log("расширение файла: ", path.extname(__filename))
console.log(path.parse(__filename))
console.log(path.join("1","2"))
