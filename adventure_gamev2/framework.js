class Place {
    constructor (promptText = "",Choices = {}) {
        this.Choices = Choices;
        this.Options = Object.keys(Choices);
        this.promptText = promptText + "\n";
        for (var i in this.Options) {
            this.promptText += `--${this.Options[i]}--\n`;
        }
    }
    start () {
        var run = true;

        while (run) {
            var option = prompt(this.promptText);
            
            if(typeof(option) == "string") {
                option = option[0].toLocaleLowerCase();
                for (var i in this.Choices) {
                    if (option == i[0].toLocaleLowerCase()) {
                        var outcome = this.Choices[i];
                        if (typeof(outcome) == "function") {
                            return outcome;
                        }
                        else if (typeof(outcome) == "object") {
                            return this._SubOptions(outcome, i);
                        }
                        else {alert(`ERROR: ${this.Options[i]} is not a function or object`)};
                        run = false;
                    }
                }
            }
        }
    }

    _SubOptions(objc, OriginalOption = "") {
        var obj = {};
        for(i in objc) {
            obj[i] = objc[i];
        }
        if (typeof(objc["prompt"]) == "undefined") {
            alert(`ERROR: ${OriginalOption} has no prompt\nthere must be an option named prompt in the suboptions`);
            return function () {alert("error")};
        }
        else if (typeof(objc["prompt"]) == "string") {
            var prom = `${OriginalOption}: ${obj["prompt"]}\n`;
            delete obj.prompt;
            var keys = Object.keys(obj);
            for (var key in keys) {
                prom += `*-${keys[key]}-*\n`;
            }
            var run = true;
            while (run) {
                var option = prompt(prom);
                
                if(typeof(option) == "string") {
                    option = option[0].toLocaleLowerCase();
                    for (var i in obj) {
                        if (option == i[0].toLocaleLowerCase()) {
                            var outcome = obj[i];
                            if (typeof(outcome) == "function") {
                                return outcome;
                            }
                            
                            else {alert(`ERROR: ${i} is not a function`)};
                            run = false;
                        }
                    }
                }
            }

        }
            
        else {
            alert(`ERROR: the value of prompt is not a string`);
            return function () {alert("error")};
        }

    }
}