// This file will just grab some stats using the nba api

// Package Dependencies 
const NBA = require('nba');

// How come we don't have to specify data types for variables in Javascript?
// Variables are what you assign data to 
/**
 * Java:
 * String Name = 'Damian Lillard'
 * Int DraftPick = 6
 *  - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - 
 * JavaScript:
 * let name = 'Damian Lillard'
 * let draftPick = 6
 */


async function start()
{
    // assign player name to variable
    let name = 'Damian Lillard'

    // get id and assign to variable
    let id = await getNBAPlayerID(name)

    // assign the player stats to playerStats variable 
    let playerStats = await getNBAPlayerStats(id);

    // access draft pick by accessing going through the variable playerStats and finding the draft number
    let draftPick = playerStats.commonPlayerInfo[0].draftNumber
    
    // logging the draft pick number 
    console.log(`DraftPick: ${draftPick}`);

    // log the school that he went to 

    // log the points he had for the 2021-22 season

    // log the assists as well

    // console.log(playerStats);
}


// run test code function
start()






// Helper Functions

// This function is grabbing the player id of the name we pass in
async function getNBAPlayerID(name)
{
    const player = await NBA.findPlayer(name);
    return player.playerId   
}

// This function grabs a players stats from the id that's provided
async function getNBAPlayerStats(id)
{
    let stats = await NBA.stats.playerInfo({ PlayerID: id })
    return stats;
}