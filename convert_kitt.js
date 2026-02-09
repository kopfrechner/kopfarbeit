import sharp from 'sharp';

const input = '/home/kurt/.openclaw/media/inbound/file_1---e0f91433-9221-4aba-a3fa-6ed62b29d341.jpg';
const output = '/home/kurt/projects/kopfarbeit/src/assets/images/knight-rider.webp';

sharp(input)
  .resize(800) // Resize width to 800px, maintain aspect ratio
  .webp({ quality: 80 })
  .toFile(output)
  .then(() => console.log('KITT Turbo Boost engaged! Image converted.'))
  .catch(err => console.error(err));
