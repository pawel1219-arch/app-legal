const express = require("express");
const app = express();

app.get("/", (request, response) => {
  // 1. Serwer losuje cenę ZANIM wyśle stronę
  // Losuje liczbę od 100 do 300
  const randomPrice = (Math.random() * (200) + 100).toFixed(2);
  
  // 2. Serwer skleja HTML z wylosowaną ceną
  const html = `
  <!DOCTYPE html>
  <html lang="pl">
  <head>
    <title>Test Produktu Zara</title>
    <meta property="og:title" content="Dynamiczna Kurtka Testowa" />
    <meta property="og:image" content="https://static.zara.net/photos///2023/I/0/2/p/3046/231/800/2/w/850/3046231800_6_1_1.jpg" />
  </head>
  <body>
    <h1>Produkt Testowy</h1>
    
    <p>Aktualna cena: <b>${randomPrice} PLN</b></p>

    <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "Product",
      "name": "Kurtka Zmienna Cena",
      "image": "https://static.zara.net/photos///2023/I/0/2/p/3046/231/800/2/w/850/3046231800_6_1_1.jpg",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "PLN",
        "price": "${randomPrice}"
      }
    }
    </script>
  </body>
  </html>
  `;

  // 3. Wysyłamy gotowy HTML do Twojej apki
  response.send(html);
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
