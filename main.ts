let go = 0
let x = 0
let y = 0
let z = 0
let material = 0
let numero_de_cuadros = 0
let lado = 0
player.onChat("control", function () {
    player.teleport(world(0, -1, 40))
    blocks.place(IRON_BLOCK, world(0, -1, 40))
    blocks.place(IRON_BLOCK, world(0, -1, 50))
    blocks.place(GOLD_BLOCK, world(10, -1, 50))
    blocks.place(GOLD_BLOCK, world(10, -1, 60))
    blocks.place(REDSTONE_BLOCK, world(0, -1, 60))
})
player.onChat("marks2", function () {
    agent.teleport(world(20, 0, 8), WEST)
    blocks.place(DIAMOND_BLOCK, world(20, -1, 8))
    blocks.place(GOLD_BLOCK, world(14, -1, 14))
    blocks.place(GOLD_BLOCK, world(7, -1, 14))
    blocks.place(IRON_BLOCK, world(7, -1, 12))
    blocks.place(GOLD_BLOCK, world(-11, -1, 12))
    blocks.place(GOLD_BLOCK, world(-11, -1, 5))
    blocks.place(IRON_BLOCK, world(-8, -1, 5))
    blocks.place(GOLD_BLOCK, world(-8, -1, -5))
    blocks.place(GOLD_BLOCK, world(0, -1, -5))
    blocks.place(REDSTONE_BLOCK, world(0, -1, -1))
    player.teleport(world(0, -1, -1))
})
player.onChat("agored", function () {
    agent.teleport(world(20, 0, 8), WEST)
    agent.setItem(REDSTONE_WIRE, 1, 1)
    go = 1
    while (go == 1) {
        agent.move(FORWARD, 1)
        agent.place(DOWN)
        if (agent.inspect(AgentInspection.Block, DOWN) == DIAMOND_BLOCK) {
            agent.move(FORWARD, 1)
        }
        if (agent.inspect(AgentInspection.Block, DOWN) == IRON_BLOCK) {
            agent.turn(LEFT_TURN)
        }
        if (agent.inspect(AgentInspection.Block, DOWN) == GOLD_BLOCK) {
            agent.turn(RIGHT_TURN)
        }
        if (agent.inspect(AgentInspection.Block, DOWN) == REDSTONE_BLOCK) {
            go = 0
            agent.turn(LEFT_TURN)
            agent.turn(LEFT_TURN)
        }
    }
})
player.onChat("laberinto", function () {
    x = 0
    y = 0
    z = 0
    material = SMOOTH_SANDSTONE
    numero_de_cuadros = 4
    lado = numero_de_cuadros * 4
    for (let índice = 0; índice <= numero_de_cuadros; índice++) {
        blocks.fill(
        material,
        world(x - lado, y + 0, z - lado),
        world(x + lado, y + 2, z + lado),
        FillOperation.Outline
        )
        blocks.fill(
        AIR,
        world(x - (lado - 1), y + 0, z - (lado - 1)),
        world(x + (lado - 1), y + 2, z + (lado - 1)),
        FillOperation.Replace
        )
        lado += -3
    }
    blocks.fill(
    AIR,
    world(16, 0, 8),
    world(16, 1, 8),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(7, 0, 13),
    world(7, 1, 13),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-10, 0, 5),
    world(-10, 1, 5),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-7, 0, -5),
    world(-7, 1, -5),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(0, 0, -4),
    world(0, 1, -4),
    FillOperation.Replace
    )
})
player.onChat("a", function () {
    agent.teleportToPlayer()
})
