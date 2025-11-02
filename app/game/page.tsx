import DevList from "@/components/dev-list";

export default function GamePage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-pretty">
        Game Development
      </h1>
      <div className="text-muted-foreground mt-2 space-y-4">
        <div>
          <p className="font-semibold">Task 1:</p>
          <p>🎮 Project: 2D Parkour Platformer Game</p>
          <p>🧩 Core Requirements:</p>
          <p>
            Develop a 2D platformer focused on parkour mechanics. Create a
            minimum of 2 levels, each with unique designs, progressive
            difficulty, and varied environments (e.g., urban rooftops,
            industrial sites, and underground tunnels).
          </p>
          <p>Design a Home Screen featuring:</p>
          <p>Start Game | Continue (load saved progress) | Exit Game</p>
          <p>Implement a Game Manager to:</p>
          <p>
            Handle core states (Start, Pause, Resume, Exit) | Manage level
            transitions and save/load progress | Maintain player stats or
            performance data
          </p>
          <p>
            Add Sound Effects (SFX) for jumps, landings, slides, collisions, and
            ambience. Integrate animations for player actions (run, jump, slide,
            idle) and dynamic environment elements (e.g., moving platforms).
          </p>
        </div>

        <div>
          <p className="font-semibold">Task 2:</p>
          <p>🎮 Project: 2D Shooter Game</p>
          <p>🧩 Core Requirements:</p>
          <p>
            Develop an action-packed 2D shooter game featuring fluid combat and
            high-quality visuals.
          </p>
          <p className="font-medium mt-2">Gameplay Essentials:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Implement a Player Character with a visible health bar and
              responsive movement and aiming controls.
            </li>
            <li>
              Design and integrate enemies with unique movement and attack
              patterns.
            </li>
            <li>
              Build a shooting system that handles bullet firing, collision
              detection, and damage mechanics.
            </li>
            <li>
              Optionally, include power-ups such as extra health, faster fire
              rate, or special weapons.
            </li>
          </ul>
          <p className="font-medium mt-2">Visuals & Audio:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Use detailed graphics and particle effects for projectiles,
              explosions, and damage indicators.
            </li>
            <li>
              Add Sound Effects (SFX) for shooting, enemy damage, and explosions
              to enhance gameplay immersion.
            </li>
            <li>
              Include animations for player shooting, reloading, taking damage,
              and enemy death.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <DevList kind="gameDev" />
      </div>
    </section>
  );
}