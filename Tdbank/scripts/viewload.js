(function (global) {
    var viewViewModel,
        app = global.app = global.app || {};

    viewViewModel = kendo.data.ObservableObject.extend({
        
        show:function()
        {
            $('.inpbf').tipsy({gravity: 'se'});
            $('.IN1b').tipsy({gravity: 'se'});
            $('.IN3').tipsy({gravity: 'se'});
            $('.IN3b').tipsy({gravity: 'se'});
            $('.inpbf_sl').tipsy({gravity: 'se'});
            $('.IN1').tipsy({gravity: 'se'});
            $('.IN5').tipsy({gravity: 'se'});
            $('.IN6').tipsy({gravity: 'se'});
            $('.IN4').tipsy({gravity: 'se'});
        }
    });
    
    app.viewViewModel = {
        viewModel: new viewViewModel()	
    };
})(window);
