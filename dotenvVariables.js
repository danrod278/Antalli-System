import dotenv from 'dotenv'
dotenv.config()

export const dotenVariables = {
    PORT: process.env.PORT,
    URIDB: process.env.URIDB
}