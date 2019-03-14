
let container = document.getElementById("participantsData");
let button = document.getElementById("render");

let group_resultsData;
let teamsData;  
historyCollection.push("Rendered participants page!"); 

button.addEventListener("click",function(){
    Ajax.get("http://worldcup.sfg.io/teams/", (data) => {
    teamsData = data; 
    renderHtml(); 
    
});

});

 Ajax.get("http://worldcup.sfg.io/teams/group_results", (data) => {
    group_resultsData = data; 
    renderSearch();
    
 });


function renderHtml()
{
    for (let index = 0; index < teamsData.length; index++) {
        var domTr = document.createElement("tr");
        container.appendChild(domTr); 
        var domTd = document.createElement("td");
        var domTdCode = document.createElement("td");
        domTr.appendChild(domTd); 
        domTr.appendChild(domTdCode);
        domTd.append(teamsData[index].country);
        domTdCode.append(teamsData[index].fifa_code);
        renderScors(teamsData[index].id, teamsData[index].group_letter, domTr);
        
        
    }
}

function renderScors(id,letter, domTr){
    for (let index = 0; index < group_resultsData.length; index++) {
        if (group_resultsData[index].letter === letter) {
            for (let j = 0; j < group_resultsData[index].ordered_teams.length; j++) {
                if (group_resultsData[index].ordered_teams[j].id == id) {
                    var domTd = document.createElement("td");
                    domTr.appendChild(domTd); 
                }
            }
        }
       
    }
};
