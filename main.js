var qoute = [
    ["The greatest glory in living lies not in never falling, but in rising every time we fall. ", "Nelson Mandela"], 
    ["The way to get started is to quit talking and begin doing.", "Walt Disney"], 
    ["Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", "Steve Jobs"], 
    ["If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", "Oprah Winfrey"], 
    ["Life is what happens when you're busy making other plans.", "John Lennon"], 
    ["Spread love everywhere you go. Let no one ever come to you without leaving happier.", "Mother Teresa"], 
    ["When you reach the end of your rope, tie a knot in it and hang on.", "Franklin D. Roosevelt"], 
    ["Always remember that you are absolutely unique. Just like everyone else.", "Margaret Mead"], 
    ["Don't judge each day by the harvest you reap but by the seeds that you plant.", "Robert Louis Stevenson"], 
    ["The future belongs to those who believe in the beauty of their dreams", "Eleanor Roosevelt"], 
    ["Tell me and I forget. Teach me and I remember. Involve me and I learn.", "Benjamin Franklin"], 
    ["It is during our darkest moments that we must focus to see the light.", "Aristotle"], 
    ["The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", "Helen Keller"], 
    ["Life is 10% what happens to me and 90% of how I react to it.", "Charles Swindoll"], 
    ["Nothing is impossible, the word itself says, ‘I'm possible!'", "Audrey Hepburn"], 
    ["Whatever the mind of man can conceive and believe, it can achieve.", "Napoleon Hill"], 
    ["Dreaming, after all, is a form of planning.", "Gloria Steinem"], 
    ["If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", "Oprah Winfrey"], 
    ["Dreaming, after all, is a form of planning.", "Gloria Steinem"], 
    ["I didn't fail the test. I just found 100 ways to do it wrong.", "Benjamin Franklin"], 
    ["Dreaming, after all, is a form of planning.", "Gloria Steinem"], 
    ["It does not matter how slowly you go as long as you do not stop.", "Confucius"], 
    ["You miss 100% of the shots you don't take.", "Wayne Gretzky"], 
    ["Believe you can and you're halfway there.", "Theodore Roosevelt"],
    ["If you genuinely want something, don't wait for it — teach yourself to be impatient", "Gurbaksh Chahal"]
];
var clr =[
    ["#DE7119"],
    ["#57837B"],
    ["#39A6A3"],
    ["#7FCD91"],
    ["#F55C47"],
    ["#4AA96C"],
    ["#FFC93C"],
    ["#8CBA51"],
    ["#FF6F5E"],
    ["#61234E"]
];
$('button').on('click', function(){
    var random_qoute = Math.floor(Math.random() * qoute.length);
    var random_color = Math.floor(Math.random() * clr.length);

    $('.fas').css('color', clr[random_color][0]);
    $('.q').html('<p>' +qoute[random_qoute][0]+ '</p>');
    $('.a').html('<p>' + '- '+qoute[random_qoute][1]+ '</p>').css('color', clr[random_color][0]);
    $('button').css('background-color', clr[random_color][0]);
    $('body').css("background-color", clr[random_color][0]);
    // console.log(qoute[random_qoute][0] +  "\n-" + qoute[random_qoute][1]);
});

// var sample =[
//     ["#DE7119", 1],
//     ["#57837B", 2],
//     ["#39A6A3", 3],
//     ["#7FCD91", 4],
//     ["#F55C47", 5],
//     ["#4AA96C", 6],
//     ["#FFC93C", 7],
//     ["#8CBA51", 8],
//     ["#FF6F5E", 9],
//     ["#61234E", 10]
// ];



// for(let i = 0; i < sample.length; i++){
//     console.log('array name: '+sample[i][0] + '\narray count: '+ sample[i][1]);
// }
// function add_num(num1, num2){
//      num1 = prompt('Enter fnumber: ');
//      num2 = prompt('Enter snumber: ');
//     return num1 + num2;
// }
// function minus_num(num1, num2){
//     num1 = prompt('Enter fnumber: ');
//     num2 = prompt('Enter snumber: ');
//    return num1 - num2;
// }
// function times_num(num1, num2){
//     num1 = prompt('Enter fnumber: ');
//     num2 = prompt('Enter snumber: ');
//    return num1 * num2;
// }
// function divide_num(num1, num2){
//     num1 = prompt('Enter fnumber: ');
//     num2 = prompt('Enter snumber: ');
//    return num1 / num2;
// }
// var equation = prompt('enter equation: ');

// if(equation == '+'){
//     console.log(add_num());
// }
// else if(equation == '-'){
//     console.log(minus_num());
// }
// else{
//     console.log('Invalid equation, reload the page.');
// }
//  var num1 = prompt('first number : ');
//  var num2 = prompt('second number : ');

//  var equation = prompt('equation: ');
// if(equation == '*'){
//     console.log(num1 + ' and ' + num2);
//     console.log(num1 * num2);
// }
// else if(equation == '+'){
//     console.log(num1 + ' and ' + num2);
//     var equal = num1 + num2;
//     console.log(equal);
// }
// else if(equation == '-'){
//     console.log(num1 + ' and ' + num2);
//     console.log(num1 - num2);
// }
// else if(equation == '/'){
//     console.log(num1 + ' and ' + num2);
//     console.log(num1 / num2);
// }
// else{
//     console.log('invalid');
// }