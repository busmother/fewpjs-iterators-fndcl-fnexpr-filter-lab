// Code your solution here
function findMatching(drivers, string){
    let matching = drivers.filter(driver =>{
        return driver.toUpperCase() == string.toUpperCase()
    })
    return matching;
}

function fuzzyMatch(drivers, string) {
    let matching = drivers.filter(driver => {
        return driver.slice(0, 2) == string.slice(0, 2)
    })
    return matching;
}

function matchName(drivers, string) {
    let matching = drivers.filter(driver => {
        return driver["name"] === string
    })
    return matching;
}