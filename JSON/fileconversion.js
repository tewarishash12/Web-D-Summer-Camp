function convertObjectToString(obj) {
    const jsonString = JSON.stringify(obj);

    console.log('Type of the original object:', typeof obj);
    console.log('Type of the JSON string:', typeof jsonString);

    return jsonString;
}

function convertStringtoObject(str){
    const jsObj = JSON.parse(str);

    console.log('Type of the original object:', typeof str);
    console.log('Type of the JSON string:', typeof jsObj);

    return jsObj;
}

const nestedObject = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        coordinates: {
            lat: 40.7128,
            long: -74.0060
        }
    },
    hobbies: ["reading", "gaming", "hiking"]
};

const resultString = convertObjectToString(nestedObject);

const jsObject = convertStringtoObject(resultString);


console.log('JSON String:', resultString);
console.log('JS Object:', jsObject);
