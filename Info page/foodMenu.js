
function increment() {

    var i;
    for(i = 0; i < 6; i++)
    {
        var n = document.getElementsByTagName("p")[0];
        var idName;
        if(n.id === "firstItem")
        {
            idName = "firstItem"
           
        }

        else if(n.id === "secondItem")
            idName = "secondItem";        
    }

    var n = document.getElementById(idName).innerHTML;
    var newNum = parseInt(n,10);
    newNum++;
    document.getElementById(idName).innerHTML = newNum;
}
    
                        