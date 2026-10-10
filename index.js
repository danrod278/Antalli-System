import app from './src/app.js'
import {dotenVariables} from './dotenvVariables.js'
app.listen(dotenVariables.PORT, () => {
    console.log('Servidor rodando na porta', process.env.PORT)
})