const Underscore = require("underscore")
require("underscore")
var setLastMessage = (function() 
{
    var executed = false;
     return function() 
    {
         if (!executed) 
            {
             executed = true;
             var lastMessage = "last message";
             console.log("last message set");
             console.log(lastMessage)
             return lastMessage            
            }
    };
})();  


var init =_.once(setLastMessage)

setLastMessage();
setLastMessage();
setLastMessage();