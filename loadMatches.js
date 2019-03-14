let container = document.getElementById("statistics");

let matches;

    Ajax.get("http://worldcup.sfg.io/matches", (data) => {
       matches = data; 
       historyCollection.push("Rendered matches info!");
       renderHomeTeams();
       console.log(historyCollection.length);
    });



function renderHomeTeams(){
    for (let i = 0; i < matches.length; i++) {
        var domDiv = document.createElement("div");
        domDiv.className = "container";
        container.appendChild(domDiv); 
        var domDivRow = document.createElement("div");
        domDivRow.className = "row";
        var myDate = new Date(matches[i].datetime).toDateString();
        domDiv.appendChild(domDivRow);
        var domDivColHomeTeam = document.createElement("div");
        domDivColHomeTeam.className ="col-sm";
        domDivRow.appendChild(domDivColHomeTeam);
        domDivColHomeTeam.append("Home Team : " + matches[i].home_team.country);
        console.log(matches[i]);

        var domDivColResult = document.createElement("div");
        domDivColResult.className ="col-sm";
        domDivRow.appendChild(domDivColResult);
        domDivColResult.append( " Result : " + matches[i].home_team.goals + " : " + matches[i].away_team.goals);

        var domDivColAwayTeam = document.createElement("div");
        domDivColAwayTeam.className ="col-sm";
        domDivRow.appendChild(domDivColAwayTeam);
        domDivColAwayTeam.append( " Away Team  : " + matches[i].away_team.country);

        var domDivInfo = document.createElement("div");
        var buttonInfoForLocation = document.createElement("button");
        buttonInfoForLocation.className = "btn btn-secondary";
        buttonInfoForLocation.append("Location");
        domDivInfo.appendChild(buttonInfoForLocation);
        buttonInfoForLocation.addEventListener("click",function(){
            var getDialog = document.getElementById("dialog");
            getDialog.innerHTML = "";
            getDialog.append("Location : " + matches[i].location + " --- " +  "Venue :" + matches[i].venue + " --- " + " Date : " + myDate 
            + " --- " + " Humidity : " + matches[i].weather.humidity + " --- " + " Wind Speed : " + matches[i].weather.wind_speed 
            + " --- " + " Tempreture : " + matches[i].weather.temp_celsius + " --- " + " Description : " + matches[i].weather.description   );
            var buttonX = document.createElement("button");
            buttonX.append("Close Window");
            getDialog.appendChild(buttonX);
            buttonX.addEventListener("click",function(){
                getDialog.close();
            });
            getDialog.showModal();
            historyCollection.push("Searched for location of match!");
        });


        var buttonInfoForTeams = document.createElement("button");
        buttonInfoForTeams.className = "btn btn-secondary";
        buttonInfoForTeams.append("Team Info");
        domDivInfo.appendChild(buttonInfoForTeams);
        buttonInfoForTeams.addEventListener("click",function(){
            historyCollection.push("Searched for team info!");
            var getDialog2 = document.getElementById("dialog2");
            getDialog2.innerHTML = "";
            //table home_team
            var domLabelHomeTeam = document.createElement("label");
            domLabelHomeTeam.append(matches[i].home_team.country + "passes completed" + matches[i].home_team_statistics.passes_completed + " yellow cards :" + matches[i].home_team_statistics.yellow_cards + " red cards : " + matches[i].home_team_statistics.red_cards)
            var domTableHome = document.createElement("table");
            getDialog2.appendChild(domTableHome);
            domTableHome.appendChild(domLabelHomeTeam);
            var domThPlayerHome = document.createElement("th");
            domThPlayerHome.append("Player");
            var domThShirtNumberHome = document.createElement("th");
            domThShirtNumberHome.append("Shirt Number");
            var domThPositionHome = document.createElement("th");
            domThPositionHome.append("Position");
            domTableHome.appendChild(domThPlayerHome);
            domTableHome.appendChild(domThShirtNumberHome);
            domTableHome.appendChild(domThPositionHome);

                //home team
                for (let j = 0; j < matches[i].home_team_statistics.starting_eleven.length; j++){
                var domTrHome = document.createElement("tr");
                domTableHome.appendChild(domTrHome);
                var domTdPlayerHome = document.createElement("td");
                domTdPlayerHome.setAttribute("width","12.5%");
                domTdPlayerHome.append(matches[i].home_team_statistics.starting_eleven[j].name);
        
                var domTdShirtNumberHome = document.createElement("td");
                domTdShirtNumberHome.setAttribute("width","12.5%");
                domTdShirtNumberHome.append(matches[i].home_team_statistics.starting_eleven[j].shirt_number);
        
                var domTdPositionHome = document.createElement("td");
                domTdPositionHome.setAttribute("width","12.5%");
                domTdPositionHome.append(matches[i].home_team_statistics.starting_eleven[j].position);
        
                
                
                domTrHome.appendChild(domTdPlayerHome);
                domTrHome.appendChild(domTdShirtNumberHome); 
                domTrHome.appendChild(domTdPositionHome); 
                
                
                }
                //table away_team
                var domLabelAwayTeam = document.createElement("label");
                domLabelAwayTeam.append(matches[i].away_team.country + "passes completed" + matches[i].away_team_statistics.passes_completed + " yellow cards :" + matches[i].away_team_statistics.yellow_cards + " red cards : " + matches[i].away_team_statistics.red_cards)
                var domTableAway = document.createElement("table");
                getDialog2.appendChild(domTableAway);
                domTableAway.appendChild(domLabelAwayTeam);
                var domThPlayerAway = document.createElement("th");
                domThPlayerAway.append("Player");
                var domThShirtNumberAway = document.createElement("th");
                domThShirtNumberAway.append("Shirt Number");
                var domThPositionAway = document.createElement("th");
                domThPositionAway.append("Position");
                domTableAway.appendChild(domThPlayerAway);
                domTableAway.appendChild(domThShirtNumberAway);
                domTableAway.appendChild(domThPositionAway);

                //away team
                for (let k = 0; k < matches[i].away_team_statistics.starting_eleven.length; k++){
                    var domTrAway = document.createElement("tr");
                    domTableAway.appendChild(domTrAway);
                    var domTdPlayerAway = document.createElement("td");
                    domTdPlayerAway.setAttribute("width","12.5%");
                    domTdPlayerAway.append(matches[i].away_team_statistics.starting_eleven[k].name);
            
                    var domTdShirtNumberAway = document.createElement("td");
                    domTdShirtNumberAway.setAttribute("width","12.5%");
                    domTdShirtNumberAway.append(matches[i].away_team_statistics.starting_eleven[k].shirt_number);
            
                    var domTdPositionAway = document.createElement("td");
                    domTdPositionAway.setAttribute("width","12.5%");
                    domTdPositionAway.append(matches[i].away_team_statistics.starting_eleven[k].position);
            
                    
                    
                    domTrAway.appendChild(domTdPlayerAway);
                    domTrAway.appendChild(domTdShirtNumberAway); 
                    domTrAway.appendChild(domTdPositionAway); 
                    
                    
                }




            var buttonX = document.createElement("button");
            buttonX.append("Close Window");
            getDialog2.appendChild(buttonX);
            buttonX.addEventListener("click",function(){
                getDialog2.close();
                historyCollection.push("Closed the button X!");
            });
            getDialog2.showModal();

        });


        domDivInfo.className ="col-sm btn-group";
        domDivRow.appendChild(domDivInfo);
       
    }
};




        