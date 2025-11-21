import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Path to store waitlist entries
const WAITLIST_FILE = path.join(__dirname, '../data/waitlist.json');

// Ensure data directory exists
async function ensureDataDirectory() {
    const dataDir = path.join(__dirname, '../data');
    try {
        await fs.access(dataDir);
    } catch {
        await fs.mkdir(dataDir, { recursive: true });
    }
}

// Read existing waitlist entries
async function readWaitlist() {
    try {
        const data = await fs.readFile(WAITLIST_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        // If file doesn't exist, return empty array
        return [];
    }
}

// Write waitlist entries
async function writeWaitlist(entries) {
    await fs.writeFile(WAITLIST_FILE, JSON.stringify(entries, null, 2), 'utf-8');
}

// POST endpoint to add waitlist entry
app.post('/api/waitlist', async (req, res) => {
    try {
        const { name, email, phone, amount, term, notes } = req.body;

        // Validate required fields
        if (!name || !email || !term) {
            return res.status(400).json({
                success: false,
                message: 'Name, email, and term are required'
            });
        }

        // Create new entry
        const newEntry = {
            id: Date.now().toString(),
            name,
            email,
            phone: phone || '',
            amount: amount || '',
            term,
            notes: notes || '',
            submittedAt: new Date().toISOString(),
            status: 'pending'
        };

        // Read existing entries
        const entries = await readWaitlist();

        // Check for duplicate email
        const existingEntry = entries.find(entry => entry.email === email);
        if (existingEntry) {
            return res.status(409).json({
                success: false,
                message: 'This email is already on the waitlist'
            });
        }

        // Add new entry
        entries.push(newEntry);

        // Write back to file
        await writeWaitlist(entries);

        console.log(`New waitlist entry: ${name} (${email})`);

        res.status(201).json({
            success: true,
            message: 'Successfully joined the waitlist',
            entry: newEntry
        });

    } catch (error) {
        console.error('Error saving waitlist entry:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to save waitlist entry'
        });
    }
});

// GET endpoint to retrieve all waitlist entries (for admin purposes)
app.get('/api/waitlist', async (req, res) => {
    try {
        const entries = await readWaitlist();
        res.json({
            success: true,
            count: entries.length,
            entries
        });
    } catch (error) {
        console.error('Error reading waitlist:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to read waitlist'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
async function startServer() {
    await ensureDataDirectory();
    app.listen(PORT, () => {
        console.log(`\n✅ Waitlist API server running on http://localhost:${PORT}`);
        console.log(`📝 Waitlist data will be stored in: ${WAITLIST_FILE}\n`);
    });
}

startServer();
