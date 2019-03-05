$(document).ready( function(){
    // wait for document to be loaded
    console.log('document ready');
    getQueryVariable("id");
    

    });

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       console.log('query');
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){
                console.log('pair[1]');
                  $('p4').html(pair[1]+"  Oh Yeah!");
                  }
       }
       return(false);
}