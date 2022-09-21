// let name1 = document.getElementById('name1')
// let name2 = document.getElementById('name2')
// let answer = document.getElementById('Answer')


// // function()
// // for(i=name1.length-1;i>=0;i--){
// //     if(name1==name2)
// //         {
            
            
// //             //console.log("yes it is plain" + string1)
// //         }
// //         else{
// //             console.log("not")
// //         }
// //     }

    // function compare_input(){
    //     var name1=document.getElementById('name1').value;
    //     var name2=document.getElementById('name2').value;
    //     for(i=name1.length-1;i>=0;i--){
    //         if(name1==name2)
    //             {
    //                 var Answer =document.getElementById('Answer').value = "Yes";
    //               //  console.log("yes it is plain" + string1)
    //             }
    //             else{
    //                 var Answer =document.getElementById('Answer').value = "No";
    //             }
    //         }
    //   }

    //    document.getElementById("myBtn").addEventListener("click", listen=(e)=>{
    //      var name1=document.getElementById('name1').value;
    //      var name2=document.getElementById('name2').value;
    //      for(i=name1.length-1;i>=0;i--){
    //          if(name1==name2)
    //              {
    //                  var Answer =document.getElementById('Answer').value = "Yes";
    //                //  console.log("yes it is plain" + string1)
    //              }
    //              else{
    //                  var Answer =document.getElementById('Answer').value = "No";
    //              }
    //          }
    //   })
document.getElementById("myBtn").addEventListener("click", myFunction);   
function myFunction() {
   
    var name1=document.getElementById('name1').value;
    //var rev=document.getElementById('rev').value = string;
    var rev = ""
    for(i=name1.length-1;i>=0;i--){
        
        rev = document.getElementById('rev').value = rev+name1.charAt(i)
        }

        if(name1==rev)
        {
            
            var Answer =document.getElementById('Answer').value = "Yes its Palindrom";
            
          //  console.log("yes it is plain" + string1)
        }
        else{
           
            var Answer =document.getElementById('Answer').value = "No its Palindrom ";
            
        }
  }

  document.getElementById("myBtn2").addEventListener("click", myFunction2);
  function myFunction2() {
    var name1=document.getElementById('name1').value = ""
   var rev =  document.getElementById('rev').value = ""
   var Answer =document.getElementById('Answer').value = ""

  }