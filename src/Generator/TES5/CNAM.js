let {
    addDef, uint8, bytes, size, struct, 
    subrecord
} = require('../helpers');

module.exports = () => {
    addDef('CNAM', 
        subrecord('CNAM', struct('Color', [
            uint8('Red'),
            uint8('Green'),
            uint8('Blue'),
            size(1, bytes('Unknown'))
        ]))
    );
};