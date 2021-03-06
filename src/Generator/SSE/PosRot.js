let {
    addDef, float, struct, def, format, 
    req
} = require('../helpers');

module.exports = () => {
    addDef('PosRot', 
        struct('Position/Rotation', [
            struct('Position', [
                float('X'),
                float('Y'),
                float('Z')
            ]),
            struct('Rotation', [
                req(format(float('X'), def('RotationFactor'))),
                req(format(float('Y'), def('RotationFactor'))),
                req(format(float('Z'), def('RotationFactor')))
            ])
        ])
    );
};