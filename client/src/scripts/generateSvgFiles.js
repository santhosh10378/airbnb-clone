import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { amenities } from "../data/dummy.js"; // Replace with the correct path

// Get the current directory name (ESM doesn't have __dirname)
const __filename = fileURLToPath(
  "C:UserssanthOneDriveDesktopairbnbclientsrcscripts"
);
const __dirname = path.dirname(__filename);

// Define the directory where you want to save the SVG files
const outputDir = path.join(__dirname, "icons");

// Create the directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Loop through each category and create an SVG file
amenities.forEach((category) => {
  if (category.icon) {
    const filePath = path.join(outputDir, `${category.slug}.svg`);
    fs.writeFileSync(filePath, category.icon.trim());
    console.log(`Created: ${filePath}`);
  } else {
    console.warn(`Skipping: ${category.name} (missing svgContent)`);
  }
});

console.log("All SVG files have been generated.");
