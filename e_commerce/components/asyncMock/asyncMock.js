const products = [
    {
      "id": "1",
      "name": "Whisky",
      "price": 25900,
      "category": "Bebidas Alcohólicas",
      "img": "https://example.com/images/whisky.jpg",
      "stock": 15,
      "description": "Hecho a partir de granos como cebada, maíz, centeno o trigo y envejecido en barricas. Un clásico para los amantes de los sabores intensos."
    },
    {
      "id": "2",
      "name": "Vodka",
      "price": 8000,
      "category": "Bebidas Alcohólicas",
      "img": "https://example.com/images/vodka.jpg",
      "stock": 30,
      "description": "Destilado de granos, patatas u otros vegetales fermentados. Ideal para cócteles y una bebida suave para diversas ocasiones."
    },
    {
      "id": "3",
      "name": "Ron",
      "price": 14490,
      "category": "Bebidas Alcohólicas",
      "img": "https://example.com/images/ron.jpg",
      "stock": 10,
      "description": "Producido a partir de caña de azúcar o melaza, y en algunos casos, envejecido. Perfecto para disfrutar solo o en cócteles."
    },
    {
      "id": "4",
      "name": "Ginebra",
      "price": 19900,
      "category": "Bebidas Alcohólicas",
      "img": "https://example.com/images/ginebra.jpg",
      "stock": 20,
      "description": "Elaborada a partir de bayas de enebro y otros botánicos, ofreciendo un sabor fresco y herbal. Ideal para cócteles como el gin tonic."
    },
    {
      "id": "5",
      "name": "Tequila",
      "price": 22000,
      "category": "Bebidas Alcohólicas",
      "img": "https://example.com/images/tequila.jpg",
      "stock": 25,
      "description": "Hecho a partir del agave azul, el tequila es un destilado mexicano con un sabor único. Perfecto para disfrutar solo o en cócteles como margaritas."
    },
    {
      "id": "6",
      "name": "Mezcal",
      "price": 24500,
      "category": "Bebidas Alcohólicas",
      "img": "https://example.com/images/mezcal.jpg",
      "stock": 18,
      "description": "Destilado a partir de agave, similar al tequila, pero con un sabor ahumado característico. Una excelente opción para los aventureros del sabor."
    },
    {
      "id": "7",
      "name": "Brandy",
      "price": 26900,
      "category": "Bebidas Alcohólicas",
      "img": "https://example.com/images/brandy.jpg",
      "stock": 12,
      "description": "Destilado a partir de vino o frutas fermentadas. Con un sabor suave y afrutado, ideal para disfrutar después de una buena comida."
    },
    {
      "id": "8",
      "name": "Cognac",
      "price": 32900,
      "category": "Bebidas Alcohólicas",
      "img": "https://example.com/images/cognac.jpg",
      "stock": 8,
      "description": "Un tipo específico de brandy, originario de la región de Cognac en Francia. Con una complejidad y suavidad únicas, ideal para los paladares más exigentes."
    }
  ]
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 1500)
    })
  }