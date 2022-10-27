const fse = require('fs-extra');
const fs = require('fs');
const os = require('os');

// computer users name path
const computerName = os.homedir();

// To copy a folder or file, select overwrite accordingly
const copyFolders = (srcDir, destDir) => {
	fs.rmSync(destDir, { recursive: true });
	try {
		fse.copySync(srcDir, destDir, { overwrite: true | false });
		console.log(`================================`);
		console.log('Files successfully copied to folder:');
		console.log(destDir);
	} catch (err) {
		console.log(`================================`);

		console.log('Um erro ocorreu');
		console.log(err);
	}
};

// watch if the folder changed
const watchPersona5 = () => {
	// PERSONA 5 PATHS
	const srcDir = `C:/Games/Persona 5 Royal/data/bis/user/save/0000000000000001/`;
	const destDir = `${computerName}/documents/Pasta com saves de jogos/Persona 5 Royal/SystemAppData`;

	console.log(`Watching for changes in: ${srcDir}`);
	fs.watch(srcDir, { recursive: true }, () => {
		console.log(`================================`);
		console.log(`Some file has been modified in: `);
		console.log(destDir);
		console.log(`================================`);
		console.log(`The folder will be copied again.`);
		copyFolders(srcDir, destDir);
	});
};

// watch if the folder changed
const watchDarkSouls3 = () => {
	// DARK SOULS III PATHS
	const srcDir = `${computerName}/AppData/Roaming/DarkSoulsIII/`;
	const destDir = `${computerName}/documents/Pasta com saves de jogos/DarkSoulsIII/`;

	console.log(`Watching for changes in: ${srcDir}`);
	fs.watch(srcDir, { recursive: true }, () => {
		console.log(`================================`);
		console.log(`Some file has been modified.`);
		console.log(`The folder will be copied again.`);
		copyFolders(srcDir, destDir);
	});
};

// Calling functions
watchPersona5();
watchDarkSouls3();
