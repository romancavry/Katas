// Create a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Создайте функцию, которая возвращает имя победителя в схватке двух бойцов.
// Каждый боец по очереди атакует другого, и тот, кто убивает другого первым, побеждает. Смерть определяется как наличие здоровья <= 0.
// Каждый боец будет объектом / экземпляром Fighter. См. Класс Истребителя ниже на выбранном вами языке.
// И health, и damagePerAttack (damage_per_attack для python) будут целыми числами больше 0. Вы можете изменять объекты Fighter.

function declareWinner(fighter1, fighter2, firstAttacker) {
    
}

// 2й параметр - здоровье
// 3й - урон за один удар

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")) // "Lew"
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")) // "Harry"
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry")) // "Harald"
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald")) // "Harald"
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry")) // "Harald"
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")) // "Harald"