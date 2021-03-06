let {
    addDef, string, size, uint32,
    def, formId, bytes, uint16, struct
} = require('../../helpers');

module.exports = () => {
    addDef('MainRecordHeader',
        struct('Record Header', [
            size(4, string('Signature')),
            uint32('Data Size'),
            def('RecordFlags'),
            formId('FormID'),
            size(4, bytes('Version Control Info 1')),
            uint16('Form Version'),
            size(2, bytes('Version Control Info 2'))
        ])
    );
};
