const fse = require('fs-extra');
const fs = require('fs');
const os = require('os');

// computer users name path
const computerName = os.homedir();

// PERSONA 5 PATHS
const srcDir = `${computerName}/AppData/Local/Packages/SEGAofAmericaInc.F0cb6b3aer_s751p9cej88mt/SystemAppData`;
const destDir = `${computerName}/documents/Pasta com saves de jogos/Persona 5 Royal/SystemAppData`;

// DARK SOULS III PATHS
// const srcDir = `${computerName}/AppData/Roaming/DarkSoulsIII`;
// const destDir = `${computerName}/documents/Pasta com saves de jogos/DarkSoulsIII`;

// To copy a folder or file, select overwrite accordingly
const copyFolders = () => {
	try {
		fse.copySync(srcDir, destDir, { overwrite: true | false });
		console.log(`================================`);
		console.log('Files successfully copied to folder:');
		console.log(destDir);
	} catch (err) {
		console.error(err);
	}
};

copyFolders();

// watch if the folder changed
const watchAFolder = (folder) => {
	fs.watch(folder, () => {
		console.log(`================================`);
		console.log(`Some file has been modified.`);
		console.log(`The folder will be copied again.`);
		copyFolders();
	});
};

// Calling functions
watchAFolder(srcDir);
