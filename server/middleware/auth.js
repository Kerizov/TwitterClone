import UrlPattern from 'url-pattern'
import {decodeAccessToken} from "~/server/utils/jwt";
import {sendError} from "h3";
import {getUserById} from '../db/users.js'

export default defineEventHandler(async (event) => {
    const endpoints = [
        '/api/auth/user'
    ]

    const isHandledByThisMiddleware = endpoints.some(endpoint => {
        const pattern = new UrlPattern(endpoint)

        return pattern.match(event.req.url)
    })

    if(!isHandledByThisMiddleware){
        return
    }

    const token = event.req.headers['authorization']?.split(' ')[1]

    const decoded = decodeAccessToken(token)

    if(!decoded){
        return sendError(event, createError({
            statusMessage: 'Unauthorized',
            statusCode: '401'
            })
        )
    }

    try {
        const userId = decoded.userId

        const user = await getUserById(userId)

        event.context.auth = { user }

    }catch (e) {
        return e
    }

})

