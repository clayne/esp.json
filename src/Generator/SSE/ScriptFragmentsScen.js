let {
    addDef, int8, flags, uint8, format, 
    string, prefix, struct, array, customCounter, 
    int16, sortKey
} = require('../helpers');

module.exports = () => {
    addDef('ScriptFragmentsScen', 
        struct('Script Fragments', [
            int8('Unknown'),
            format(uint8('Flags'), flags({
                0: 'OnBegin',
                1: 'OnEnd'
            })),
            prefix(2, string('FileName')),
            customCounter('ScriptFragmentsSceneCounter', 
                array('Fragments', 
                    struct('Fragment', [
                        int8('Unknown'),
                        prefix(2, string('ScriptName')),
                        prefix(2, string('FragmentName'))
                    ])
                )
            ),
            prefix(2, array('Phase Fragments', 
                sortKey([0, 1], struct('Phase Fragment', [
                    format(uint8('Phase Flag'), flags({
                        0: 'OnStart',
                        1: 'OnCompletion'
                    })),
                    uint8('Phase Index'),
                    int16('Unknown'),
                    int8('Unknown'),
                    int8('Unknown'),
                    prefix(2, string('ScriptName')),
                    prefix(2, string('FragmentName'))
                ]))
            ))
        ])
    );
};