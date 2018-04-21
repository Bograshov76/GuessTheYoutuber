let eventsCallbacks = {
	"change": []
}

export async function SubscribeToEvent(eventId, cb) {
	eventsCallbacks[eventId].push(cb);
}

export async function UnSubscribeFromEvent(eventId, cb) {
	eventsCallbacks[eventId].splice(0);
}

export function fireEvent(eventId) {
	_.forEach(eventsCallbacks[eventId], function(cb) {
		cb();
	})
}