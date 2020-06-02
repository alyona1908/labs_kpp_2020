class Fighter {
    constructor(fighterProps){
        this._name = fighterProps.name;
        this._damage = fighterProps.damage;
        this._hp = fighterProps.hp;
        this._strength = fighterProps.strength;
        this._agility = fighterProps.agility;
        this._win = 0;
        this._loss = 0;
        this._maxHp = fighterProps.hp;
    }
    
    getName() {
        return this._name;
    }

    getDamage() {
        return this._damage;
    }

    getStrength() {
        return this._strength ;
    }

    getHealth() {
        return this._hp;
    }

    getAgility(){
        return this._agility;
    }

    dealDamage(healthPoint) {
        if (this.getHealth() > healthPoint) {
            this._hp = this.getHealth() - healthPoint;
        } else {
            this._hp = 0;
        }
    }

    attack(defender) {
        let random = Math.floor(Math.random() * Math.floor(100 + 1));
        let sum = defender._strength + defender._agility;
        if (random < 100 - sum) {
            defender.dealDamage(this._damage);
            console.log(this._name + ' makes ' + this._damage + ' damage to ' + defender._name)
        } else {
            console.log(this._name + ' attack missed')
        }
    }

    heal(plusHp) {
        if (plusHp + this.getHealth() > this._maxHp){
            this._hp = this._maxHp
        } else {
            this._hp = plusHp + this.getHealth()
        }
    }

    addWin() {
        this._win += 1;
        return this._win;
    }

    addLoss() {
        this._loss += 1;
        return this._loss;
    }

    logCombatHistory() {
        console.log('Name ' + this._name + ', Wins: ' + this._win + ', Losses: ' + this._loss)
    }
}

function buttle (Fighter1,Fighter2) {
    if (Fighter1.getHealth() === 0 || Fighter2.getHealth() === 0) {
        if (Fighter1.getHealth() === 0){
            console.log(Fighter1._name + ' is dead and can\'t fight');
        }else{
            console.log(Fighter2._name + ' is dead and can\'t fight');
            
        }
    } else {
        let pravda = true;
        while (pravda) {
            if (Fighter1.getHealth() === 0 || Fighter2.getHealth() === 0) {
                if (Fighter1.getHealth() === 0){
                    console.log(Fighter2._name + ' has won');
                    Fighter1.addLoss();
                    Fighter2.addWin();
                    break;
                }else{
                    console.log(Fighter1._name + ' has won');
                    Fighter2.addLoss();
                    Fighter1.addWin();
                    break;
                }
            } else {
                Fighter1.attack(Fighter2);
                Fighter2.attack(Fighter1);
            }
        }
    }
}

let fighter1 = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
let fighter2 = new Fighter({name: 'Commodus', damage: 20, hp: 100, strength: 25, agility: 20});

console.log(buttle(fighter1,fighter2))

console.log(fighter1.heal(20))
console.log(fighter1.logCombatHistory())

