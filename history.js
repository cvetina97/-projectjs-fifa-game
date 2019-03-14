let container = document.getElementById("table");
let button = document.getElementById("render");

let groups;
historyCollection.push(window.location.href + "visited"); 
    renderHistory();

function renderHistory()
{
    var date = new Date();

    for (let index = 0; index < historyCollection.length; index++) {
        var domTr = document.createElement("tr");
        container.appendChild(domTr);
        var domTdHistoryInfoActivities = document.createElement("td");
        domTdHistoryInfoActivities.append(historyCollection[index]);
        domTr.appendChild(domTdHistoryInfoActivities);
        var domTdHistoryInfoDateTime = document.createElement("td");
        domTdHistoryInfoDateTime.append(date.toDateString());
        domTr.appendChild(domTdHistoryInfoDateTime);
    }

    console.log(window.history);
    
}