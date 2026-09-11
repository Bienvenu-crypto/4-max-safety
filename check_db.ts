import Database from 'better-sqlite3';
import { resolve } from 'path';

// Check root dev.db
try {
  const dbPath = resolve('dev.db');
  console.log('Checking:', dbPath);
  const db = new Database(dbPath);
  const courses = db.prepare('SELECT COUNT(*) as count FROM Course').get() as any;
  const services = db.prepare('SELECT COUNT(*) as count FROM Service').get() as any;
  console.log('  Courses:', courses.count);
  console.log('  Services:', services.count);
  if (courses.count > 0) {
    const sample = db.prepare('SELECT id, title FROM Course LIMIT 3').all();
    console.log('  Sample courses:', JSON.stringify(sample, null, 2));
  }
  db.close();
} catch (e: any) {
  console.log('  Error:', e.message);
}

// Check prisma/dev.db
try {
  const dbPath = resolve('prisma', 'dev.db');
  console.log('\nChecking:', dbPath);
  const db = new Database(dbPath);
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  console.log('  Tables:', tables);
  db.close();
} catch (e: any) {
  console.log('  Error:', e.message);
}
