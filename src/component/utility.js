const RankName = {
    pathetic: 1,
    untrained: 2,
    novice: 3,
    adept: 4,
    expert: 5,
    master: 6,
};

function getWeightClass(weight) {
    if (weight <= 25) {
        return 1;
    } else if(weight <= 55) {
        return 2;
    } else if(weight <= 110) {
        return 3;
    } else if(weight <= 220) {
        return 4;
    } else if(weight <= 440) {
        return 5;
    } else if(weight <= 450) {
        return 6;
    } else {
        return 7;
    }
}

function getSpeedEvasion(speed) {
    return Math.floor(speed / 5);
}

function getPhysicalEvasion(defense) {
    return Math.floor(defense / 5);
}

function getSpecialEvasion(specialDefense) {
    return Math.floor(specialDefense / 5);
}

function getHitPoints(level, hp) {
    return level * 2 + hp * 3 + 10;
}

function getActionPoints(level) {
    return Math.floor(level / 5) + 5;
}

function getOverlandSpeed(athletics, acrobatics) {
    return Math.floor((athletics + acrobatics) / 2) + 3;
}

function getSwimSpeed(athletics, acrobatics) {
    return Math.floor(getOverlandSpeed(athletics, acrobatics) / 2);
}

function getPower(athletics, combat) {
    let power = 4;
    power += athletics >= RankName.novice ? 1 : 0;
    power += combat >= RankName.adept ? 1 : 0;
    return power;
}

function getHighJump(acrobatics, combat, isRunning = false) {
    let highJump = 0;
    highJump += acrobatics >= RankName.adept;
    highJump += combat === RankName.master;
    highJump += isRunning;
    return highJump;
}

function getLongJump(acrobatics) {
    return Math.floor(acrobatics / 2);
}

function getThrowRange(athletics) {
    return 4 + athletics;
}

function getSize(weight) {
    if (weight <= 55) {
        return 2;
    } else if(weight <= 110) {
        return 3;
    } else if(weight <= 220) {
        return 4;
    } else {
        return 5;
    }
}

module.exports = {
    getWeightClass,
    getSpeedEvasion,
    getPhysicalEvasion,
    getSpecialEvasion,
    getHitPoints,
    getActionPoints,
    getOverlandSpeed,
    getSwimSpeed,
    getPower,
    getHighJump,
    getLongJump,
    getThrowRange,
    getSize,
    RankName: {
        pathetic: 1,
        untrained: 2,
        novice: 3,
        adept: 4,
        expert: 5,
        master: 6,
    },
};
