let emailTemplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{title}}</title>
    <style>
      body {
        background-color: #f4f4f7;
        color: #333;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: auto;
        background: #ffffff;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .logo {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
      }
      .logo img {
        height: 60px;
      }
      h2 {
        color: #2c3e50;
        font-size: 22px;
        margin-top: 0;
      }
      p {
        line-height: 1.6;
        font-size: 16px;
      }
      .cta-button {
        display: inline-block;
        text-align: center;
        margin: 20px auto;
        padding: 15px 30px;
        background-color: #51d56b;
        color: #ffffff !important;
        font-size: 16px;
        font-weight: bold;
        border-radius: 6px;
        text-decoration: none;
      }
      .footer {
        font-size: 12px;
        color: #777;
        margin-top: 30px;
        text-align: center;
      }
      .footer a {
        color: #4caf50;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo">
        <img src="https://quick-ride-asif.vercel.app/logo-quickride.png" alt="QuickRide Logo" />
      </div>

      <h2>{{title}}</h2>
      <p>Hi {{name}},</p>

      <p>{{message}}</p>

      <div style="text-align:center;">
        <a href="{{cta_link}}" class="cta-button" target="_blank">
          {{cta_text}}
        </a>
      </div>

      <p>{{note}}</p>

      <div class="footer">
        &mdash; The QuickRide Team<br />
        <small>
          If you have any questions or need help, feel free to reach out at
          <a href="mailto:${process.env.MAIL_USER}">${process.env.MAIL_USER}</a>
        </small>
      </div>
    </div>
  </body>
</html>

`;
const fillTemplate = (data, template = emailTemplate) => {
    return template
        .replace(/{{title}}/g, data.title || "")
        .replace(/{{name}}/g, data.name || "there")
        .replace(/{{message}}/g, data.message || "")
        .replace(/{{cta_link}}/g, data.cta_link || "")
        .replace(/{{cta_text}}/g, data.cta_text || "Click Here")
        .replace(/{{note}}/g, data.note || "");
};

module.exports = { emailTemplate, fillTemplate };
