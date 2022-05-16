var container=document.createElement('div');
 container.className="container"
 var row=document.createElement('div');
 row.className="row"
 row.className="d-flex justify-content-center"
 var h1=document.createElement('h1');
 h1.setAttribute("id","title");
 h1.innerText="Brewery Data"

 var div=document.createElement('div');
 div.className="form-group";
 div.className="pt-5"

 var form=document.createElement('form');
 form.setAttribute('id', 'form');

var label=document.createElement("label");
label.innerHTML="Enter the Brewery name";
label.setAttribute("for","text");

var br=document.createElement("br");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","text");
input.setAttribute("required","true");

var br1=document.createElement("br");

var button=document.createElement("button");
input.setAttribute("id","text");
button.className="btn btn-primary"
button.addEventListener("click",foo);
button.innerHTML="Search";


// label.append(label,br,input,br1,button);
form.append(label,br,input,br1,button);
div.append(h1,form);
row.append(div);
container.append(row);
document.body.append(container);


async function foo(){
    try{
    let cc=document.getElementById("text").value;
    let res=await fetch(`https://api.openbrewerydb.org/breweries?by_name=${cc}`);
    let res1=await res.json();
    // console.log(res1);
    for(var i=0;i<res1.length;i++){
        // console.log(`Active:${res1[i].Active} Deaths:${res1[i].Deaths}`);
    
       var ele=document.createElement("div");
       ele.style.color="blue";
       ele.style.fontSize="32px";
       ele.innerHTML=`Name:${res1[i].name}<br>
        Type:${res1[i].brewery_type}<br> 
        Address:${res1[i].address_2}<br> 
        Website.URL:${res1[i].website_url}<br>
        Phone no.:${res1[i].phone}`

       document.body.append(ele);
    
     
    }
}catch(error){
console.log(error);
}

}
