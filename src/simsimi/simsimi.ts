import axios from "axios"

class simsimi 
{
    constructor()
    {

    }

    public async getAnswer(text):Promise<string>
    {
        let request = 'https://api-sv2.simsimi.net/v2/?text=' + text + '&lc=pt&cf=false'
        let answer = await Promise.resolve((await axios.get(request)).data)
        //console.log(answer.success)
        return answer.success
    }

    private delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
}

export default simsimi