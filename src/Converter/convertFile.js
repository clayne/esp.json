let path = require('path'),
    fs = require('fs'),
    Converter = require('./Converter');

let setUpGlobalOutputs = function(converter) {
    let folderPath = path.resolve(__dirname, 'globalOutputs'),
        files = fs.readdirSync(folderPath);
    files.forEach(filename => {
        require(`./globalOutputs/${filename}`)(converter);
    });
};

let convertProcedures = function(converter) {
    converter.convertRegions({
        start: /procedure wb([A-Za-z]+AfterSet)\(const aElement: IwbElement; const aOldValue, aNewValue: Variant\);\s+begin/m,
        end: /^end;/
    });
    converter.reset();
    converter.convertRegions({
        start: /procedure (Define\w+?[a-z]);[\s\S]+?^begin/m,
        end: /^end;/
    });
};

let convertFile = function(filename, game) {
    let filePath = path.resolve(__dirname, '..', '..', 'TES5Edit', filename),
        converter = new Converter(filePath, game);
    try {
        let outputFolder = path.resolve(__dirname, '..', 'Generator', game);
        if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder);
        converter.setOutputFolder(outputFolder);
        setUpGlobalOutputs(converter);
        convertProcedures(converter);
        converter.saveGlobalOutputs();
    } catch (x) {
        if (x.name === 'ParseError')
            console.error(converter.getCodeSnippet());
        console.error(x.stack);
    }
};

let loadFiles = function(folderName, files) {
    files.forEach(filename => {
        require(`./${folderName}/${filename}`);
    });
};

let loadFilesFromFolder = function(folderName) {
    let folderPath = path.resolve(__dirname, folderName),
        files = fs.readdirSync(folderPath);
    loadFiles(folderName, files);
};

module.exports = convertFile;

// load function and type converters
['functions', 'types'].forEach(loadFilesFromFolder);

// load statement converters
require('./statements/wbCounterAfterSet');
require('./statements/wbCounterContainerAfterSet');
require('./statements/wbRecord');
require('./statements/wbRefRecord');
require('./statements/wbAddGroupOrder');
require('./statements/ReferenceRecord');
require('./statements/loadList');
require('./statements/ifGameMode');
require('./statements/ifIsSSE');
require('./statements/ifSimpleRecords');
require('./statements/elseBegin');
require('./statements/MakeVarRecs');
require('./statements/CombineVarRecs');
require('./statements/assignment');
require('./statements/begin');
require('./statements/try');
require('./statements/unknown');
