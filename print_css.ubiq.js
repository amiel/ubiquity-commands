// Trying to write a ubiquity command that will show print stylesheets in the browser

CmdUtils.CreateCommand({
  name: "cssp",
  
  preview: function(pblock) {
    var doc = Application.activeWindow.activeTab.document;

a=jQuery('link[rel=stylesheet]', doc);

    //
//document.styleSheets[0].media.appendMedium('handheld');
//document.styleSheets[0].media.deleteMedium('print');
    
    //for( var i = 0; i < document.styleSheets[0].media.length; i++ ) {
 // alert(document.styleSheets[0].media.item[i]);
//}
    CmdUtils.log(a);
    pblock.innerHTML = "a";
  
  },
  
  
  execute: function() {
    
    
var doc = Application.activeWindow.activeTab.document;
// find div.foo in the body of that document
jQuery('#content', doc.body).html('woot');
    displayMessage( "Hello, World!" );
  }
})
