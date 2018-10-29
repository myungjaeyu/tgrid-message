import IMessagePrinter from './interface/IMessagePrinter'

export default class MessagePrinter implements IMessagePrinter {

    public talk(name : string, content : string) : void {

        console.log(`${ name }: ${ content }`)

    }

}