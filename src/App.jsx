import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";
import Cuadro1 from "./image/1-SALVATOR-MUNDI-DE-LEONARDO-DA-VINCI.png";
import Cuadro2 from "./image/2-INTERCAMBIO DE WILLEM DE KOONING.jpg";
import Cuadro3 from "./image/3-LOS JUGADORES DE CARTAS DE PAUL CÉZANNE.jpg";
import Cuadro4 from "./image/4-NAFEA FAA IPOIPO DE PAUL GAUGUIN.png";
import Cuadro5 from "./image/5-WASSERSCHLANGEN II DE GUSTAV KLIMT.png";
import Cuadro6 from "./image/6-NO. 6 (VIOLETA, VERDE Y ROJO) DE MARK ROTHKO.png";
import Cuadro7 from "./image/7-NUMBER 17A DE JACKSON POLLOCK.jpg";
import Cuadro8 from "./image/8-SHOT SAGE BLUE MARILYN DE WARHOL.jpg";

function App() {
  return (
    <>
      <Header tittle="LOS 8 CUADROS MÁS CAROS DE LA HISTORIA" />
      <section>
        <MyCard
          image={Cuadro1}
          name="1
          SALVATOR MUNDI DE LEONARDO DA VINCI"
          description="Pintado sobre el año 1500, este cuadro de Leonardo Da Vinci representa a Cristo sosteniendo un orbe en una mano y formando la señal de la cruz con la otra. Se subastó en Christie's en 2016 "
          backgroun="success"
          tex="Vendido:450 millones de dólares"
        />
        <MyCard
          image={Cuadro2}
          name="2
          INTERCAMBIO DE WILLEM DE KOONING"
          description="Pintado en 1955,Willem de Kooning, pintor holandés-estadounidense, es considerado como uno de los pioneros del expresionismo abstracto y esta obra fue clave en su carrera"
          backgroun="primary"
          tex="Vendido:328 millones de dólares"
        />
        <MyCard
          image={Cuadro3}
          name="3
          LOS JUGADORES DE CARTAS DE PAUL CÉZANNE"
          description="Pintado meticulosamente entre 1892 y 1893, este óleo de Cézanne es uno de los cinco cuadros que el talentoso autor creó sobre el mismo tema: hombres sentados en una mesa jugando a las cartas."
          backgroun="danger"
          tex="Vendido:288 millones de dólares"
        />
        <MyCard
          image={Cuadro4}
          name="4
          NAFEA FAA IPOIPO? DE PAUL GAUGUIN"
          description="Pintado en 1892, este cuadro de estilo postimpresionista retrata vívidamente a dos mujeres jóvenes sentadas en un paisaje azul, verde y dorado. Su título significa ¿Cuándo te casas?"
          backgroun="warning"
          tex="Vendido:229 millones de dólares"
        />
        <MyCard
          image={Cuadro5}
          name="5
          WASSERSCHLANGEN II DE GUSTAV KLIMT"
          description="Pintado en la primera década del siglo XX por Klimt. Fue creado como continuación de Serpientes de agua I y se centra en la forma femenina y relaciones entre personas del mismo sexo."
          backgroun="success"
          tex="Vendido:204 millones de dólares"
        />
        <MyCard
          image={Cuadro6}
          name="6
          NO. 6 (VIOLETA, VERDE Y ROJO) DE MARK ROTHKO"
          description="Mark Rothko es conocido por sus pinturas abstractas de bloques de color que expresan emociones profundas. fue pintado en 1951 y pertenece a su serie de pinturas de campos de color"
          backgroun="primary"
          tex="Vendido:203 millones de dólares"
        />
        <MyCard
          image={Cuadro7}
          name="7
          NUMBER 17A DE JACKSON POLLOCK"
          description="Pintado en 1948 con la icónica técnica de goteo del artista, este cuadro al óleo sobre tablero fue comprado por un inversionista en 2015, quien luego lo cedió al prestigioso Art Institute of Chicago."
          backgroun="danger"
          tex="Vendido:200 millones de dolares"
        />
        <MyCard
          image={Cuadro8}
          name="8
          SHOT SAGE BLUE MARILYN DE WARHOL"
          description="Shot Sage Blue Marilyn es una de las serigrafías de Marilyn Monroe por Andy Warhol, destacada por una marca de bala. La obra fue disparada en 1964 por Dorothy Podber en el estudio."
          backgroun="warning"
          tex="Vendido:195 millones de dólares"
        />
      </section>
      <Footer piedepagina='Los valores mencionados en este proyecto sobre los 8 cuadros más caros y su venta representan estimaciones basadas en datos disponibles al momento de la investigación. Es importante señalar que estas cifras pueden no reflejar la totalidad de la realidad, ya que las ventas privadas, acuerdos confidenciales y otros factores pueden influir en el valor real de una obra de arte. Se recomienda consultar múltiples fuentes y expertos en el tema para obtener una comprensión más completa.' />
    </>
  );
}

export default App;
