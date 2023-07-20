// code your solution here



const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"}
]

function superbowlWin (array) {
    const winsRecord = array.find((obj) => {
        if (obj.result === 'W') {
            return true
        }});
    return winsRecord ? winsRecord.year : undefined;
}