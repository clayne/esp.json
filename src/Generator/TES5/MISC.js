let {
    flags, def, req, int32, float, 
    struct, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('MISC', 'Misc. Item', {
        flags: flags({
            2: 'Non-Playable',
            12: 'Ignored'
        }),
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            def('KSIZ'),
            def('KWDAs'),
            req(subrecord('DATA', struct('Data', [
                int32('Value'),
                float('Weight')
            ])))
        ]
    })
};