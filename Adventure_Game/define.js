function input(msg) {
    return prompt(msg);
}

class Place {
    constructor(InputMsg, Options, outcomes) {
        this.prmpt = InputMsg;
        this.options = Options;
        this.outComes = outcomes;
    }
    
    Run() {
        while(true) {
            let option = prompt(this.prmpt)[0].toLocaleLowerCase();
            for(opt in this.options)
        }
    }
}