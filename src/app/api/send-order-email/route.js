import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email translations
const emailTranslations = {
  en: {
    "email.orderConfirmation": "Order Confirmation",
    "email.dear": "Dear",
    "email.thankYou": "Thank you for your order! We have received your order and will process it shortly.",
    "email.orderSummary": "Order Summary",
    "email.shippingAddress": "Shipping Address",
    "email.yourComments": "Your Comments",
    "email.shipment": "Please expect your shipment within 3 to 5 working days.",
    "email.thankYouChoosing": "Thank you for choosing us!",
    "email.orderPlaced": "Order placed on",
    "email.item": "Item",
    "email.quantity": "Quantity",
    "email.price": "Price",
    "email.total": "Total"
  },
  sr: {
    "email.orderConfirmation": "Potvrda Narudžbine",
    "email.dear": "Poštovani",
    "email.thankYou": "Hvala vam na narudžbini! Primili smo vašu narudžbinu i obrađivaćemo je uskoro.",
    "email.orderSummary": "Pregled Narudžbine",
    "email.shippingAddress": "Adresa Za Dostavu",
    "email.yourComments": "Vaše Napomene",
    "email.shipment": "Očekujte vašu pošiljku unutar 3 do 5 radnih dana.",
    "email.thankYouChoosing": "Hvala vam što ste izabrali nas!",
    "email.orderPlaced": "Narudžbina data",
    "email.item": "Proizvod",
    "email.quantity": "Količina",
    "email.price": "Cena",
    "email.total": "Ukupno"
  }
};

// Helper function to get translations based on language
function getTranslation(key, language = 'en') {
  const translations = emailTranslations[language] || emailTranslations.en;
  return translations[key] || key;
}

export async function POST(request) {
  try {
    const orderData = await request.json();
    const language = orderData.language || 'en';
    
    console.log('Email language:', language);

    // Validate required fields
    const requiredFields = ['fullName', 'phone', 'email', 'addressLine1', 'country', 'zipCode'];
    const missingFields = requiredFields.filter(field => !orderData[field] || orderData[field].trim() === '');

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(orderData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Configure nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Calculate total
    const total = orderData.cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

    // Create email templates
    const ownerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Order Received</h2>
        
        <h3>Customer Information:</h3>
        <p><strong>Name:</strong> ${orderData.fullName}</p>
        <p><strong>Phone:</strong> ${orderData.phone}</p>
        <p><strong>Email:</strong> ${orderData.email}</p>
        ${orderData.company ? `<p><strong>Company:</strong> ${orderData.company}</p>` : ''}
        
        <h3>Shipping Address:</h3>
        <p>${orderData.addressLine1}</p>
        ${orderData.addressLine2 ? `<p>${orderData.addressLine2}</p>` : ''}
        <p>${orderData.country} ${orderData.zipCode}</p>
        
        <h3>Order Items:</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Item</th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Quantity</th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Price</th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${orderData.cartItems.map(item => `
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${item.title}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${item.qty}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">$${item.price.toFixed(2)}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">$${(item.price * item.qty).toFixed(2)}</td>
              </tr>
            `).join('')}
          </tbody>
          <tfoot>
            <tr style="background-color: #f5f5f5; font-weight: bold;">
              <td colspan="3" style="border: 1px solid #ddd; padding: 8px; text-align: right;">Total:</td>
              <td style="border: 1px solid #ddd; padding: 8px;">$${total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
        
        ${orderData.comments ? `
          <h3>Additional Comments:</h3>
          <p style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #007bff;">
            ${orderData.comments}
          </p>
        ` : ''}
        
        <p style="margin-top: 30px; color: #666; font-size: 12px;">
          Order received on ${new Date().toLocaleString()}
        </p>
      </div>
    `;

    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">${getTranslation('email.orderConfirmation', language)}</h2>
        
        <p>${getTranslation('email.dear', language)} ${orderData.fullName},</p>
        
        <p>${getTranslation('email.thankYou', language)}</p>
        
        <h3>${getTranslation('email.orderSummary', language)}:</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">${getTranslation('email.item', language)}</th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">${getTranslation('email.quantity', language)}</th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">${getTranslation('email.price', language)}</th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">${getTranslation('email.total', language)}</th>
            </tr>
          </thead>
          <tbody>
            ${orderData.cartItems.map(item => `
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${item.title}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${item.qty}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">$${item.price.toFixed(2)}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">$${(item.price * item.qty).toFixed(2)}</td>
              </tr>
            `).join('')}
          </tbody>
          <tfoot>
            <tr style="background-color: #f5f5f5; font-weight: bold;">
              <td colspan="3" style="border: 1px solid #ddd; padding: 8px; text-align: right;">${getTranslation('email.total', language)}:</td>
              <td style="border: 1px solid #ddd; padding: 8px;">$${total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
        
        <h3>${getTranslation('email.shippingAddress', language)}:</h3>
        <p>${orderData.addressLine1}</p>
        ${orderData.addressLine2 ? `<p>${orderData.addressLine2}</p>` : ''}
        <p>${orderData.country} ${orderData.zipCode}</p>
        
        ${orderData.comments ? `
          <h3>${getTranslation('email.yourComments', language)}:</h3>
          <p style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #007bff;">
            ${orderData.comments}
          </p>
        ` : ''}
        
        <p>${getTranslation('email.shipment', language)}</p>
        
        <p>${getTranslation('email.thankYouChoosing', language)}</p>
        
        <p style="margin-top: 30px; color: #666; font-size: 12px;">
          ${getTranslation('email.orderPlaced', language)} ${new Date().toLocaleString()}
        </p>
      </div>
    `;

    // Send email to owner
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: `New Order from ${orderData.fullName}`,
      html: ownerEmailHtml,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: orderData.email,
      subject: getTranslation('email.orderConfirmation', language),
      html: customerEmailHtml,
    });

    return NextResponse.json({ success: true, message: 'Emails sent successfully' });

  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json(
      { error: 'Failed to send emails' },
      { status: 500 }
    );
  }
}
