let container = document.getElementById("groups");

let groups;
historyCollection.push("Rendered groups page!"); 
    Ajax.get("http://worldcup.sfg.io/teams/group_results", (data) => {
       groups = data; 
       renderGroups();
       console.log(historyCollection.length);
    });

function renderGroups()
{
    
    for (let i = 0; i < groups.length; i++) {
        var domLabel = document.createElement("label");
        domLabel.append("Group " + groups[i].letter);
        container.appendChild(domLabel);
        var domTable = document.createElement("table");
        domTable.className= "table";
        container.appendChild(domTable);

        var domThCountry = document.createElement("th");
        domThCountry.append("Country");
        domThCountry.setAttribute("width","12.5%");
        domTable.appendChild(domThCountry);

        var domThWins = document.createElement("th");
        domThWins.append("Wins");
        domThWins.setAttribute("width","12.5%");
        domTable.appendChild(domThWins);

        var domThLosses = document.createElement("th");
        domThLosses.append("Losses");
        domThLosses.setAttribute("width","12.5%");
        domTable.appendChild(domThLosses);

        var domThDraws = document.createElement("th");
        domThDraws.append("Draws");
        domThDraws.setAttribute("width","12.5%");
        domTable.appendChild(domThDraws);

        var domThPoints = document.createElement("th");
        domThPoints.append("Points");
        domThPoints.setAttribute("width","12.5%");
        domTable.appendChild(domThPoints);

        var domThGP = document.createElement("th");
        domThGP.append("Games Played");
        domThGP.setAttribute("width","12.5%");
        domTable.appendChild(domThGP);

        var domThGF = document.createElement("th");
        domThGF.append("Goals for");
        domThGF.setAttribute("width","12.5%");
        domTable.appendChild(domThGF);

        var domThGA = document.createElement("th");
        domThGA.append("Goals against");
        domThGA.setAttribute("width","12.5%");
        domTable.appendChild(domThGA);

        

        for (let j = 0; j < groups[i].ordered_teams.length; j++){
        var domTr = document.createElement("tr");
        domTable.appendChild(domTr);
        var domTdCountry = document.createElement("td");
        domTdCountry.setAttribute("width","12.5%");
        domTdCountry.append(groups[i].ordered_teams[j].country);

        var domTdWins = document.createElement("td");
        domTdWins.setAttribute("width","12.5%");
        domTdWins.append(groups[i].ordered_teams[j].wins);

        var domTdLosses = document.createElement("td");
        domTdLosses.setAttribute("width","12.5%");
        domTdLosses.append(groups[i].ordered_teams[j].losses);

        var domTdDraws = document.createElement("td");
        domTdDraws.setAttribute("width","12.5%");
        domTdDraws.append(groups[i].ordered_teams[j].draws);

        var domTdPoints = document.createElement("td");
        domTdPoints.setAttribute("width","12.5%");
        domTdPoints.append(groups[i].ordered_teams[j].points);

        var domTdGP = document.createElement("td");
        domTdGP.setAttribute("width","12.5%");
        domTdGP.append(groups[i].ordered_teams[j].games_played);

        var domTdGF = document.createElement("td");
        domTdGF.setAttribute("width","12.5%");
        domTdGF.append(groups[i].ordered_teams[j].goals_for);

        var domTdGA = document.createElement("td");
        domTdGA.setAttribute("width","12.5%");
        domTdGA.append(groups[i].ordered_teams[j].goals_against);
        console.log(groups[i].ordered_teams[j]);
        
        domTr.appendChild(domTdCountry);
        domTr.appendChild(domTdWins); 
        domTr.appendChild(domTdLosses); 
        domTr.appendChild(domTdDraws); 
        domTr.appendChild(domTdPoints); 
        domTr.appendChild(domTdGP); 
        domTr.appendChild(domTdGF); 
        domTr.appendChild(domTdGA); 
        
        }
    }
}