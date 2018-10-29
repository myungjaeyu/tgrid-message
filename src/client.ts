import { WebConnector } from 'tgrid/protocol/web'
import { Driver } from 'tgrid/base'

import IMessageService from './internal/interface/IMessageService'
import MessagePrinter from './internal/MessagePrinter'

import { createInterface } from 'readline'


const _read = (question: string): Promise<string> => 
    new Promise(resolve => {

        let readline = createInterface({ input: process.stdin, output: process.stdout })

        readline.question(question, input => {
            resolve(input)

            readline.close()
        })

    })

async function main() : Promise<void> {

    const connector = new WebConnector(new MessagePrinter())
	await connector.connect('ws://127.0.0.1:10101')

	const messageService : Driver<IMessageService> = connector.getDriver<IMessageService>()
    let name : string


	while (true) {

        name = await _read('insert name : ')

        if (await messageService.setName(name) === true) break
	}

    await connector.close()

}

main()