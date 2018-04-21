import {GetFromStorage, SetToStorage} from './storageHandler'
import _ from 'lodash';

import {fireEvent} from './events';

export async function GetCoins() {
	var key = 'coins';
    var storageCoins = await GetFromStorage(key);
    
    //Should only happen once
    if (!storageCoins) {
      storageCoins = '0';
      await SetToStorage(key, storageCoins);
    }

    return storageCoins;
}

export async function AddCoins(addition) {
	
	var key = 'coins';
    var storageCoins = await GetFromStorage(key);
    
    var coinsAfterChange = (parseInt(storageCoins) + addition).toString();

    await SetToStorage(key, coinsAfterChange);

    fireEvent('change');
}

export async function RemoveCoins(deduction) {
	var key = 'coins';
    var storageCoins = await GetFromStorage(key);
    
    var coinsAfterChange = (parseInt(storageCoins) - deduction).toString();

    await SetToStorage(key, coinsAfterChange);

    fireEvent('change');

}

