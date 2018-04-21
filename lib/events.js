import _ from 'lodash';

let eventsCallbacks = {
	"change": []
}

export async function SubscribeToEvent(eventId, callbackId, cb) {
	if (_.find(eventsCallbacks[eventId], {callbackId: callbackId})) {
		return;
	}
	
	eventsCallbacks[eventId].push({callbackId: callbackId, cb: cb});
}

export async function UnSubscribeFromEvent(eventId, callbackId) {
	_.remove(eventsCallbacks[eventId], {callbackId: callbackId});
}

export function fireEvent(eventId) {
	_.forEach(eventsCallbacks[eventId], function(eventObj) {
		eventObj.cb();
	})
}