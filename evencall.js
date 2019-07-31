
function check(){
function read(a,callback){
   
    if (a%2==0){
    var c="even";
    
    }
    else
    {
        c="odd";
        callback(c);
    };
    
    var a=document.getElementById("name1").value;
    read(a,(res)=>{
    document.getElementById("result").innerHTML=res; 
    })
    
];