let {
    def, subrecord, cstring, bytes, uint32, 
    format, float, ckFormId, struct, req, 
    record
} = require('../helpers');

module.exports = () => {
    record('EFSH', 'Effect Shader', {
        members: [
            def('EDID'),
            subrecord('ICON', cstring('Fill Texture')),
            subrecord('ICO2', cstring('Particle Shader Texture')),
            subrecord('NAM7', cstring('Holes Texture')),
            subrecord('NAM8', cstring('Membrane Palette Texture')),
            subrecord('NAM9', cstring('Particle Palette Texture')),
            req(subrecord('DATA', struct('', [
                bytes('Unknown', 4),
                format(uint32('Membrane Shader - Source Blend Mode'), def('BlendModeEnum')),
                format(uint32('Membrane Shader - Blend Operation'), def('BlendOpEnum')),
                format(uint32('Membrane Shader - Z Test Function'), def('ZTestFuncEnum')),
                def('ByteColors', { name: 'Fill/Texture Effect - Color Key 1' }),
                float('Fill/Texture Effect - Alpha Fade In Time'),
                float('Fill/Texture Effect - Full Alpha Time'),
                float('Fill/Texture Effect - Alpha Fade Out Time'),
                float('Fill/Texture Effect - Presistent Alpha Ratio'),
                float('Fill/Texture Effect - Alpha Pulse Amplitude'),
                float('Fill/Texture Effect - Alpha Pulse Frequency'),
                float('Fill/Texture Effect - Texture Animation Speed (U)'),
                float('Fill/Texture Effect - Texture Animation Speed (V)'),
                float('Edge Effect - Fall Off'),
                def('ByteColors', { name: 'Edge Effect - Color' }),
                float('Edge Effect - Alpha Fade In Time'),
                float('Edge Effect - Full Alpha Time'),
                float('Edge Effect - Alpha Fade Out Time'),
                float('Edge Effect - Persistent Alpha Ratio'),
                float('Edge Effect - Alpha Pulse Amplitude'),
                float('Edge Effect - Alpha Pulse Frequency'),
                float('Fill/Texture Effect - Full Alpha Ratio'),
                float('Edge Effect - Full Alpha Ratio'),
                format(uint32('Membrane Shader - Dest Blend Mode'), def('BlendModeEnum')),
                format(uint32('Particle Shader - Source Blend Mode'), def('BlendModeEnum')),
                format(uint32('Particle Shader - Blend Operation'), def('BlendOpEnum')),
                format(uint32('Particle Shader - Z Test Function'), def('ZTestFuncEnum')),
                format(uint32('Particle Shader - Dest Blend Mode'), def('BlendModeEnum')),
                float('Particle Shader - Particle Birth Ramp Up Time'),
                float('Particle Shader - Full Particle Birth Time'),
                float('Particle Shader - Particle Birth Ramp Down Time'),
                float('Particle Shader - Full Particle Birth Ratio'),
                float('Particle Shader - Persistant Particle Count'),
                float('Particle Shader - Particle Lifetime'),
                float('Particle Shader - Particle Lifetime +/-'),
                float('Particle Shader - Initial Speed Along Normal'),
                float('Particle Shader - Acceleration Along Normal'),
                float('Particle Shader - Initial Velocity #1'),
                float('Particle Shader - Initial Velocity #2'),
                float('Particle Shader - Initial Velocity #3'),
                float('Particle Shader - Acceleration #1'),
                float('Particle Shader - Acceleration #2'),
                float('Particle Shader - Acceleration #3'),
                float('Particle Shader - Scale Key 1'),
                float('Particle Shader - Scale Key 2'),
                float('Particle Shader - Scale Key 1 Time'),
                float('Particle Shader - Scale Key 2 Time'),
                def('ByteColors', { name: 'Color Key 1 - Color' }),
                def('ByteColors', { name: 'Color Key 2 - Color' }),
                def('ByteColors', { name: 'Color Key 3 - Color' }),
                float('Color Key 1 - Color Alpha'),
                float('Color Key 2 - Color Alpha'),
                float('Color Key 3 - Color Alpha'),
                float('Color Key 1 - Color Key Time'),
                float('Color Key 2 - Color Key Time'),
                float('Color Key 3 - Color Key Time'),
                float('Particle Shader - Initial Speed Along Normal +/-'),
                float('Particle Shader - Initial Rotation (deg)'),
                float('Particle Shader - Initial Rotation (deg) +/-'),
                float('Particle Shader - Rotation Speed (deg/sec)'),
                float('Particle Shader - Rotation Speed (deg/sec) +/-'),
                ckFormId('Addon Models', ['DEBR', 'NULL']),
                float('Holes - Start Time'),
                float('Holes - End Time'),
                float('Holes - Start Val'),
                float('Holes - End Val'),
                float('Edge Width (alpha units)'),
                def('ByteColors', { name: 'Edge Color' }),
                float('Explosion Wind Speed'),
                uint32('Texture Count U'),
                uint32('Texture Count V'),
                float('Addon Models - Fade In Time'),
                float('Addon Models - Fade Out Time'),
                float('Addon Models - Scale Start'),
                float('Addon Models - Scale End'),
                float('Addon Models - Scale In Time'),
                float('Addon Models - Scale Out Time'),
                ckFormId('Ambient Sound', [
                    'SNDR',    'SOUN',    'NULL'
                ]),
                def('ByteColors', { name: 'Fill/Texture Effect - Color Key 2' }),
                def('ByteColors', { name: 'Fill/Texture Effect - Color Key 3' }),
                struct('Fill/Texture Effect - Color Key Scale/Time', [
                    float('Color Key 1 - Scale'),
                    float('Color Key 2 - Scale'),
                    float('Color Key 3 - Scale'),
                    float('Color Key 1 - Time'),
                    float('Color Key 2 - Time'),
                    float('Color Key 3 - Time')
                ]),
                float('Color Scale'),
                float('Birth Position Offset'),
                float('Birth Position Offset Range +/-'),
                struct('Particle Shader Animated', [
                    uint32('Start Frame'),
                    uint32('Start Frame Variation'),
                    uint32('End Frame'),
                    uint32('Loop Start Frame'),
                    uint32('Loop Start Variation'),
                    uint32('Frame Count'),
                    uint32('Frame Count Variation')
                ]),
                format(uint32('Flags'), {
                    0: 'No Membrane Shader',
                    1: 'Membrane Grayscale Color',
                    2: 'Membrane Grayscale Alpha',
                    3: 'No Particle Shader',
                    4: 'Edge Effect Inverse',
                    5: 'Affect Skin Only',
                    6: 'Ignore Alpha',
                    7: 'Project UVs',
                    8: 'Ignore Base Geometry Alpha',
                    9: 'Lighting',
                    10: 'No Weapons',
                    11: 'Unknown 11',
                    12: 'Unknown 12',
                    13: 'Unknown 13',
                    14: 'Unknown 14',
                    15: 'Particle Animated',
                    16: 'Particle Grayscale Color',
                    17: 'Particle Grayscale Alpha',
                    18: 'Unknown 18',
                    19: 'Unknown 19',
                    20: 'Unknown 20',
                    21: 'Unknown 21',
                    22: 'Unknown 22',
                    23: 'Unknown 23',
                    24: 'Use Blood Geometry'
                }),
                float('Fill/Texture Effect - Texture Scale (U)'),
                float('Fill/Texture Effect - Texture Scale (V)'),
                uint32('Scene Graph Emit Depth Limit (unused)')
            ])))
        ]
    })
};