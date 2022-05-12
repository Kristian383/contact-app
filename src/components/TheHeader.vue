<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav class="container">
      <div class="title"><h2>ContactApp</h2></div>
      <ul class="navigation">
        <li>
          <router-link class="link" active-class="active" to="/"
            >Home</router-link
          >
        </li>

        <li>
          <router-link class="link" active-class="active" to="/add"
            >Add Contact</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      //  mobile: null,
      scrolledNav: null,
      //   windowWidth: null,
    };
  },
  methods: {
    // checkScreen() {
    //   this.windowWidth = window.innerWidth;
    //   if (this.windowWidth <= 900) {
    //     // this.$store.commit("setMobile", true);
    //     return;
    //   }
    //   //   this.$store.commit("setMobile", false);
    //   return;
    // },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
  },
  //   created() {
  //     this.$nextTick(function () {
  //       window.addEventListener("resize", this.checkScreen);
  //       this.checkScreen();
  //     });
  //   },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener("scroll", this.updateScroll);
    });
  },
  //   beforeUnmount() {
  //     window.removeEventListener("resize", this.checkScreen);
  //   },
};
</script>

<style scoped>
/*  */
header {
  background-color: var(--f1_gray);
  z-index: 70;
  width: 100%;
  transition: 0.5s ease all;
  position: sticky;
  top: 0;
}
header nav {
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  transition: 0.5s ease all;
  margin: 0 auto;
  width: 100%;
  position: relative;
}
header .navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow-x: auto;
}
/*  */
header .navigation::-webkit-scrollbar {
  display: none;
}
/*  */
@media (min-width: 1140px) {
  header nav {
    max-width: 1140px;
  }
}
@media (min-width: 640px) {
  header nav {
    flex-direction: row;
    width: 90%;
  }
  .title {
    padding-left: 25px;
  }
  header .navigation {
    justify-content: flex-end;
  }
}
.title {
  align-self: center;
}
header nav ul,
header nav .link {
  color: #000;
  font-weight: 600;
  list-style: none;
  text-decoration: none;
}
header nav li {
  text-transform: uppercase;
  padding: 16px;
  margin-left: 16px;
  user-select: none;
}
header nav .link {
  font-size: 16px;
  transition: 0.3s ease all;
  padding-bottom: 4px;
  border-bottom: 4px solid transparent;
}
header nav .link:hover {
  color: #000;
}
header nav .link.not_logged {
  color: var(--mid_gray);
  pointer-events: none;
}
header nav .link.active,
.router-link-active {
  border-color: #ccc;
}
header nav .logo {
  display: flex;
  align-items: center;
}
header nav .logo img {
  width: 50px;
  transition: 0.5s ease all;
}
.scrolled-nav {
  background-color: rgb(218, 218, 218);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.scrolled-nav nav {
  padding: 8px 0;
}
.scrolled-nav nav .logo img {
  width: 40px;
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
/*  */
</style>
