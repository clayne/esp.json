let {
    def, subrecord, float, req, ckFormId, 
    uint8, format, uint16, struct, string, 
    size, uint32, record
} = require('../helpers');

module.exports = () => {
    record('DIAL', 'Dialog Topic', {
        members: [
            def('EDID'),
            def('FULL'),
            req(subrecord('PNAM', float('Priority'))),
            subrecord('BNAM', ckFormId('Branch', ['DLBR', 'NULL'])),
            req(subrecord('QNAM', ckFormId('Quest', ['QUST', 'NULL']))),
            subrecord('DATA', struct('Data', [
                format(uint8('Topic Flags'), {
                    0: 'Do All Before Repeating'
                }),
                format(uint8('Category'), {
                    0: 'Topic',
                    1: 'Favor',
                    2: 'Scene',
                    3: 'Combat',
                    4: 'Favors',
                    5: 'Detection',
                    6: 'Service',
                    7: 'Miscellaneous'
                }),
                format(uint16('Subtype'), {
                    0: 'Custom',
                    1: 'ForceGreet',
                    2: 'Rumors',
                    3: 'Custom?',
                    4: 'Intimidate',
                    5: 'Flatter',
                    6: 'Bribe',
                    7: 'Ask Gift',
                    8: 'Gift',
                    9: 'Ask Favor',
                    10: 'Favor',
                    11: 'Show Relationships',
                    12: 'Folow',
                    13: 'Reject',
                    14: 'Scene',
                    15: 'Show',
                    16: 'Agree',
                    17: 'Refuse',
                    18: 'ExitFavorState',
                    19: 'MoralRefusal',
                    20: 'FlyingMountLand',
                    21: 'FlyingMountCancelLand',
                    22: 'FlyingMountAcceptTarget',
                    23: 'FlyingMountRejectTarget',
                    24: 'FlyingMountNoTarget',
                    25: 'FlyingMountDestinationReached',
                    26: 'Attack',
                    27: 'PowerAttack',
                    28: 'Bash',
                    29: 'Hit',
                    30: 'Flee',
                    31: 'Bleedout',
                    32: 'AvoidThreat',
                    33: 'Death',
                    34: 'GroupStrategy',
                    35: 'Block',
                    36: 'Taunt',
                    37: 'AllyKilled',
                    38: 'Steal',
                    39: 'Yield',
                    40: 'AcceptYield',
                    41: 'PickpocketCombat',
                    42: 'Assault',
                    43: 'Murder',
                    44: 'AssaultNC',
                    45: 'MurderNC',
                    46: 'PickpocketNC',
                    47: 'StealFromNC',
                    48: 'TrespassAgainstNC',
                    49: 'Trespass',
                    50: 'WereTransformCrime',
                    51: 'VoicePowerStartShort',
                    52: 'VoicePowerStartLong',
                    53: 'VoicePowerEndShort',
                    54: 'VoicePowerEndLong',
                    55: 'AlertIdle',
                    56: 'LostIdle',
                    57: 'NormalToAlert',
                    58: 'AlertToCombat',
                    59: 'NormalToCombat',
                    60: 'AlertToNormal',
                    61: 'CombatToNormal',
                    62: 'CombatToLost',
                    63: 'LostToNormal',
                    64: 'LostToCombat',
                    65: 'DetectFriendDie',
                    66: 'ServiceRefusal',
                    67: 'Repair',
                    68: 'Travel',
                    69: 'Training',
                    70: 'BarterExit',
                    71: 'RepairExit',
                    72: 'Recharge',
                    73: 'RechargeExit',
                    74: 'TrainingExit',
                    75: 'ObserveCombat',
                    76: 'NoticeCorpse',
                    77: 'TimeToGo',
                    78: 'GoodBye',
                    79: 'Hello',
                    80: 'SwingMeleeWeapon',
                    81: 'ShootBow',
                    82: 'ZKeyObject',
                    83: 'Jump',
                    84: 'KnockOverObject',
                    85: 'DestroyObject',
                    86: 'StandonFurniture',
                    87: 'LockedObject',
                    88: 'PickpocketTopic',
                    89: 'PursueIdleTopic',
                    90: 'SharedInfo',
                    91: 'PlayerCastProjectileSpell',
                    92: 'PlayerCastSelfSpell',
                    93: 'PlayerShout',
                    94: 'Idle',
                    95: 'EnterSprintBreath',
                    96: 'EnterBowZoomBreath',
                    97: 'ExitBowZoomBreath',
                    98: 'ActorCollidewithActor',
                    99: 'PlayerinIronSights',
                    100: 'OutofBreath',
                    101: 'CombatGrunt',
                    102: 'LeaveWaterBreath'
                })
            ])),
            subrecord('SNAM', size(4, string('Subtype Name'))),
            subrecord('TIFC', uint32('Info Count'))
        ]
    })
};