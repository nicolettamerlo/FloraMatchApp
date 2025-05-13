import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const fsp = fs.promises;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.resolve(__dirname, 'dist');
const destination = path.resolve(__dirname, '../FloraMatchApp.Server/wwwroot');
const sourceImages = path.join(source, 'images');
const destinationImages = path.join(destination, 'images');

async function clearDestination() {
    if (fs.existsSync(destination)) {
        console.log('🧹 Cleaning wwwroot...');
        await fsp.rm(destination, { recursive: true, force: true });
    }

    await fsp.mkdir(destination, { recursive: true });
}

async function copyDir(src, dest) {
    await fsp.mkdir(dest, { recursive: true });
    const entries = await fsp.readdir(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            console.log(`📁 Copying directory: ${srcPath} -> ${destPath}`);
            await copyDir(srcPath, destPath);
        } else {
            console.log(`📄 Copying file: ${srcPath} -> ${destPath}`);
            await fsp.copyFile(srcPath, destPath);
        }
    }
}

async function copyAll() {
    try {
        await clearDestination();

        console.log(`📦 Copying full dist to wwwroot...`);
        await copyDir(source, destination);

        if (fs.existsSync(sourceImages)) {
            console.log(`🖼️  Copying images separately to wwwroot/images...`);
            await copyDir(sourceImages, destinationImages);
        } else {
            console.warn(`⚠️  Source images directory not found: ${sourceImages}`);
        }

        console.log('✅ All assets copied successfully.');
    } catch (err) {
        console.error('❌ Error during asset copy:', err);
    }
}

copyAll();
