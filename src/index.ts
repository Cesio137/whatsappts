import simsimi from "./simsimi/simsimi";
import Venon from "./venon-bot";


class Main
{
    //variables
    public venon: Venon
    public Simsimi: simsimi
    Contatos = ['555183081839@c.us']
    Replyonly = ['555183081839@c.us']
    Messages = ['teste']

    constructor()
    {
        this.Initialize()
    }

    private Initialize()
    {
        this.venon = new Venon()
        this.Simsimi = new simsimi()
        this.onStarted()
    }

    async onStarted()
    {
        while (this.venon.client == undefined)
        {
            await this.delay(1000)
        }
        console.log('API INITIALIZED')
        
        this.venon.client.onMessage(async (message) => {

            if (this.Replyonly.includes(message.from))
            {
                const data = await this.Simsimi.getAnswer(message.body)
                this.venon.replyMessage(message.from, data)
            }

        })
        
    }

    private delay(ms: number) 
    {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

}

export default Main

