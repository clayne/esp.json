let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('QuestTypeEnum', 
        enumeration({
            0: 'None',
            1: 'Main Quest',
            2: 'Mages\' Guild',
            3: 'Thieves\' Guild',
            4: 'Dark Brotherhood',
            5: 'Companion Quests',
            6: 'Miscellaneous',
            7: 'Daedric',
            8: 'Side Quest',
            9: 'Civil War',
            10: 'DLC01 - Vampire',
            11: 'DLC02 - Dragonborn'
        })
    );
};