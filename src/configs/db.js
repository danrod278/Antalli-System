import { MongoClient } from 'mongodb'
import { dotenVariables } from '../../dotenvVariables.js'
async function conection() {
    const uri = dotenVariables.URIDB
    const client = new MongoClient(uri)

    try{
       await client.connect()
       console.log('✅ Conectou!')
    }catch(err){
        console.log(err)
    }
}

export default conection()
