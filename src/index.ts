import Venon from "./venon-bot";


class Main
{
    //variables
    public venon: Venon
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
        this.onStarted()
    }

    async onStarted()
    {
        while (this.venon.client == undefined)
        {
            await this.delay(1000)
        }
        console.log('API INITIALIZED')
        //this.sender.sendMessageForEachContact(this.Contatos, this.Messages)
        this.venon.client.onMessage((message) => {
            
        })
        
    }

    private delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    
    
}

export default Main

