import {create, Whatsapp, Message, SocketState} from "venom-bot"
import {start} from "repl"

class Venon {
    public client: Whatsapp

    constructor() {
        this.initialize()
    }


    private initialize() 
    {
        const qr = (base64Qring: string) => {}
        const status = (statusSesssion: string) => {}

        const start = (client: Whatsapp) => {
            this.client = client
        }

        create("ws-sender-dv", qr, status)
            .then((client) => start(client))
            .catch((error) => console.error(error))

        

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

    private async sendText(contato: string, msg: string)
    {
        await this.client.sendText(contato, msg)
    }

}

export default Venon