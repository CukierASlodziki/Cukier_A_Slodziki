var i=1;
function next(){
    document.getElementById("div"+i).style.display = "none";
    i++;
    //if(i>=0){
       // i=1;
    //}
    document.getElementById("div"+i).style.display = "block";
}
function previous(){
    document.getElementById("div"+i).style.display = "none";
    i--;
    if(i<=0){
        i=1;
    }
    document.getElementById("div"+i).style.display = "block";
}