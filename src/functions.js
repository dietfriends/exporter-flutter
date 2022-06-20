/**
 * 
 * @param {string} text 
 * @param {string} indentationString 
 * 
 * @returns {string}
 */
 function createDocumentationComment(text, indentationString) {
    return text.trim().split("\n").map((line) => `${indentationString}/// ${line}`).join("\n")
}

/**
 * 
 * @param {{name: string, isRoot: boolean, path: Array<string>}} tokenGroup 
 * 
 * @returns {Array<string>}
 */
function createFullTokenGroupPath(tokenGroup) {
    if (tokenGroup.isRoot) {
        return []
    } else {
        return tokenGroup.path.concat(tokenGroup.name)
    }
}

/**
 * 
 * @param {Array<any>} lhs
 * @param {Array<any>} rhs
 * 
 * @returns {Array<any>}
 */
function arrayConcat(lhs, rhs) {
    return lhs.concat(rhs)
}

/**
 * 
 * @param {Array<string>} array 
 * @param {string} separator 
 */
function arrayJoin(array, separator) {
    return array.join(separator)
}

function convertHexColor(value) {

    let r = value.r.toString(16).toUpperCase();
    let g = value.g.toString(16).toUpperCase();
    let b = value.b.toString(16).toUpperCase();
    let a = value.a.toString(16).toUpperCase();
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
    if (a.length == 1)
      a = "0" + a;
  
    return "0x" + a + r + g + b;
}

function createEmptyObj() {
    return Object.create(null);
}

function addEntryToObj(obj, key, value) {
    obj[key.toString()] = value
    return obj;
}

function objToEntries(obj) {
    return Object.entries(obj)
}

function runBooleanOperation(type, conditions) {
    if (type === "and") {
        for (var condition of conditions) {
            if (!condition) {
                return false;
            }
        }
        return true;
    } else if (type === "or") {
        for (var condition of conditions) {
            if (condition) {
                return true;
            }
        }
        return false;
    } else {
        throw('not supported');
    }
}

function findInObjects(objs, targetKey, targetValue) {
    for (var obj of objs) {
        if (obj[targetKey] === targetValue) {
            return obj;
        }
    }
    throw "not found";
}

Pulsar.registerFunction("createDocumentationComment", createDocumentationComment)
Pulsar.registerFunction("createFullTokenGroupPath", createFullTokenGroupPath)
Pulsar.registerFunction("arrayConcat", arrayConcat)
Pulsar.registerFunction("arrayJoin", arrayJoin)
Pulsar.registerFunction("convertHexColor", convertHexColor)
Pulsar.registerFunction("objToEntries", objToEntries)
Pulsar.registerFunction("createEmptyObj", createEmptyObj)
Pulsar.registerFunction("addEntryToObj", addEntryToObj)
Pulsar.registerFunction("runBooleanOperation", runBooleanOperation)
Pulsar.registerFunction("findInObjects", findInObjects)