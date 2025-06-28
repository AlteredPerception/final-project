// Game type.
export type Game = {
    id: number          // Game id.
    title: string       // Title of the game.
    year: string        // The year it came out.
    thumbnail: string   // Thumbnail of the game.
    developer: string   // Developer of the game.
    publisher: string   // Publisher of the game.
    playTime: string    // Playtime of the game.
    hours: string       // Hours played.
}

// Game catalog.
export type GameCatalog = {
    games: Game[]      // Array of games.
}

// User.
export type User = {
    id: number                  // User id.
    firstName: string           // First name.
    lastName: string            // Last name.
    userName: string            // User (display) name.
    profileImage: string        // User profile image.
    gameLibrary: Game[]         // Games.
}