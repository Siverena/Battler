import { mapGetters } from 'vuex';

export default {
  name: 'BtCircle',
  data() {
    return {
      pink: 50,
      radius: 215,
      radiusTablet: 140,
      radiusMobile: 118,
      pointerRadius: 13,
      height: 373,
      heightTablet: 243,
      heightMobile: 205,
      strokeWidth: 8,
    };
  },
  computed: {
    ...mapGetters(['getVersion', 'isMobileVersion', 'isTabVersion', 'isDesktopVersion']),
    getRadius() {
      return this.isMobileVersion
        ? this.radiusMobile
        : this.isTabVersion
        ? this.radiusTablet
        : this.radius;
    },
    getHeight() {
      return this.isMobileVersion
        ? this.heightMobile
        : this.isTabVersion
        ? this.heightTablet
        : this.height;
    },
    circleCenter() {
      return this.getRadius + this.pointerRadius;
    },
    angleOffset() {
      return Math.acos((this.getHeight - this.circleCenter) / this.getRadius);
    },
    strokeFull() {
      return this.getRadius * (2 * (Math.PI - this.angleOffset));
    },
    strokeBlue() {
      return (this.strokeFull * (100 - this.pink)) / 100;
    },
    strokePink() {
      return (this.strokeFull * this.pink) / 100;
    },
    strokeNone() {
      return this.getRadius * 2 * this.angleOffset;
    },
    offsetPink() {
      return this.getRadius * (-Math.PI / 2 - this.angleOffset);
    },
    offsetBlue() {
      return this.offsetPink - this.strokePink;
    },
    angle() {
      return Math.PI / 2 + this.angleOffset + ((Math.PI - this.angleOffset) * 2 * this.pink) / 100;
    },
    pointerX() {
      return this.circleCenter + Math.cos(this.angle) * this.getRadius;
    },
    pointerY() {
      return this.circleCenter + Math.sin(this.angle) * this.getRadius;
    },
  },
};
