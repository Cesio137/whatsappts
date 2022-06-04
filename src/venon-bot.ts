import {create, Whatsapp, Message, SocketState} from "venom-bot"

class Venon {
    private client: Whatsapp

    constructor() {
        this.initialize()
    }


    private initialize() 
    {
        create({session: 'whatsappbot', multidevice: false})
            .then((client) => this.start(client))
            .catch((erro) => {console.log(erro)})

    }

    private start(client:Whatsapp)
    {
        this.client = client
    }

    public getCurrentClient():Whatsapp
    {
        return this.client
    }

    

    private async sendText(contato: string, msg: string)
    {
        await this.client.sendText(contato, msg)
    }

    public sendMessage(contatos, msgs)
    {
        for (let contato of contatos) 
        {
            for (let msg of msgs)
                this.client.sendText(contato, msg)
        }
    }

    public replyMessage(contato, msg)
    {
        this.sendText(contato, msg)
    }

}

export default Venon