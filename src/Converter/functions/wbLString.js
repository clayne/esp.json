let {subrecordAndField} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbLString', [
    args.name,
    args.number,
    args.conflictPriority,
    args.required,
    args.identifier
], ({name}, converter) => {
    converter.addRequires('localized', 'string');
    return `localized(string(${name}))`;
});
