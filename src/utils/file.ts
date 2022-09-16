import type { PathLike } from "fs";
import fs from "fs"

export function summarizeFilesInDirectorySync(directory: PathLike) {
  return fs.readdirSync(directory).map((fileName: string) => ({
    directory,
    fileName,
  }));
}
