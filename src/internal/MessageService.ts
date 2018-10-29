import IMessageService from './interface/IMessageService'
import IMessagePrinter from './interface/IMessagePrinter'

import { Driver } from 'tgrid/base'

import { HashMap } from 'tstl/container/HashMap'

export default class MessageService implements IMessageService {

    private static users : HashMap<string, Driver<IMessagePrinter>> = new HashMap()
    private driver : Driver<IMessagePrinter>
    private name : string

    public constructor(driver : Driver<IMessagePrinter>) {

        this.driver = driver

    }

    public setName(name : string): boolean {

		return true
    }

    public talk(content : string): void {

    }

}