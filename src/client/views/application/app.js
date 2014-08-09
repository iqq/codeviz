
// --------------------------------------------------------------------------------------------------------------------
// STARTUP
// --------------------------------------------------------------------------------------------------------------------

Meteor.startup(function() {

    //Export | Singelton
    app = this.app || new App();

});//Meteor.startup

// --------------------------------------------------------------------------------------------------------------------
// CLASS | App
// --------------------------------------------------------------------------------------------------------------------

    //Constructor Reference
    App.prototype.constructor = App;

// ---------------------------------------------------------------------------------------------------------------------
// CONSTRUCTOR
// --------------------------------------------------------------------------------------------------------------------

    function App() {
        var self = this;

        self.mainContext = famous.core.Engine.createContext();
        self.controller = new famous.views.RenderController();
        self.mainContext.add(self.controller);

        //Views
        self.appView = new AppView();
        // self.docListTestView = EditorViewFactory.docListTestView();

        //register with the slider's 
        navbar.slider.onSlide.push( self.onSlider.bind(self) );
    }

// ---------------------------------------------------------------------------------------------------------------------
// METHODS | NAVIGATION
// --------------------------------------------------------------------------------------------------------------------

App.prototype.hide = function() {
    this.controller.show( null );
}

// --------------------------------------------------------------------------------------------------------------------

App.prototype.showAppView = function() {
    var self = this;

    self.controller.show( self.appView );

    if (!self.appView._isInitShow) { //on the first time the appView is shown...
        self.appView._isInitShow = true;
        State.toggleDebugInfo();
    }
}

// --------------------------------------------------------------------------------------------------------------------

App.prototype.showDocListTestView = function() {
    this.controller.show( this.docListTestView );
}

// --------------------------------------------------------------------------------------------------------------------
// METHODS | UI | SNAPSHOTS
// --------------------------------------------------------------------------------------------------------------------

App.prototype.showSnapshot = function() {
    this.appView.visualizer.show( State.getCurrentSnapshot() );
}

// ---------------------------------------------------------------------------------------------------------------------

App.prototype.onSlider = function(evt, ui) {
    var i = ui.value;

    navbar.slider.resize();
    editor.highlight();

    this.appView.visualizer.show( State.getCurrentSnapshot(), i );

    if (State.getDocumentId() && State.isPythonTutor() && State._pythonTutor) {
        State._pythonTutor.curInstr = i;
        State._pythonTutor.updateOutput();
    }
}

// ---------------------------------------------------------------------------------------------------------------------

App.prototype.draw = function() {
    console.log('app.draw');
    this.appView.visualizer.draw.call(this.appView.visualizer);
}

App.prototype.showTemplate = function(tmpl, data) {
    
    data = JSON.stringify(data,undefined, 2);

    $('#tmplContent').val(tmpl);

    // app.appView.customizer._grid._tmplEditor.setValue(tmpl);
    // app.appView.customizer._grid._jsEditor.setValue(data);


    // var textarea = $('#tmplEditor');

    // var editor = ace.edit("editor");
    // // editor.setTheme("ace/theme/twilight");
    // editor.getSession().setMode("ace/mode/html");

    // editor.getSession().on('change', function () {
    //     textarea.val(editor.getSession().getValue());
    // });

    // $('textarea[data-editor]').each(function () {
    //  var textarea = $(this);

    //  var mode = textarea.data('editor');

    //  var editDiv = $('<div>', {
    //      position: 'absolute',
    //      width: textarea.width(),
    //      height: textarea.height(),
    //      'class': textarea.attr('class')
    //  }).insertBefore(textarea);

    //  textarea.css('visibility', 'hidden');

    //  var editor = ace.edit(editDiv[0]);
    //  editor.renderer.setShowGutter(false);
    //  editor.getSession().setValue(textarea.val());
    //  editor.getSession().setMode("ace/mode/" + mode);
    //  // editor.setTheme("ace/theme/idle_fingers");

    //  // // copy back to textarea on form submit...
    //  // textarea.closest('form').submit(function () {
    //  //  textarea.val(editor.getSession().getValue());
    //  // })
    // });
}

// ---------------------------------------------------------------------------------------------------------------------
// END
// ---------------------------------------------------------------------------------------------------------------------
