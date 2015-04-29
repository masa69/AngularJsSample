app.factory('ChatSample2', function(ChatSampleBase, Chat)
{
	'use strict';

	var self = angular.extend(this, ChatSampleBase);

	var sendAddParams = {
		name    : null,
		comment : null,
		type    : null,
	};

	// self.sendAddParams = sendAddParams;

	self.commentInit = function()
	{
		self.sendAddParams.comment = 'override commentInit()';
	};

	self.add = function()
	{
		console.log(self.sendAddParams);
		self.sendAddParams.comment = 'override add()';
		// Chat.add(self.sendAddParams);
	};

	console.log(self);

	return self;
});