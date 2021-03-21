// Create a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Создайте функцию, которая возвращает имя победителя в схватке двух бойцов.
// Каждый боец по очереди атакует другого, и тот, кто убивает другого первым, побеждает. Смерть определяется как наличие здоровья <= 0.
// Каждый боец будет объектом / экземпляром Fighter. См. Класс Истребителя ниже на выбранном вами языке.
// И health, и damagePerAttack (damage_per_attack для python) будут целыми числами больше 0. Вы можете изменять объекты Fighter.

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let result;
    (fighter1.name === firstAttacker) ? firstAttacker = fighter1.name : firstAttacker = fighter2.name;
    
    while (result === undefined) {
        (fighter1.name === firstAttacker) ? fighter2.health -= fighter1.damagePerAttack : fighter1.health -= fighter2.damagePerAttack;

        if (fighter1.health <= 0 || fighter2.health <= 0) {
            result = Math.max(fighter1.health, fighter2.health);
            return (result === fighter1.health) ? fighter1.name : fighter2.name;
        }        
        
        (firstAttacker === fighter1.name) ? firstAttacker = fighter2.name : firstAttacker = fighter1.name; 
    }  
}

//   let fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
//   let fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
//   if (fac1 < fac2) {
//     return fighter2.name;
//   } else if(fac2 < fac1) {
//     return fighter1.name;
//   } else {
//     return firstAttacker;
//   }


// 2й параметр - здоровье
// 3й - урон за один удар

console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry")) // "Harald"
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")) // "Lew"
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")) // "Harry"
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald")) // "Harald"
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry")) // "Harald"
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")) // "Harald"