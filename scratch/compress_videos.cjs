const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videoDir = path.join(__dirname, '..', 'public', 'Product Images', 'Videos');
const videos = fs.readdirSync(videoDir).filter(f => f.endsWith('.mp4'));

console.log(`Found ${videos.length} videos in ${videoDir}`);

videos.forEach(video => {
    const inputPath = path.join(videoDir, video);
    const outputPath = path.join(videoDir, `compressed_${video}`);
    
    console.log(`Compressing ${video}...`);
    try {
        // -crf 28 is a good balance for web
        // -preset fast for reasonable speed
        execSync(`"${ffmpeg}" -i "${inputPath}" -vcodec libx264 -crf 28 -preset fast -y "${outputPath}"`, { stdio: 'inherit' });
        
        const oldSize = fs.statSync(inputPath).size;
        const newSize = fs.statSync(outputPath).size;
        
        console.log(`Finished ${video}: ${(oldSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024 / 1024).toFixed(2)}MB`);
        
        // Replace original with compressed
        fs.unlinkSync(inputPath);
        fs.renameSync(outputPath, inputPath);
    } catch (err) {
        console.error(`Error compressing ${video}:`, err.message);
    }
});

console.log('All videos processed.');
