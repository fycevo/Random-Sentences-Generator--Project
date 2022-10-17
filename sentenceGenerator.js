function generator(){
    let names = ['Peter', 'Ivan', 'Viktor', 'Ryan', 'Seth'];
    let places = ['Sofia', 'Varna', 'Sliven', 'Plovdiv'];
    let verbs = ['eats', 'sees', 'brings', 'plays with', 'holds'];
    let nouns = ['cake', 'chocolate', 'sushi', 'cars'];
    let adverbs = ['slowly', 'carefully', 'sadly', 'rapidly', 'warmly'];
    let details = ['at home', 'near the river', 'in the park'];

    let sentence = generateSentence();

    console.log('Hello, this is your first random sentence:');
    console.log(sentence);
    
    const prompt = require("prompt-sync")({sigint:true});
    let userInput = '';
    while(userInput!='End'){
        userInput = prompt('Type "End" to stop the program or type anything to generate a new one: ');
        sentence = generateSentence();
        console.log(sentence);
    }

    function generateSentence(){
        let randomName = generateWord(names);
        let randomPlace = generateWord(places);
        let randomVerb = generateWord(verbs);
        let randomNoun = generateWord(nouns);
        let randomAdverb = generateWord(adverbs);
        let randomDetail = generateWord(details);

        function generateWord(arr){
            return arr[Math.floor(Math.random()*arr.length)];
        }
        return `${randomName} from ${randomPlace} ${randomAdverb} ${randomVerb} ${randomNoun} ${randomDetail}.`;
    }
}
generator();