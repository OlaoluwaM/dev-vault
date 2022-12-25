import { stat } from 'fs/promises';


export async function isHardlink(
  originalFilePath: string,
  potentialHardlinkFilePath: string
) {
  try {
    const fileStats = await Promise.all(
      [originalFilePath, potentialHardlinkFilePath].map(pathName => stat(pathName))
    );

    const [originalFileStats, potentialHardlinkFileStats] = fileStats;

    return originalFileStats.ino === potentialHardlinkFileStats.ino;
  } catch (error) {
    console.error(error);
    return false;
  }
}


