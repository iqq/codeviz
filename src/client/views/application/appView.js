
Meteor.startup(function() {

// ---------------------------------------------------------------------------------------------------------------------
// CLASS : AppView
// ---------------------------------------------------------------------------------------------------------------------

    //Export
    this.AppView = AppView;

    //Inherit from Famous.View
    AppView.prototype = Object.create(Famous.View.prototype);

    //Constructor Reference
    AppView.prototype.constructor = AppView;

// ---------------------------------------------------------------------------------------------------------------------
// CONSTRUCTOR
// ---------------------------------------------------------------------------------------------------------------------

    function AppView() {

        // Call the super class's constructor
        Famous.View.apply(this, arguments);

        var headerFooter = AppViewFactory.HeaderFooter();

        this.add(headerFooter);

    }//AppView

// ---------------------------------------------------------------------------------------------------------------------
// END
// ---------------------------------------------------------------------------------------------------------------------

});//Meteor.startup
