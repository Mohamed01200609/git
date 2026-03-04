const response = await fetch("https://dummyjson.com/recipes");

const data = await response.json();
const [
  ClassicMargheritaPizza,
  VegetarianStirFry,
  ChocolateChipCookies,
  ChickenAlfredoPasta,
  MangoSalsaChicken,
  QuinoaSaladWithAvocado,
  TomatoBasilBruschetta,
  BeefAndBroccoliStirFry,
  CapreseSalad,
  ShrimpScampiPasta,
  ChickenBiryani,
  ChickenKarahi,
  AlooKeema,
  ChapliKebabs,
  SpinachWithMakkiDiRoti,
  JapaneseRamenSoup,
  MoroccanChickpeaTagine,
  KoreanBibimbap,
  GreekMoussaka,
  ButterChicken,
  ThaiGreenCurry,
  MangoLassi,
  ItalianTiramisu,
  TurkishKebabs,
  BlueberryBananaSmoothie,
  MexicanStreetCorn,
  RussianBorscht,
  SouthIndianMasalaDosa,
  LebaneseFalafelWrap,
  BrazilianCaipirinha,
] = data.recipes;


export default function Card (props) {
  const cardname = props.title;
  return (<div className="bg-gray-100">
    <div
      className="flex flex-1 bg-gray-100
    flex-wrap "
    >
      <div className=" bg-white m-8 overflow-auto h-96 w-80 px-10 py-2 rounded-xl content-between">
        <img
          className=" w-80 rounded-4xl "
          src={cardname.image}
          alt="Classic Margherita Pizza"
        />
        <h1 className="">{cardname.name}</h1>
        <h1 className="text-amber-500">Ingredients</h1>
        <ul className="">
          {cardname.ingredients.map(
            (cardnameing) => (
              <>
                <li
                  className="  rounded-md my-2  text-teal-500"
                  key={`${Math.random()}`}
                >{`🍕${cardnameing}`}</li>
              </>
            ),
          )}
        </ul>
        <hr />
        <ul className="">
          {cardname.instructions.map(
            (cardnameprep) => (
              <>
                <li
                  className="  rounded-md my-2  text-teal-500"
                  key={`${Math.random()}`}
                >{`🍽${ClassicMargheritaPizzaprep}`}</li>
              </>
            ),
          )}
        </ul>
      </div>
    </div>
    </div>
  );
}
