//% weight=100 color=#0fbc11 icon="\uf06d" block="Simple AI"
namespace simpleAI {

    /**
     * Makes a sprite follow the player at a set speed
     * @param target The sprite to control
     * @param player The player sprite to follow
     * @param speed The speed of the AI
     */
    //% block="make $target follow $player at speed $speed"
    export function followPlayer(target: Sprite, player: Sprite, speed: number) {
        // Simple Pathfinding Logic
        if (target.x < player.x) {
            target.vx = speed;
        } else {
            target.vx = -speed;
        }

        if (target.y < player.y) {
            target.vy = speed;
        } else {
            target.vy = -speed;
        }
    }
}
