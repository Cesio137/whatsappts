import {create, Whatsapp, Message, SocketState} from "venom-bot"

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

        create({session: 'whatsappbot', multidevice: false})
            .then((client) => start(client))
            .catch((erro) => {console.log(erro)})


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