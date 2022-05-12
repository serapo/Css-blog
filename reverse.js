
    function my_function(word){
          //console.log(word);
          let b=word.split("");
          let c=b.reverse().join('');
          return c;
          
    }

for (let i=0;i<=5;i++){
    let word=prompt("Enter a word");
    
    console.log(`Girilen kelime ${word}  Tersten yazımı :`+my_function(word));
    
}
