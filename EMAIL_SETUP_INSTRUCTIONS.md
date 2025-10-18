# Email Setup Instructions

## Environment Configuration

Create a `.env.local` file in the root directory with the following variables:

```env
# Email Configuration
OWNER_EMAIL=your-email@gmail.com
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

## Setup Steps

1. **Replace the email addresses:**
   - `OWNER_EMAIL`: Replace with the actual owner email address where order notifications should be sent
   - `GMAIL_USER`: Replace with your Gmail address that will send the emails

2. **Get Gmail App Password:**
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Enable 2-Factor Authentication if not already enabled
   - Go to Security > App passwords
   - Generate a new app password for "Mail"
   - Use this app password (not your regular Gmail password) for `GMAIL_APP_PASSWORD`

3. **Important Notes:**
   - Never commit the `.env.local` file to version control
   - The `.env.local` file is already in `.gitignore`
   - Use Gmail App Password, not your regular Gmail password
   - Make sure 2-Factor Authentication is enabled on your Google account

## Testing

After setting up the environment variables:

1. Add items to cart
2. Fill out the shipping address form
3. Click "Checkout"
4. Check both email inboxes (owner and customer) for confirmation emails

## Troubleshooting

- If emails are not sending, check the console for error messages
- Verify the Gmail App Password is correct
- Ensure 2-Factor Authentication is enabled
- Check that the email addresses are valid


