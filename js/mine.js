
var store=[]
var oneWebsite;


function addWebsite()
{
     oneWebsite ={
        siteName : document.getElementById("NameId").value ,
        siteURL : document.getElementById("WebsiteId").value,
    }

    store.push(oneWebsite);
    
    
    clear()


    display()

    

}


function clear()
{
    document.getElementById("NameId").value = null;
    document.getElementById("WebsiteId").value = null;
}

function display()
{
    var cartoona="";

    for( var i=0 ; i < store.length ; i++)
    {
         cartoona +=`<tr><td>`+Number(i+1) +`</td>`+
        `<td>`+  store[i].siteName + `</td>`+
        `<td><button onclick="visit(`+i+`) class="z"> <i class="fa-solid fa-eye" style="color: #ffffff;"> visit</i></button></td>`+
        `<td><button class="a" onclick="remove(`+i+`)"><i class="fa-solid fa-trash-can" style="color: #ffffff;"></i> delete    </button ></td></tr>`
  
    }

        document.getElementById("tbody").innerHTML=cartoona


}
function visit()
{
    store.
}


function remove(Index)
{
    store.splice(Index , 1)
    display()
}

