import IMessageService from './interface/IMessageService'
import IMessagePrinter from './interface/IMessagePrinter'

import { Driver } from 'tgrid/base'

import { HashMap } from 'tstl/container/HashMap'

export default class MessageService implements IMessageService {

    private static users : HashMap<string, Driver<IMessagePrinter>> = new HashMap()

}