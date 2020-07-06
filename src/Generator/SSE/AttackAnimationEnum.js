let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('AttackAnimationEnum', 
        enumeration({
            26: 'AttackLeft',
            32: 'AttackRight',
            38: 'Attack3',
            44: 'Attack4',
            50: 'Attack5',
            56: 'Attack6',
            62: 'Attack7',
            68: 'Attack8',
            74: 'AttackLoop',
            80: 'AttackSpin',
            86: 'AttackSpin2',
            97: 'PlaceMine',
            103: 'PlaceMine2',
            109: 'AttackThrow',
            115: 'AttackThrow2',
            121: 'AttackThrow3',
            127: 'AttackThrow4',
            133: 'AttackThrow5',
            255: ' DEFAULT'
        })
    );
};