let {
    def, float, subrecord, scale, record
} = require('../helpers');

module.exports = () => {
    record('VOLI', 'Volumetric Lighting', {
        members: [
            def('EDID'),
            subrecord('CNAM', float('Intensity')),
            subrecord('DNAM', float('Custom Color - Contribution')),
            subrecord('ENAM', scale(255, float('Red'))),
            subrecord('FNAM', scale(255, float('Green'))),
            subrecord('GNAM', scale(255, float('Blue'))),
            subrecord('HNAM', float('Density - Contribution')),
            subrecord('INAM', float('Density - Size')),
            subrecord('JNAM', float('Density - Wind Speed')),
            subrecord('KNAM', float('Density - Falling Speed')),
            subrecord('LNAM', float('Phase Function - Contribution')),
            subrecord('MNAM', float('Phase Function - Scattering')),
            subrecord('NNAM', float('Sampling Repartition - Range Factor'))
        ]
    })
};