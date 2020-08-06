let {
    addDef, formId, subrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('MDOB', 
        req(subrecord('MDOB', formId('Menu Display Object')))
    );
};