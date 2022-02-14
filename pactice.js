        // programming er choddogushthi with jhankar mahbub
//1. this word count function
function wordCount(boktrita) {
    var count = 0;
    for (var i = 0; i < boktrita.length; i++) {
        if(boktrita[i] ==" "){
        count++
        } 
    }
    count++
    return count
}
var kaisar = wordCount("ami tomake valobasi priya tomake chara ami bachy kemn kore");
console.log(kaisar)
var kamrul = wordCount("l love you my jan");
console.log(kamrul);


// 2. this unice name Search
// var names = ['kaisar', 'atik', 'abul', 'asa', 'mahim', 'asa', 'kabul', 'kaisar', 'mamun'];
    var love = unicName(['kaisar', 'atik', 'abul', 'asa', 'mahim', 'asa', 'kabul', 'kaisar', 'mamun']);
        function unicName(names) {
            var selected = [];
            for (let i = 0; i < names.length; i++) {
                var name = names[i];
                if(selected.indexOf(name) == -1){
                    selected.push(name);
                } 
            }
            return selected; 
        }
    console.log(love)


//3. this Rivese srigns
var word = "kaisar ahamed sagor";
var reverseWord = "";
for(var i = word.length-1; i>=0; i--){
        var letter = word[i];
        reverseWord =reverseWord + letter;
}
console.log(reverseWord)
var name = "kaisar ahamed"
var kaisar = wordCheek(name);
function wordCheek(word) {
        var reserseWord = "";
        for (var i = word.length-1; i >= 0; i--){
                var letter = word[i];
                reserseWord = reserseWord + letter;      
        }
        return reserseWord;
}
console.log(kaisar);

var name = "madam";
var word = "";
for(var i = name.length-1; i>=0; i--){
        var letter = name[i];
        word = word + letter;
        if(name == word){
                console.log("this is pendolam Number");
        }
        else{
                console.log("this is not pendolam number");
        }

}

