import { test, expect } from '@playwright/test';

test.describe('Quote Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display quote form and handle submission', async ({ page }) => {
    // Check if form is visible
    await expect(page.getByText('Get Your Travel Insurance Quote')).toBeVisible();

    // Open traveler popover to access the age inputs
    await page.getByText('2 adults • 0 children').click();

    // Fill in adult ages
    const ageInputs = page.locator('input[type="number"]');
    await ageInputs.first().fill('30');
    await ageInputs.nth(1).fill('28');

    // Close the popover by clicking elsewhere
    await page.getByText('Travel with').click();

    // Fill in other required fields
    await page.getByLabel('Coverage Dates').click();
    // Select dates using the calendar UI
    await page.getByRole('button', { name: /\d+/, exact: true }).first().click(); // Start date
    await page.getByRole('button', { name: /\d+/, exact: true }).nth(14).click(); // End date (2 weeks later)

    // Set coverage amount and deductible
    await page.getByText('$500,000 • $2,000').click();
    await page.getByRole('combobox').first().selectOption('500000');
    await page.getByRole('combobox').nth(1).selectOption('2000');
    await page.getByText('Travel with').click();

    // Submit the form
    await page.getByRole('button', { name: 'Get Quote Now' }).click();

    // Wait for and verify quote results
    await expect(page.locator('#plans')).toBeVisible();
  });

  test('should handle multiple travellers with different ages', async ({ page }) => {
    // Open traveler popover to access the age inputs
    await page.getByText('2 adults • 0 children').click();
    
    // Add a child
    await page.getByRole('button').filter({ hasText: '+' }).nth(1).click();
    
    // Fill in adult and child ages
    const ageInputs = page.locator('input[type="number"]');
    await ageInputs.first().fill('35');
    await ageInputs.nth(1).fill('33');
    await ageInputs.nth(2).fill('10');
    
    // Close the popover by clicking elsewhere
    await page.getByText('Travel with').click();

    // Fill in other required fields 
    await page.getByLabel('Coverage Dates').click();
    // Select dates using the calendar UI
    await page.getByRole('button', { name: /\d+/, exact: true }).first().click(); // Start date
    await page.getByRole('button', { name: /\d+/, exact: true }).nth(14).click(); // End date (2 weeks later)

    // Submit form
    await page.getByRole('button', { name: 'Get Quote Now' }).click();

    // Verify results
    await expect(page.locator('#plans')).toBeVisible();
  });

  test('should validate adult age requirements', async ({ page }) => {
    // Open traveler popover to access the age inputs
    await page.getByText('2 adults • 0 children').click();
    
    // Set invalid adult age (below 18)
    const ageInputs = page.locator('input[type="number"]');
    await ageInputs.first().fill('17');
    
    // Submit form
    await page.getByRole('button', { name: 'Get Quote Now' }).click();

    // Verify validation error
    await expect(page.getByText('Adult must be at least 18 years old')).toBeVisible();
  });

  test('should validate child age requirements', async ({ page }) => {
    // Open traveler popover to access the age inputs
    await page.getByText('2 adults • 0 children').click();
    
    // Add a child
    await page.getByRole('button').filter({ hasText: '+' }).nth(1).click();
    
    // Set invalid child age (18 or above)
    const ageInputs = page.locator('input[type="number"]');
    await ageInputs.nth(2).fill('18');
    
    // Submit form
    await page.getByRole('button', { name: 'Get Quote Now' }).click();

    // Verify validation error
    await expect(page.getByText('Child must be under 18 years old')).toBeVisible();
  });
}); 