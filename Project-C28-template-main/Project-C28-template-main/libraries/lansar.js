class lansar {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      length: 10,
      stiffness: 0.4
    }
    this.pointB = pointB
    this.sling = Constraint.create(options)
    World.add(world, this.lansar)
  }
  fly() {
    this.lansar.bodyA = null
  }
  display() {
    var pointA = this.sling.bodyA.position
    var pointB = this.pointB
    strokeWeight(5)
    line(pointA.x, pointA.y, pointB.x, pointB.y)
  }
}
