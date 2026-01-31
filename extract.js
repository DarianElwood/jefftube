const html = await Bun.file("test.html").text();

// Load existing data if test.json exists
let existing = [];
const jsonFile = Bun.file("test.json");
if (await jsonFile.exists()) {
  existing = await jsonFile.json();
}
const existingIds = new Set(existing.map(item => item.id));

const results = [];

// Find all divs with data-media-id
const mediaIdRegex = /<div data-media-id="([^"]+)">([\s\S]*?)(?=<div data-media-id="|<\/div>\s*<\/div>\s*<\/div>\s*$)/g;

// Alternative: split by data-media-id divs
const blocks = html.split(/<div data-media-id="/);

for (let i = 1; i < blocks.length; i++) {
  const block = blocks[i];

  // Extract ID
  const idMatch = block.match(/^([^"]+)"/);
  const id = idMatch ? idMatch[1] : null;

  // Extract title - the span with class text-neutral-400 inside the p tag
  const titleMatch = block.match(/<span class="text-neutral-400"[^>]*>([\s\S]*?)<\/span/s);
  const title = titleMatch ? titleMatch[1].trim().replace(/\s+/g, ' ') : null;

  // Extract filename - from the span with title attribute containing the path
  const filenameMatch = block.match(/title="[^"]*\/([^"\/]+\.mp4)"[^>]*>([^<]+)</);
  const filename = filenameMatch ? filenameMatch[2].trim() : null;

  // Extract video length - the last span with text-neutral-500 class containing time (multiline)
  const lengthMatch = block.match(/<span class="text-xs text-neutral-500"[^>]*>\s*(\d+:[\d:]+)\s*<\/span/s);
  const length = lengthMatch ? lengthMatch[1] : null;

  if (id) {
    results.push({
      id,
      title,
      filename,
      length
    });
  }
}

// Filter to only new items (not already in existing)
const newItems = results.filter(item => !existingIds.has(item.id));

// Merge existing + new
const merged = [...existing, ...newItems];

console.log(`Found ${results.length} items in HTML`);
console.log(`Added ${newItems.length} new items (${existing.length} existing)`);
console.log(`Total: ${merged.length} items`);

await Bun.write("test.json", JSON.stringify(merged, null, 2));
console.log("Written to test.json");
