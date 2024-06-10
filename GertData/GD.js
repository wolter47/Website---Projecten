function searchInJSON(searchVal,searchField)
{
    console.log("in SearchJSON");
    var results = [];
    fetch("data.json")
    .then(response=>response.json())
    .then(data => {
        for (var i=0 ; i < obj.list.length ; i++)
            {
                console.log("in for loop");
                if (obj.list[i][searchField] == searchVal) 
                {
                    results.push(obj.list[i]);
                }
            }
            console.log(results);
    });
}
function GetInfo()
{
    console.log("in get info");
    var results = [];
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    console.log("got info in");
    searchInJSON(username,"username");
}