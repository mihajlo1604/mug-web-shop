import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const orderData = await request.json();

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
        <h2 style="color: #333;">Order Confirmation</h2>
        
        <p>Dear ${orderData.fullName},</p>
        
        <p>Thank you for your order! We have received your order and will process it shortly.</p>
        
        <h3>Order Summary:</h3>
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
        
        <h3>Shipping Address:</h3>
        <p>${orderData.addressLine1}</p>
        ${orderData.addressLine2 ? `<p>${orderData.addressLine2}</p>` : ''}
        <p>${orderData.country} ${orderData.zipCode}</p>
        
        ${orderData.comments ? `
          <h3>Your Comments:</h3>
          <p style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #007bff;">
            ${orderData.comments}
          </p>
        ` : ''}
        
        <p>Please expect your shipment within 3 to 5 working days.</p>
        
        <p>Thank you for choosing us!</p>
        
        <p style="margin-top: 30px; color: #666; font-size: 12px;">
          Order placed on ${new Date().toLocaleString()}
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
      subject: 'Order Confirmation',
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
