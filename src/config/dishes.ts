import type { Dish } from "../types";

/**
 * Menu and recipe content. Unlock times are Warsaw local wall times.
 */
export const dishes: Dish[] = [
  {
    id: "caprese",
    title: "Капрезе с бальзамическим соусом",
    servingsLabel: "На 2 порции",
    unlockAt: "2026-11-25T18:15:00",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Caprese-1_%28tigher_crop%29.jpg/1280px-Caprese-1_%28tigher_crop%29.jpg",
    imageCredit: "Rainer Zenz / Wikimedia Commons",
    imageCreditUrl: "https://commons.wikimedia.org/wiki/File:Caprese-1_(tigher_crop).jpg",
    imageLicense: "CC BY-SA 3.0",
    recipeSourceLabel: "BBC Good Food",
    recipeSourceUrl: "https://www.bbcgoodfood.com/recipes/caprese-salad",
    ingredients: [
      { id: "tomatoes", label: "Спелые помидоры", amount: "300 г" },
      { id: "mozzarella", label: "Моцарелла", amount: "125 г" },
      { id: "olive-oil", label: "Оливковое масло", amount: "2 ст. л." },
      { id: "balsamic", label: "Бальзамический крем", amount: "1–2 ст. л." },
      { id: "basil", label: "Свежий базилик", amount: "1 небольшой пучок" },
      { id: "seasoning", label: "Соль и чёрный перец", amount: "по вкусу" },
    ],
    steps: [
      {
        id: "slice",
        title: "Подготовь помидоры и моцареллу",
        body: "Вымой и обсуши 300 г помидоров. Нарежь их кружочками толщиной около 5 мм. Слей жидкость с 125 г моцареллы и нарежь сыр такими же ломтиками.",
      },
      {
        id: "arrange",
        title: "Собери салат на тарелке",
        body: "Разложи помидоры и моцареллу по кругу, чередуя ломтик помидора с ломтиком сыра. Возьми примерно 8–10 листьев из небольшого пучка базилика, порви крупные листья руками и разложи сверху.",
      },
      {
        id: "dress",
        title: "Добавь заправку и подавай",
        body: "Равномерно полей салат 2 ст. л. оливкового масла и 1 ст. л. бальзамического крема. Попробуй, затем добавь ещё до 1 ст. л. крема, если хочется ярче. Посоли и поперчи по вкусу; подавай сразу.",
      },
    ],
  },
  {
    id: "tagliatelle",
    title: "Тальятелле с креветками",
    servingsLabel: "На 2 порции",
    unlockAt: "2026-11-25T18:30:00",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Pier_33_restaurant_Prawn_%26_Crab_Tagliatelle%2C_Mooloolaba_Queensland.jpg/1280px-Pier_33_restaurant_Prawn_%26_Crab_Tagliatelle%2C_Mooloolaba_Queensland.jpg",
    imageCredit: "Kgbo / Wikimedia Commons",
    imageCreditUrl: "https://commons.wikimedia.org/wiki/File:Pier_33_restaurant_Prawn_%26_Crab_Tagliatelle,_Mooloolaba_Queensland.jpg",
    imageLicense: "CC BY-SA 4.0",
    recipeSourceLabel: "BBC Good Food",
    recipeSourceUrl: "https://www.bbcgoodfood.com/recipes/shrimp-alfredo",
    ingredients: [
      { id: "pasta", label: "Тальятелле", amount: "200 г" },
      { id: "prawns", label: "Очищенные сырые креветки", amount: "250 г" },
      { id: "cream", label: "Сливки 30%", amount: "200 мл" },
      { id: "parmesan", label: "Пармезан", amount: "40 г" },
      { id: "garlic", label: "Чеснок", amount: "1 зубчик" },
      { id: "butter", label: "Сливочное масло", amount: "40 г" },
      { id: "seasoning", label: "Соль и перец", amount: "по вкусу" },
    ],
    steps: [
      {
        id: "pasta",
        title: "Отвари тальятелле",
        body: "Вскипяти около 2 л воды в большой кастрюле и добавь 2 ч. л. соли. Опусти 200 г сухой тальятелле и вари до al dente по времени на упаковке, обычно 8–10 минут. Перед тем как слить воду, отлей в кружку 100 мл воды от пасты.",
      },
      {
        id: "prawns",
        title: "Обжарь креветки",
        body: "Промокни 250 г очищенных сырых креветок бумажным полотенцем. Растопи на сковороде 20 г сливочного масла на среднем огне. Разложи креветки одним слоем и жарь примерно 1–2 минуты с каждой стороны, пока они не станут розовыми и непрозрачными. Переложи их на тарелку.",
      },
      {
        id: "sauce",
        title: "Приготовь сливочный соус",
        body: "Убавь огонь. В той же сковороде растопи оставшиеся 20 г масла. Добавь 1 мелко нарезанный зубчик чеснока и помешивай около 30 секунд, не давая ему потемнеть. Влей 200 мл сливок, добавь 40 г мелко натёртого пармезана и прогревай 2–3 минуты на слабом огне, пока сыр не расплавится. Не доводи соус до бурного кипения.",
      },
      {
        id: "combine",
        title: "Соедини пасту с соусом",
        body: "Переложи готовую тальятелле в сковороду и добавь креветки. Влей 2 ст. л. оставленной воды от пасты и перемешай. Если соус слишком густой, добавляй воду ещё по 1 ст. л. Попробуй и добавь соль и перец по вкусу; сразу разложи по двум тарелкам.",
      },
    ],
  },
  {
    id: "tiramisu",
    title: "Тирамису",
    servingsLabel: "На 2–3 десертных стакана",
    unlockAt: "2026-11-25T17:00:00",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Strawberry_Tiramisu_%282285930824%29.jpg/1280px-Strawberry_Tiramisu_%282285930824%29.jpg",
    imageCredit: "David Pursehouse / Wikimedia Commons",
    imageCreditUrl: "https://commons.wikimedia.org/wiki/File:Strawberry_Tiramisu_(2285930824).jpg",
    imageLicense: "CC BY 2.0",
    recipeSourceLabel: "BBC Good Food — клубничный тирамису",
    recipeSourceUrl: "https://www.bbcgoodfood.com/recipes/chloes-pink-tiramisu",
    ingredients: [
      { id: "mascarpone", label: "Маскарпоне", amount: "250 г" },
      { id: "cream", label: "Сливки 30%", amount: "100 мл" },
      { id: "ladyfingers", label: "Печенье савоярди", amount: "100 г" },
      { id: "sugar", label: "Сахарная пудра", amount: "40 г" },
      { id: "strawberries", label: "Клубника", amount: "200 г" },
      { id: "vanilla", label: "Ванильный экстракт", amount: "½ ч. л." },
    ],
    steps: [
      {
        id: "berries",
        title: "Подготовь клубнику",
        body: "Вымой 200 г клубники и обсуши. Отложи 2–3 красивые ягоды для украшения. Оставшуюся клубнику раздели примерно пополам: одну часть разомни вилкой в пюре, вторую нарежь небольшими кусочками.",
      },
      {
        id: "cream",
        title: "Взбей крем",
        body: "Положи в миску 250 г маскарпоне, влей 100 мл холодных сливок, добавь 40 г сахарной пудры и ½ ч. л. ванильного экстракта. Взбивай миксером на низкой скорости около 30–60 секунд, только пока крем не станет гладким и густым. Не перевзбивай.",
      },
      {
        id: "layer",
        title: "Выложи первый слой",
        body: "Разломай 100 г савоярди на кусочки. Разложи половину печенья по дну 2–3 стаканов и ложкой распредели сверху половину клубничного пюре. Добавь половину крема и примерно половину нарезанной клубники.",
      },
      {
        id: "finish-layers",
        title: "Закончи сборку",
        body: "Повтори слои: оставшиеся савоярди, клубничное пюре, крем и нарезанная клубника. Разровняй крем ложкой, чтобы верх получился аккуратным.",
      },
      {
        id: "chill",
        title: "Охлади и укрась",
        body: "Накрой стаканы и убери в холодильник минимум на 2 часа, чтобы печенье стало мягче. Перед подачей укрась отложенными ягодами.",
      },
    ],
  },
  {
    id: "lemonade",
    title: "Клубничный лимонад",
    servingsLabel: "На 3–4 стакана",
    unlockAt: "2026-11-25T18:00:00",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lemonade_with_strawberry.jpg/1280px-Lemonade_with_strawberry.jpg",
    imageCredit: "E4024 / Wikimedia Commons",
    imageCreditUrl: "https://commons.wikimedia.org/wiki/File:Lemonade_with_strawberry.jpg",
    imageLicense: "CC BY-SA 4.0",
    recipeSourceLabel: "BBC Good Food — домашний лимонад",
    recipeSourceUrl: "https://www.bbcgoodfood.com/recipes/really-easy-lemonade",
    ingredients: [
      { id: "strawberries", label: "Клубника", amount: "150 г" },
      { id: "sparkling-water", label: "Охлаждённая газированная вода", amount: "750 мл" },
      { id: "mint", label: "Мята", amount: "несколько веточек" },
      { id: "lemon", label: "Лимон", amount: "1 шт." },
      { id: "honey", label: "Мёд", amount: "2–3 ст. л." },
      { id: "ice", label: "Лёд", amount: "по вкусу" },
    ],
    steps: [
      {
        id: "berries",
        title: "Сделай клубничную основу",
        body: "Вымой 150 г клубники, удали хвостики и измельчи ягоды блендером в пюре. Выжми сок из 1 лимона. В кувшине размешай лимонный сок с 2 ст. л. мёда; попробуй и при желании добавь третью ложку.",
      },
      {
        id: "mix",
        title: "Смешай лимонад",
        body: "Добавь клубничное пюре в кувшин к лимонно-медовой смеси и перемешай. Для более гладкого напитка сначала процеди пюре через сито. Медленно влей 750 мл хорошо охлаждённой газированной воды и аккуратно перемешай, чтобы сохранить пузырьки.",
      },
      {
        id: "serve",
        title: "Добавь мяту и лёд",
        body: "Слегка разомни пальцами несколько веточек мяты, чтобы появился аромат, и положи их в кувшин. Добавь лёд по вкусу и несколько тонких кружочков лимона. Разлей лимонад по стаканам и подавай сразу.",
      },
    ],
  },
];
