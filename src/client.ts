import { WebConnector } from 'tgrid/protocol/web'
import { Driver } from 'tgrid/base'

import IMessageService from './internal/interface/IMessageService'
import MessagePrinter from './internal/MessagePrinter'

async function main() : Promise<void> {

    const connector = new WebConnector(new MessagePrinter())
	await connector.connect('ws://127.0.0.1:10101')

	const messageService : Driver<IMessageService> = connector.getDriver<IMessageService>()
    let name : string

    await connector.close()

}

main()