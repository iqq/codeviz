
// ---------------------------------------------------------------------------------------------------------------------
// METEOR METHODS
// ---------------------------------------------------------------------------------------------------------------------

Meteor.methods({

	phantomTest: function(id) {
		if (Meteor.isClient) { console.log('client: phantomTest. id:', id); }

		// if (Meteor.isServer) {
		// 	console.log('server: CALLING => _phantomTest. id: ', id);
		// 	_phantomSpawnTest(id);
		// }
	}

});//Meteor.methods

// -----------------------------------------------------------------------------------------------------------------
// END
// -----------------------------------------------------------------------------------------------------------------