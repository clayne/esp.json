let {functionConverter} = require('../converters'),
    {args, newLine} = require('../helpers');

// subrecord array
functionConverter('wbRArray', [
    { type: 'stringExpr', name: 'name' },
    args.member,
    args.conflictPriority,
    args.boolean,
    args.identifier,
    args.identifier,
    args.identifier
], ({name, member}, converter) => {
    converter.addRequires('memberArray');
    return `memberArray(${name}, ${newLine(member)})`;
});
