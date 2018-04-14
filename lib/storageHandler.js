import { AsyncStorage } from 'react-native'

export async function GetFromStorage(key) {
	return await AsyncStorage.getItem(key)
        .then(async (result) => {
            if (result) {
                try {
                    result = JSON.parse(result);
                } catch (e) {
                    // console.error('AsyncStorage#getItem error deserializing JSON for key: ' + key, e.message);
                }
            }
            return result;
        });
}

export async function SetToStorage(key, value) {
	try {
        return AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        // console.error('AsyncStorage#setItem error: ' + error.message);
    }
}

export async function EditStorage(key, value) {
	try {
        return AsyncStorage.mergeItem(key, JSON.stringify(value));
    } catch (error) {
        // console.error('AsyncStorage#setItem error: ' + error.message);
    }
}

