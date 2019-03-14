var button = document.getElementById("search");
var table = document.getElementById("table");

historyCollection.push("Rendered search page!"); 
let groups;

Ajax.get("http://worldcup.sfg.io/teams/group_results", (data) => {
    groups = data;  
    renderSearch();
    
});

button.addEventListener("click",function(){
    search();
 });

var selectGroup = document.getElementById("group");
var selectCountry = document.getElementById("country");
var selectWins = document.getElementById("wins");



function renderSearch(){
    var group = document.getElementById("group");
    var country = document.getElementById("country");
    var wins = document.getElementById("wins");
    for (let i = 0; i < groups.length; i++) {
        var optionGroup = document.createElement("option");
        optionGroup.append(groups[i].letter);
        for (let j = 0; j < groups[i].ordered_teams.length; j++) {
        var optionCountry = document.createElement("option");
        optionCountry.append(groups[i].ordered_teams[j].country);
        var optionWins = document.createElement("option");
        optionWins.append(groups[i].ordered_teams[j].wins);
        group.appendChild(optionGroup);
        country.appendChild(optionCountry);
        wins.appendChild(optionWins);
            
        }
        
    }
}



        
function search(){
    var groupValue = selectGroup.options[selectGroup.selectedIndex].value;
    var countryValue = selectCountry.options[selectCountry.selectedIndex].value;
    var winsValue = selectWins.options[selectWins.selectedIndex].value;
    console.log(groupValue);
    console.log(countryValue);
    console.log(winsValue);

    var group_needle = groupValue;
    var country_needle = countryValue;
    var wins_needle = winsValue;
    for (let i = 0; i < groups.length; i++) {
        for (let j = 0; j < groups[i].ordered_teams.length; j++) {
            if(groups[i].letter == group_needle && groups[i].ordered_teams[j].country == country_needle && groups[i].ordered_teams[j].wins == wins_needle ){
                console.log(groups[i].letter + " " + groups[i].ordered_teams[j].country + " " + groups[i].ordered_teams[j].wins);

            }
            else if(groups[i].letter == group_needle && groups[i].ordered_teams[j].group_letter == group_needle){
                console.log(groups[i].ordered_teams[j].country);
            }
            else if(groups[i].letter == group_needle && groups[i].ordered_teams[j].group_letter == group_needle && groups[i].ordered_teams[j].wins == wins_needle){
                    console.log(groups[i].ordered_teams[j].country + " " + groups[i].ordered_teams[j].wins);

            }
            
    }
}



   
}