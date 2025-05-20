import { NextRequest } from 'next/server';
import { POST } from '@/app/api/getQuote/route';

describe('GET /api/getQuote', () => {
  it('returns 400 for invalid request data', async () => {
    const req = new NextRequest('http://localhost:3000/api/getQuote', {
      method: 'POST',
      body: JSON.stringify({}),
    });

    const response = await POST(req);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      status: 'error',
      message: 'Invalid request data',
      code: 'VALIDATION_ERROR'
    });
  });

  it('returns mock data when API credentials are not set', async () => {
    const req = new NextRequest('http://localhost:3000/api/getQuote', {
      method: 'POST',
      body: JSON.stringify({
        coverageDates: '2024-05-01 - 2024-05-15',
        coverageAmount: '500000',
        deductible: '2000',
        travellerDOBs: [
          {
            dob: '1990-01-01',
            type: 'Adult'
          }
        ],
        preExisting: false,
        monthlyPayment: false
      }),
    });

    const response = await POST(req);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({
      status: 'success',
      quote: expect.objectContaining({
        quotes: expect.arrayContaining([
          expect.objectContaining({
            company: expect.any(String),
            premium: expect.any(Number),
            coverage: expect.any(Number),
            deductible: expect.any(Number)
          })
        ])
      })
    });
  });

  it('handles API errors gracefully', async () => {
    // Mock fetch to simulate API error
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('API Error'));

    const req = new NextRequest('http://localhost:3000/api/getQuote', {
      method: 'POST',
      body: JSON.stringify({
        coverageDates: '2024-05-01 - 2024-05-15',
        coverageAmount: '500000',
        deductible: '2000',
        travellerDOBs: [
          {
            dob: '1990-01-01',
            type: 'Adult'
          }
        ],
        preExisting: false,
        monthlyPayment: false
      }),
    });

    const response = await POST(req);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({
      status: 'success',
      quote: expect.objectContaining({
        quotes: expect.arrayContaining([
          expect.objectContaining({
            company: expect.any(String),
            premium: expect.any(Number),
            coverage: expect.any(Number),
            deductible: expect.any(Number)
          })
        ])
      })
    });
  });
}); 