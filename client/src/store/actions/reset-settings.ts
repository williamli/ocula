import SETTINGS from '../../constants/core/settings';

import {
    mutate
} from '../store';

import {
    saveSettings,
    clearData
} from '../helpers/storage';

export default function resetSettings() {
    mutate(state => state.settings = SETTINGS);
    saveSettings(SETTINGS);
    clearData();
}