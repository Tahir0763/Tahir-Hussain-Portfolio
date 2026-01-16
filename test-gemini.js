import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';
import path from 'path';

// Manual env parsing
const envPath = path.resolve(process.cwd(), '.env.local');
const envFile = fs.readFileSync(envPath, 'utf8');
const apiKeyMatch = envFile.match(/GEMINI_API_KEY=(.*)/);
const apiKey = apiKeyMatch ? apiKeyMatch[1].trim() : null;

if (!apiKey) {
    console.error("Could not find API KEY in .env.local");
    process.exit(1);
}

console.log("Testing with API Key ending in...", apiKey.slice(-4));

const genAI = new GoogleGenerativeAI(apiKey);
// Using the model currently in App.tsx
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

const directUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`;

async function run() {
    console.log("\n--- TEST 1: Google SDK ---");
    console.log("Attempting to generate content with gemini-2.0-flash via SDK...");
    try {
        const result = await model.generateContent("Hello from SDK test");
        const response = await result.response;
        console.log("SDK SUCCESS! Response:", response.text());
    } catch (error) {
        console.error("SDK FAILURE:", error.message);
    }

    console.log("\n--- TEST 2: Direct REST API (fetch) ---");
    console.log("Attempting to generate content via direct fetch...");
    try {
        const payload = {
            contents: [{ parts: [{ text: "Hello from direct fetch test" }] }]
        };

        const response = await fetch(directUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP Error: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();
        console.log("DIRECT FETCH SUCCESS!");
        console.log("Response Text:", data.candidates[0].content.parts[0].text);
    } catch (error) {
        console.error("DIRECT FETCH FAILURE:", error.message);
    }
}

run();
