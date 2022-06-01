import Main from "./src";
import simsimi from "./src/simsimi/simsimi";

//const main = new Main()

const SS = new simsimi()

async function run() {
    const data = await SS.getAnswer('OLA');
    console.log(data); // will print your data
  }

  run()
