function processFile(filename, processingTime) {
  return new Promise((resolve, reject) => {
    console.log(`Starting to process ${filename}...`);
    
    setTimeout(() => {
      // 15% chance of failure for realistic simulation
      if (Math.random() < 0.15) {
        reject(new Error(`Failed to process ${filename}`));
      } else {
        const result = {
          filename: filename,
          size: Math.floor(Math.random() * 1000) + 100, // Random size
          processedAt: new Date().toLocaleTimeString()
        };
        console.log(`✓ Completed ${filename}`);
        resolve(result);
      }
    }, processingTime);
  });
}

// TODO: Use Promise.all() to process these files concurrently:
const files = [
  { name: "document1.pdf", time: 2000 },
  { name: "image1.jpg", time: 1500 },
  { name: "data.csv", time: 3000 },
  { name: "report.docx", time: 1000 }
];

const start = Date.now();

// 1. Create an array of promises from the files array
const filePromises = files.map(file => processFile(file.name, file.time));

// 2. Use Promise.all to wait until all files are processed
Promise.all(filePromises)
  .then(results => {
    // 3. If all promises resolved, calculate and log the total processing time
    const duration = (Date.now() - start) / 1000;
    console.log(`\nAll files processed successfully in ${duration.toFixed(2)} seconds:`);
    console.table(results); // display the results in a table format
  })
  .catch(error => {
    // 4. If any promise rejects, this block will execute
    const duration = (Date.now() - start) / 1000;
    console.error(`\nProcessing failed after ${duration.toFixed(2)} seconds:`, error.message);
  });


// Bonus: Version with Promise.allSettled()

// 1. Map each file to a promise from processFile
Promise.allSettled(
  files.map(file => processFile(file.name, file.time))
).then(results => {
  // 2. Calculate total processing time
  const duration = (Date.now() - start) / 1000;
  console.log(`\nProcessing completed in ${duration.toFixed(2)} seconds`);

  // 3. Separate successful and failed results
  const successes = results
    .filter(r => r.status === "fulfilled")
    .map(r => r.value);

  const failures = results
    .filter(r => r.status === "rejected")
    .map(r => r.reason);

  // 4. Log successful results
  console.log("\n✓ Successful files:");
  console.table(successes);

  // 5. Log failed results
  console.log("\n✗ Failed files:");
  failures.forEach(err => console.error(err.message));
});