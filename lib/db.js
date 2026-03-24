import mongoose from 'mongoose';

// Module-level cache to avoid redundant connections across hot-reloads (Next.js)
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Establishes (or reuses) a cached Mongoose connection.
 * Throws a descriptive error if MONGODB_URI is not set.
 * Logs and propagates any connection error to the caller.
 */
export async function connectDB() {
  if (!process.env.MONGODB_URI) {
    throw new Error(
      'Missing environment variable: MONGODB_URI is not defined. ' +
        'Add it to your .env.local file before starting the server.'
    );
  }

  // Reuse existing connection
  if (cached.conn) {
    return cached.conn;
  }

  // Initiate connection only once
  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI, {
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    // Reset promise so the next call can retry
    cached.promise = null;
    console.error('[DB] Failed to connect to MongoDB:', err);
    throw err;
  }

  return cached.conn;
}
