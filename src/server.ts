import { WebServer } from 'tgrid/protocol/web'

async function main() : Promise<void> {

    const server = new WebServer()

}

main().then(_ => console.log('🚀  Started'))