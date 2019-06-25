let defs = {};

let addDef = (id, def) => defs[id] = def;
let getDefs = () => defs;
let clearDefs = () => defs = {};
let IsSSE = (game, a, b) => game === 'SSE' ? a : b;

// meta
let req = obj => (obj.required = true) && obj;
let def = (def, opts) => ({ def, ...opts });
let opts = (obj, opts) => ({ ...obj, ...opts });
let sortKey = (sortKey, obj) => (obj.sortKey = sortKey) && obj;
let localized = (obj) => ({ ...obj, localized: true });

// variable size
let sorted = obj => ({ ...obj, sorted: true });
let size = (size, obj) => ({ ...obj, size});
let prefix = (prefix, obj) => ({ ...obj, prefix });

// number formatting
let format = (obj, format) => (obj.format = format) && obj;
let div = value => ({ type: 'divide', value });
let flags = (flags) => ({ type: 'flags', flags });
let enumeration = (options) => ({type: 'enum', options });

// data structures
let record = (signature, name, def) => addDef(signature,
    ({ signature, type: 'record', name, def })
);

let subrecord = (signature, def) =>
    ({ signature, type: 'subrecord', def });
let arrayOfSubrecord = (name, subrecord, sortKey) =>
    ({ name, type: 'subrecordArray', subrecord, sortKey });
let arrayOfStruct = (name, entryName, subrecords) =>
    ({ name, type: 'structArray', entryName, subrecords });
let multiStruct = (name, subrecords) =>
    ({ name, type: 'multiStruct', subrecords });
let multiUnion = (name, subrecords) =>
    ({ name, type: 'multiUnion', subrecords });

let struct = (name, fields) =>
    ({ name, type: 'struct', fields });
let array = (name, entryDef, size = 0) =>
    ({ name, entryDef, type: 'array', size });
let union = (name, decider, elements) =>
    ({ name, type: 'union', decider, elements });

// base types
let string = (name) => ({ name, type: 'string' });
let bytes = name => ({ name, type: 'bytes' });
let float = name => ({ name, type: 'float' });
let int0 = name => ({ name, type: 'int0' });
let int8 = name => ({ name, type: 'int8' });
let uint8 = name => ({ name, type: 'uint8' });
let int16 = name => ({ name, type: 'int16' });
let uint16 = name => ({ name, type: 'uint16' });
let int32 = name => ({ name, type: 'int32' });
let uint32 = name => ({ name, type: 'uint32' });

// special types
let formId = name => ({ name, type: 'formId' });
let ckFormId = (name, signatures) => ({ name, type: 'formId', signatures });
let unknown = () => ({ name: 'Unknown', type: 'bytes' });
let empty = name => ({ name, type: 'empty' });

module.exports = {
    addDef, getDefs, clearDefs, IsSSE,
    req, def, opts, sortKey, localized,
    sorted, size, prefix,
    format, div, flags, enumeration,
    record, subrecord,
    arrayOfSubrecord, arrayOfStruct, multiStruct, multiUnion,
    struct, array, union,
    bytes, string, float,
    int0, int8, uint8, int16, uint16, int32, uint32,
    formId, ckFormId, unknown, empty
};
