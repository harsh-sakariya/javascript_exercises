const ATTACK_DAMAGE = 10;
const STRONG_ATTACK_DAMAGE = 17;
const MONSTER_ATTACK_DAMAGE = 14;
const HEAL_VALUE = 20;
const enteredValue = parseInt(prompt("Maximum life for you and the monster.","100"));
let chosenMaxLife = enteredValue;
if(isNaN(chosenMaxLife) || chosenMaxLife <= 0){
    chosenMaxLife = 100;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let bonusLife = true;

adjustHealthBars(chosenMaxLife)

attackBtn.addEventListener("click",attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healHandler);

function reset(){
    currentMonsterHealth = currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound(){
    const initialPlayerHealth = currentPlayerHealth;
    const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_DAMAGE);
    currentPlayerHealth -= monsterDamage;

    if(currentPlayerHealth <= 0 && bonusLife){
        bonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(currentPlayerHealth);
        alert("you would be lost but bouns life saved you!");
    }

    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert("you win!");
    }
    else if(currentPlayerHealth <=0 && currentMonsterHealth > 0){
        alert("you lost!");
    }
    else if(currentMonsterHealth <= 0 && currentPlayerHealth <= 0){
        alert("you have a draw!");
    }

    if(currentMonsterHealth <= 0 || currentPlayerHealth <= 0){
        reset();
    }
}

function attackMonster(mode){
    let maxDamage;
    if(mode === "ATTACK"){
        maxDamage = ATTACK_DAMAGE;        
    }else if(mode === "STRONG_ATTACK"){
        maxDamage = STRONG_ATTACK_DAMAGE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
}

function attackHandler(){
    attackMonster("ATTACK");
}

function strongAttackHandler(){
    attackMonster("STRONG_ATTACK");
}

function healHandler(){
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert("you can't heal more than your max initial health");
        healValue = chosenMaxLife - currentPlayerHealth;
    }
    else{
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
}