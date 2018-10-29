import { WebServer, WebAcceptor } from 'tgrid/protocol/web'

import MessageService from './internal/MessageService'

async function main() : Promise<void> {

    const server = new WebServer()

    server.open(10101, async (acceptor : WebAcceptor) => {

        await acceptor.accept()
        await acceptor.listen(new MessageService(acceptor.getDriver()))
    })

}

main().then(_ => console.log('🚀  Started'))