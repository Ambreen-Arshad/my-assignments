// Date 26-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 45 in typescript assignment.
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    };
    return carInfo;
}
;
let answare = storeCarInfo('Honda', 'Civic', { color: 'black' }, { features: ['Navigation', 'Power window'] });
console.log(answare);
export {};
