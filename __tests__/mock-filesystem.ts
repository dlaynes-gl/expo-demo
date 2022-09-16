import { summarizeFilesInDirectorySync } from "../src/utils/file";

jest.mock("fs")

const MOCK_FILE_INFO = {
  "/path/to/file1.js": 'console.log("file1 contents");',
  "/path/to/file2.txt": "file2 contents",
};

describe("Mock Node.js Filesystem", function () {
  beforeEach(() => {
    // Set up some mocked out file info before each test
    require("fs").__setMockFiles(MOCK_FILE_INFO);
  });

  test("includes all files in the directory in the summary", () => {
    const fileSummary = summarizeFilesInDirectorySync("/path/to");

    expect(fileSummary.length).toBe(2);
  });
});
