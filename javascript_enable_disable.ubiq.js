noun_type_enable_disable = new CmdUtils.NounType( "Enable / Disable", ['enable', 'disable'] );
 
CmdUtils.CreateCommand({
  name: "javascript",
  synonyms: ['js'],
  description: 'Enable or disable javascript for your browser. You will have to refresh the page for changes to take effect.',
 
  author: {
    name: 'Amiel Martin',
    email: 'amiel@tatango.com'
  },
 
 
  takes: {"enable / disable": noun_type_enable_disable},
 
  _bool_to_enable_disable: function(value) {
    switch(value) {
      case false:
      case 'false':
      return 'disable';
      break;
      default:
      return 'enable';
      break;
    };
  },
 
  _enable_disable_to_bool: function(value) {
    return value.text == 'enable'
  },
 
  _set_javascript_enabled: function(value){
    Application.prefs.setValue("javascript.enabled", value);
  },
 
  _get_javascript_enabled: function() {
    return Application.prefs.getValue("javascript.enabled", undefined);
  },
 
 
 
 
  preview: function( pblock, enable_disable ) {
 
    var msg = '${enable_disable} javascript. Javascript is currently: "<i>${currently}d</i>"';
    pblock.innerHTML = CmdUtils.renderTemplate( msg, {
      enable_disable: (enable_disable.text == "" ? 'Enable / disable' : enable_disable.text),
      currently: this._bool_to_enable_disable(this._get_javascript_enabled())
    });
  },
 
  execute: function(enable_disable) {
    this._set_javascript_enabled(this._enable_disable_to_bool(enable_disable));
    displayMessage('javascript ' + enable_disable.text + 'd');
  }
});