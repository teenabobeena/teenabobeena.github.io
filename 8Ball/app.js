const responses = ['Yes', 'My reply is no', 'Ask again later', 'It is certain', 'It is decidedly so', 'Without a doubt', 'Reply hazy, try again', 'Better not tell you now', 'Don\'t count on it', 'My sources say no', 'Yes definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Cannot predict now', 'Concentrate and ask again', 'Outlook not so good', 'Very doubtful', 'Signs point to yes'];

const len = responses.length;

function responseLoop() {
    let rand = Math.floor(Math.random() * len - 1);
    let quote = responses[rand];
    document.getElementById('demo').innerHTML = quote;
}