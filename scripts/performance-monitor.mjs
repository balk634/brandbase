import { readFile } from "node:fs/promises";
import { performance } from "node:perf_hooks";

async function measureBuildPerformance() {
    console.log("🚀 Measuring build performance...");
    const startTime = performance.now();
    
    try {
        // Read the build output to analyze bundle sizes
        const buildManifest = await readFile("./.next/build-manifest.json", "utf8");
        const manifest = JSON.parse(buildManifest);
        
        const totalSize = Object.values(manifest).reduce((acc, page) => {
            if (typeof page === 'object' && page !== null) {
                return acc + Object.values(page).reduce((pageAcc, file) => {
                    return pageAcc + (file.size || 0);
                }, 0);
            }
            return acc;
        }, 0);
        
        const endTime = performance.now();
        const buildTime = endTime - startTime;
        
        console.log("📊 Build Performance Metrics:");
        console.log(`   Build Time: ${buildTime.toFixed(2)}ms`);
        console.log(`   Total Bundle Size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
        
        // Analyze individual pages
        console.log("\n📄 Page Analysis:");
        Object.entries(manifest).forEach(([page, files]) => {
            if (typeof files === 'object' && files !== null) {
                const pageTotal = Object.values(files).reduce((acc, file) => {
                    return acc + (file.size || 0);
                }, 0);
                console.log(`   ${page}: ${(pageTotal / 1024).toFixed(2)} KB`);
            }
        });
        
    } catch (error) {
        console.error("❌ Error measuring performance:", error.message);
    }
}

// Run the performance measurement
measureBuildPerformance().catch(console.error);
