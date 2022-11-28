import { getGoals } from './modules/api.js';
import { displayGoals } from './modules/ui.js';

async function start() {
    const goals = await getGoals();
    displayGoals(goals);
}

start();