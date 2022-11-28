const GOALS_URL = 'https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false';
const TARGETS_URL = 'https://unstats.un.org/SDGAPI/v1/sdg/Goal/';
const TARGETS_ENDPOINT = '/Target/List?includechildren=true';

async function getGoals() {
    const response = await fetch(GOALS_URL);
    const data = await response.json();

    return data;
}

async function getTargets(goalCode) {
    //const response = await fetch(`${TARGETS_URL}${goalCode}${TARGETS_ENDPOINT}`);
    const response = await fetch(`https://unstats.un.org/SDGAPI/v1/sdg/Goal/${goalCode}/Target/List?includechildren=true`);
    const data = await response.json();

    return data[0].targets; 
}

export { getGoals, getTargets }