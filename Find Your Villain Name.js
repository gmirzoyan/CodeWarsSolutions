//https://www.codewars.com/kata/536c00e21da4dc0a0700128b/train/javascript

function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
    let month = birthday.getMonth();
    let day = birthday.getDate().toString();
    if (day.length > 1) day = day[1];
    return `The ${m[month]} ${d[day]}`;
}

