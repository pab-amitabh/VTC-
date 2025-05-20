import { PrismaClient } from '../../generated/prisma';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more: 
// https://pris.ly/d/help/next-js-best-practices

console.log('Initializing PrismaClient with connection URL:', 
  process.env.DATABASE_URL ? 
  `${process.env.DATABASE_URL.split('://')[0]}://${process.env.DATABASE_URL.split('://')[1].split('@')[0].replace(/\/\/(.*)@/, '//****@')}@...` : 
  'DATABASE_URL not found in environment');

// Add debugging for connection issues
const prismaClientSingleton = () => {
  try {
    return new PrismaClient({
      log: ['query', 'error', 'warn'],
    });
  } catch (e) {
    console.error('Failed to initialize PrismaClient:', e);
    throw e;
  }
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Test connection and log result
prisma.$connect()
  .then(() => {
    console.log('Successfully connected to MongoDB database');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB database:', error);
  });

export default prisma; 