export default {
  name: 'BtCircle',
  data() {
    return {
      pink: 50,
      radius: 215,
      pointerRadius: 13,
      height: 373,
      strokeWidth: 8,
    };
  },
  computed: {
    circleCenter() {
      return this.radius + this.pointerRadius;
    },
    angleOffset() {
      return Math.acos((this.height - this.circleCenter) / this.radius);
    },
    strokeFull() {
      return this.radius * (2 * (Math.PI - this.angleOffset));
    },
    strokeBlue() {
      return (this.strokeFull * (100 - this.pink)) / 100;
    },
    strokePink() {
      return (this.strokeFull * this.pink) / 100;
    },
    strokeNone() {
      return this.radius * 2 * this.angleOffset;
    },
    offsetPink() {
      return this.radius * (-Math.PI / 2 - this.angleOffset);
    },
    offsetBlue() {
      return this.offsetPink - this.strokePink;
    },
    angle() {
      return Math.PI / 2 + this.angleOffset + ((Math.PI - this.angleOffset) * 2 * this.pink) / 100;
    },
    pointerX() {
      return this.circleCenter + Math.cos(this.angle) * this.radius;
    },
    pointerY() {
      return this.circleCenter + Math.sin(this.angle) * this.radius;
    },
  },
};
