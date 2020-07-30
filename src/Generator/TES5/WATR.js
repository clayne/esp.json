let {
    def, subrecord, string, req, memberArray, 
    uint8, IsSSE, flags, format, bytes, 
    size, ckFormId, uint16, float, struct, 
    record
} = require('../helpers');

module.exports = game => {
    record('WATR', 'Water', {
        members: [
            def('EDID'),
            def('FULL'),
            memberArray('Unused', 
                req(subrecord('NNAM', string('Noise Map')))
            ),
            subrecord('ANAM', uint8('Opacity')),
            subrecord('FNAM', format(uint8('Flags'), flags({
                0: 'Causes Damage',
                1: 'Unknown 1',
                2: 'Unknown 2',
                3: IsSSE(game, ['Enable Flowmap', 'Unknown 3']),
                4: IsSSE(game, ['Blend Normals', 'Unknown 4']),
                5: 'Unknown 5',
                6: 'Unknown 6',
                7: 'Unknown 7'
            }))),
            subrecord('MNAM', size(0, bytes('Unused'))),
            subrecord('TNAM', ckFormId('Material', ['MATT'])),
            subrecord('SNAM', ckFormId('Open Sound', ['SNDR', 'NULL'])),
            subrecord('XNAM', ckFormId('Spell', ['SPEL'])),
            subrecord('INAM', ckFormId('Image Space', ['IMGS'])),
            IsSSE(game, [
                subrecord('DATA', uint16('Unused')),
                subrecord('DATA', uint16('Damage Per Second'))
            ]),
            IsSSE(game, [
                req(subrecord('DNAM', struct('Visual Data', [
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Specular Properties - Sun Specular Power'),
                    float('Water Properties - Reflectivity Amount'),
                    float('Water Properties - Fresnel Amount'),
                    size(4, bytes('Unknown')),
                    float('Fog Properties - Above Water - Fog Distance - Near Plane'),
                    float('Fog Properties - Above Water - Fog Distance - Far Plane'),
                    def('ByteColors', { name: 'Shallow Color' }),
                    def('ByteColors', { name: 'Deep Color' }),
                    def('ByteColors', { name: 'Reflection Color' }),
                    size(4, bytes('Unknown')),
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Displacement Simulator - Starting Size'),
                    float('Displacement Simulator - Force'),
                    float('Displacement Simulator - Velocity'),
                    float('Displacement Simulator - Falloff'),
                    float('Displacement Simulator - Dampner'),
                    float('Unknown'),
                    float('Noise Properties - Noise Falloff'),
                    float('Noise Properties - Layer One - Wind Direction'),
                    float('Noise Properties - Layer Two - Wind Direction'),
                    float('Noise Properties - Layer Three - Wind Direction'),
                    float('Noise Properties - Layer One - Wind Speed'),
                    float('Noise Properties - Layer Two - Wind Speed'),
                    float('Noise Properties - Layer Three - Wind Speed'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Fog Properties - Above Water - Fog Amount'),
                    float('Unknown'),
                    float('Fog Properties - Under Water - Fog Amount'),
                    float('Fog Properties - Under Water - Fog Distance - Near Plane'),
                    float('Fog Properties - Under Water - Fog Distance - Far Plane'),
                    float('Water Properties - Refraction Magnitude'),
                    float('Specular Properties - Specular Power'),
                    float('Unknown'),
                    float('Specular Properties - Specular Radius'),
                    float('Specular Properties - Specular Brightness'),
                    float('Noise Properties - Layer One - UV Scale'),
                    float('Noise Properties - Layer Two - UV Scale'),
                    float('Noise Properties - Layer Three - UV Scale'),
                    float('Noise Properties - Layer One - Amplitude Scale'),
                    float('Noise Properties - Layer Two - Amplitude Scale'),
                    float('Noise Properties - Layer Three - Amplitude Scale'),
                    float('Water Properties - Reflection Magnitude'),
                    float('Specular Properties - Sun Sparkle Magnitude'),
                    float('Specular Properties - Sun Specular Magnitude'),
                    float('Depth Properties - Reflections'),
                    float('Depth Properties - Refraction'),
                    float('Depth Properties - Normals'),
                    float('Depth Properties - Specular Lighting'),
                    float('Specular Properties - Sun Sparkle Power'),
                    float('Noise Properties - Flowmap Scale')
                ]))),
                subrecord('DNAM', struct('Visual Data', [
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Specular Properties - Sun Specular Power'),
                    float('Water Properties - Reflectivity Amount'),
                    float('Water Properties - Fresnel Amount'),
                    size(4, bytes('Unknown')),
                    float('Fog Properties - Above Water - Fog Distance - Near Plane'),
                    float('Fog Properties - Above Water - Fog Distance - Far Plane'),
                    def('ByteColors', { name: 'Shallow Color' }),
                    def('ByteColors', { name: 'Deep Color' }),
                    def('ByteColors', { name: 'Reflection Color' }),
                    size(4, bytes('Unknown')),
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Displacement Simulator - Starting Size'),
                    float('Displacement Simulator - Force'),
                    float('Displacement Simulator - Velocity'),
                    float('Displacement Simulator - Falloff'),
                    float('Displacement Simulator - Dampner'),
                    float('Unknown'),
                    float('Noise Properties - Noise Falloff'),
                    float('Noise Properties - Layer One - Wind Direction'),
                    float('Noise Properties - Layer Two - Wind Direction'),
                    float('Noise Properties - Layer Three - Wind Direction'),
                    float('Noise Properties - Layer One - Wind Speed'),
                    float('Noise Properties - Layer Two - Wind Speed'),
                    float('Noise Properties - Layer Three - Wind Speed'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Fog Properties - Above Water - Fog Amount'),
                    float('Unknown'),
                    float('Fog Properties - Under Water - Fog Amount'),
                    float('Fog Properties - Under Water - Fog Distance - Near Plane'),
                    float('Fog Properties - Under Water - Fog Distance - Far Plane'),
                    float('Water Properties - Refraction Magnitude'),
                    float('Specular Properties - Specular Power'),
                    float('Unknown'),
                    float('Specular Properties - Specular Radius'),
                    float('Specular Properties - Specular Brightness'),
                    float('Noise Properties - Layer One - UV Scale'),
                    float('Noise Properties - Layer Two - UV Scale'),
                    float('Noise Properties - Layer Three - UV Scale'),
                    float('Noise Properties - Layer One - Amplitude Scale'),
                    float('Noise Properties - Layer Two - Amplitude Scale'),
                    float('Noise Properties - Layer Three - Amplitude Scale'),
                    float('Water Properties - Reflection Magnitude'),
                    float('Specular Properties - Sun Sparkle Magnitude'),
                    float('Specular Properties - Sun Specular Magnitude'),
                    float('Depth Properties - Reflections'),
                    float('Depth Properties - Refraction'),
                    float('Depth Properties - Normals'),
                    float('Depth Properties - Specular Lighting'),
                    float('Specular Properties - Sun Sparkle Power')
                ]))
            ]),
            subrecord('GNAM', size(0, bytes('Unused'))),
            req(subrecord('NAM0', struct('Linear Velocity', [
                float('X'),
                float('Y'),
                float('Z')
            ]))),
            req(subrecord('NAM1', struct('Angular Velocity', [
                float('X'),
                float('Y'),
                float('Z')
            ]))),
            req(subrecord('NAM2', string('Noise Layer One - Noise Texture'))),
            req(subrecord('NAM3', string('Noise Layer Two - Noise Texture'))),
            req(subrecord('NAM4', string('Noise Layer Three - Noise Texture'))),
            req(subrecord('NAM5', string('Flow Normals - Noise Texture')))
        ]
    })
};