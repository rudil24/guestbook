import { test, expect } from '@playwright/test';

test('should allow a user to sign the guestbook', async ({ page }) => {
  // 1. Navigate to the application
  // Note: Ensure your Vite dev server is running, typically on port 5173
  await page.goto('http://localhost:5173/');

  // Define unique test data
  const testName = 'Vera';
  const testMessage = `Testing the form at ${new Date().toISOString()}`;

  // 2. Fill out the form using placeholder text to locate the fields
  await page.getByPlaceholder('Your Name').fill(testName);
  await page.getByPlaceholder('Leave a friendly message').fill(testMessage);

  // 3. Click the submit button
  await page.getByRole('button', { name: 'Sign Guestbook' }).click();

  // 4. Verify the new message appears on the page
  // We scope the assertion to the message list to be more precise
  const messageList = page.locator('.message-list');
  await expect(messageList.getByText(testName).first()).toBeVisible();
  await expect(messageList.getByText(testMessage).first()).toBeVisible();
});
