'use server';
import nodemailer from 'nodemailer';

export async function sendConfirmationMail(toEmail: string, name: string) {
  console.log(toEmail, name);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: `${name}, gracias por contactar con Claudia!`,
    text: 'Claudia de Utrera',
    html: `
      <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
      </style>
    </head>
    <body style="margin: 0; padding: 0">
      <div
        style="display: flex; flex-direction: row; justify-content: space-between"
      >
        <div style="width: 100%">
          <img
            src="https://i.ibb.co/YNymX3C/Captura-desde-2024-01-25-11-22-52.png"
            alt="Share-it"
            style="width: 100%"
          />
        </div>
      </div>

      <main style="padding: 0 10%">

        <h3
          style="
            font-size: 1.2em;
            font-family: Inter, sanss-serif;
            text-align: center;
          "
        >
          ¡Gracias por ponerte en contacto con Claudia!
        </h3>

        <h6
          style="
            font-size: 1.2em;
            font-family: Inter, sans-serif;
            color: rgb(66, 66, 66);
          "
        >
          <span
            style="
              font-size: 1.6em;
              font-family: Inter, sans-serif;
              font-weight: 900s;
              color: rgb(121, 52, 212);
            "
            >H</span
          >ola ${name}!
        </h6>

        <p
          style="
            font-size: 1em;
            font-family: Inter, sans-serif;
            color: rgb(66, 66, 66);
          "
        >
         Te responderemos lo antes posible a tu peticicón. Mientras tanto puedes ve mi último vídeo
        </p>

        <a
          href="url-ultimo video"
          style="
            font-size: 1em;
            font-family: Inter, sans-serif;
            color: rgb(226, 226, 226);
            border-radius: 6px;
            background-color: black;
            padding: 1em 2em;
            margin: 2em auto;
            display: block;
            width: 10em;
            text-align: center;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.8em;
            box-shadow: rgba(0, 0, 0, 0.288) 0px 2px 8px 0px;
          "
          >Mucho arte aquí</a
        >

        <p
          style="
            font-size: 1em;
            font-family: Inter, sans-serif;
            color: rgb(66, 66, 66);
          "
        >
          Saludos,
        </p>
        <p
          style="
            font-size: 1em;
            font-family: Inter, sans-serif;
            color: rgb(66, 66, 66);
          "
        >
          Claudia de Utrera
        </p>

        <br />
        <p
          style="
            font-size: 1em;
            font-family: Inter, sans-serif;
            color: rgb(66, 66, 66);
            font-weight: 900;
          "
        >
          Recuerda que puedes responder a este correo si lo deseas
        </p>

        <p
          style="
            font-size: 1em;
            font-family: Inter, sans-serif;
            color: rgb(66, 66, 66);
          "
        >
          Escribe a:
          <a href="mailto:shareit.rizedev@gmail.com">shareit.rizedev@gmail.com</a>.
        </p>
      </main>
      <br />
      <footer
        style="height: 4em; background-color: black; color: rgb(226, 226, 226) s"
      >
        <p
          style="
            font-size: 0.8em;
            font-family: Inter, sans-serif;
            color: white;
            font-weight: 700;
            padding: 2em;
            text-align: center;
          "
        >
         Claudia de Utrera 2024 - Todos los derechos reservados
        </p>
      </footer>
    </body>

    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email Sent');
    return { success: 'Email Sent' };
  } catch (error) {
    console.log(error);
    return { error: (error as Error).message };
  }
}

export async function sendMessageToAdmin(
  email: string,
  name: string,
  phone: string,
  message: string
) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject: `Mensaje recibido de ${name}`,
    text: 'Claudia web',
    html: `
    <head>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    </style>
  </head>
  <body style="margin: 0; padding: 0">
    <div
      style="display: flex; flex-direction: row; justify-content: space-between"
    >
      <div style="width: 100%">
        <img
          src="https://i.ibb.co/YNymX3C/Captura-desde-2024-01-25-11-22-52.png"
          alt="Share-it"
          style="width: 100%"
        />
      </div>
    </div>
  
    <main style="padding: 0 15%">
    
      <h6
        style="
          font-size: 1.2em;
          font-family: Inter, sans-serif;
          color: rgb(66, 66, 66);
        "
      >
        <span
          style="
            font-size: 1.6em;
            font-family: Inter, sans-serif;
            font-weight: 900s;
            color: rgb(121, 52, 212);
          "
          >H</span
        >ola<span
          style="
            font-size: 1.6em;
            font-family: Inter, sans-serif;
            font-weight: 900s;
            color: rgb(121, 52, 212);
          "
          >!</span
        >
      </h6>
  
      <h3
        style="
          font-size: 1.2em;
          font-family: Inter, sans-serif;
          text-align: center;
        "
      >
        Tienes un nuevo mensaje
      </h3>
      <p
        style="
          font-size: 1em;
          font-family: Inter, sans-serif;
          color: rgb(66, 66, 66);
        "
      >
        ${name} te ha escrito y ha dejado estos datos: email - ${email}, teléfono - ${phone}
      </p>
      <p
        style="
          font-size: 1em;
          font-family: Inter, sans-serif;
          color: rgb(66, 66, 66);
        "
      >
        Este es el mensaje:
      </p>
  
      <p
      style="
        font-size: 1em;
        font-family: Inter, sans-serif;
        color: rgb(66, 66, 66);
      "
    >
      ${message}
    </p>
  
      <p
        style="
          font-size: 1em;
          font-family: Inter, sans-serif;
          color: rgb(66, 66, 66);
        "
      >
        Saludos,
      </p>
      <p
        style="
          font-size: 1em;
          font-family: Inter, sans-serif;
          color: rgb(66, 66, 66);
        "
      >
Claudia de Utrera      </p>
  
      <br />
      <p
        style="
          font-size: 1em;
          font-family: Inter, sans-serif;
          color: rgb(66, 66, 66);
          font-weight: 900;
        "
      >
        ¿Tienes alguna duda?
      </p>
  
      <p
        style="
          font-size: 1em;
          font-family: Inter, sans-serif;
          color: rgb(66, 66, 66);
        "
      >
        Escribe a:
        <a href="mailto:shareit.rizedev@gmail.com">shareit.rizedev@gmail.com</a>.
      </p>
    </main>
    <br />
    <footer
      style="height: 4em; background-color: black; color: rgb(226, 226, 226) s"
    >
      <p
        style="
          font-size: 0.8em;
          font-family: Inter, sans-serif;
          color: white;
          font-weight: 700;
          padding: 2em;
          text-align: center;
        "
      >
        Share-it 2024 - Todos los derechos reservados
      </p>
    </footer>
  </body>
  
  
  `,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email Sent');
    return { success: 'Email Sent' };
  } catch (error) {
    console.log(error);
    return { error: (error as Error).message };
  }
}
